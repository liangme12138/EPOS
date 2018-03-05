<?php
    include 'DBHelper.php';
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $pageitems = isset($_GET['pageitems']) ? $_GET['pageitems'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : "";
    $state = isset($_GET['state']) ? $_GET['state'] : "";
    $content = isset($_GET['content']) ? $_GET['content'] : "";
    $array = isset($_GET['array']) ? $_GET['array'] : "";
    $data = isset($_GET['data']) ? $_GET['data'] : "";

    if($status == "del"){
        $array = explode(",", $array);
        for($i=0;$i<count($array);$i++){
            $sql = "DELETE FROM product WHERE goodId in('$array[$i]')";
            $result = excute_oop($sql);
        }
        if($result){
            $sql = "select SQL_CALC_FOUND_ROWS * from product";
            if($state == "search"){
                $sql .= " where goodName like '%$content%' or brand like '%$content%' or `describe` like '%$content%' or size like '%$content%'";
            }
            if($page && $pageitems){
                $no=($page-1)*$pageitems;
                $sql .= " limit $no,$pageitems";
            }
            $sql .= ";select found_rows() as colsCount;";     
            $result = multi_query_oop($sql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
        
    }else if($status == "update"){
        $arr1 = array();
        // $arr2 = array();

        $data = object2array(json_decode($data));
        foreach ($data as $key => $value) {
            if($key == "describe"){
                array_push($arr1,"`".$key."`='". $value."' ,");
            }else{
                array_push($arr1,$key."='". $value."' ,");
            }
            # code...
        }
        $strings = substr(implode(" ",$arr1),0,-1);
        $sql = "UPDATE product SET $strings WHERE goodId = $data[goodId]";
        $result = excute_oop($sql);
        if($result){
            $sql = "select SQL_CALC_FOUND_ROWS * from product";
            if($state == "search"){
                $sql .= " where goodName like '%$content%' or brand like '%$content%' or `describe` like '%$content%' or size like '%$content%'";
            }
            if($page && $pageitems){
                $no=($page-1)*$pageitems;
                $sql .= " limit $no,$pageitems";
            }
            $sql .= ";select found_rows() as colsCount;";     
            $result = multi_query_oop($sql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
        
        // var_dump($sql);
    }else if($status == "add"){
        $arr1 = array();
        $arr2 = array();
        $data = object2array(json_decode($data));
        foreach ($data as $key => $value) {
            if($key == "describe"){
                array_push($arr1,"`".$key."` ,");
                array_push($arr2,"'".$value."' ,");
            }else{
                array_push($arr1,$key." ,");
                array_push($arr2,"'".$value."' ,");
            }
            # code...
        }
        $strings1 = substr(implode(" ",$arr1),0,-2);
        $strings2 = substr(implode(" ",$arr2),0,-2);
        
        $sql = "INSERT INTO product ($strings1) VALUES ($strings2)";
        $result = excute_oop($sql);
        if($result){
            $sql = "select SQL_CALC_FOUND_ROWS * from product";
            if($state == "search"){
                $sql .= " where goodName like '%$content%' or brand like '%$content%' or `describe` like '%$content%' or size like '%$content%'";
            }
            if($page && $pageitems){
                $no=($page-1)*$pageitems;
                $sql .= " limit $no,$pageitems";
            }
            $sql .= ";select found_rows() as colsCount;";     
            $result = multi_query_oop($sql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo "fail";
        }
    }else{
        $sql = "select SQL_CALC_FOUND_ROWS * from product";
        if($status == "search"){
            $sql .= " where goodName like '%$content%' or brand like '%$content%' or `describe` like '%$content%' or size like '%$content%'";
        }
        if($page && $pageitems){
            $no=($page-1)*$pageitems;
            $sql .= " limit $no,$pageitems";
        }
        $sql .= ";select found_rows() as colsCount;";     
        $result = multi_query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    function object2array($object) {
        if (is_object($object)) {
            foreach ($object as $key => $value) {
            $array[$key] = $value;
            }
        }
        else {
            $array = $object;
        }
        return $array;
    }
?>