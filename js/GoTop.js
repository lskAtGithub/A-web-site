_GoTop = (function(){

	function goTop(ct){
		this.ct = $(ct)
		this.clock
		this.bind()
	}

	goTop.prototype = {
		bind:function(){

			$(window).on("scroll",function(){

				var scrollTop = $(window).scrollTop()
				if(this.clock){
					clearTimeout(this.clock)
				}
				this.clock = setTimeout(function(){
					if(scrollTop>500){
						$(".goTopSet").addClass("SetActive")
					}
					if(scrollTop<500){
						$(".goTopSet").removeClass("SetActive")
					}

				},300)
			})

			$(".goTopSet").on("click",function(){
				$('bodu,html')
				.animate({ 
					scrollTop: 0
				}, 1000);

			})

		}
	}

	return{
		init:function($ct){
			new goTop($ct)

		}
	}


})()

_GoTop.init($(".goTopSet"))
