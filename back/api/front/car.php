<?php
    include 'DBHelper.php';
    $state = isset($_POST['state']) ? $_POST['state'] : '';
    $foodId = isset($_POST['foodId']) ? $_POST['foodId'] : '';
    
    $userPhone = isset($_POST['userPhone']) ? $_POST['userPhone'] : '';
    if($state == 'addQty'){
        // $sql = "UPDATE car set count = count+1  WHERE userphone = '$userPhone' and foodsId = '$foodId'";
        // $result = excute_oop($sql);
        // if($result){
        //     echo '"seccese"';
        // }else{
        //     echo '"fail"';
        // }
        $sql ="";
        $sql = "select * from car where userphone='$userPhone' and foodId ='$foodId'";
        $result = query_oop($sql);
      // echo count($result);

      // var_dump($result);

        if(count($result)>0){
            $sql = "UPDATE car set count = count+1  WHERE userphone = '$userPhone' and foodId = '$foodId'";
            $result = excute_oop($sql);
            if($result){
                echo '"seccese"';
            }else{
                echo '"fail"';
            }
        }else{
            $sql = "insert into car(userphone,foodId) values ('$userPhone','$foodId')";
            $result = excute_oop($sql);
            if($result){
                echo '"seccese"';
            }else{
                echo '"fail"';
            }
        }
    } else if( $state == 'getCar'){
        $sql = "select * from car,foods where userphone='$userPhone' and car.foodId = foods.foodId";
        // $sql.=";select FOUND_ROWS() as row;";
        // $result=multi_query_oop($sql);
        $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($state == 'subQty'){
        $sql = "UPDATE car set count = count-1  WHERE userphone = '$userPhone' and foodId = '$foodId'";
        $result = excute_oop($sql);
        if($result){
            echo '"seccese"';
        }else{
            echo '"fail"';
        }
    } else if($state == 'delCarItem'){
        $sql = "delete from car where userPhone = '$userPhone' and foodId ='$foodId'";
        $result = excute_oop($sql);
        if($result){
            echo '"seccese"';
        }else{
            echo '"fail"';
        }
    } else if ( $state == 'emptyCart') {
      $sql = "delete from car where userPhone = '$userPhone'";
      $result = excute_oop($sql);
      if($result){
        echo '"seccese"';
      }else{
        echo '"fail"';
      }
    } 
?>