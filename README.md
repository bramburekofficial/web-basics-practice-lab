# Web Basics Practice Lab

Český výukový repozitář pro junior frontend trainee a začínající programátory.

Projekt ukazuje, jak se jednoduchý web dostane z kódu do prohlížeče a jak do toho zapadá lokální server, Git, GitHub, DevTools a HTTP.

Nejde o framework projekt. Není tu React, TypeScript, databáze ani Docker. Cílem je pochopit základy na malém, čitelném projektu.

## Pro koho je tento repozitář

Tento repozitář je pro člověka, který:

- zná úplné základy HTML a CSS;
- začíná s JavaScriptem;
- učí se používat Git a GitHub;
- chce pochopit, co znamená `localhost`;
- chce umět najít běžné chyby v prohlížeči;
- potřebuje praktický trénink před větším projektem.

## Co se naučíš

- Jak spolupracují HTML, CSS a JavaScript.
- Co dělá prohlížeč a co dělá server.
- Co je `localhost` - adresa tvého vlastního počítače při lokálním vývoji.
- Co je `request` - požadavek z prohlížeče na server.
- Co je `response` - odpověď serveru prohlížeči.
- Co je `status code` - číselný výsledek HTTP požadavku, například `200`, `302` nebo `404`.
- Jak používat DevTools - nástroje prohlížeče pro kontrolu HTML, CSS, JavaScriptu a síťových požadavků.
- Co je `branch` - samostatná větev práce v Gitu.
- Co je `commit` - uložený krok v historii změn.
- Co je `pull request` - žádost o kontrolu a začlenění změn na GitHubu.
- Co je `issue` - úkol nebo problém zapsaný na GitHubu.

## Jak spustit projekt lokálně

Nejprve si repozitář stáhni z GitHubu:

```bash
git clone https://github.com/MARMIXTOP/web-basics-practice-lab.git
cd web-basics-practice-lab
npm install
npm start
```

Potom otevři v prohlížeči:

```text
http://localhost:3000
```

V terminálu uvidíš logy požadavků, například:

```text
GET / -> 200
GET /css/style.css -> 200
GET /api/server-time -> 200
```

Server zastavíš klávesovou zkratkou `Ctrl+C` v terminálu.

## Struktura projektu

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

## Přímé otevření HTML vs localhost

Když dvakrát klikneš na `public/index.html`, prohlížeč otevře soubor přes `file://`.

To není totéž jako běžící server.

Při otevření přes `file://` nefungují některé věci stejně jako na reálném webu. Například požadavek na `/api/server-time` potřebuje lokální server, takže funguje na `http://localhost:3000`, ale ne při přímém otevření souboru.

Když spustíš `npm start`, Node.js spustí malý lokální server. Prohlížeč pak posílá HTTP požadavky na `localhost:3000` a server vrací HTML, CSS, JavaScript, obrázky a JSON data.

## Jak pracovat s issues

`Issue` je úkol na GitHubu. V tomto repozitáři jsou issues připravené jako cvičení.

Postup:

1. Otevři záložku `Issues` na GitHubu.
2. Vyber první otevřený úkol.
3. Přečti si cíl, kroky a kritéria hotovo.
4. Vytvoř si vlastní branch.
5. Udělej změnu v kódu nebo dokumentaci.
6. Ověř projekt lokálně.
7. Otevři pull request.

## Jak vytvořit branch

`Branch` je větev, ve které pracuješ odděleně od `main`.

Nepracuj přímo v `main`.

```bash
git checkout -b practice/day-1-tvoje-jmeno
git status
```

Když uděláš změny, zkontroluj je:

```bash
git status
```

Potom je ulož do historie:

```bash
git add .
git commit -m "Complete day 1 practice"
git push origin practice/day-1-tvoje-jmeno
```

## Jak otevřít pull request

`Pull request` je návrh změn, který má mentor zkontrolovat před sloučením do `main`.

Postup:

1. Pushni svoji branch na GitHub.
2. Otevři GitHub repozitář.
3. Klikni na `Compare & pull request`.
4. Zkontroluj, že cíl je `main`.
5. Vyplň šablonu pull requestu.
6. Přidej screenshot, pokud se měnil vzhled.
7. Odešli pull request mentorovi ke kontrole.

Doporučený název prvního pull requestu:

```text
Practice Day 1: Git, Browser, Server Basics
```

## Co kontrolovat v DevTools

DevTools otevřeš pomocí `F12`, `Ctrl+Shift+I` nebo pravým klikem a volbou `Inspect`.

V záložce `Elements`:

- najdi hero sekci;
- vyber kartu;
- dočasně změň barvu nebo odsazení;
- všimni si, že změna v DevTools se neuloží do souboru.

V záložce `Console`:

- sleduj zprávy z `public/js/app.js`;
- klikni na tlačítko na homepage;
- otevři `broken-page.html` a najdi záměrnou chybu.

V záložce `Network`:

- obnov stránku;
- najdi požadavky na HTML, CSS, JS, SVG a API;
- zkontroluj status codes `200`, `302` a `404`;
- otevři `/redirect-demo` a sleduj redirect.

## Pořadí cvičení

1. `PRACTICE-DAY-1.md`
2. `GIT-CHEATSHEET.md`
3. `exercises/exercise-01-git-branch.md`
4. `exercises/exercise-02-browser-devtools.md`
5. `exercises/exercise-03-local-server.md`
6. `exercises/exercise-04-http-status-codes.md`
7. `exercises/exercise-05-fix-broken-assets.md`
8. `exercises/exercise-06-create-pull-request.md`

## Checklist před pull requestem

Před vytvořením pull requestu si zkontroluj:

- [ ] Vytvořil jsem vlastní branch.
- [ ] Nepracoval jsem přímo v `main`.
- [ ] Spustil jsem projekt lokálně.
- [ ] Zkontroloval jsem stránku v prohlížeči.
- [ ] Zkontroloval jsem Console pro chyby.
- [ ] Zkontroloval jsem Network pro `404`.
- [ ] Otestoval jsem mobilní zobrazení.
- [ ] Napsal jsem jasnou commit message.
- [ ] Přidal jsem screenshot, pokud se měnil vzhled.

## Jak má mentor kontrolovat pull request

Mentor by měl zkontrolovat:

- trainee pracoval ve vlastní branch;
- pull request míří do `main`;
- commit message je srozumitelná;
- změny odpovídají zadání v issue;
- projekt jde spustit přes `npm start`;
- homepage funguje na `http://localhost:3000`;
- Console na běžných stránkách neobsahuje nečekané chyby;
- Network neukazuje nečekané `404`;
- trainee rozumí tomu, co změnil;
- pokud se měnil vzhled, pull request obsahuje screenshot.

U cvičení `broken-page.html` je část chyb záměrná. Mentor má rozlišit, které chyby trainee řešil a které mají zůstat jako výukový materiál.
