# Cvičení 03 - Lokální server

## Cíl

Porovnat přímé otevření HTML souboru přes `file://` s otevřením projektu přes `localhost`.

`Localhost` je adresa tvého vlastního počítače při lokálním vývoji.

## Kroky

1. Otevři `public/index.html` přímo z průzkumníka souborů.
2. Podívej se do adresního řádku. URL bude začínat `file://`.
3. Otevři DevTools a záložku `Console`.
4. Všimni si, jestli fungují API requesty.
5. V terminálu spusť:

```bash
npm start
```

6. Otevři `http://localhost:3000`.
7. Znovu otevři DevTools.
8. V záložce `Network` najdi requesty na:

```text
/api/server-time
/api/status-demo
```

## Hotovo, když

- Umíš vysvětlit rozdíl mezi `file://` a `http://localhost:3000`.
- Najdeš API request v Network.
- Víš, proč API nefunguje při přímém otevření HTML souboru.

## Co odevzdat v pull requestu

Do pull requestu napiš:

- co se stalo při otevření přes `file://`;
- co se stalo při otevření přes `localhost`;
- screenshot nebo krátký popis requestů v Network.

