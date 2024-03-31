console.log("this is my console");
//window.alert("i reely like pizza");
//this is a comente
/* 
this is
multty comenter



*//*
let username = window.prompt("what is ur name?");
console.log(username);
let age = 21 ;
let firstname = "smidp";
let student = true ;
console.log(" i am ", age);
console.log(firstname);

document.getElementById("p1").innerHTML="Hello "+ firstname;
document.getElementById("p2").innerHTML= "you are"+ age;*/
let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value ;
        document.getElementById("mylabel" ).innerHTML= username;
}