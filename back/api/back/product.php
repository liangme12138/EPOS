<?php
    include 'DBHelper.php';
    $page = isset($_GET['page']) ? $_GET['page'] : '';
    $pageitems = isset($_GET['pageitems']) ? $_GET['pageitems'] : '';
        $sql = "select SQL_CALC_FOUND_ROWS * from product";
     if($page && $pageitems){
         $no=($page-1)*$pageitems;
        $sql .= " limit $no,$pageitems";
    }
        $sql .= ";select found_rows() as colsCount;";     
    $result = multi_query_oop($sql);
     echo json_encode($result, JSON_UNESCAPED_UNICODE);
   
?>