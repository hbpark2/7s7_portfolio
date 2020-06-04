<?
   function latest_article($table, $loop, $char_limit) 
   {    
		include "../lib/dbconn.php";
     
      
       

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];  //9
			 $len_subject = mb_strlen($row[subject], 'utf-8');
			$subject = $row[subject];

			if ($len_subject > $char_limit)
			{
				 $subject = str_replace( "&#039;", "'", $subject);               
               $subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}

			$regist_day = substr($row[regist_day], 0, 10);

            
            if($table=='board'){
               
                if($row[file_copied_0]){
                 $concertimg='./board/data/'.$row[file_copied_0];
                }else{
                 $concertimg= './board/data/default.jpg';
                }
            }
            
            
            
           if($table=='greet'){ 
            
			echo "      
				<div class='col1'><a href='./$table/view.php?table=$table&num=$num'>$subject</a></div> <div class='col2'>$regist_day</div>
				<div class='clear'></div>
			";
               
           }else if($table=='board'){
             
             echo "  
                <ul>
                    <li>
                        <a href='./$table/view.php?table=$table&num=$num'>
                            <img src='$concertimg' alt='' width='50' height='50'><span>$subject</span>
                        </a>
                    </li> 
                    <li>$regist_day</li>
                </ul>
			";  
               
           }
               
               
		}
		mysql_close();
   }
?>