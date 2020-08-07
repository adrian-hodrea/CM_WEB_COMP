export function getMonthDisplayFormat(dataAcordarii) {
    let data = new Date(dataAcordarii);
    let month = data.getMonth();
    var lunaAfisata = '0' + (month + 1).toString();
    switch (lunaAfisata) {
        case "01": lunaAfisata += " IANUARIE";
            break;
        case "02": lunaAfisata += " FEBRUARIE";
            break;
        case "03": lunaAfisata += " MARTIE";
            break;
        case "04": lunaAfisata += " APRILIE";
            break;
        case "05": lunaAfisata += " MAI";
            break;
        case "06": lunaAfisata += " IUNIE";
            break;
        case "07": lunaAfisata += " IULIE";
            break;
        case "08": lunaAfisata += " AUGUST";
            break;
        case "09": lunaAfisata += " SEPTEMBRIE";
            break;
        case "10": lunaAfisata += " OCTOMBRIE";
            break;
        case "11": lunaAfisata += " NOIEMBRIE";
            break;
        case "12": lunaAfisata += " DECEMBRIE";
            break;
    } // end of switch
    return lunaAfisata;
}

export function getYearDisplayFormat(dataAcordarii) {
    let data = new Date(dataAcordarii);
    let anulAfisat = data.getFullYear();
    return anulAfisat;
}

export function dateDiffInDays(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}

export function formatDate(inDate) {
    let date = new Date(inDate);
    var yyyy = date.getFullYear();
    var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
    var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let outDate = dd + '-' + mm + '-' + yyyy;
    return outDate;
}