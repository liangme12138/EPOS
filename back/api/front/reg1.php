<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $telVal = isset($_GET['telVal']) ? $_GET['telVal'] : '';
    $pwdVal = isset($_GET['pwdVal']) ? $_GET['pwdVal'] : '';
    // if($telVal){
    //     $sql="select * from user where tel='$telVal'";
    //     $result = query_oop($sql);
    //     echo json_encode($result, JSON_UNESCAPED_UNICODE);
    //     if($result){
    //         $sql = "select * from user where tel='$telVal' and password='$pwdVal'";
    //         $res = query_oop($sql);
    //         if($res){
    //             echo 'loginsuccess';
    //         } else {
    //             echo 'loginfail';
    //         }
    //     } else {
    //         echo 'fail';
    //     }
    // }
    // if($telVal&&$pwdVal){
    //     $sql="select * from user where tel='$telVal' and password='$pwdVal'";
    //     $result = query_oop($sql); 
    //     echo json_encode($result, JSON_UNESCAPED_UNICODE); 
    // }

    // if($telVal){
    //     $sql="select * from user where tel='$telVal'";
    //      $result = query_oop($sql); 
    //      if (!empty($result)){
    //         echo 'true'; 
    //     }
    //     else{
    //         echo 'false';
    //     }
    // }else if($pwdVal) {
    //     $sql="select * from user where tel='$pwdVal'";
    //     $result = query_oop($sql); 
    //      if (!empty($result)){
    //         echo 'yes'; 
    //     }
    //     else{
    //         echo 'no';
    //     }     
    // }
    if($telVal && $pwdVal){
        $sql="select * from user where tel='$telVal'";
         $result = query_oop($sql); 
         if (count($result)>0){
            echo '"已存在"'; 
        }
        else{
           $sql="insert into user(tel,password) values('$telVal','$pwdVal')";
            $result = excute_oop($sql);
            // echo json_encode($result, JSON_UNESCAPED_UNICODE);
            if($result){
                echo '"regOk"';
            }else{
                echo '"regFail"';
            }
        }
        
    }
?>