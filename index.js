function Fasl() {
    oy = document.forms.Vaqt.oy.value.toLowerCase()+",";
    Qish = 'dek,dekabr,yan,yanvar,fev,fevral,12,1,2,';
    Bahor = 'mar,mart,apr,aprel,may,3,4,5,';
    Yoz = 'iyun,iyul,avg,avgust,6,7,8,';
    Kuz = 'sen,sentyabr,okt,oktyabr,noy,noyabr,9,10,11,';
    fasl = 'Bu qiymat fasllarga tegishli emas';
    if (Qish.indexOf(oy) != -1) {
        fasl = 'Qish';
    } else if (Bahor.indexOf(oy) != -1) {
        fasl = 'Bahor';
    } else if (Yoz.indexOf(oy) != -1) {
        fasl = 'Yoz';
    } else if (Kuz.indexOf(oy) != -1) {
        fasl = 'Kuz';
    }
    alert(fasl);
}