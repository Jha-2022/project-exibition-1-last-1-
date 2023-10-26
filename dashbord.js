// burger = document.querySelector('.burger');
// burger.addEventListener('click',()=>{
//     burger.classList.toggle('v-class-resp');
// })



let now = new Date();
console.log(now);

let date = now.getDate();
console.log(date);

let month = now.getMonth();
console.log(month);                                                    

let day = now.getDay();
console.log(day);




document.getElementById("tareek").innerHTML = date;
document.getElementById("din").innerHTML = day;
if (day==0){
    console.log("Sunday");
    document.getElementById ("din").innerHTML = "Sunday";
}

else if(day==1){
    console.log("Monday");
    document.getElementById ("din").innerHTML = "Monday";
}

else if(day==2){
    console.log("Tuesday");
    document.getElementById ("din").innerHTML = "Tuesday";
}

else if(day==3){
    console.log("Wednesday");
    document.getElementById ("din").innerHTML = "Wednesday";
}

else if(day==4){
    console.log("Thursday");
    document.getElementById ("din").innerHTML = "Thursday";
}

else if(day==5){
    console.log("Friday");  
    document.getElementById ("din").innerHTML = "Friday";
}

else{
    console.log("Saturday");
    document.getElementById ("din").innerHTML = "Saturday";
}






document.getElementById("mahina").innerHTML = month;

if(month==0){
    console.log("January")
    document.getElementById("mahina").innerHTML = "January";
}  

else if(month==1){
    console.log("Feburary");
    document.getElementById("mahina").innerHTML = "Feburary";
}  

else if(month==2){
    console.log("March");
    document.getElementById("mahina").innerHTML = "March";
}  

else if(month==3){
    console.log("April");
    document.getElementById("mahina").innerHTML = "April";
}  

else if(month==4){
    console.log("May");
    document.getElementById("mahina").innerHTML = "May";
}

else if(month==5){
    console.log("June");
    document.getElementById("mahina").innerHTML = "June";
}

else if(month==6){
    console.log("July");
    document.getElementById("mahina").innerHTML = "July";
}

else if(month==7){
    console.log("August");
    document.getElementById("mahina").innerHTML = "August";
}

else if(month==8){
    console.log("September");
    document.getElementById("mahina").innerHTML = "September";
}  

else if(month==9){
    console.log("October");
    document.getElementById("mahina").innerHTML = "October";
}

else if(month==10){
    console.log("November");
    document.getElementById("mahina").innerHTML = "November";
}

else{
    console.log("December");
    document.getElementById("mahina").innerHTML = "December";
}


// const hamburger = document.getElementById("hamburger");
// hamburger.addEventListener("click",function(event){
//     event.preventDefault();
//     const sidebar =document.getElementById("sideme")
//     sidebar.style.display="visible"
// })
// burger = document.getElementsByClassName('hamburger');
// // navbar = document.querySelector('.navbar');
// // navList = document.querySelector('.nav-list');
// // rightNav = document.querySelector('.rightNav');


// burger.addEventListener('click',()=>{
//     // rightNav.classList.toggle('v-class-resp');
//     // navList.classList.toggle('v-class-resp');
//     burger.classList.toggle('hamburger');
// })


// function openSidebar() {
//     // Get the sidebar element.
//     const sidebar = document.querySelector('.hamburger');
  
//     // Add the 'open' class to the sidebar element.
//     hamburger.classList.add('open');
//   }


//   function openSidebar()  {
//     // Get the sidebar element.
//     const sidebar = document.querySelector('.hamburger');
  
//     // Remove the 'open' class from the sidebar element.
//     .classList.remove('open');
//   }

//   openSidebar() ;

    // function myFunction(){

    //     var sidebar = document.querySelector('.sidebar');
    //     var hamburger = document.querySelector('.hamburger');
    //     hamburger.addEventListener('click',() => {
    //         sidebar.classList.toggle('sidebox');
    //     });

    // }




//     burger = document.querySelector('.burger');
// navbar = document.querySelector('.navbar');
// navList = document.querySelector('.nav-list');
// rightNav = document.querySelector('.rightNav');


// burger.addEventListener('click',()=>{
//     rightNav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     navbar.classList.toggle('h-nav-resp');
// })

// const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click',()=>{
//     const element = document.querySelector('.sidebar');
//     element.style.display='visible';
// })




