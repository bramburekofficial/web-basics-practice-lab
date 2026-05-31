# Git cheatsheet

Krátká taháková stránka pro práci s Gitem v tomto projektu.

## git clone

`git clone` stáhne repozitář z GitHubu do tvého počítače.

```bash
git clone https://github.com/MARMIXTOP/web-basics-practice-lab.git
cd web-basics-practice-lab
```

## git status

`git status` ukáže aktuální stav projektu.

```bash
git status
```

Používej ho často. Řekne ti:

- na jaké branch jsi;
- které soubory jsou změněné;
- co je připravené na commit;
- jestli je všechno čisté.

## git checkout -b

`Branch` je samostatná větev práce.

Novou branch vytvoříš takto:

```bash
git checkout -b practice/day-1-tvoje-jmeno
```

Nepracuj přímo v `main`.

## git add

`git add` připraví změny do dalšího commitu.

Všechny změny:

```bash
git add .
```

Jeden konkrétní soubor:

```bash
git add public/index.html
```

## git commit

`Commit` je uložený krok v historii projektu.

```bash
git commit -m "Complete day 1 practice"
```

Dobrá commit message je krátká a konkrétní.

Méně dobré:

```text
fix
```

Lepší:

```text
Fix broken image path on practice page
```

## git push

`git push` pošle tvoji branch na GitHub.

```bash
git push origin practice/day-1-tvoje-jmeno
```

Po pushi můžeš na GitHubu otevřít pull request.

## git pull

`git pull` stáhne nové změny z GitHubu do tvého počítače.

```bash
git pull
```

Použij ho, když chceš mít lokální projekt aktuální.

## Jak se vyhnout pushi do main

Před prací vždy zkontroluj branch:

```bash
git status
```

Pokud vidíš, že jsi v `main`, vytvoř si vlastní branch:

```bash
git checkout -b practice/day-1-tvoje-jmeno
```

Pravidlo:

```text
main je pro hotový a zkontrolovaný kód
practice/... je pro tvoji práci
```

## Co dělat, když jsi na špatné branch

Pokud změny ještě nejsou v commitu:

```bash
git status
git checkout -b practice/day-1-tvoje-jmeno
```

Git obvykle přenese rozpracované změny do nové branch.

Pokud už jsi commit udělal ve špatné branch, nedělej náhodné příkazy. Ukaž mentorovi:

```bash
git status
git log --oneline -5
```

## Doporučený postup práce

```bash
git status
git checkout -b practice/day-1-tvoje-jmeno
npm install
npm start
git status
git add .
git commit -m "Complete day 1 practice"
git push origin practice/day-1-tvoje-jmeno
```

