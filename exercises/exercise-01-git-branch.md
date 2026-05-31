# Cvičení 01 - Git branch

## Cíl

Vytvořit vlastní `branch` a udělat malou textovou změnu.

`Branch` je samostatná větev práce. Díky ní nemusíš měnit `main` přímo.

## Kroky

1. Otevři projekt v terminálu.
2. Zkontroluj aktuální stav:

```bash
git status
```

3. Vytvoř novou branch:

```bash
git checkout -b practice/day-1-tvoje-jmeno
```

4. Otevři `public/index.html`.
5. Změň jednu krátkou větu na homepage.
6. Soubor ulož.
7. Znovu spusť:

```bash
git status
```

## Hotovo, když

- Nepracuješ přímo v `main`.
- `git status` ukazuje změněný soubor.
- Umíš vlastními slovy říct, co je branch.

## Co odevzdat v pull requestu

Do pull requestu napiš:

- jakou větu jsi změnil;
- jakou branch jsi použil;
- že projekt po změně stále funguje lokálně.

