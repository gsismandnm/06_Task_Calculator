 //ŞAYET YAN CİZGİ / SONRA ** YAZARSANIZ PARAMETRELER GELİR.
 /**
  * 
  * @param {Number} num1 
  * @param {Number} num2 
  * @param {String*} op 
  * @returns () {String*} op
  * 
  */

const calc=(num1, num2, op) =>{
    let sonuc = {
        islemSonucu:'',
        hata:[]

    };

    //HATALAR NELER OLABİLİR. SAYI YERİNE STRING GİRİLMİŞ Mİ?

    if(typeof num1 !== 'number' || typeof num2 !== "number"){
        sonuc.hata.push('Lütfen sayı giriniz!!');
        sonuc.islemSonucu ='Hata';
    }

    //BÖLME İŞLEMİNDE İKİNCİ SAYI SIFIR OLAMAZ.
    if (op == '/' && num2==0){
        sonuc.hata.push('Bölme işleminde ikinci sayı sıfır olamaz!!');
        sonuc.islemSonucu ='Hata';

    }

    //op +,-,*,/ HARİCİNDE İSE HATA VER
    if(['+','-', '*', '/'].indexOf(op)==-1){
        sonuc.hata.push('Kullanıcı Hatası!!');
        sonuc.islemSonucu ='Hata';

    }



    if(sonuc.hata.lengh ==0){
        let islem = 0;

        switch (op){
            case '+':
                islem = num1 + num2;
                break;
            case '-':
                islem = num1- num2
                break;
            case '*':
                islem = num1 * num2;
                break;
            case '/':
                islem = num1 + num2;
                break;
            default:
                islem=0;
                break;
            
        }
    
    sonuc.islemSonucu = islem;
    delete sonuc.hata
        
}
return sonuc;

}

console.log (calc (5, 0, '+'));


// BİR JS DOSYASINI DIŞARI AKTARIP KULLANMAK İÇİN module.expors kullanılır. 
//Bunu başka bir js dosyasında kullanabilir.
module.exports=calc;
