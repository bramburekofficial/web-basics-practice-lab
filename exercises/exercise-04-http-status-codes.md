# Exercise 04 - HTTP Status Codes

## Goal

Find `200`, `302`, and `404` responses in DevTools Network.

## Steps

1. Run the server:

```bash
npm start
```

2. Open `http://localhost:3000`.
3. Open DevTools Network.
4. Refresh the page and find status `200`.
5. Open `http://localhost:3000/redirect-demo` and find status `302`.
6. Open `http://localhost:3000/missing-file.html` and find status `404`.

## Questions

- Which request returned `200`?
- Which request returned `302`?
- Which request returned `404`?
- What did the browser do after the redirect?

## Done When

- You can find status codes in Network.
- You can explain what each status means.

