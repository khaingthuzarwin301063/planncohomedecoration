$(document).ready(function(){

	// Start Back to Top

	 // End Back to Top
	 $(".btn-backtotops").hide();
	 $(window).scroll(function(){
			let getScrolltop = $(this).scrollTop();
			// console.log(getScrolltop);

			if(getScrolltop >= 370){
				 $(".btn-backtotops").fadeIn();
			}else{
				 $(".btn-backtotops").fadeOut();
			}
		});

	// Start Header
		// Start nav

		$(".navbuttons").click(function(){
			$(".navbuttons").toggleClass("crossxs");
		});
		
		// for nav

		$(window).scroll(function(){
			let getScrolltop =$(this).scrollTop();

			// console.log(getScrolltop);

			if(getScrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

		// End nav

	// End Header

// .....................................................................................
	// Start Properties

	$(".propertylists").click(function(){

		// for activeitems

		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");

		$(this).addClass("activeitems").siblings().removeClass("activeitems");

		// for filter

		var getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue);

		if(getattvalue === "all"){

			$(".filters").show(500);

		}else{

			$(".filters").hide();

			$(".filters").not("." + getattvalue).hide(500);

			$(".filters").filter("." + getattvalue).show(500)

		};

	});

	// lightbox.option({
	// 	showImageNmberLabel:false
	// });

	// End Properties

// ............................................................................
	// Start Adv Section

	$(window).scroll(function(){

		let getScrolltop= $(this).scrollTop();

		if(getScrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		};


	});

	// End Adv Section

// ................................................................................

	const getyear = $("#getyear");
	const getfullyear= new Date().getUTCFullYear();

	getyear.text(getfullyear);
 



});