<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 =>  $table


	include "../../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta charset="utf-8">
    <link href="css/board.css" rel="stylesheet" media="all">

    <script>
        function check_input() {
            if (!document.board_form.subject.value) {
                alert("제목을 입력하세요!");
                document.board_form.subject.focus();
                return;
            }

            if (!document.board_form.content.value) {
                alert("내용을 입력하세요!");
                document.board_form.content.focus();
                return;
            }
            document.board_form.submit();
        }

    </script>
</head>

<body>
    <div id="wrap">

        <? include "../sub/common/data/header.html" ?>
        <div class="header_back"></div>

        <div id="content">
            <h3 class="tit">BOARD </h3>
            <div id="col2">

                <span class="sub_tit">글쓰기</span>

                <?
	if($mode=="modify")
	{

?>
                <form name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data">
                    <?
	}
	else
	{
?>
                    <form name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data">
                        <?
	}
?>
                        <div id="write_form">
                            <div class="write_line"></div>
                            <ul id="write_row1">

                                <li class="col1"> 별명 </li>
                                <li class="col2"><?=$usernick?></li>
                                <?
	if( $userid && ($mode != "modify") )
	{   //새글쓰기 에서만 HTML 쓰기가 보인다
?>
                                <li class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</li>
                                <?
	}
?>
                            </ul>



                            <div class="write_line"></div>
                            
                            <ul id="write_row2">
                                <li class="col1"> 제목 </li>
                                <li class="col2"><input type="text" name="subject" value="<?=$item_subject?>">
                                </li>
                            </ul>
                            
                            
                            <div class="write_line"></div>
                            
                            <ul id="write_row3">
                                <li class="col1"> 내용 </li>
                                <li class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></li>
                            </ul>
                            
                            <div class="write_line"></div>
                            
                            <ul id="write_row4">
                                <li class="col1"> 이미지파일1 </li>
                                <li class="col2"><input type="file" name="upfile[]"></li>
                            </ul>
                            
                            <? 	if ($mode=="modify" && $item_file_0)
	{
?>
                            <div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="0"> 삭제</div>
                            <?
	}
?>
                            <div class="write_line"></div>
                            
                            <ul id="write_row5">
                                <li class="col1"> 이미지파일2 </li>
                                <li class="col2"><input type="file" name="upfile[]"></li>
                            </ul>
                            <? 	if ($mode=="modify" && $item_file_1)
	{
?>
                            <div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="1"> 삭제</div>
                            <?
	}
?>
                            <div class="write_line"></div>
                            
                            <ul id="write_row6">
                                <li class="col1"> 이미지파일3 </li>
                                <li class="col2"><input type="file" name="upfile[]"></li>
                            </ul>
                            <? 	if ($mode=="modify" && $item_file_2)
	{
?>
                            <div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="2"> 삭제</div>
                            <?
	}
?>
                            <div class="write_line"></div>

                        </div>

                        <ul id="button">
                           <a href="#" onclick="check_input()">새글쓰기</a>
                            <a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
                        </ul>

                </form>
            </div> <!-- end of col2 -->

        </div> <!-- end of content -->
                                    <? include "../member/data/footer.html" ?>

    </div> <!-- end of wrap -->

</body>

</html>
