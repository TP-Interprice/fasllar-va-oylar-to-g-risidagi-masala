function Fasl() {
    let oy = document.forms.Vaqt.oy.value.toLowerCase()+"";
    let Qish = 'dekabr,yanvar,fevral';
    let Bahor = 'mart,aprel,may';
    let Yoz = 'iyun,iyul,avgust';
    let Kuz = 'sentyabr,oktyabr,noyabr';
    let fasl = 'Bu qiymat fasllarga tegishli emas';
    if(oy !== ""){
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
}