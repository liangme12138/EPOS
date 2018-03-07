<?php
    include 'DBHelper.php';
    $state = isset($_GET['state']) ? $_GET['state'] : '';
    $menuID = isset($_GET['menuID']) ? $_GET['menuID'] : '';
    if($state == 'getMenus'){
      $sql = "SELECT * from category";
      $result = query_oop($sql);
      echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($state == 'getMenusId'){
        $sql = "SELECT * from foods WHERE Category = '$menuID'";
        $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if ($state == 'getMenusHot'){
        $sql = "SELECT * from foods";
        $result = query_oop($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
?>