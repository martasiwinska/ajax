'use strict';




//******************************* ZADANIE 1 ***************************************

//function ajax(method, url) {
//    var xhttp = new XMLHttpRequest();
//    xhttp.open(method, url);
//    xhttp.onreadystatechange = function () {
//
//        if (xhttp.readyState == 4) {
//            if (xhttp.status == 200) {
//
//                var data = xhttp.responseText;
//                var myObj = JSON.parse(this.responseText);
//
//                var paragraf1 = document.createElement("p");
//                var tekst1 = document.createTextNode("id: " + myObj.userId)
//
//                paragraf1.appendChild(tekst1);
//
//                var paragraf2 = document.createElement("p");
//                var tekst2 = document.createTextNode("name: " + myObj.userName);
//
//                paragraf2.appendChild(tekst2);
//
//                var paragraf3 = document.createElement("p");
//                var tekst3 = document.createTextNode("url: " + myObj.userURL);
//
//                paragraf3.appendChild(tekst3);
//
//
//                document.body.appendChild(paragraf1);
//                document.body.appendChild(paragraf2);
//                document.body.appendChild(paragraf3);
//            }
//            xhttp = null;
//        }
//    }
//    xhttp.send();
//}
//
//
//var przycisk = document.getElementsByTagName("button");
//var nowyObiekt = new XMLHttpRequest();
//
//function pobierzDane(method, url) {
//    console.log("działa");
//    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
//}
//
//przycisk.onclick = pobierzDane;
//
//
//
//
////    $.ajax({
////        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
////        dataType: "json",
////        success: function (resultJSON) {
////            console.log(resultJSON);
////        },
////    })
////}
//
//
////function ajax(method, url) {
////    var xhttp = new XMLHttpRequest();
//////    console.log(xhttp);
////
////    xhttp.open(method, url);
////    //otwieramy połączenie, to musi być zawsze
////
////    xhttp.onreadystatechange = function () {
//////funcja wykona się dopiero kiedy zmieni się status
////        
////        if (xhttp.readyState == 4) {
////            console.log(xhttp.readyState);
////
////            if (xhttp.status == 200) {
////
////                var data = xhttp.responseText;
////                console.log(data);
////            }
////            xhttp = null;
//////            rozłącza połączenie, zachowauje pobrane dane
////        }
////    }
////    xhttp.send();
////}
////
////$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(data) {
////    console.log(data);
////});
////
////$.ajax({
////    url:"https://jsonplaceholder.typicode.com/posts/1",
////    dataType: "json",
////    
////    success: function (resultJSON) {
////        console.log(resultJSON);
////    },
////});
//////
//////ajax("GET", "https://jsonplaceholder.typicode.com/posts/1");
//////ajax("GET", "https://jsonplaceholder.typicode.com/albums");