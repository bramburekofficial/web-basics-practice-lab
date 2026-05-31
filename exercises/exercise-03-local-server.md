# Exercise 03 - Local Server

## Goal

Compare opening an HTML file directly with using the local server.

## Steps

1. Open `public/index.html` directly from your file explorer.
2. Look at the address bar. It should start with `file://`.
3. Open DevTools Console.
4. Notice whether API requests work.
5. Now run:

```bash
npm start
```

6. Open `http://localhost:3000`.
7. Open DevTools Console and Network again.
8. Find the requests to `/api/server-time` and `/api/status-demo`.

## Done When

- You can explain the difference between `file://` and `http://localhost:3000`.
- You can find an API request in the Network tab.

