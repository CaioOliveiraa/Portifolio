// const CVBtn = document.querySelector("#buttonCV");

// CVBtn.addEventListener("click", () => {
//     CVBtn.classList.add("onclick");
//     setTimeout(() => {
//         validade();
//     }, 250);
// });

// function validade() {
//     setTimeout(() => {
//         CVBtn.classList.remove("onclick");
//         CVBtn.classList.add("validade");
//         setTimeout(callback, 450);
//     }, 2250);
// }

// function callback() {
//     setTimeout(() => {
//         CVBtn.classList.remove("validade");
//     }, 1250);
// }

$(function() {
    $("#buttonCV").click(function() {
        $("#buttonCV").addClass("onclic");
        setTimeout(validate, 250);
    });
    
    function validate() {
        setTimeout(function() {
        $("#buttonCV").removeClass("onclic");
        $("#buttonCV").addClass("validate");
        setTimeout(callback, 450);
        }, 2250);
    }
    
    function callback() {
        setTimeout(function() {
        $("#buttonCV").removeClass("validate");
        }, 1250);
    }
    });
