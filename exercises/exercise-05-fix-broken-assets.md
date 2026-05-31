# Cvičení 05 - Oprava rozbitých assetů

## Cíl

Použít DevTools Console a Network k nalezení rozbitého obrázku, špatné CSS třídy, rozbitého odkazu a JavaScript chyby.

`Asset` je soubor používaný stránkou, například obrázek, CSS nebo JavaScript.

## Kroky

1. Spusť server:

```bash
npm start
```

2. Otevři `http://localhost:3000/broken-page.html`.
3. Otevři DevTools.
4. Zkontroluj záložku `Console`.
5. Zkontroluj záložku `Network`.
6. Najdi:
   - jeden chybějící JavaScript soubor;
   - jeden rozbitý obrázek;
   - jeden rozbitý odkaz;
   - jednu JavaScript chybu;
   - jednu špatnou CSS třídu.
7. Oprav alespoň jeden problém.
8. Obnov stránku a ověř, že opravený problém zmizel.

## Hotovo, když

- Umíš ukázat request, který vrátil `404`.
- Umíš vysvětlit, který soubor jsi změnil.
- Použil jsi Console nebo Network k nalezení problému.
- Oprava je v commitu.

## Co odevzdat v pull requestu

Do pull requestu napiš:

- jaký problém jsi našel;
- jak jsi ho našel v DevTools;
- jaký soubor jsi změnil;
- screenshot před opravou nebo po opravě, pokud dává smysl.

