window.addEventListener("DOMContentLoaded", function(){
    var xmlhttp = new XMLHttpRequest();
    var button = document.getElementById("lookup");
    var display = document.getElementById("result");
    var entry = encodeURIComponent(document.getElementById("country").value);
    var answer = xmlhttp.responseText;
    xmlhttp.onreadystatechange= function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            button.addEventListener("click", function(){
                display.innerHTML=answer;
            })
        }
    };
    xmlhttp.open("GET","world.php?country=" + entry, true);
    xmlhttp.send();
})