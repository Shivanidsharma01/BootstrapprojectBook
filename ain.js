
// Scrollbar navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// print
function printpage(){
    window.print();
}
// Modal
function update(){

    var select = document.getElementById('formGroupExampleInput4');
    var price = select.options[select.selectedIndex].value;

    var second_number = (document. getElementById("formGroupExampleInput5"). value);

    var result = price * second_number;
    document.getElementById("formGroupExampleInput7").value = result;

}

function submit(){
    //var text='Thank You for your response.';
    alert("Thank You for your response.");
}
