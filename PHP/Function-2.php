<!-- Array Arguments -->
<?php 
    function add($data){
        echo $data[0] + $data[1]."<br>";
    }
    add([10,20]);
     
    $x = 10;
    $y = $x;
    echo "The value of y is ".$y."<br>"; //10
    $x = 50;
    echo "The value of y is ".$y."<br>"; //10

    // Reference Operator => &
    $x = 10;
    $y=&$x; //same memory location reference.
    echo "The value of y is ".$y."<br>"; //10
    $x = 50;
    echo "The value of y is ".$y."<br>"; //50
    $y = 100;
    echo "The value of x is ".$x."<br>"; //100

    // Function return
    function subtraction($a,$b){
        return $a-$b;
    }  
    $result = subtraction(10,5);
    var_dump($result);
    echo "<br>".$result;
?>