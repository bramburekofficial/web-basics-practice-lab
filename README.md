# Web Basics Practice Lab

`web-basics-practice-lab` is a simple practice project for junior frontend trainees. It explains how a website moves from files on your computer to a browser, through a local server, and into GitHub.

This is not a framework project. There is no React, no TypeScript, no database, and no Docker. The goal is to understand the basics before adding bigger tools.

## What You Will Learn

- How HTML, CSS, and JavaScript work together.
- How a browser asks a server for files.
- Why `localhost` is different from opening an HTML file directly.
- How URLs, requests, responses, redirects, and status codes work.
- How to use Chrome DevTools: Elements, Console, and Network.
- How to create a Git branch, commit changes, push to GitHub, and open a pull request.
- How to troubleshoot common frontend problems.

## Project Structure

```text
web-basics-practice-lab/
  README.md
  PRACTICE-DAY-1.md
  GIT-CHEATSHEET.md
  TROUBLESHOOTING.md
  package.json
  server.js
  public/
    index.html
    about.html
    broken-page.html
    css/
      style.css
    js/
      app.js
    images/
      README.md
      favicon.svg
      request-response-diagram.svg
  exercises/
    exercise-01-git-branch.md
    exercise-02-browser-devtools.md
    exercise-03-local-server.md
    exercise-04-http-status-codes.md
    exercise-05-fix-broken-assets.md
    exercise-06-create-pull-request.md
```

## Clone and Run

Replace `<repo-url>` with the real GitHub repository URL.

```bash
git clone <repo-url>
cd web-basics-practice-lab
npm install
npm start
```

Open this URL in your browser:

```text
http://localhost:3000
```

The terminal should show request logs like this:

```text
GET / -> 200
GET /css/style.css -> 200
GET /api/server-time -> 200
```

## Opening HTML Directly vs Using Localhost

You can double-click `public/index.html`, but that is not the same as running a server.

When you open a file directly, the browser uses a `file://` URL. Some browser features and API requests behave differently. For example, a fetch request to `/api/server-time` needs the local server, so it works at `http://localhost:3000` but not from `file://`.

When you run `npm start`, Node.js starts a local server. The browser sends HTTP requests to `localhost:3000`, and the server returns HTML, CSS, JavaScript, images, and JSON.

## Create a Branch

Do not work directly in `main`.

```bash
git checkout -b practice/day-1-your-name
git status
```

Make a small change, then commit it:

```bash
git add .
git commit -m "Complete day 1 practice"
git push origin practice/day-1-your-name
```

After pushing, open GitHub and create a pull request.

## What to Inspect in Chrome DevTools

Open DevTools with `F12` or `Ctrl+Shift+I`.

Check the `Elements` tab:

- Find the hero section.
- Select a card.
- Temporarily change a color or spacing rule.
- Notice that temporary DevTools changes do not save to your file.

Check the `Console` tab:

- Look for messages from `public/js/app.js`.
- Click the button on the home page.
- Open `broken-page.html` and find the intentional error.

Check the `Network` tab:

- Reload the page.
- Find HTML, CSS, JS, SVG, and API requests.
- Check status codes like `200`, `302`, and `404`.
- Open `/redirect-demo` and watch the redirect.

## Make a Pull Request

Before creating PR:

- I created a separate branch
- I did not work directly in main
- I ran the project locally
- I checked the page in browser
- I checked Console for errors
- I checked Network for 404 errors
- I tested mobile view
- I wrote a clear commit message
- I included screenshots if needed

Suggested pull request title:

```text
Practice Day 1: Git, Browser, Server Basics
```

## Practice Order

Start with:

1. `PRACTICE-DAY-1.md`
2. `GIT-CHEATSHEET.md`
3. `exercises/exercise-01-git-branch.md`
4. `exercises/exercise-02-browser-devtools.md`
5. `exercises/exercise-03-local-server.md`
6. `exercises/exercise-04-http-status-codes.md`
7. `exercises/exercise-05-fix-broken-assets.md`
8. `exercises/exercise-06-create-pull-request.md`
