<?php
    header("Content-type: text/html; charset=utf-8");
    include 'DBHelper.php';
    $table="store";
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $pageitems = isset($_GET['pageitems']) ? $_GET['pageitems'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : "";
    $content = isset($_GET['content']) ? $_GET['content'] : "";
    $array = isset($_GET['array']) ? $_GET['array'] : "";
    $type = isset($_GET['type']) ? $_GET['type'] : "";

    if($type){
        $sql = "select distinct $type from $table"; 
        $result =query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    else{
         $sql = "select SQL_CALC_FOUND_ROWS goodsId,goodsName,goodsCategory,supplier,inventory,Units,purchasCost from $table where inventory<50";
        if($status == "search"){
            $sql .= " and (goodsName like '%$content%' or goodsCategory like '%$content%' or supplier like '%$content%' or inventory like '%$content%')";
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