


(function() {

	'use strict';
	
//=============================================== VARIABLES ===================================================
	var userStopAnimation = false;
	var triggerNavArrowTop = false;
	var triggerNavArrowBottom = false;
	var slidersSectionWorks;
	var endAnimationJob;
	$('#preloader').css({'display': 'block'})
//===============================================  START MESSAGES  ============================================
	function animateDangerMessage() {
		var msg_anime =  document.createElement('p')
		$(msg_anime).html('<span>Презентация анимирована! (1.5 мин)</span></br>Для остановки - кликните меню "гамбургер"')
		$(msg_anime).addClass('start_msg_animate'),
		$('body').append(msg_anime);
		$(msg_anime).animate({'right':0}, 2000);
		setTimeout(function() {
				$(msg_anime).animate({'right':'-100%'}, 2000);
				setTimeout(function() {
						$(msg_anime).remove();
				},2000)
		},10000)
	}
	function animateHelloMessage() {
		$("#hello_msg1").delay(2000).fadeIn(500).delay(2000).fadeOut(500);
		$("#hello_msg2").delay(5000).fadeIn(500).delay(2000).fadeOut(500);
		$("#hello_msg3").delay(8000).fadeIn(500).delay(2000).fadeOut(500);
	}

//===============================================  NAVIGATION  ================================================
	function eventsNavigation() {
		'use strict';
		var nav = $('.items_nav');
		var thisNav;
		var i;
		var nameNav;
		var scroll;
		var thisSection;
		var objNav = {
			'nav_about' : '#section_about',
			'nav_skills' : '#section_skills',
			'nav_works' : '#section_works',
			'nav_job' : '#section_job',
			'nav_contacts' : 'footer'
		};
		for (i = 0; i < nav.length; i++) {
			thisNav = $(nav[i]);
			thisNav.bind('click', function() {
				nameNav = $(this).attr('id');
				thisSection = $(objNav[nameNav]);
				scroll = thisSection.offset().top
				$('body, html')
				.animate({'scrollTop' : scroll }, 500, 'swing')
			})
		}
	}
	function animateStartNavigation() {
		$("nav").animate({'left': 0}, 1900)
			.delay(5000).animate({
				'width': '50px',
				'height' : '50px',
				'top':20,
				'left' : 20,
				'font-size' : '0.1em',
				'opacity' : 0
			}, 2000)
		setTimeout(function() {
			animationNavLine()
		}, 2000)
		setTimeout(function() {
			$('.animNav').css({'opacity':0});
			setTimeout(function() {
				$('.animNav').remove();
			},2000)
		}, 6000)
		$('#nav_about').delay(2000).animate({'left':0},600);
		$('#nav_skills').delay(2400).animate({'left':0},600);
		$('#nav_works').delay(2800).animate({'left':0},600);
		$('#nav_job').delay(3200).animate({'left':0},600);
		$('#nav_contacts').delay(3600).animate({'left':0},600);
		$("nav ul li a").delay(5500).animate({'opacity': 0}, 500);
		$('.hamburger').delay(9000).animate({'opacity':1},200);
		setTimeout(function() {
			$("nav").removeAttr('style')
			$('.hamburger').removeClass({'opacity':1},500);
			$('#nav_about').removeAttr('style')
			$('#nav_works').removeAttr('style')
			$('#nav_skills').removeAttr('style')
			$('#nav_job').removeAttr('style')
			$('#nav_contacts').removeAttr('style')
			$("nav ul li a").removeAttr('style')
			$('#nav_about').addClass('nav_active')
		},9500)
	}
	function animationNavLine() {
		'use strict'
		var nav;
		var animateNavTop = document.createElement('div');
		var animateNavBottom = document.createElement('div');
		var heightNav;
		$('.animNav').remove();
		nav = $("nav");
		heightNav = nav.outerHeight()/2;
		$(animateNavTop).css({
			'position' : 'absolute',
			'top': heightNav,
			'right' : 0,
			'width' : 1,
			'height' : 0,
			'background-color' : '#FFD700'
		})
		$(animateNavBottom).css({
			'position' : 'absolute',
			'bottom': heightNav,
			'right' : 0,
			'width' : 1,
			'height' : 0,
			'background-color' : '#FFD700'
		})
		$(animateNavTop).addClass('animNav')
		$(animateNavBottom).addClass('animNav')
		nav.append(animateNavTop)
		nav.append(animateNavBottom)
		$(animateNavTop).animate({'height': heightNav}, 2000)
		$(animateNavBottom).animate({'height': heightNav}, 2000)
	}
	function resizeHamburgerPosition() {
		'use strict';
		var hamburger; 
		var nav;
		var win;
		win = $(window);
		nav = $('nav');
		hamburger = $('.hamburger');
		if (hamburger.hasClass('is-active')) {
			if (win.outerWidth()<500) {
				$(hamburger).css({'left' : nav.outerWidth() -5 - hamburger.outerWidth()})
			}
			else {
				$(hamburger).css({'left' : nav.outerWidth() -24 - hamburger.outerWidth()})
			}
		}
		else {
			if (win.outerWidth()<500) {
				$(hamburger).css({
					'top' : 15,
					'left' : 5,
				})
			}
			else {
				$(hamburger).css({
					'top' : 33,
					'left' : 24,
				})
			}
		}
	}
	function toggleHamburger() {
		$('.hamburger').bind('click', function() {
			var win = $(window)
			var hamburger = $(this);
			var nav = $("nav")
			var animateNavTop;
			var animateNavBottom;
			$('.animNav').remove();
			if (!userStopAnimation) {
				userStopAnimation = true;
				stopAnimation()
				$('section').show();
				$('footer').show();
				$('.fa-long-arrow-down').css({'opacity' : 1})
			}
			activeItemNavigation()
			if (hamburger.hasClass('is-active')) {
				hamburger.removeClass('is-active')
				nav.animate({'left': '-100%'}, 1000)
				$(hamburger).animate({'left' : 24},500)
				$('.items_nav').removeAttr('style')
				$('.animNav').css({'opacity':0});
				setTimeout(function() {
					$('.animNav').remove();
				},2000)
			}
			else {
				setTimeout(function() {
					hamburger.addClass('is-active')
				},2000)
				setTimeout(function() {
					animationNavLine()
				},1500)
				if (win.outerWidth()<500) {
					$(hamburger).delay(1000).animate({'left' : nav.outerWidth() -5 - hamburger.outerWidth()},1000)	
				}
				else {
					$(hamburger).delay(1000).animate({'left' : nav.outerWidth() -24 - hamburger.outerWidth()},1000)	
				}
				$("nav").animate({'left': 0}, 500)
				$('#nav_about').delay(500).animate({'left':0},500);
				$('#nav_skills').delay(700).animate({'left':0},500);
				$('#nav_works').delay(900).animate({'left':0},500);
				$('#nav_job').delay(1100).animate({'left':0},500);
				$('#nav_contacts').delay(1300).animate({'left':0},500);
			}
		})
	}
	function activeItemNavigation() {
		'use strict';
		var winScroll;
		var beginSkills;
		var beginWorks;
		var beginFooter;
		var nav_about;
		var nav_works;
		var nav_skills;
		var nav_job;
		var nav_contacts;
		var beginJob;
		winScroll = $(window).scrollTop();
		beginSkills = $('#section_skills').offset().top-100;
		beginWorks = $('#section_works').offset().top-100;
		beginJob = $('#section_job').offset().top-100;
		beginFooter = $('footer').offset().top-100;
		nav_about = $('#nav_about')
		nav_skills = $('#nav_skills')
		nav_works = $('#nav_works')
		nav_job = $('#nav_job')
		nav_contacts = $('#nav_contacts')
		$('.items_nav').removeClass('nav_active')
		if ( beginSkills > winScroll) {nav_about.addClass('nav_active')}
		if ( beginSkills < winScroll && winScroll <= beginWorks) {nav_skills.addClass('nav_active')}
		if ( beginWorks  < winScroll && winScroll <= beginJob)   {nav_works.addClass('nav_active')}
		if ( beginJob    < winScroll && winScroll <= beginFooter){nav_job.addClass('nav_active')}
		if ( winScroll > beginFooter) {nav_contacts.addClass('nav_active')}
	}
	function arrowNavigationPosition() {
		'use strict';
		var winScroll;
		var navArrow;
		var winHeight;
		var sectScills;
		sectScills = $('#section_skills')
		winScroll =  $(window).scrollTop();
		navArrow = $('.fa-long-arrow-down')
		winHeight = $(window).outerHeight()
		if (winScroll <= (sectScills.offset().top + sectScills.outerHeight())) {
			if (!triggerNavArrowTop) {
				triggerNavArrowTop = true;
				triggerNavArrowBottom = false
				$(navArrow).removeClass('rotateNavArrowDown');
				setTimeout(function() {
					navArrow.addClass('navArrowDown')
					navArrow.removeClass('navArrowTop')
				},1000)
			}
		}
		else {
			if (!triggerNavArrowBottom) {
				triggerNavArrowBottom = true;
				triggerNavArrowTop = false;
				$(navArrow).addClass('rotateNavArrowDown')
				setTimeout(function() {
					navArrow.addClass('navArrowTop')
					navArrow.removeClass('navArrowDown')
				},1000)
			}
		}	
	}
	function arrowNavigationClick() {
		$('.fa-long-arrow-down').bind('click', function() {
			var topScroll = $(window).scrollTop();
			var middleLine = $('#section_skills').offset().top + $('#section_skills').outerHeight()
			if (topScroll < middleLine) {
				$('body, html').animate({'scrollTop' : $(document).outerHeight()}, 2000)
				setTimeout(function() {
					arrowNavigationPosition()	
				},2000)
			}
			else  {
				$('body, html').animate({'scrollTop' : 0},2000)
				setTimeout(function() {
					arrowNavigationPosition()	
				},2000)
			}
		})
	}

//===============================================  ABOUT  =====================================================
	function animateSectionBiografy() {
		$('#section_about article h2').animate({'opacity':1},1000);
		$('#about1').delay(3000).animate({'opacity':1},1000);
		$('#about2').delay(5500).animate({'opacity':1},1000);
		$('#about3').delay(13500).animate({'opacity':1},1000);
		$('#about4').delay(16500).animate({'opacity':1},1000);
		$('#about5').delay(19500).animate({'opacity':1},1000);
		$('#about6').delay(23000).animate({'opacity':1},1000);	
	}
	function sectionsPrettyHeight(element, win) {
		'use strict';
		var heightElement;
		var winHeight;
		heightElement = $(element).outerHeight()
		winHeight = $(win).outerHeight()
		if (heightElement < winHeight) { 
			$(element).outerHeight(winHeight) 
		}
		else {
			$(element).outerHeight('auto') 
		}
	}

//===============================================  SKILLS  ====================================================
	function animateSectionSkills() {
		'use strict';
		var top_wrap	= $('#top_wrap')
		var left_wrap	= $('#left_wrap')
		var right_wrap	= $('#right_wrap')
		var bottom_wrap	= $('#bottom_wrap')
		$('#center_web_img').delay(2000).animate({'opacity': 1},500)
		setTimeout(function() {
			top_wrap.removeClass('hide_top_wrap')
		},4000)
		setTimeout(function() {
			left_wrap.removeClass('hide_left_wrap')
		},6000)
		setTimeout(function() {
			right_wrap.removeClass('hide_right_wrap')
		},8000)
		setTimeout(function() {
			bottom_wrap.removeClass('hide_bottom_wrap')
		},10000)
	}

//===============================================  WORKS  =====================================================
	function animateSectionWorks() {
		if ($(window).outerWidth()>1200) {
			setTimeout(function() {
				$('#head_mean').removeClass('hide_work_item_wrap')
				$('#head_mean').addClass('animate_items_works')
			}, 1000);
			setTimeout(function() {
				$('#head_layout').removeClass('hide_work_item_wrap')
				$('#head_layout').addClass('animate_items_works')
			}, 1300);
			setTimeout(function() {
				$('#mean').removeClass('hide_work_item_wrap')
				$('#mean').addClass('animate_items_works')
			}, 1600);
			setTimeout(function() {
				$('#layout').removeClass('hide_work_item_wrap')
				$('#layout').addClass('animate_items_works')
			}, 1900)
		}
		else {

		}
	}
	function resizePositionWorksItems() {
		var win;
		win = $(window);
		if (win.outerWidth()<1200) {
			$('.overlay').removeClass('overlay_active')
			$('.description').removeClass('hide_description')
			$('.description').removeAttr('style') 
			$('.description').fadeIn()
		}
		else {
			$('.overlay').addClass('overlay_active')
			$('.description').addClass('hide_description') 
		}
	}
	function animateItemsSectionWorks() {
		$('.work_item_wrap').bind({
			mouseenter: function(e) {
				e.preventDefault();
				e.stopPropogation;
				var elem = $(this);
				var idElement;
				if ($(window).outerWidth()>1200) {
					elem.find('.overlay').removeClass('overlay_active');
					elem.find('.description').fadeIn(600);
					elem.find('.description').removeClass('hide_description');
					idElement = elem.attr('id')
					slidersSectionWorks.start(idElement)
				}
			},
			mouseleave: function(e) {
				e.preventDefault();
				e.stopPropogation;
				if ($(window).outerWidth()>1200) {
					var elem = $(this);
					elem.find('.overlay').addClass('overlay_active');
					elem.find('.description').fadeOut(600);
					elem.find('.description').addClass('hide_description');
					
					slidersSectionWorks.stop()
				}
			}
		});
	}
	function paralaxSectionWorks() {
		$('body').mousemove(function(event){
			var x = event.pageX
			var y = event.pageY
			$('#paralax_img'). css({
				'transform' : "translate(" + -x/40 + "px, "+ -y/40 +"px)",
			})
		})
		$('.work_item_wrap').bind()
	}
	function SliderWorks(idElement) {
		'use strict';
		var intervalSlider;
		var numberImgMean = 1;
		var numberImgLayout = 1;
		var path;
		var currentElement;
		this.start = function(idElement) {
			intervalSlider = setInterval(function() {
				currentElement = $('#' + idElement).find('img');
				currentElement.css({'opacity' : 0})
				setTimeout(function() {
					if (idElement === 'work_mean') {
						numberImgMean++;
						if (numberImgMean == 7) {numberImgMean = 1}
						path = 'img/works/' + idElement + '/' + numberImgMean +'.png';
					}
					else {
						numberImgLayout++;
						if (numberImgLayout == 7) {numberImgLayout = 1}
						path = 'img/works/' + idElement + '/' + numberImgLayout +'.png';	
					}
					currentElement.attr('src', path)
					currentElement.css({'opacity' : 1 })
				},800)
			}, 2000)
		}
		this.stop = function() {
			clearInterval(intervalSlider)
		}		
	}
	slidersSectionWorks = new SliderWorks()

//===============================================  JOB ========================================================
	function animateJob() {
		'use strict'
		var arrElements;
		var counterElements;
		var thisElem;
		var thisElemText;
		var thisSetInterval;
		var counterSymbol;
		var lastSymbol;
		var thisMessage;
		var i;
		var indexLastElement;
		var opacityLetter;
		var cloneElemText;
		var cloneRemove;
		arrElements = $('.job_item');
		indexLastElement = arrElements.length;
		counterElements = 0;
		function animateThisElemIcon(thisElem) {
			var icon;
			icon = thisElem.find('i');
			icon.css({
				'opacity': 1,
				'-webkit-transform' : 'scale(2,2) translateY(-25%)',
				'transform' : 'scale(2,2) translateY(-25%)'
			})
		}
		function animateElement() {
			thisElem = $(arrElements[counterElements])
			animateThisElemIcon(thisElem)	
			thisElemText = thisElem.find('p').text().split('');
			lastSymbol = thisElemText.length;
			counterSymbol = 1; 
			setTimeout(function() {
				thisSetInterval = setInterval(function() {
					if (counterSymbol > lastSymbol-1) {
						clearInterval(thisSetInterval);
						counterElements++;
						if (counterElements != indexLastElement) {
							animateElement()
						}
						else {
							endAnimationJob = true;
						}
					}
					else {
						cloneRemove = '.cloneElem' + String(counterElements);
						$(cloneRemove).remove()
						thisMessage = thisElemText.slice(0, counterSymbol).join('')
						cloneElemText = document.createElement('p');
						$(cloneElemText).css({
							'position': 'absolute',
							'top': 0 ,
							'left': 0,
							'opacity' : 1
						})
						$(cloneElemText).addClass('cloneElem' + String(counterElements))
						$(cloneElemText).text(thisMessage);					
						thisElem.append(cloneElemText)
						opacityLetter = $(document.createElement('span'))
						opacityLetter.css({'opacity':0});
						opacityLetter.text(thisElemText.slice(counterSymbol, counterSymbol+1).join(''))
						opacityLetter.text(thisElemText[counterSymbol])
						thisElem.find('span').remove()
						thisElem.find('p').append(opacityLetter);
						opacityLetter.animate({'opacity':1},80)
						counterSymbol += 2;
					}
				},80)
			},2000)
		}
		animateElement()		
	}

//===============================================  FOOTER  ====================================================
	function footerStartPositionParalax(footer, win) {
		var winHeight;
		var positionStartParalax;
		winHeight = win.outerHeight()
		footer.outerHeight(winHeight)
		positionStartParalax = 'translateY(-' + winHeight + 'px)';
		$('#footer_paralax').css({
			'-webkit-transform': positionStartParalax,
			'transform': positionStartParalax
		})
	}
	function footerParalax(footer, win) {
		'use strict';
		var startParalax;
		var footer_paral;
		var newPosition;
		var winScrollTop;
		var paralaxHeight;
		paralaxHeight = footer.outerHeight();
		winScrollTop = win.scrollTop();
		startParalax = footer.offset().top - paralaxHeight;
		if (winScrollTop >= startParalax) {
			footer_paral = $('#footer_paralax');
			newPosition = - paralaxHeight + winScrollTop - startParalax;
			footer_paral.css({
				'-webkit-transform':'translateY(' + newPosition +'px)',
				'transform':'translateY(' + newPosition + 'px)'
			})
		}
	}					

//+++++++++++++++++++++++++++++++++++++++++++++++++ RESIZE ++++++++++++++++++++++++++++++++++++++++++++++++++++++															
	$(window).resize(function() {
		'use strict';
		var win;
		var footer;
		win = $(window);
		footer = $('footer');
		$('.animNav').remove();
		$('section').outerHeight('auto')
		resizeHamburgerPosition()
		footerStartPositionParalax(footer, win)
		footerParalax(footer, win)
		if (userStopAnimation) {animationNavLine()}
		resizePositionWorksItems()
	})		

//++++++++++++++++++++++++++++++++++++++++++++++++++ SCROLL  ++++++++++++++++++++++++++++++++++++++++++++++++++
	$(window).scroll(function() {
		var win;
		var footer;
		win = $(window);
		footer = $('footer')
		footerParalax(footer, win)
		arrowNavigationPosition()
		if (userStopAnimation) { activeItemNavigation()	}	
	})

//++++++++++++++++++++++++++++++++++++++++++++ MAIN ANIMATION - START PAGE  ++++++++++++++++++++++++++++++++++++
	function hideElementsForStartAnimation() {
		var win;
		win = $(window);
		$('#section_about article h2').css({'opacity':0});
		$('section').addClass('hide_element');
		$('footer').addClass('hide_element');
		$('#section_about').show();
		$('#section_about p').css({'opacity': 0});
		// section_about
		$('.items_nav').css({'pointer-events': 'none', 'cursor': 'default'});
		//skills
		if (win.outerWidth()>1200) {
			$('#center_web_img').css({'opacity': 0})
			$('#top_wrap').addClass('hide_top_wrap')
		   $('#left_wrap').addClass('hide_left_wrap')
		   $('#bottom_wrap').addClass('hide_bottom_wrap')
		   $('#right_wrap').addClass('hide_right_wrap')
		}
	   //works
	   if (win.outerWidth()>1200) {
			$('.header_items_works').addClass('hide_work_item_wrap')
			$('.work_item_wrap').addClass('hide_work_item_wrap')
			$('.overlay').addClass('overlay_active')
			$('.description').addClass('hide_description')
	   }
	   //job
	   $('.job_item').find('i').css({'opacity':0})
		$('.job_item').find('p').css({'opacity' : 0});
	}
	function stopAnimation() {
		//nav
		$('.items_nav').css({'pointer-events': 'auto', 'cursor': 'pointer'});
		//about
		$('#section_about article h2').css({'opacity':1});
		$('#section_about article p').css({'opacity':1});
		//skills
		$('#center_web_img').css({'opacity': 1})
		$('#top_wrap').removeClass('hide_top_wrap')
		$('#left_wrap').removeClass('hide_left_wrap')
		$('#bottom_wrap').removeClass('hide_bottom_wrap')
		$('#right_wrap').removeClass('hide_right_wrap')  
		//works
		$('.header_items_works').removeClass('hide_work_item_wrap')
		$('.work_item_wrap').removeClass('hide_work_item_wrap')
		if ($(window).outerWidth()<1200) {
			$('.overlay').removeClass('overlay_active')
			$('.description').removeClass('hide_description')
		}
		else {
			$('.overlay').addClass('overlay_active')
			$('.description').addClass('hide_description')
		}
		//job 
		$('.job_item').find('i').css({
				'opacity': 1,
				'-webkit-transform' : 'scale(2,2) translateY(-25%)',
				'transform' : 'scale(2,2) translateY(-25%)'
			})
		$('.job_item').find('.cloneElem0, .cloneElem1, .cloneElem2, .cloneElem3').remove()
		$('.job_item').find('p').css({'opacity': 1})
	}
	$(document).ready(function() {
		'use strict';
		var win;
		var section;
		var intervalJob;
		win = $(window);		
		// ------------------------------------------------ events -----------------------------------------------------
		//add event listener for arrow navigation
		arrowNavigationClick()
		//add event listener for hamburger
		toggleHamburger()
		// add event listener on event mousemove for paralax in section works
		paralaxSectionWorks();
		// add event listener for items in works section - event hover 
		animateItemsSectionWorks()
		// add event listener for items in navigation - event click
		eventsNavigation()
		//hide and set position for all elements that animated in works section
		resizePositionWorksItems()
		// --------------------------------------------  positions element ----------------------------------------------
		hideElementsForStartAnimation()
		//hide preloader
		setTimeout(function() {	
			$('#preloader').animate({'opacity': 0},500)
			setTimeout(function() {	
				$('#preloader').remove()
			},500)	
		},1500)
		//pretty hight for section ABOUT
		sectionsPrettyHeight($('#section_about'), $(window));
		//set start position for footer paralax
		footerStartPositionParalax($('footer') ,win)

		// ---------------------------------------------  begin animation -------------------------------------------------
		// animate hello mwssage
		animateHelloMessage()
		// animate danger message
		setTimeout(function() {
			animateDangerMessage()
		},10000)
		// animate start navigation
		setTimeout(function() {animateStartNavigation()},11000)
		// animate biografy(about)
		setTimeout(function() {	
			if (!userStopAnimation) {
				animateSectionBiografy() 
			}
		},22000)
		// animate skills
		setTimeout(function() {
			if (!userStopAnimation) {
				section = $('#section_skills')
				section.show();
				$('#section_works').show();
				$('body,html').animate({scrollTop: section.offset().top}, 2000);
				animateSectionSkills();
			}
		},50000)
		// animate works
		setTimeout(function() {
			if (!userStopAnimation) {
				section = $('#section_works')
				$('#section_job').show()
				$('body,html').animate({scrollTop: section.offset().top}, 2000);
				setTimeout(function() {
					animateSectionWorks();
				},2000)
			}		
		},66000)
		// animate job
		setTimeout(function() {
			if (!userStopAnimation) {
				section = $('#section_job')
				sectionsPrettyHeight(section, win);
				section.show();
				$('body,html').animate({scrollTop: section.offset().top}, 2000);
				$('footer').show();
				setTimeout(function() {
					animateJob()	
				},2000)
			}
		},73000)
		 // animate footer
		intervalJob = setInterval(function() {
			if (userStopAnimation) {
				stopAnimation()
				clearInterval(intervalJob)
			}
			else {
				if (endAnimationJob) {
					setTimeout(function() {
						section = $('footer')
						$('body,html').animate({scrollTop: section.offset().top}, 2000);
						$('.fa-long-arrow-down').css({'opacity':1})
						$('.items_nav').css({'pointer-events': 'auto', 'cursor': 'pointer'});
						userStopAnimation=true;
						stopAnimation()
						clearInterval(intervalJob)
					},1000)
				}
			}
		},1000)		
	})	
})()

