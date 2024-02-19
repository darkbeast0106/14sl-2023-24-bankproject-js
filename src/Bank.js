// ECMAscript modul esetén export class Bank
/**
 * Bank műveleteit végrehajtó osztály.
 */
class Bank {
    /**
     * A bankban található számlákat tartalmazza
     */
    #szamlak = [];

    /**
     * Új számlát nyit a megadott névvel, számlaszámmal, 0 Ft egyenleggel
     * @param {string} nev A számla tulajdonosának neve
     * @param {string} szamlaszam A számla számlaszáma
     */
    ujSzamla(nev, szamlaszam) {
        if(nev == null) {
            throw new Error("Név nem lehet null");
        }
        if(szamlaszam == null) {
            throw new Error("Számlaszám nem lehet null");
        }
        if(nev == "") {
            throw new Error("Név nem lehet üres");
        }
        if(szamlaszam == "") {
            throw new Error("Számlaszám nem lehet üres");
        }
        if (this.#szamlak.some(szamla => szamla.szamlaszam == szamlaszam)) {
            throw new Error("Megadott számlaszámmal már létezik számla");
        }

        const ujSzamla = {
            nev: nev,
            szamlaszam: szamlaszam,
            egyenleg: 0
        }
        this.#szamlak.push(ujSzamla);
    }

    /**
     * Lekérdezi az adott számlán lévő pénzösszeget
     * @param {string} szamlaszam A számla számlaszáma, aminek az egyenlegét keressük
     * @returns {number} A számlán lévő egyenleg
     */
    egyenleg(szamlaszam) {
        const szamla = this.#szamlaKeres(szamlaszam);
        return szamla.egyenleg;
    }
    
    /**
     * Egy létező számlára pénzt helyez
     * @param {string} szamlaszam A számla számlaszáma, amire pénzt helyez
     * @param {number} osszeg A számlára helyezendő pénzösszeg
     */
    egyenlegFeltolt(szamlaszam, osszeg) {
        const osszegEgeszErtek = parseInt(osszeg);
        //console.log(osszeg, "=>", osszegEgeszErtek);
        if (osszegEgeszErtek != osszeg) {
            throw new Error("Az összeg csak egész szám lehet");
        }

        if (osszegEgeszErtek <= 0) {
            throw new Error("Az összeg csak pozitív szám lehet");
        }
        
        const szamla = this.#szamlaKeres(szamlaszam);
        szamla.egyenleg += osszegEgeszErtek;
    }

    /**
     * Két számla között utal.
     * Ha nincs elég pénz a forrás számlán, akkor false értékkel tér vissza, és nem történik utalás
     * @param {string} honnan A forrás számla számlaszáma
     * @param {string} hova A cél számla számlaszáma
     * @param {number} osszeg Az átutalandó egyenleg
     * @returns {boolean} Az utalás sikeressége
     */
    utal(honnan, hova, osszeg) {

    }

    /**
     * Megkeresi a számlát annak számlaszáma alapján
     * @param {string} szamlaszam A keresett számla számlaszáma
     * @returns {object} A megtalált számla
     */
    #szamlaKeres(szamlaszam) {
        if (szamlaszam == null) {
            throw new Error("Számlaszám nem lehet null");
        }
        if (szamlaszam == "") {
            throw new Error("Számlaszám nem lehet üres");
        }

        let index = 0;
        while (index < this.#szamlak.length && this.#szamlak[index].szamlaszam != szamlaszam) {
            index++;
        }

        if (index == this.#szamlak.length) {
            throw new Error("A megadott számlaszámmal nem található számla");
        }

        return this.#szamlak[index];
    }
}

module.exports = { Bank };