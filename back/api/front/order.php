<?php
    include 'DBHelper.php';
    $state = isset($_POST['state']) ? $_POST['state'] : '';
    $userPhone = isset($_POST['userPhone']) ? $_POST['userPhone'] : '';
    if( $state == 'getOrder'){
        $sql = "SELECT * from `order`,orderfoods,foods WHERE `order`.userPhone = '$userPhone' and `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId";
        $sql.=";SELECT * from `order` WHERE userPhone = '$userPhone';";
        $result=multi_query_oop($sql);
        // $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($state == 'status1'){
        $sql = "SELECT * from `order`,orderfoods,foods WHERE `order`.userPhone = '$userPhone' and `order`.`status` = '0' and `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId";
        $sql.=";SELECT * from `order` WHERE userPhone = '$userPhone' and `status` = '0';";
        $result=multi_query_oop($sql);
        // $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if ($state == 'status2'){
        $sql = "SELECT * from `order`,orderfoods,foods WHERE `order`.userPhone = '$userPhone' and `order`.`status` = '1' and `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId";
        $sql.=";SELECT * from `order` WHERE userPhone = '$userPhone' and `status` = '1';";
        $result=multi_query_oop($sql);
        // $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
?>