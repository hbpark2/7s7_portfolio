<? session_start(); ?>

<meta charset="utf-8">
<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글삽입  $table , 폼입력값 , 세션변수


	if(!$userid) {
		echo("
		<script>
	     window.alert('로그인 후 이용해 주세요.')
	     history.go(-1)
	   </script>
		");
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
		/*   단일 파일 업로드 
		$upfile_name	 = $_FILES["upfile"]["name"];
		$upfile_tmp_name = $_FILES["upfile"]["tmp_name"];
		$upfile_type     = $_FILES["upfile"]["type"];
		$upfile_size     = $_FILES["upfile"]["size"];
		$upfile_error    = $_FILES["upfile"]["error"];
		*/

         
    //$_FILES["upfile"]["name"][0];
    //$_FILES["upfile"]["name"][1];
    //$_FILES["upfile"]["name"][2];

	// 다중 파일 업로드
	$files = $_FILES["upfile"];
     //$files[0] , $files[1], $files[2]
	$count = count($files["name"]); //업로드된 파일개수 3
			
	$upload_dir = './data/';  //업로드될 서버 저장경로

	for ($i=0; $i<$count; $i++)
	{
		$upfile_name[$i]     = $files["name"][0];  //a1.jpg
		$upfile_tmp_name[$i] = $files["tmp_name"][$i];
		$upfile_type[$i]     = $files["type"][$i]; 
		$upfile_size[$i]     = $files["size"][$i];
		$upfile_error[$i]    = $files["error"][$i];
      
		$file = explode(".", $upfile_name[$i]); // a1.jpg
		$file_name = $file[0];  //a1
		$file_ext  = $file[1];  //jpg

		if (!$upfile_error[$i]) //에러가 발생되지 않으면
		{
			$new_file_name = date("Y_m_d_H_i_s");
                   // 2019_03_22_10_07_15
			$new_file_name = $new_file_name."_".$i;
                 // 2019_03_22_10_07_15_0
			$copied_file_name[$i] =    $new_file_name.".".$file_ext;  
               // 2019_03_22_10_07_15_0.jpg
			$uploaded_file[$i] =    $upload_dir.$copied_file_name[$i];
               // ./data/2019_03_22_10_07_15_0.jpg

			if( $upfile_size[$i]  > 500000 ) {
				echo("
				<script>
				alert('업로드 파일 크기가 지정된 용량(500KB)을 초과합니다!<br>파일 크기를 체크해주세요! ');
				history.go(-1)
				</script>
				");
				exit;
			}

			if ( ($upfile_type[$i] != "image/gif") &&
				($upfile_type[$i] != "image/jpeg") &&
				($upfile_type[$i] != "image/pjpeg") )
			{
				echo("
					<script>
						alert('JPG와 GIF 이미지 파일만 업로드 가능합니다!');
						history.go(-1)
					</script>
					");
				exit;
			}

			if (!move_uploaded_file($upfile_tmp_name[$i], $uploaded_file[$i]) )
                
            // move_uploaded_file(임시저장파일명,실제저장할 서버경로 파일명 )    => 파일 업로드
            //파일을 업로드하고 업로그 처리가 안되었을때 메시    
			{
				echo("
					<script>
					alert('파일을 지정한 디렉토리에 복사하는데 실패했습니다.');
					history.go(-1)
					</script>
				");
				exit;
			}
		}
	}

	include "../../lib/dbconn.php";       // dconn.php 파일을 불러옴

	if ($mode=="modify")
	{
		$num_checked = count($_POST['del_file']);
		$position = $_POST['del_file'];

		for($i=0; $i<$num_checked; $i++)                      // delete checked item
		{
			$index = $position[$i];
			$del_ok[$index] = "y";
		}

		$sql = "select * from $table where num=$num";   // get target record
		$result = mysql_query($sql);
		$row = mysql_fetch_array($result);

		for ($i=0; $i<$count; $i++)					// update DB with the value of file input box
		{

			$field_org_name = "file_name_".$i;
			$field_real_name = "file_copied_".$i;

			$org_name_value = $upfile_name[$i];
			$org_real_value = $copied_file_name[$i];
			if ($del_ok[$i] == "y")
			{
				$delete_field = "file_copied_".$i;
				$delete_name = $row[$delete_field];
				
				$delete_path = "./data/".$delete_name;

				unlink($delete_path);

				$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
				mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
			}
			else
			{
				if (!$upfile_error[$i])
				{
					$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
					mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행					
				}
			}

		}
		
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
		
		$sql = "update $table set subject='$subject', content='$content' where num=$num";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}
	else
	{
		if ($html_ok=="y")
		{
			$is_html = "y";
		}
		else
		{
			$is_html = "";
		}
		
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);

		$sql = "insert into $table (id, name, nick, subject, content, regist_day, hit, is_html, ";
		$sql .= " file_name_0, file_name_1, file_name_2, file_copied_0,  file_copied_1, file_copied_2) ";
		$sql .= "values('$userid', '$username', '$usernick', '$subject', '$content', '$regist_day', 0, '$is_html', ";
		$sql .= "'$upfile_name[0]', '$upfile_name[1]',  '$upfile_name[2]', '$copied_file_name[0]', '$copied_file_name[1]','$copied_file_name[2]')";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}

	mysql_close();                // DB 연결 끊기

	echo "
	   <script>
	    location.href = 'list.php?table=$table&page=$page';
	   </script>
	";
?>

  
