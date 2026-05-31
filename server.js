const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(res, statusCode, data) {
  const body = JSON.stringify(data, null, 2);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
  return statusCode;
}

function sendNotFound(res, requestPath) {
  const body = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>404 - Page not found</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body class="simple-page">
    <main class="narrow-page">
      <h1>404 - Page not found</h1>
      <p>The server could not find <code>${escapeHtml(requestPath)}</code>.</p>
      <p>Open DevTools, check the Network tab, and look at the status code.</p>
      <a class="button" href="/">Back to home</a>
    </main>
  </body>
</html>`;

  res.writeHead(404, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
  return 404;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSafeFilePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath);
  const cleanPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.normalize(path.join(PUBLIC_DIR, cleanPath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    return null;
  }

  return filePath;
}

function serveFile(req, res, urlPath) {
  const filePath = getSafeFilePath(urlPath);

  if (!filePath) {
    return sendNotFound(res, urlPath);
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      return sendNotFound(res, urlPath);
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size
    });

    fs.createReadStream(filePath).pipe(res);
    return 200;
  });

  return 200;
}

const server = http.createServer((req, res) => {
  const start = Date.now();
  const url = new URL(req.url, `http://${req.headers.host}`);
  let loggedStatus = 200;

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${url.pathname} -> ${res.statusCode} (${duration}ms)`);
  });

  if (url.pathname === "/api/server-time") {
    loggedStatus = sendJson(res, 200, {
      message: "This JSON was created by the local Node.js server.",
      serverTime: new Date().toISOString(),
      requestMethod: req.method,
      path: url.pathname
    });
    return loggedStatus;
  }

  if (url.pathname === "/api/status-demo") {
    loggedStatus = sendJson(res, 200, {
      examples: [
        { status: 200, meaning: "OK - the request succeeded" },
        { status: 302, meaning: "Found - the server redirects to another URL" },
        { status: 404, meaning: "Not Found - the server could not find the file" }
      ],
      tryTheseUrls: ["/", "/redirect-demo", "/missing-file.html"]
    });
    return loggedStatus;
  }

  if (url.pathname === "/redirect-demo") {
    res.writeHead(302, { Location: "/" });
    res.end();
    return 302;
  }

  return serveFile(req, res, url.pathname);
});

server.listen(PORT, () => {
  console.log(`Web Basics Practice Lab is running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server.");
});

