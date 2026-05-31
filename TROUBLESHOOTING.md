# Troubleshooting - řešení problémů

Praktický seznam častých problémů pro začátečníky.

U každého problému si projdi:

1. možnou příčinu;
2. jak to ověřit;
3. jak to opravit.

## CSS se nenačítá

Možná příčina:

- špatná cesta v `<link rel="stylesheet">`;
- CSS soubor je v jiné složce;
- server neběží;
- stránka je otevřená přes `file://` místo `localhost`.

Jak ověřit:

- otevři DevTools;
- přepni na `Network`;
- obnov stránku;
- najdi `style.css`;
- zkontroluj status code.

Jak opravit:

- zkontroluj cestu `/css/style.css`;
- zkontroluj soubor `public/css/style.css`;
- spusť projekt přes `npm start`;
- otevři `http://localhost:3000`.

## Obrázek se nenačítá

Možná příčina:

- špatný název souboru;
- špatná složka;
- rozdíl ve velkých a malých písmenech;
- soubor neexistuje.

Jak ověřit:

- otevři `Network`;
- najdi request na obrázek;
- zkontroluj URL;
- podívej se na status code.

Jak opravit:

- oprav `src` v HTML;
- použij přesný název souboru;
- zkontroluj příponu, například `.svg`, `.png` nebo `.jpg`.

## JavaScript nefunguje

Možná příčina:

- JS soubor není připojený;
- cesta k JS souboru je špatně;
- v Console je chyba;
- JavaScript hledá element, který na stránce není.

Jak ověřit:

- otevři `Console`;
- najdi červené chyby;
- otevři `Network` a najdi `app.js`;
- zkontroluj, jestli sedí `id` v HTML a JavaScriptu.

Jak opravit:

- zkontroluj cestu `/js/app.js`;
- přečti chybu v Console;
- oprav překlep v HTML nebo JavaScriptu;
- obnov stránku.

## Stránka ukazuje 404

Možná příčina:

- soubor neexistuje;
- odkaz vede na špatnou URL;
- soubor není ve složce `public`.

Jak ověřit:

- zkontroluj URL v adresním řádku;
- otevři `Network`;
- najdi request se statusem `404`.

Jak opravit:

- oprav odkaz;
- vytvoř chybějící soubor;
- přesuň soubor do správné složky;
- zkontroluj název souboru.

## Server neběží

Možná příčina:

- nespustil jsi `npm start`;
- zavřel jsi terminál;
- server spadl kvůli chybě;
- port `3000` používá jiný proces.

Jak ověřit:

- podívej se do terminálu;
- hledej zprávu `běží na http://localhost:3000`;
- otevři `http://localhost:3000`.

Jak opravit:

```bash
npm start
```

Pokud je port obsazený, požádej mentora o pomoc.

## Terminál je ve špatné složce

Možná příčina:

- terminál není otevřený ve složce projektu.

Jak ověřit:

```bash
pwd
ls
```

Ve Windows PowerShell:

```powershell
Get-Location
Get-ChildItem
```

Jak opravit:

```bash
cd web-basics-practice-lab
```

Ve správné složce uvidíš:

- `package.json`;
- `server.js`;
- `public`;
- `exercises`.

## Zapomněl jsi uložit soubor

Možná příčina:

- změna je jen v editoru, ale není uložená na disku.

Jak ověřit:

- podívej se, jestli editor ukazuje neuložený soubor;
- obnov stránku;
- zkontroluj `git status`.

Jak opravit:

- stiskni `Ctrl+S`;
- obnov prohlížeč;
- znovu spusť `git status`.

## Pushnul jsi špatnou branch

Možná příčina:

- začal jsi pracovat v `main`;
- nevytvořil jsi practice branch;
- pushnul jsi jinou branch, než jsi chtěl.

Jak ověřit:

```bash
git status
git log --oneline -5
```

Jak opravit:

- nedělej další náhodné příkazy;
- napiš mentorovi;
- pošli výstup `git status` a `git log --oneline -5`.

## Git píše "nothing to commit"

Možná příčina:

- změny už jsou commitnuté;
- soubor není uložený;
- upravil jsi jiný projekt;
- Git nevidí žádnou změnu.

Jak ověřit:

```bash
git status
```

Jak opravit:

- ulož soubor;
- zkontroluj správnou složku;
- udělej skutečnou změnu v souboru;
- znovu spusť `git status`.

## localhost se neotevře

Možná příčina:

- server neběží;
- používáš špatný port;
- URL je napsaná špatně.

Jak ověřit:

- zkontroluj terminál;
- otevři přesně:

```text
http://localhost:3000
```

Jak opravit:

```bash
npm start
```

Potom obnov stránku.

## Prohlížeč ukazuje starou verzi

Možná příčina:

- prohlížeč používá cache, tedy uloženou starší verzi souboru.

Jak ověřit:

- otevři DevTools;
- přepni na `Network`;
- zapni `Disable cache`;
- obnov stránku.

Jak opravit:

- stiskni `Ctrl+F5`;
- nebo zapni `Disable cache` v DevTools;
- nebo zavři a znovu otevři stránku.
