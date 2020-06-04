<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta charset="utf-8">
    <link href="css/login.css" rel="stylesheet" media="all">
</head>

<body>
    <div class="wrapper">
        <? include "loginheader.html" ?>

        <div class="header_back"></div>

        <div id="content">
            <form name="member_form" method="post" action="login.php">

                <h2 class="hidden">본문컨텐츠영역</h2>
                <div class="login_section">
                    <div class="login_title">
                        <h3 class="tit">MEMBER LOGIN</h3>
                        <p class="sub_tit">가입 시 입력하신 아이디와 비밀번호로 로그인이 가능합니다.</p>
                    </div>

                    <fieldset>
                        <input type="text" name="id" class="login_input" placeholder="  ID">
                        <input type="password" name="pass" class="login_input" placeholder="  PASSWORD">
                        <input type="submit" value="로그인">
                    </fieldset>
                    <div class="login_bottom">
                        <div>
                            <span><a href="#">아이디 찾기</a></span>
                            <span><a href="#">비밀번호 찾기</a></span>
                        </div>
                        <a class="go_join" href="#">회원가입</a>
                        <p>
                            회원가입시 다양하고 특별한
                            혜택이 준비되어 있습니다.
                        </p>


                    </div>
                </div>

            </form>
        </div>
        
                <? include "../member/data/footer.html" ?>

    </div>

</body>

</html>
