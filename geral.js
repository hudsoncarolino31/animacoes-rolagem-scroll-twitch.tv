(function(){
	
	//ADDEVENTLISTNER SCROLL	
	$(window).scroll(function(){

		if($(window).scrollTop() > 200){

			//QUERYSELECTIOR ALL / FOREATCH  OU FOR
			$(".blocos li").each(function(){
    
    			//ELEMENT  OU ARRAYLIS[I]
			   let li = $(this)


			    if(visivel(li)){

			    	//ELEMENTO TEM ESSA CLASS
			    	if(li.hasClass('transition-left-x')){
						li.addClass('showLeft')
					}else if(li.hasClass('transition-right-x')){
						li.addClass('showRight')
					}else{
						li.addClass('showCenter')
					}
				}
			    
			})

			$("header").addClass("headerFixed")
		}else{
			$("header").removeClass("headerFixed")
		}
	})

	function visivel(elemento){

		let  tela = $(window);
		let  tela_atual = {
			top  : tela.scrollTop(),
			left : tela.scrollLeft()
		};
		
		tela_atual.right  = tela_atual.left + tela.width()
		tela_atual.bottom = tela_atual.top + tela.height()
		
		let limites = elemento.offset()
	
	    limites.right  = limites.left + elemento.outerWidth()
	    limites.bottom = limites.top  + elemento.outerHeight()
		
	    return (!(tela_atual.right < limites.left || tela_atual.left > limites.right || tela_atual.bottom < limites.top || tela_atual.top > limites.bottom))
	}

	$("#mostrarMenu").click(function() {
		if(!$("#menu").hasClass("menu-open")){
			$("#menu").slideDown()
			$("#menu").addClass("menu-open")
			$(this).addClass("button-open")
		}else{
			$("#menu").removeClass("menu-open")
			$("#menu").slideUp()
			$(this).removeClass("button-open")
		}
	});


	$(document).ready(function(){
	 
	  

	  $(".owl-carousel").owlCarousel({
	  	items:3,
	  	dots:false,
	  	autoplay:false,
	  	smartSpeed:2000,
	  	autoplaySpeed:false,
	  	animateOut:true,
	  	loop:true


	  });

		$('#passar').click(function() {
		    $(".owl-carousel").owlCarousel().trigger('next.owl.carousel');
		})
		$('#voltar').click(function() {
		    $(".owl-carousel").owlCarousel().trigger('prev.owl.carousel');
		})


	});

	













































}());

