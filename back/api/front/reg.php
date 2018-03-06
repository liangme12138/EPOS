<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $telVal = isset($_GET['telVal']) ? $_GET['telVal'] : '';
    
    if($telVal){
        $sql="select * from user where tel='$telVal'";
         $result = query_oop($sql); 
         if (count($result)>0){
            echo 'true'; 
        }
        else{
            echo 'false';
        }
    }
?>