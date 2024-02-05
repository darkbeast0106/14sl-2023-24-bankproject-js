/*
ECMAscript modul esetén (JEST-nél csak további könyvtárakkal működik):
 import { Bank } from "./Bank";
*/
const { Bank } = require('./Bank');

test('ujSzamla - Létrehozott számla egyenlege 0', () => {
    const bank = new Bank();
    bank.ujSzamla("Gipsz Jakab", "1234");
    expect(bank.egyenleg("1234")).toBe(0);
});