<?php
    header("Content-type: text/html; charset=utf-8");
    include 'DBHelper.php';
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $pageitems = isset($_GET['pageitems']) ? $_GET['pageitems'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : "";
    $content = isset($_GET['content']) ? $_GET['content'] : "";

    $sql = "select SQL_CALC_FOUND_ROWS  `order`.orderId,`order`.userPhone,`order`.status,foods.foodName,orderfoods.addTime from `order`,orderfoods,foods where `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId";
    if($status == "search"){
        $sql .= " and (`order`.orderId like '%$content%' or `order`.userPhone like '%$content%' or `order`.status like '%$content%' or orderfoods.foodId like '%$content%' or foods.foodName like '%$content%')";
        if($page && $pageitems){
            $no=($page-1)*$pageitems;
            $sql .= " limit $no,$pageitems";
        }
        $sql .= " ;select found_rows() as colsCount;"; 
        $result = multi_query_oop($sql);
        // var_dump($result);
        if($result['data1']){
            $sql1 = "select SQL_CALC_FOUND_ROWS  `order`.orderId,`order`.userPhone,`order`.status,foods.foodName,orderfoods.addTime from `order`,orderfoods,foods where `order`.orderId = orderfoods.orderId and foods.foodId = orderfoods.foodId and (";
            for($i=0;$i<count($result['data1']);$i++){
                $ids = $result['data1'][$i]['orderId'];
                $sql1 .= " `order`.orderId = $ids or";
            }
            $sql1 = substr($sql1,0,-2);
            $sql1 .= " )";
            $time = time();
            $aa = date("y-m-d",$time);
            $sql1 .= " and `order`.addTime like '%$aa%'";
            if($page && $pageitems){
                $no=($page-1)*$pageitems;
                $sql1 .= " limit $no,$pageitems";
            }
            $sql1 .= " ;select found_rows() as colsCount;"; 
            $result1 = multi_query_oop($sql1);
            echo json_encode($result1, JSON_UNESCAPED_UNICODE);
        }else{

            // if($page && $pageitems){
            //     $no=($page-1)*$pageitems;
            //     $sql1 = $sql ." limit $no,$pageitems";
            // }
            // $sql1 .= " ;select found_rows() as colsCount;"; 
            // $result1 = multi_query_oop($sql1);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
    }else{
        $time = time();
        $aa = date("y-m-d",$time);
        $sql .= " and `order`.addTime like '%$aa%'";
        if($page && $pageitems){
            $no=($page-1)*$pageitems;
            $sql .= " limit $no,$pageitems";
        }
        $sql .= ";select found_rows() as colsCount;";   
        
        $result = multi_query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

?>