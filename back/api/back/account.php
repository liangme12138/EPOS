<?php
    header("Content-type: text/html; charset=utf-8");
    include 'DBHelper.php';
    $table="admin";
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
            $sql = "DELETE FROM $table WHERE userId in('$array[$i]')";
            $result = excute_oop($sql);
        }
        if($result){
            $sql = "select SQL_CALC_FOUND_ROWS * from $table";
            if($state == "search"){
                $sql .= " where userName like '%$content%' or identify like '%$content%'";
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
        $arr2 = array();
        $data = object2array(json_decode($data));
        foreach ($data as $key => $value) {
                array_push($arr1,$key."='". $value."' ,");
                array_push($arr2,$key."='". $value."' and");
            # code...
        }
        $strings = substr(implode(" ",$arr1),0,-2);
        $strings2 = substr(implode(" ",$arr2),0,-3);
        $sql="select * from $table where $strings2";
        $result=query_oop($sql);
        // var_dump($result);
        if($result){
            echo "fail";
        }else{
            $sql = "UPDATE $table SET $strings WHERE userId = $data[userId]";
            $result = excute_oop($sql);
            if($result){
                $sql = "select SQL_CALC_FOUND_ROWS * from $table";
                if($state == "search"){
                    $sql .= " where userName like '%$content%' or identify like '%$content%'";
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
        }
        
        // var_dump($sql);
    }else if($status == "add"){
        // $string="CategoryName";//查询对应某元素的值 
        $datas =json_decode($data);
        // $str=json_decode($data)->$string;
        // $sql1 = "select CategoryId from category where CategoryName='$str'";
        // $result1 =query_oop($sql1);
        // $onlyValue=array2object($result1[0])->CategoryId;
        $arr1 = array();
        $arr2 = array();
        $arr3 = array();
        $data=object2array($datas);
        foreach ($data as $key => $value) {
            array_push($arr1,$key." ,");
            array_push($arr2,"'".$value."' ,");
            array_push($arr3,$key."='". $value."' and");
        }
        $strings1 = substr(implode(" ",$arr1),0,-2);
        $strings2 = substr(implode(" ",$arr2),0,-2);
        $strings3 = substr(implode(" ",$arr3),0,-3);
        $sql="select * from $table where $strings3";
        $result=query_oop($sql);
        // var_dump($result);
        if($result){
            echo "fail";
        }else{
            $sql = "INSERT INTO $table ($strings1) VALUES ($strings2)"; 
            $result = excute_oop($sql);
            if($result){
                $sql = "select SQL_CALC_FOUND_ROWS * from $table";
                if($state == "search"){
                    $sql .= " where userName like '%$content%' or identify like '%$content%'";
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
        }
    }else{
        $sql = "select SQL_CALC_FOUND_ROWS * from $table";
        if($status== "search"){
                $sql .= " where userName like '%$content%' or identify like '%$content%'";
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
    function array2object($array) {
    if (is_array($array)) {
        $obj = new StdClass();
        foreach ($array as $key => $val){
        $obj->$key = $val;
        }
    }
    else { $obj = $array; }
    return $obj;
    }
?>