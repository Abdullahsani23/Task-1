var days =["sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
var today =new Date()
// console.log(today);
var todayIs =days[today.getDay()]
document.write("Today is:",todayIs,"<br>");

var date = new Date()
var hours =date.getHours()
var mints =date.getMinutes()
var sec =date.getSeconds()
var ampm 
if(hours>=12){
    hours =hours-12
    ampm = "Pm"
    if(hours<10){
        hours="0"+hours
    }
}else(
    ampm="Am"
)
var dateIs= hours +" "+ ampm+":"+mints+":"+sec

document.write("Current Time is ",dateIs);


