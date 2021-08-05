function Time(){
    var date = new Date ();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ":" + m + ":" + s;
    if (h==0){
        h = 12;
    }
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }
    document.getElementById("clock").innerText = time;
    setTimeout(Time,1000)
}
Time();