<?php
    include 'DBHelper.php';
    // $page = isset($_GET['page']) ? $_GET['page'] : '';
    $sql = "select distinct brand from product";
    //  if($page && $pageitems){
    //      $no=($page-1)*10;
    //     $sql .= " limit $no,$pageitems";
    // }
    //     $sql .= ";select found_rows() as colsCount;";     
    $result =query_oop($sql);
     echo json_encode($result, JSON_UNESCAPED_UNICODE);
       
?>