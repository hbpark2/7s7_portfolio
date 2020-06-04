<?
    $connect=mysql_connect( "localhost", "hbpark2", "vksek1324@@") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("hbpark2",$connect);
?>
