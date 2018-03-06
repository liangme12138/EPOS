<?php
    include 'DBHelper.php';
    $userName = isset($_GET['userName']) ? $_GET['userName'] : "";
    $password = isset($_GET['password']) ? $_GET['password'] : "";

    $sql = "select * from admin where userName = '$userName' and password = '$password'";

    $result = query_oop($sql);
    
    // 输出结果
    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo 'false';
    }
    // 关闭连接
    // $conn->close();

?>