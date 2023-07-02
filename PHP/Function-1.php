<!-- strlen (String length) -->
<?php 
    $var = "Hello World";
    echo strlen($var)."<br>";

    $data = ["20","30","49"];
    echo count($data)."<br>";
    var_dump(count($data));

    $value = 3.5;
    echo "<br>".floor($value)."<br>";
    echo ceil($value)."<br>";
    echo round($value)."<br>";
    echo rand()."<br>"; //random function
    echo rand(1,10);

    function repeatHello($name){
        for ($i=0; $i < $name; $i++) { 
            echo "<p>Hello</p>";
        }
    }
    function add($x=0,$y=0){ //default values of x and y is 0
        echo "<h1>".$x+$y."</h1>";
    }
    add(5,4);
    add();
    repeatHello(5);
?>