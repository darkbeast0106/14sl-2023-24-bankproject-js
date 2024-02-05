# BankProject

BMSZC Petrik Szoftverfejlesztőinek js automatizált tesztelést bemutató projektje.

## Projekt létrehozás lépései

- Projekt létrehozása (ha még nincs package.json állomány)

```sh
npm init
```

- [JEST](https://jestjs.io/) telepítése

```sh
npm install --save-dev jest
```

## Klónozás után telepítés lépései

- node modulok telepítése

```sh
npm install
```

- Tesztek futtatása
  
```sh
npm run test
```

## Javasolt vscode bővítmények

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)

## Teszt fájl létrehozása

- Teszt fájloknak az alábbi reguláros kifejezésnek kell megfelelnie: `**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`
- Reguláris kifejezés jelentése
  - Bármilyen javascriptnek megfelelő fájl, ami:
    - Bárhol egy `__tests__` mappában vagy annak almappáiban van.
    - A fájl neve `.spec` vagy `.test` -el végződik
    - Fájlok kiterjesztése az alábbi lehet:
      - js: hagyományos javascript fájl
      - ts: typescript fájl
      - jsx: react javascript fájl
      - tsx: react typescript fájl
