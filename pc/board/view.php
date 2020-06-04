<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
            //GetImageSize(서버에 업로드된 파일 경로 파일명)
              // => 파일의 너비와 높이값, 종류
			$image_width[$i] = $imageinfo[0];  //파일너비
			$image_height[$i] = $imageinfo[1]; //파일높이
			$image_type[$i]  = $imageinfo[2];  //파일종류

        if ($image_width[$i] > 785)
				$image_width[$i] = 785;
		}
		else
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta charset="utf-8">
    <link href="css/board.css" rel="stylesheet" media="all">

    <script>
        function del(href) {
            if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
            }
        }

    </script>
    <script src="../nav_js.js"></script>
</head>

<body>
    <div id="wrap">

        <? include "../sub/common/data/header.html" ?>
        <div class="header_back"></div>

        <div id="content">

            <div id="col2">

                <div class="view_title">
                    <div class="tit"><?= $item_subject ?></div>
                    <div class="sub_tit"><?= $item_nick ?> | 조회 : <?= $item_hit ?>
                        | <?= $item_date ?> </div>
                </div>

                <div class="view_content">
                    <?
	for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
	{
		if ($image_copied[$i])
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name; 
             // ./data/2019_03_22_10_07_15_0.jpg
			$img_width = $image_width[$i];
			
			echo "<img src='$img_name' width='$img_width'>"."<br><br>";
		}
	}
?>
                <p>    <?= $item_content ?>    </p>
                </div>

                <div id="button">
                    <a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
                    <? 
	if($userid==$item_id || $userid="admin" || $userlevel==1 )
	{
?>
                    <a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정하기</a>&nbsp;
                    <a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제하기</a>&nbsp;
                    <?
	}
?>
                    <? 
	if($userid)
	{
?>
                    <a href="write_form.php?table=<?=$table?>">새글쓰기</a>
                    <?
	}
?>
                </div>


            </div> <!-- end of col2 -->
        </div> <!-- end of content -->
    <? include "../member/data/footer.html" ?>

    </div> <!-- end of wrap -->

</body>

</html>
