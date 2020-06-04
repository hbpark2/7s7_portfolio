<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../sub/common/css/common.css">
    <link rel="stylesheet" href="css/member_form.css">


    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../nav_js.js"></script>
    <script>
        function check_id() {
            window.open("check_id.php?id=" + document.member_form.id.value,
                "IDcheck",
                "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
        }

        function check_nick() {
            window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
                "NICKcheck",
                "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
        }

        function check_input() {
            if (!document.member_form.pass.value) {
                alert("비밀번호를 입력하세요");
                document.member_form.pass.focus();
                return;
            }

            if (!document.member_form.pass_confirm.value) {
                alert("비밀번호확인을 입력하세요");
                document.member_form.pass_confirm.focus();
                return;
            }

            if (!document.member_form.name.value) {
                alert("이름을 입력하세요");
                document.member_form.name.focus();
                return;
            }

            if (!document.member_form.nick.value) {
                alert("닉네임을 입력하세요");
                document.member_form.nick.focus();
                return;
            }

            if (!document.member_form.hp2.value || !document.member_form.hp3.value) {
                alert("휴대폰 번호를 입력하세요");
                document.member_form.nick.focus();
                return;
            }

            if (document.member_form.pass.value !=
                document.member_form.pass_confirm.value) {
                alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }

            document.member_form.submit();
        }

        function reset_form() {
            document.member_form.id.value = "";
            document.member_form.pass.value = "";
            document.member_form.pass_confirm.value = "";
            document.member_form.name.value = "";
            document.member_form.nick.value = "";
            document.member_form.hp1.value = "010";
            document.member_form.hp2.value = "";
            document.member_form.hp3.value = "";
            document.member_form.email1.value = "";
            document.member_form.email2.value = "";

            document.member_form.id.focus();

            return;
        }

    </script>
</head>
<?
    //$userid='aaa';
    
    include "../../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level]

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>

<body>
    <div id="skipNav">
        <a href="#content">본문 바로가기</a>
        <a href="#gnb">글로벌네비게이션 바로가기</a>
    </div>
    <div class="wrapper">
        <? include "loginheader.html" ?>

        <div class="header_back"></div>
        <article id="content">

            <h2 class="tit">Flowermood 회원정보 수정</h2>
<!--

            <div id="col2">
                <form name="member_form" method="post" action="modify.php">

                    <div id="form_join">
                        <ul id="join1">
                            <li>* 아이디</li>
                            <li>* 비밀번호</li>
                            <li>* 비밀번호 확인</li>
                            <li>* 이름</li>
                            <li>* 닉네임</li>
                            <li>* 휴대폰</li>
                            <li>&nbsp;&nbsp;&nbsp;이메일</li>
                        </ul>

                        <ul id="join2">
                            <li><?= $row[id] ?></li>
                            <li><input type="password" name="pass" value=""></li>
                            <li><input type="password" name="pass_confirm" value=""></li>
                            <li><input type="text" name="name" value="<?= $row[name] ?>"></li>
                            <li>
                                <div id="nick1"><input type="text" name="nick" value="<?= $row[nick] ?>"></div>
                                <div id="nick2"><a href="#"><img src="../img/check_id.gif" onclick="check_nick()"></a></div>
                            </li>
                            <li><input type="text" class="hp" name="hp1" value="<?= $hp1 ?>">
                                - <input type="text" class="hp" name="hp2" value="<?= $hp2 ?>"> - <input type="text" class="hp" name="hp3" value="<?= $hp3 ?>"></li>
                            <li><input type="text" id="email1" name="email1" value="<?= $email1 ?>"> @ <input type="text" name="email2" value="<?= $email2 ?>"></li>
                        </ul>

                        <div id="must"> * 는 필수 입력항목입니다.^^</div>
                    </div>

                    <div id="button">
                        <a href="#" onclick="check_input()">가입하기</a>
                        <a href="#" onclick="reset_form()">가입취소</a>
                    </div>
                </form>
            </div>
-->

           <form name="member_form" method="post" action="modify.php">
            <table>
                <caption class="hidden">회원가입</caption>
                <tr>
                    <th scope="col"><label for="id">아이디</label></th>
                    <td>

                        <input type="text" name="id" id="id" value="<?= $row[id] ?>" readonly>

                    </td>
                </tr>
                <tr>
                    <th scope="col"><label for="pass">비밀번호</label></th>
                    <td>
                        <input type="password" name="pass" id="pass" required>
                    </td>
                </tr>
                <tr>
                    <th scope="col"><label for="pass_confirm">비밀번호확인</label></th>
                    <td>
                        <input type="password" name="pass_confirm" id="pass_confirm" required>
                    </td>
                </tr>
                <tr>
                    <th scope="col"><label for="name">이름</label></th>
                    <td>
                        <input type="text" name="name" value="<?= $row[name] ?>">
                    </td>
                </tr>
                <tr>
                    <th scope="col"><label for="nick">닉네임</label></th>
                    <td>
                        <input type="text" name="nick" value="<?= $row[nick] ?>">

                    </td>
                </tr>
                <tr>
                    <th scope="col">휴대폰</th>
                    <td>
                        <input type="text" class="hp" name="hp1" value="<?= $hp1 ?>">
                        - <input type="text" class="hp" name="hp2" value="<?= $hp2 ?>"> - <input type="text" class="hp" name="hp3" value="<?= $hp3 ?>">

                    </td>
                </tr>
                <tr>
                    <th scope="col">이메일</th>
                    <td>
                        <input type="text" id="email1" name="email1" value="<?= $email1 ?>"> @ <input type="text" name="email2" value="<?= $email2 ?>">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <a href="#" onclick="check_input()">가입하기</a>
                        <a href="#" onclick="reset_form()">가입취소</a>
                    </td>
                </tr>
            </table>
            </form>




        </article>
        
                 <? include "../member/data/footer.html" ?>

    </div>

</body>

</html>
