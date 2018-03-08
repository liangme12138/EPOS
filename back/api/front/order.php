<?php
    include 'DBHelper.php';
    $state = isset($_POST['state']) ? $_POST['state'] : '';
    $userPhone = isset($_POST['userPhone']) ? $_POST['userPhone'] : '';
    $orderId = isset($_POST['orderId']) ? $_POST['orderId'] : '';
    $foodsId = isset($_POST['foodsId']) ? $_POST['foodsId'] : '';
    $counts = isset($_POST['counts']) ? $_POST['counts'] : '';

    if( $state == 'getOrder'){
        $sql = "SELECT * from `order`,orderfoods,foods WHERE `order`.userPhone = '$userPhone' and `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId";
        $sql.=";SELECT * from `order` WHERE userPhone = '$userPhone' ORDER BY `status` ASC;";
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
    } else if($state == "addOrder"){
        $sql = "insert into `order`(orderId,userPhone,status)values('$orderId','$userPhone','0')";

        $foodsId = explode(',',$foodsId);
        $counts = explode(',',$counts);

        for($i=0;$i < count($foodsId);$i++){
            $sql.=";insert into orderfoods(orderId,foodId,count)values('$orderId','$foodsId[$i]','$counts[$i]')";
           
        }
        //  echo $sql;
        $result = multi_query_oop($sql);
        // $result = excute_oop($sql);
        $endRes = '"fail"';
            foreach ($result as $key => $value) {  
                if(count($value) == 0){
                    $endRes = '"ok"';
                }
            }  
        echo $endRes;
    } else if ($state == 'updateOrderStatus'){
        $sql = "UPDATE `order` set `status` = '1'  WHERE userphone = '$userPhone' and orderId = '$orderId';";
        // $result=multi_query_oop($sql);
        // $result = query_oop($sql);
        $result = excute_oop($sql);
        if($result){
            $sql = "SELECT * from `order`,orderfoods,foods WHERE `order`.userPhone = '$userPhone' and `order`.orderId= '$orderId' and `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId;";
            $result=multi_query_oop($sql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
       
    }  else if ($state == 'delOrder'){
        $sql = "delete from orderfoods where orderId = '$orderId'";
        $sql.=";delete from `order` where userPhone = '$userPhone' and orderId = '$orderId';";
        $result=multi_query_oop($sql);
        $endRes = '"fail"';
            foreach ($result as $key => $value) {  
                if(count($value) == 0){
                    $endRes = '"ok"';
                }
            }  
        echo $endRes;
    } 
?>