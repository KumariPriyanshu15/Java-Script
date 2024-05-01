function showDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; 
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    day = a4(day);
    month = a4(month);
    hours = a4(hours);
    minutes = a4(minutes);
    var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    console.log(formattedDateTime);
}
function a4(num) {
    return (num < 10 ? '0' : '') + num;
}
showDateTime();

