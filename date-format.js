let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();


if(dd < 10){
    dd= '0'+dd;
}

if(mm<10){
    mm = '0'+mm;
}

today = `${mm}-${dd}-${yyyy}`

console.log(today)

exports.today = today;