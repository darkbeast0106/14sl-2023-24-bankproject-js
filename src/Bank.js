// ECMAscript modul esetén export class Bank
/**
 * Bank műveleteit végrehajtó osztály.
 */
class Bank {
    /**
     * Új számlát nyit a megadott névvel, számlaszámmal, 0 Ft egyenleggel
     * @param {string} nev A számla tulajdonosának neve
     * @param {string} szamlaszam A számla számlaszáma
     */
    ujSzamla(nev, szamlaszam) {
        
    }

    /**
     * Lekérdezi az adott számlán lévő pénzösszeget
     * @param {string} szamlaszam A számla számlaszáma, aminek az egyenlegét keressük
     * @returns {number} A számlán lévő egyenleg
     */
    egyenleg(szamlaszam) {
        
    }
    
    /**
     * Egy létező számlára pénzt helyez
     * @param {string} szamlaszam A számla számlaszáma, amire pénzt helyez
     * @param {number} osszeg A számlára helyezendő pénzösszeg
     */
    egyenlegFeltolt(szamlaszam, osszeg) {

    }

    /**
     * Két számla között utal.
     * Ha nincs elég pénz a forrás számlán, akkor false értékkel tér vissza, és nem történik utalás
     * @param {string} honnan A forrás számla számlaszáma
     * @param {string} hova >A cél számla számlaszáma
     * @param {number} osszeg Az átutalandó egyenleg
     * @returns {boolean} Az utalás sikeressége
     */
    utal(honnan, hova, osszeg) {

    }
}

module.exports = { Bank };