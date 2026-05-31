# Cvičení 04 - HTTP status codes

## Cíl

Najít v DevTools Network odpovědi se status codes `200`, `302` a `404`.

`Status code` je číslo, které říká, jak dopadl request.

## Kroky

1. Spusť server:

```bash
npm start
```

2. Otevři `http://localhost:3000`.
3. Otevři DevTools a záložku `Network`.
4. Obnov stránku a najdi status `200`.
5. Otevři `http://localhost:3000/redirect-demo` a najdi status `302`.
6. Otevři `http://localhost:3000/missing-file.html` a najdi status `404`.

## Otázky

- Který request vrátil `200`?
- Který request vrátil `302`?
- Který request vrátil `404`?
- Co udělal prohlížeč po redirectu?

## Hotovo, když

- Najdeš všechny tři status codes v Network.
- Umíš říct, co znamená `200`.
- Umíš říct, co znamená `302`.
- Umíš říct, co znamená `404`.

## Co odevzdat v pull requestu

Do pull requestu napiš:

- tři nalezené URL;
- jejich status codes;
- jednu větu ke každému status codu.

