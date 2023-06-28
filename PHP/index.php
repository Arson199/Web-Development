<?php 
// $greet ="Hello Senpai ";
//     echo "$greet AKSM <br>";
//     echo '$greet AKSM';
    // echo "Hello ".$_GET['name'];      
    // echo "Hello ".htmlspecialchars($_GET['name']);
    $names =["AKSM","Arson","Winchester"];


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index of PHP</title>
</head>
<body>
    <ul>
        <?php 
        // foreach($names as $name){
        //     echo "<li>$name</li>";
        // }
        ?>
        <?php foreach($names as $name): ?>
            <li><?= $name; ?></li>
        <?php endforeach; ?>
        
        <?php 
        // die();
            $person = ["namae"=>"AKSM","age"=>21,"hair"=>"black"];
            foreach($person as $key=>$feacture){
                echo "$key:$feacture<br>";
            }
            echo "<pre>";
            // var_dump($person); 
            print_r($person);
            
            $task = ["title"=>"Task 1" ,"status"=>true];
            $progress = $task['status']?'completed':'not complete';
            echo "<h1>$task[title] is $progress</h1>";
            $task['status'] = false;
            if($task['status']):
                echo "<i>Completed!</i>";
            else:
                echo "<i>Not Completed!</i>";
            endif;

        class Car{
            
        }
        ?>
    </ul>
</body>
</html>
