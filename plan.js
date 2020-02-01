var temp = [];

$(".btn-save").on("click",function(event){

    event.preventDefault();
    var t = $(this).attr("data-time");
    var text = $("#"+t).val();
    console.log("Text box value:"+text);
    
    var a = {
        time: $(this).attr("data-time"),
        Text: $("#"+t).val()
    }

    temp.push(a);
    console.log("temp: "+JSON.stringify(temp));
    console.log("Text box value: "+text);
    console.log($(this).attr("data-time"));
    localStorage.setItem("time", temp);
    var localVal = localStorage.getItem("time");
    console.log("Local value: "+localVal);
});

function renderTime() {
    var mydate = new Date();
    var year = mydate.getFullYear();
        if(year<1000){
            year +=1900;
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayArray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    // Date end
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h==24) {
            h=0;
        } else if(h>12) {
            h=h-0;
        }
        if(h<10) {
            h="0"+h;
        }
        if(m<10) {
            m="0"+h;
        }
        if(s<10) {
            s="0"+h;
        }
        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = ""+dayArray[day]+" "+daym+" "+monthArray[month]+" "+year+" | " +h+":"+m+":"+s;
        myClock.innerText = ""+dayArray[day]+" "+daym+" "+monthArray[month]+" "+year+" | " +h+":"+m+":"+s;
        setTimeout("renderTime()", 1000);
    
}
renderTime()