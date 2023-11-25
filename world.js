window.addEventListener("DOMContentLoaded", function(){
    var countrybutton= document.getElementById("lookup_country");
    var citybutton=document.getElementById("lookup_cities");
    

    countrybutton.addEventListener('click', function(e){
        e.preventDefault();
        searchdb('country');
    });

    citybutton.addEventListener('click',function(e){
        e.preventDefault();
        searchdb('cities');
    });

});

function searchdb(place){
    var countryentry = encodeURIComponent(document.getElementById("country").value);
    var display = document.getElementById("result");
    let ccquery='country='+ countryentry;
    let xmlhttp = new XMLHttpRequest();
    var answer = xmlhttp.responseText;

    if (place==='cities'){
        ccquery+= '&lookup=cities';
    }

    xmlhttp.open('GET','world.php?country='+ ccquery,true);
    xmlhttp.onload=function(){
        if (xmlhttp.status == 200){
            display.innerHTML= answer;
        }else{
            console.error(xmlhttp.statusText);
        }
    };
    xmlhttp.onerror = function(){
        console.error(xmlhttp.statusText);
    };
    xmlhttp.send();

}


    
