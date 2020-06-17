<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	$table = "board";
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <link href="css/board.css" rel="stylesheet" media="all">

</head>
<?
	include "../../lib/dbconn.php";

    
   if (!$scale)
    $scale=10;			// 한 화면에 표시되는 글 수

    
    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>

<body>
    <div id="wrap">

        <? include "boardheader.html" ?>

        <div class="header_back"></div>

        <div id="content">
            <h3 class="tit">BOARD</h3>

            <form class="search_form" name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search">
                <ul id="list_search">
                    <li class="serch_left">▷ 총 <?= $total_record ?> 개의 게시물이 있습니다. </li>
                    <ul class="serch_right">
                        <li id="list_search3">
                            <select name="find">
                                <option value='subject'>제목</option>
                                <option value='content'>내용</option>
                                <option value='nick'>별명</option>
                                <option value='name'>이름</option>
                            </select>
                        </li>
                        <li id="list_search4"><input type="text" name="search"></li>
                        <li id="list_search5"><input type="submit" value="검색"></li>
                    </ul>
                </ul>
            </form>



            <ul class="list_top_title">
                <li id="list_title1">번호</li>
                <li id="list_title2">제목</li>
                <li id="list_title3">글쓴이</li>
                <li id="list_title4">등록일</li>
                <li id="list_title5">조회</li>
            </ul>

            <div id="list_content">
                <?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];
      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  
	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
        
      if($row[file_copied_0]){ 
        $item_img = './data/'.$row[file_copied_0];  
      }else{
        $item_img = './data/default.jpg'  ;
      }
      
?>
                <ul class="list_item">
                    <li id="list_item1"><?= $number ?></li>
                    <li id="list_item2"><a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">

                            <img src="<?=$item_img?>" alt="" width="50" height="50">

                            <?= $item_subject ?></a></li>
                    <li id="list_item3"><?= $item_nick ?></li>
                    <li id="list_item4"><?= $item_date ?></li>
                    <li id="list_item5"><?= $item_hit ?></li>
                </ul>
                <?
   	   $number--;
   }
?>
                <div id="page_button">
                    <div id="page_num"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp;
                        <?
   // 게시판 목록 하단에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			echo "<b> $i </b>";
		}
		else
		{ 
            
          if($mode=="search"){
             echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>"; 
          }else{    
            
			  echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
           }
            
          
		}      
   }
?>
                        &nbsp;&nbsp;&nbsp;&nbsp;다음 ▶
                    </div>

                    <div id="button">
                        <select class="scale_sel" name="scale" onchange="location.href='list.php?scale='+this.value">
                            <option value=''>보기</option>
                            <option value='1'>10</option>
                            <option value='2'>15</option>
                            <option value='3'>20</option>
                            <option value='4'>30</option>
                        </select>
                        <a href="list.php?table=<?=$table?>&page=<?=$page?>"> 목록 </a>&nbsp;
                        <? 
	if($userid)
	{
?>
                        <a href="write_form.php?table=<?=$table?>">글쓰기</a>
                        <?
	}
?>
                    </div>
                </div>
            </div>
            <div class="clear"></div>

        </div> <!-- end of content -->

        <? include "../member/data/footer.html" ?>

    </div> <!-- end of wrap -->
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../nav_js.js"></script>
</body>

</html>
