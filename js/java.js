
$(document).ready(function() {
	$('.wrapper').addClass('active');
	$('.header__burger').click(function(event) {
		$('.header__menu,.header__burger').toggleClass('active');
		// $('body').toggleClass('lock');
	});
	$('.just__arow-prev').click(function(event) {
		$('.just__slider').slick('slickPrev');
	});
	$('.just__arow-next').click(function(event) {
		$('.just__slider').slick('slickNext');
	});
	$('.tab_slider').slick({
		dots: true,
		appendDots:$('.tab__menu'),
		arrows: false,
		infinite: false,
		speed: 500,
		draggable: false,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
	});
	$('.just__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		appendDots:$('.just__dots-row'),
		arrows: true,
		infinite: true,
		responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        	slidesToShow: 3,
				slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 630,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
});

// Задний фон шапки
function windowScroll(wst,wsl) {
	if (wst <= 0) {
		$('.header').removeClass('header_white')
	}
	if (wst > 0) {
		$('.header').addClass('header_white')
	}
}

$(window).scroll(function() {
	const windowScrollTop = window.pageYOffset;
	const windowScrollleft = window.pageXOffset;
	windowScroll(windowScrollTop,windowScrollleft);
});


// Адаптив шапки
$(window).resize(function(event) {
	adaptive__function();
});

var headerList =$('.wrapper');
var wrapper = document.querySelector('.wrapper');
var headerRow = document.querySelector('.header__row');
var headerMenu = document.querySelector('.header__menu');
var menuButtonRow = document.querySelector('.menu__button_row');
var headerButton = document.querySelector('.header__button');


function adaptive__header(w,h) {
	if (w > 993) {
		$('.header__menu').prependTo(headerRow);
		$('.header__login').prependTo(headerButton);
		$('.header__get-demo').prependTo(headerButton);
	}
	else if (w < 993) {
		$('.header__menu').prependTo(wrapper);
		$('.header__login').prependTo(menuButtonRow);
		$('.header__get-demo').prependTo(menuButtonRow);
	}
	else {
		$('.header__menu').prependTo(headerRow);
		$('.header__login').prependTo(headerButton);
		$('.header__get-demo').prependTo(headerButton);
	}
}
function adaptiveWorkBg(w,h) {
	if (w > 600) {
		$('.work_bg__image').removeClass('mobile');
		$('.work_bg__image').addClass('desktop');
	}
	else if (w < 600) {
		$('.work_bg__image').removeClass('desktop');
		$('.work_bg__image').addClass('mobile');
	}
}
// adaptive__function
function adaptive__function() {
	const windowInnerWidth = window.innerWidth;
	const windowInnerHeight = window.innerHeight;
	adaptive__header(windowInnerWidth,windowInnerHeight);
	adaptiveWorkBg(windowInnerWidth,windowInnerHeight);
}
adaptive__function();


// Линия подменю в блоке 3
let tabLine = document.querySelector('.tab__line');
(function tabLinkOnePosition() {
	let tabLink_1 = document.querySelector('.tab__menu__link_1');
	let tabLinkOffsetWidth = tabLink_1.offsetWidth;
	let tabLinkOffsetLeft = tabLink_1.offsetLeft;
	tabLine.style.width=tabLinkOffsetWidth + "px";
	tabLine.style.left=tabLinkOffsetLeft + "px";
})();

$('.tab__menu__link').click(function(event) {
	let tabLink = this;
	let tabLinkOffsetWidth = tabLink.offsetWidth;
	let tabLinkOffsetLeft = tabLink.offsetLeft;
	tabLine.style.width=tabLinkOffsetWidth + "px";
	tabLine.style.left=tabLinkOffsetLeft + "px";
});



let tabMenyLink = document.querySelectorAll('.tab__menu__link');
var SlickDots = document.querySelectorAll("[id='slick-slide-control00']");

let tabMenyLink_1 =  document.querySelectorAll('.tab__menu__link');


$('.tab__menu__link_1').click(function(event) {
	document.getElementById('slick-slide-control00').click()
});
$('.slick-slide').click(function(event) {
	if ($('.tab_2').hasClass('slick-active')) {
		document.getElementById('slick-slide-control00').click()
		console.log('sdsdsdsdsds');
	}
});
$('.tab__menu__link_2').click(function(event) {
	document.getElementById('slick-slide-control01').click()
});
$('.tab__menu__link_3').click(function(event) {
	document.getElementById('slick-slide-control02').click()
});
$('.tab__menu__link_4').click(function(event) {
	document.getElementById('slick-slide-control03').click()
});
$('.tab__menu__link_5').click(function(event) {
	document.getElementById('slick-slide-control04').click()
});
$('.tab__menu__link_6').click(function(event) {
	document.getElementById('slick-slide-control05').click()
});

// JS-функция записи информации в fonts.scss

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
			if (c_fontname != fontname) {
				fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
			}
			c_fontname = fontname;
			}
		}
	})
	}
}

function cb() { }


function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

// 3d карточки

const cards = document.querySelectorAll('.card_3d')

for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove',startRotate)
	card.addEventListener('mouseout',stopRotate)
}

function startRotate(event) {
	const cardItem = this.querySelector('.card_3d_rotate');
	const	halfHeight = cardItem.offsetHeight / 2;
	const halfWidth = cardItem.offsetWidth / 2;
	cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 7 +'deg) rotateY('+ (event.offsetX - halfWidth) / 11 +'deg)';
}
function stopRotate(event) {
	const cardItem = this.querySelector('.card_3d_rotate');
	cardItem.style.transform = 'rotate(0)';
}

// Анимация поeвления при скролле

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const	animItemHeight = animItem.offsetHeight;
			const animItemOffSet = offset(animItem).top;
			const animeStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animeStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animeStart;
			}
			if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// Паралакс эфект с картинкой
$(window).scroll(function(event){
	let s = 0 - $(this).scrollTop();
	if (s > -200) {
		$('.work__tab').css('transform','translate3d(0, '+s+'px, 0)');
	}
	// let  believeBody = document.querySelector('.believe__body');
	// const believeBodyOffset = offset(believeBody).top;
	// // let believeBodyOffset =
	// console.log(believeBodyOffset);
	// $('.').css('transform','translate3d(0, '+s+'px, 0)');
});
// Паралакс эфект с брендами
const brand = document.querySelector('.brand');

$(window).scroll(function(event){
	// let brandOffSetTop = brand.offsetTop - 300;
	const brandOffSetTop = offset(brand).top - 1100;
	if (brandOffSetTop <= pageYOffset) {
		let teb = (pageYOffset - brandOffSetTop - 124) / 5;
		if (window.innerWidth > 993) {
			$('.brands__row').css('transform','translate3d(0, '+teb+'px, 0)');
		} else {
			$('.brands__row').css('transform','translate3d('+teb+'px,0, 0)');
		}
	}
});

