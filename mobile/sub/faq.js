// JavaScript Document

 $(document).ready(function () {
	var article = $('.faq .article');
	article.find('.a').slideUp(100);
	
	$('.faq .article .trigger').click(function(){  
	var myArticle = $(this).parents('.article'); 
	
	if(myArticle.hasClass('hide')){   
	    article.find('.a').slideUp(100);
		article.removeClass('show').addClass('hide'); 
	    myArticle.removeClass('hide').addClass('show');  
	    myArticle.find('.a').slideDown(100);  
	 } else {  
	   myArticle.removeClass('show').addClass('hide');  
	   myArticle.find('.a').slideUp(100);  
	}  
  });    
	
	$('.all').toggle(function(){ 
	    article.find('.a').slideDown(100);
	    article.removeClass('hide').addClass('show');
	},function(){ 
	    article.find('.a').slideUp(100);
	    article.removeClass('show').addClass('hide');
	});
	
});  