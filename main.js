const kiev = "Київ";
const london = "Лондон";
const washington = "Вашингтон";
const football = "футбол";
const boxe = "бокс";
const tennis = "теніс";

let userName = prompt("Введіть свій рік народження");
let userCity = prompt("В якому місті ви живете?");
let userSport = prompt("Який ваший улюблений спорт?")

switch(true) {
    case userName === null:
        console.log("Шкода, що Ви не захотіли ввести свій(ю) рік народження");
        break;
    case isNaN(userName):
        console.log("Ви ввели неіснуючий вік");
        break;
    case userName.trim() === "":
        console.log("Шкода, що Ви не захотіли ввести свій(ю) рік народження");
        break;
    default:
        let age = 2024 - userName;
        console.log(`Ваш вік ${age}`);
}

if (userCity===null || userCity.trim()==="" || typeof(userCity) === "number" ){console.log("Шкода, що Ви не захотіли ввести свій(ю) місто");}
    else if(userCity!== kiev&&userCity!==london&&userCity!==washington){
        console.log(`Ви живете у місті ${userCity}`);}
    else
        if(userCity===washington){console.log("Ви живете у столиці Злучених Держав Америки");}
    else
        if (userCity===london){console.log("Ви живете у столиці Англії");}
    else
        if (userCity===kiev){console.log("Ви живете у столиці України");}
        else {}


if (userSport===null || userSport.trim()==="" || typeof(userSport) === "number" ){console.log("Шкода, що Ви не захотіли ввести свій(ю) улюблений спорт");}
else if(userSport!== boxe&&userSport!==football&&userSport!==tennis){
    console.log(`Ваш улюблений спорт ${userSport}`);}
else
if(userSport===football){console.log("Круто! Хочеш стати Мессі?");}
else
if (userSport===boxe){console.log("Круто! Хочеш стати Усиком?");}
else
if (userSport===tennis){console.log("Круто! Хочеш стати Феддерером?");}
else {}