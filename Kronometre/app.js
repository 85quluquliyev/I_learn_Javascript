//  Zaman
const dakika = document.getElementById('dakika');
const saniye = document.getElementById('saniye');

// Kutucuklar
const secilenDk = document.getElementById('secilen-dk');
const secilenSn = document.getElementById('secilen-sn');

// Butonlar
const baslatButonu = document.getElementById('baslat');
const sifirlaButonu = document.getElementById('sifirla')

let dur = false;

secilenDk.addEventListener('change', () => {
    dakika.textContent = secilenDk.value <10 ? '0' + secilenDk.value : secilenDk.value;
})

secilenSn.addEventListener('change', () => {
    saniye.textContent = secilenSn.value < 10 ? '0' + secilenSn.value : secilenSn.value;
})

baslatButonu.addEventListener('click', startTimer);
sifirlaButonu.addEventListener('click', () => {
    dur = true;

    dakika.textContent = '00';
    saniye.textContent = '00';

    secilenDk.value = '00';
    secilenSn.value = '00';
});



function startTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval =  setInterval(() => {
        sn--;
        sn = sn < 10 ? '0' + sn : sn;
        
        if(sn == '0-1'){
            dk--;
            dk = dk < 10 ? '0' + dk : dk;
            sn = 59;
        }

        if(dk == 00 && sn == 00 || dk == 0 && sn == 0){
            clearInterval(interval)
            window.alert('Süre Doldu');
            secilenDk.value = '00';
            secilenSn.value = '00';
        }

        if(dur){
            clearInterval(interval)
            dur = false;
            return;
        }

        dakika.textContent = dk;
        saniye.textContent = sn;
    },1000);
}

