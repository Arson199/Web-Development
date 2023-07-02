<?php 
    // Anonymous Function = Lambda Function = Nameless Function
    echo (function(){
        return "Mingalarpar"."<br>";
    })();
    // First Class Function (can assign function to variable) 
    // => Function == Value
    $hello = function(){
        echo "Hello Arson"."<br>";     
    };
    $hello();

    // Higher Order Function
    // (Function can return another function definition.
    //  Function can accept another function definition as argument.)
    function one($func){
        echo $func();
    }
    $two = function(){
        return "Hello World from function 2!";
    };
    one($two);
?>