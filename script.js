function showtime(){

    var hours = document.getElementById("hrs");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am_pm");
    
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    if(hrs>12){
        let h = hrs - 12;
        if(h<=9)hours.innerHTML='0'+h;
        else hours.innerHTML=h;
        am_pm.innerHTML = "PM"; 
    }
    else if(hrs == 12 && mins >= 0){
        hours.innerHTML = hrs;
        am_pm.innerHTML = "PM";
    }
    else{
        if(hrs<=9)hours.innerHTML='0'+hrs;
        else hours.innerHTML = hrs;
        am_pm.innerHTML = "AM";
    }

    if(mins<=9)minutes.innerHTML='0'+mins;
    else minutes.innerHTML = mins;

    if(secs<=9) seconds.innerHTML = '0'+secs;
    else seconds.innerHTML = secs;

    
    if(hrs>=05 && hrs<12){
        upper.innerHTML = "Hey Good Morning!!";
    }
    if(hrs>=12 && hrs<16){
        upper.innerHTML = "Good Afternoon Dear!!";
    }
    if(hrs>=16 && hrs<=20){
        upper.innerHTML = "Good Evening Buddy!!";
    }
    if(hrs>20 && hrs<=5){
        upper.innerHTML = "Good Night !!";
    }
}
setInterval(showtime, 1000);


function makediv(){
    var container = document.createElement('div');
    container.className="lower-box";
    container.id="l-box";
    document.getElementById("f-box").appendChild(container);

    var invalue = document.getElementById("SetTimerWakeUp");
    var invalue1 = document.getElementById("SetTimerLunch");
    var invalue2 = document.getElementById("SetTimerNap");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("l-box").innerHTML="Breakfast Time is set to "+ value+"<br/> Lunch Time is set to "+ invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time is set to "+ invalue2.options[invalue2.selectedIndex].text;
}

function actiontime(){

    var i = document.getElementById('SetTimerWakeUp').value;
    var j = document.getElementById('SetTimerLunch').value;
    var k = document.getElementById('SetTimerNap').value;
    var hrrs = new Date().getHours();

    if(i == hrrs){
        document.getElementById('lower').style.backgroundImage="url(./Morning.jpeg)";
        
    }

    else if(j == hrrs){
        document.getElementById('lower').style.backgroundImage="url(./Lunch-Time.jpeg)";
    }

    else if(k == hrrs){
        document.getElementById('lower').style.backgroundImage="url(./Night.jpeg)";
    }
    makediv();
}