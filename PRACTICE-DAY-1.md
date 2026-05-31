# Praktický den 1

## Cíl prvního dne

Pochopit základní cestu webu:

```text
soubory v projektu -> lokální server -> prohlížeč -> DevTools -> Git -> GitHub -> pull request
```

Na konci dne bys měl umět:

- otevřít projekt v editoru;
- spustit lokální server;
- otevřít `http://localhost:3000`;
- najít HTML, CSS a JavaScript soubory;
- použít DevTools;
- vytvořit branch;
- udělat commit;
- pushnout změny na GitHub;
- otevřít pull request.

## Co je Git

Git je nástroj pro ukládání historie změn v projektu.

Pomáhá odpovědět na otázky:

- co se změnilo;
- kdo změnu udělal;
- kdy byla změna vytvořena;
- proč byla změna udělána.

Základní příkazy:

```bash
git status
git add .
git commit -m "Complete day 1 practice"
git push
```

## Co je GitHub

GitHub je online místo, kde může být uložený Git repozitář.

Git běží u tebe na počítači. GitHub je webová služba, kde může tým sdílet kód, řešit issues a kontrolovat pull requesty.

`Issue` je úkol nebo problém zapsaný na GitHubu.

`Pull request` je žádost o kontrolu změn před tím, než se dostanou do `main`.

## Co je browser

`Browser` znamená prohlížeč. Například Chrome, Edge, Firefox nebo Safari.

Prohlížeč:

- načte HTML;
- stáhne CSS;
- spustí JavaScript;
- zobrazí stránku;
- posílá requesty na server;
- ukazuje chyby v DevTools.

## Co je server

Server je program, který odpovídá na požadavky prohlížeče.

V tomto projektu je server v souboru:

```text
server.js
```

Server umí:

- vrátit HTML stránku;
- vrátit CSS soubor;
- vrátit JavaScript;
- vrátit obrázek;
- vrátit JSON data;
- vrátit `404`, když soubor neexistuje;
- udělat redirect přes `302`.

## Co je localhost

`Localhost` je adresa tvého vlastního počítače.

Když otevřeš:

```text
http://localhost:3000
```

prohlížeč se ptá serveru, který běží na tvém počítači na portu `3000`.

Pokud server neběží, stránka se neotevře.

## Co je HTTP a HTTPS

HTTP je způsob, jak spolu mluví prohlížeč a server.

HTTPS je zabezpečená verze HTTP.

Při lokálním vývoji je v pořádku používat:

```text
http://localhost:3000
```

Na veřejném webu se běžně používá HTTPS.

## Co je URL

`URL` je adresa stránky nebo souboru.

Příklad:

```text
http://localhost:3000/about.html
```

Části URL:

- `http` - protokol;
- `localhost` - host, tedy počítač nebo doména;
- `3000` - port;
- `/about.html` - cesta k souboru.

## Co je request a response

`Request` je požadavek z prohlížeče na server.

`Response` je odpověď serveru prohlížeči.

Příklad:

```text
GET /css/style.css
```

Prohlížeč žádá CSS soubor. Server odpoví souborem a status codem.

## Co je status code

`Status code` je číslo, které říká, jak dopadl request.

Důležité příklady:

- `200 OK` - vše proběhlo dobře;
- `302 Found` - server posílá prohlížeč na jinou URL;
- `404 Not Found` - soubor nebo stránka neexistuje;
- `500 Internal Server Error` - chyba na serveru.

## Jak používat DevTools

DevTools jsou nástroje prohlížeče pro vývojáře.

Otevření:

- `F12`
- `Ctrl+Shift+I`
- pravý klik na stránku a `Inspect`

DevTools ti pomůžou zjistit, co se skutečně děje v prohlížeči.

## Co sledovat v záložce Elements

`Elements` ukazuje HTML, které prohlížeč právě zobrazuje.

Vyzkoušej:

- vyber nadpis na stránce;
- najdi CSS pravidla;
- dočasně změň barvu;
- obnov stránku a všimni si, že dočasná změna zmizela.

Změny v DevTools nejsou automaticky uložené do souboru.

## Co sledovat v záložce Console

`Console` ukazuje zprávy a chyby z JavaScriptu.

Vyzkoušej:

- otevři homepage;
- klikni na tlačítko;
- sleduj `console.log`;
- otevři `broken-page.html`;
- najdi záměrnou JavaScript chybu.

Červenou chybu čti pomalu. Často v ní je název souboru a číslo řádku.

## Co sledovat v záložce Network

`Network` ukazuje requesty, které prohlížeč poslal.

Vyzkoušej:

- otevři DevTools;
- přepni na `Network`;
- obnov stránku;
- najdi HTML, CSS, JS a obrázek;
- zkontroluj status code;
- otevři `/redirect-demo`;
- otevři neexistující soubor a najdi `404`.

## Praktické zadání

1. Naklonuj repozitář.
2. Spusť `npm install`.
3. Spusť `npm start`.
4. Otevři `http://localhost:3000`.
5. Vytvoř branch `practice/day-1-tvoje-jmeno`.
6. Projdi homepage v DevTools.
7. Otevři `broken-page.html`.
8. Najdi chyby v Console a Network.
9. Oprav jednu malou chybu podle zadání.
10. Udělej commit.
11. Pushni branch.
12. Otevři pull request.

## Co odevzdat na konci dne

Odevzdává se pull request.

Pull request má obsahovat:

- krátké shrnutí změn;
- co bylo otestováno lokálně;
- screenshot, pokud se měnil vzhled;
- otázku, pokud něco není jasné;
- odkaz na issue, pokud pracuješ podle issue.
