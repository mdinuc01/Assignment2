/* <   File Name: apps.js
    Student Name: Michael-Angelo Dinuccio
    StudentID: 301177707
    Date: September 30th, 2021 */

//IIFE -- Immediately Invoked Fucntion Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for (button of deleteButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
        
    }
    window.addEventListener("load", Start);
})();



$(document).ready(function(){
    $(window).ready(function(){
        $("#table1").slideDown();
        $("#table2").hide();
        $("#table3").hide();
        $("#semester1").css("color", "Orange");
        $("#semester2").css("box-shadow", "3px 3px 3px gray");
        $("#semester3").css("box-shadow", "3px 3px 3px gray");
    });
    $("#semester1").click(function(){
        $("#table2").slideUp("faster");
        $("#table3").slideUp("faster");
        $("#semester1").css("color", "Orange");
        $("#semester2").css("color", "#394d63");
        $("#semester3").css("color", "#394d63");
        $("#semester2").css("box-shadow", "3px 3px 3px gray");
        $("#semester3").css("box-shadow", "3px 3px 3px gray");
        $("#semester1").css("box-shadow", "");
        table1Down();
    });
    $("#semester2").click(function(){
        $("#table1").slideUp();
        $("#table3").slideUp();
        $("#semester1").css("color", "#394d63");
        $("#semester2").css("color", "Orange");
        $("#semester3").css("color", "#394d63");
        $("#semester1").css("box-shadow", "3px 3px 3px gray");
        $("#semester3").css("box-shadow", "3px 3px 3px gray");
        $("#semester2").css("box-shadow", "");
        table2Down();
        
    });
    $("#semester3").click(function(){
        $("#table1").slideUp();
        $("#table2").slideUp();
        $("#semester1").css("color", "#394d63");
        $("#semester2").css("color", "#394d63");
        $("#semester3").css("color", "Orange");
        $("#semester2").css("box-shadow", "3px 3px 3px gray");
        $("#semester1").css("box-shadow", "3px 3px 3px gray");
        $("#semester3").css("box-shadow", "");
        table3Down();
    });
  });

  function table1Down(){
    $("#table1").slideDown();
};

function table2Down(){
    $("#table2").slideDown();
};

function table3Down(){
    $("#table3").slideDown();
};