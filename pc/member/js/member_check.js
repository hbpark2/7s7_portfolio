$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.check_agree').on('click',check_agree);
    
    function check_agree(e){
        var checkboxLength=$('input[type="checkbox"]').length;
			            // 체크박스의 총개수  5
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체그박스 5개
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
            e.preventDefault();
        }else{
            location.href="member_form.php";   //회원가입 폼 입력 페이지로 이동
        }
    }
    
    
    //모두 체크하기
    $('.allcheck').toggle(function(e){
       e.preventDefault();
       $('input[type="checkbox"]').attr('checked',true);
       $(this).text("모두 해제하기");    
     },function(e){
       e.preventDefault();
    $('input[type="checkbox"]').attr('checked',false);
        $(this).text("모두 동의하기"); 
 });


    
   });


function join_cancel(){
   history.go(-1);
}

















