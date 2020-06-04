$(function(){
	//Featured Slide
	var featuredSwiper = $('.featured').swiper({
		slidesPerView:'auto',
		centeredSlides: true,
		initialSlide:7,
		tdFlow: {
			rotate : 30,
			stretch :10,
			depth: 150
		}
	})
	
	//Thumbs
	$('.thumbs-container').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:0,
			offsetPxAfter:10,
			calculateHeight: true
		})
	})

	//Banners
	$('.banners-container').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:0,
			offsetPxAfter:10
		})	
	})
})
