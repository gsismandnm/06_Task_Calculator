//HESAP MAKİNESİ İŞLEMLERİ

function hesapMakinesi(sayi1, sayi2, islemIsareti){
    
    if( isNaN(sayi1) || isNaN(sayi2 )) 
    console.log('LÜTFEN BİR SAYI GİRİNİZ. !!!');
    else{
        if ( islemIsareti == '+'){
            let sonuc = {
              islemSonucu:  sayi1+sayi2,
              secim: 'toplama' 
    
                     }
               return sonuc;
            } 
        
        else if ( islemIsareti == '-'){
            let sonuc = {
              islemSonucu:  sayi1-sayi2,
              secim: 'cikarma'
    
                     }
                return sonuc;
            }
        
        else if ( islemIsareti == '*'){
            let sonuc = {
              islemSonucu:  sayi1*sayi2,
              secim: 'carpma'
    
                     }
                 return sonuc;
            }
        
        else if ( islemIsareti == '/'){
       
            if(sayi2==0) console.log('İKİNCİ SAYI SIFIR OLDUĞU İÇİN SONUÇ ÇIKMAMAKTADIR.');
              else {
                let sonuc = {
                    islemsonucu:  sayi1/sayi2,
                    secim: 'bolme'
            
                    }
                 return sonuc;
            }
          }
    
        else console.log('İŞLEM YAPILAMADI !!!');
    }
    
  }
    const islemler = hesapMakinesi(12, 8, "+");
        
    console.log(islemler);

  