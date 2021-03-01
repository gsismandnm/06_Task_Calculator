/**
 *  calc metodu
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {String} op 
 * 
 * @returns {Object} 
 */
const calc = (num1, num2, op) => {
    let sonuc = {
        islemSonucu: '',
        hata: []
    };

    // sayi yerine string girilmis mi
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        sonuc.hata.push('Lütfen sayi giriniz!!');
        sonuc.islemSonucu = 'Hata';
    }

    // bölme isleminde ikinci sayi sifir olamaz
    if (op == '/' && num2 == 0) {
        sonuc.hata.push('Bölme isleminde ikinci sayi sifir olamaz!!')
        sonuc.islemSonucu = 'Hata';
    }

    // op +,-,*,/ haricinde ise hata ver
    if (['+', '-', '*', '/'].indexOf(op) == -1) {
        sonuc.hata.push('Operatör hatasi')
        sonuc.islemSonucu = 'Hata';
    }

    if (sonuc.hata.length == 0) {
        let islem = 0;

        switch (op) {
            case '+':
                islem = num1 + num2;
                break;
            case '-':
                islem = num1 - num2;
                break;
            case '*':
                islem = num1 * num2;
                break;
            case '/':
                islem = num1 / num2;
                break;

            default:
                islem = 0;
                break;
        }

        sonuc.islemSonucu = islem;
        delete sonuc.hata;
    }

    return sonuc;
    // return ['sonuc', 'hata'];
}

// Object.prototype arastirabilirsiniz

// console.log(calc(5, 2, '/'));

const method2 = () => {
    console.log('ikinci method');
}

const obj = {
    adi: 'Mahmut',
    yasi: 23
}


// module.exports.calc = calc;
// module.exports.method2 = method2;
// module.exports.obj = obj;

// module.exports = {
//     calc: calc,
//     method2: method2,
//     obj: obj
// }

module.exports = {
    calc,
    method2,
    obj
}


