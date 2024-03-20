import { Bank } from "./Bank";
import { beforeEach, expect, test } from "vitest";
let bank;

/*
    beforeEach függvény:
        - A beleírt kódrészlet minden teszteset előtt lefut
*/
beforeEach(() => {
    bank = new Bank();
    bank.ujSzamla("Gipsz Jakab", "1234");
});

test('ujSzamla - Létrehozott számla egyenlege 0', () => {
    expect(bank.egyenleg("1234")).toBe(0);
});

test('ujSzamla - Null névvel', () => {
    expect(() => {
        bank.ujSzamla(null, "4321");
    }).toThrow();
});


test('ujSzamla - Üres névvel', () => {
    expect(() => {
        bank.ujSzamla("", "4321");
    }).toThrow();
});


test('ujSzamla - Null számlaszámmal', () => {
    expect(() => {
        bank.ujSzamla("Gipsz Jakab", null);
    }).toThrow();
});

test('ujSzamla - Üres számlaszámmal', () => {
    expect(() => {
        bank.ujSzamla("Gipsz Jakab", "");
    }).toThrow();
});

test('ujSzamla - Létezező számlaszámmal', () => {
    expect(() => {
        bank.ujSzamla("Teszt Elek", "1234");
    }).toThrow();
});

test('ujSzamla - Létezező névvel', () => {
    expect(() => {
        bank.ujSzamla("Gipsz Jakab", "4321");
    }).not.toThrow();
});

test('egyenleg - nem létező számlaszám', () => {
    expect(() => {
        bank.egyenleg("4321");
    }).toThrow();
});

test('egyenleg - Null számlaszám', () => {
    expect(() => {
        bank.egyenleg(null);
    }).toThrow();
});


test('egyenleg - Üres számlaszám', () => {
    expect(() => {
        bank.egyenleg("");
    }).toThrow();
});


test('egyenlegFeltolt - összeg szöveg', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", "alma");
    }).toThrow();
});

test('egyenlegFeltolt - összeg negatív', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", -1);
    }).toThrow();
});

test('egyenlegFeltolt - összeg 0', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", 0);
    }).toThrow();
});

test('egyenlegFeltolt - összeg tört szám', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", 10.5);
    }).toThrow();
});

test('egyenlegFeltolt - összeg tört szám tizedesvesszövel', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", "10,5");
    }).toThrow();
});

test('egyenlegFeltolt - összeg egész szám stringként átadva', () => {
    expect(() => {
        bank.egyenlegFeltolt("1234", "10000");
    }).not.toThrow();
});

test('egyenlegFeltolt - Az egyenleg megváltozik', () => {
    bank.egyenlegFeltolt("1234", 10000);
    expect(bank.egyenleg("1234")).toBe(10000);
});

test('egyenlegFeltolt - Az új összeg hozzáadódik a meglévő egyenleghez', () => {
    bank.egyenlegFeltolt("1234", 10000);
    expect(bank.egyenleg("1234")).toBe(10000);
    bank.egyenlegFeltolt("1234", "20000");
    expect(bank.egyenleg("1234")).toBe(30000);
});

test('egyenlegFeltolt - Az összeg a meglelő számlára kerül jóváírásra', () => {
    bank.ujSzamla("Gipsz Jakab", "4321");
    bank.ujSzamla("Teszt Elek", "5678");
    bank.egyenlegFeltolt("1234", 10000);
    bank.egyenlegFeltolt("4321", 50000);
    bank.egyenlegFeltolt("5678", 20000);
    
    expect(bank.egyenleg("1234")).toBe(10000);
    expect(bank.egyenleg("4321")).toBe(50000);
    expect(bank.egyenleg("5678")).toBe(20000);
});
/*
  TODO: 
  - Egyenleg feltölt:
    - Számlaszám nem lehet null
    - Számlaszám nem lehet üres
    - Számlaszám nem létezik
    - stb.
  - utal függvény
*/