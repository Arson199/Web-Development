<?php 
    function add($x,$y){
        if(!is_integer($x)){
            echo "x is not an integer";
            return 0;
        }
        if(!is_integer($y)){
            echo "y is not an integer";
            return 0;
        }
        return $x+$y;
    }
    echo add(10,"20");
?>