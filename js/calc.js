
	//Собираем данные из калькулятора для отправки в письме
	
	function calctext() {
		var ct1, ct2, ct3;
		ct1 = $(motherId + ' .text').html();
		ct2 = $(motherId + ' .calc').html();
		ct3 = $(motherId + ' .result .result_summary_wrap').html();
		$('#calc .calc-text').html(ct1 + ct2 + ct3);
		$('#calc .calc-text .jq-selectbox').each(function () {
			$(this).replaceWith($(this).find('.jq-selectbox__select-text').text());
		});
		$('#calc .calc-text .jq-checkbox').each(function () {
			if ($(this).hasClass('checked')) {
				$(this).replaceWith('Да');
			} else {
				$(this).replaceWith('Нет');
			}
		});
		$('#calc .calc-text .info').remove();
		$('#calc .calc-text .hide-mail').remove();
		$('#calc .calc-text td:first-child').css('padding-right', '10px');
		$('#calc .calc-text td:last-child').css('font-weight', 'bold');
		$('#calc .calc-text>*').css('margin-bottom', '1em');
		$('#calc .calc-text').html($('#calc .calc-text').html().replace(/&nbsp;/g, ''));
		
		var copies = parseInt($(motherId + " .c-copies option:selected").attr('value'));//Количество копий
		var dimension = $(motherId + " .c-dimension option:selected").attr('value');//Размер
		var width = parseInt($(motherId + " .c-width option:selected").attr('value'));//Ширина
		var height = parseInt($(motherId + " .c-height option:selected").attr('value'));//Высота
		var material = $(motherId + " .c-material option:selected").attr('value');//Материал	
		var density = parseInt($(motherId + " .c-density option:selected").attr('value'));//Толщина полиэтилена
		var color = parseInt($(motherId + " .c-colored-list option:selected").attr('value'));//Цвет полиэтилена
		var facecolors = parseInt($(motherId + " .c-facecolors .jq-selectbox__select-text").text());//цветов на лицевой стороне
		var backcolors = parseInt($(motherId + " .c-backcolors .jq-selectbox__select-text").text());//цветов на обратной стороне
		var depth = parseInt($(motherId + " .c-depth option:selected").attr('value'));//Размер донной складки
		var isBio = ($(motherId + " .c-bio").closest('.jq-checkbox').hasClass('checked')) ? 'Да' : 'Нет';//Сделать пакет биоразлагаемым
		var isStrong = ($(motherId + " .c-strong").closest('.jq-checkbox').hasClass('checked')) ? 'Да' : 'Нет';//Укрепленная ручка
		var isSilverGold = ($(motherId + " .c-silver-gold-pol").closest('.jq-checkbox').hasClass('checked')) ? 'Да' : 'Нет';//Серебряный или золотой полиэтилен
		var isSilverGoldPrint = ($(motherId + " .c-silver-gold").closest('.jq-checkbox').hasClass('checked')) ? 'Да' : 'Нет';//Печать серебряной или золотой краской
		var isPlashkaRastr = ($(motherId + " .c-plashka-rastr").closest('.jq-checkbox').hasClass('checked')) ? 'Да' : 'Нет';//Наличие плашки или растра
		var oneItemMass = $(motherId + " .c-packet_massa").text();//Масса одного пакета
		var fullMass = $(motherId + " .c-full_massa").text();//Масса заказа
		var oneItemPrice = $(motherId + " .c-packet_price_html").text();//Цена одного пакета
		var fullPrice = $(motherId + " .c-total_price_html").text();//Полная цена заказа
		
		var totalColors = facecolors + backcolors;
		
		if (color == "1") color = "белый";
		if (color == "2") color = "розовый";
		if (color == "3") color = "голубой";
		if (color == "4") color = "прозрачный";
		if (color == "5") color = "оранжевый";
		if (color == "6") color = "бирюзовый";
		if (color == "7") color = "черный";
		if (color == "8") color = "бежевый";
		if (color == "9") color = "синий";
		if (color == "10") color = "красный";
		if (color == "11") color = "желтый";
		if (color == "12") color = "серебряный";
		if (color == "13") color = "вишневый";
		if (color == "14") color = "зеленый";
		if (color == "15") color = "золотой";
		
		/* flexoform */
		if (motherId == '#c-2' && copies >= 10)
		{
			var ftotal = totalColors;
			$('#c-2 #f-complex').text('X1');
			$('#c-2 #f-total').text(ftotal);
			if ((width == 20 || width == 22 || width == 25 || width == 35) && (totalColors == 1 || totalColors == 2 || totalColors == 3 || totalColors == 4))
			{
				var ftotal = totalColors * 2;
				$('#c-2 #f-complex').text('X2');	
				$('#c-2 #f-total').text(ftotal);
			}
			if ((width == 30) && (totalColors == 3 || totalColors == 4))
			{
				var ftotal = totalColors * 2;
				$('#c-2 #f-complex').text('X2');	
				$('#c-2 #f-total').text(ftotal);
			}
			$('#c-2 .dev-block-bottom').css('display', 'block');
		}
		else
		{
			if (copies == 5 && dimension == '35x45' && (density == 50 || density == 60 || density == 70 || density == 80))
			{
				var ftotal = totalColors * 2;
				$('#c-2 #f-complex').text('X2');	
				$('#c-2 #f-total').text(ftotal);
				$('#c-2 .dev-block-bottom').css('display', 'block');
			}
			else
			{
				$('#c-2 .dev-block-bottom').css('display', 'none');
			}
		}
		
		/* buffer */
		var bufferText = "";
		if (motherId == '#c-1')
		{
			bufferText += "<div><b>Тип пакета</b>: Майка</div>";
		}
		if (motherId == '#c-2')
		{
			bufferText += "<div><b>Тип пакета</b>: С вырубной ручкой</div>";
			bufferText += "<div><b>Укрепленная ручка</b>: "+isStrong+"</div>";
		}
		if (motherId == '#c-3')
		{
			bufferText += "<div><b>Тип пакета</b>: С вырубной ручкой. Шелкография</div>";
			bufferText += "<div><b>Укрепленная ручка</b>: "+isStrong+"</div>";
		}
		
		var textMaterial = 'ПВД (гладкий полиэтилен)';
		if (material == 'psd')
		{
			textMaterial = 'ПСД (Полиэтилен среднего давления)';
		}
		if (material == 'pnd')
		{
			textMaterial = 'ПНД (шуршащий полиэтилен)';
		}
		
		bufferText += "<div><b>Материал</b>: "+textMaterial+"</div>";
		bufferText += "<div><b>Биоразлагаемый пакет</b>: "+isBio+"</div>";
		if (motherId == '#c-3')
		{
			bufferText += "<div><b>Размер</b>: "+dimension+"+"+depth+" см. (ширина x высота + донная складка)</div>";
		}
		if (motherId == '#c-2')
		{
			if (copies < 10)
			{
				depth = 0;
				bufferText += "<div><b>Размер</b>: "+dimension+"+"+depth+" см. (ширина x высота + донная складка)</div>";				
			}
			else
			{
				bufferText += "<div><b>Размер</b>: "+width+"x"+height+"+"+depth+" см. (ширина x высота + донная складка)</div>";
			}
		}
		else if (motherId == '#c-1')
		{
			if (copies < 10)
			{
				bufferText += "<div><b>Размер</b>: "+dimension+" см. (ширина x высота)</div>";
			}
			else
			{
				bufferText += "<div><b>Размер</b>: "+width+"x"+height+" см. (ширина x высота)</div>";				
			}
		}
		bufferText += "<div><b>Толщина полиэтилена</b>: "+density+" мкм.</div>";
		bufferText += "<div><b>Печать</b>: "+facecolors+" + "+backcolors+" (количество цветов на лицевой + на обратной стороне)</div>";
		bufferText += "<div><b>Цвет пакета</b>: "+color+"</div>";
		if (motherId == '#c-3')
		{
			bufferText += "<div><b>Наличие плашки и растра</b>: "+isPlashkaRastr+"</div>";
			bufferText += "<div><b>Печать серебряной или золотой краской</b>: "+isSilverGoldPrint+"</div>";
		}
		if (motherId == '#c-3')
		{
			bufferText += "<div><b>Тираж</b>: "+copies+" шт.</div>";
		}
		else
		{
			bufferText += "<div><b>Тираж</b>: "+copies+" 000 шт.</div>";			
		}
		bufferText += "<div><b>Цена</b>: "+oneItemPrice.replace(/\i/g, '')+" руб./шт.</div>";


		bufferText += "<br><br><div>В стоимость не включена доставка и флексоформа.<br>";
		bufferText += "Стоимость флексоформы зависит от размера рисунка на пакете и<br>";
		bufferText += "рассчитывается после согласования макета</div>";
		
		$('.load-bufer__data-1').html(bufferText);//buffer
		
		var Q = '';
		if (motherId == '#c-3') Q = 'Шелкография ';
		
		var X = 'Майка ';
		if (motherId != '#c-2' && motherId != '#c-1')
		{
			X = 'ВУР ';
		}
		if (motherId != '#c-3' && motherId != '#c-1')
		{
			if (isStrong == 'Да')
			{
				X = 'ВУР ';
			}
			else
			{
				X = 'ВнеУР ';
			}
		}
		
		var F = '';
		if (isBio == 'Да') F = 'БИО ';
		
		var YR = '';

		if (motherId == '#c-1')
		{
			YR = width+"x"+height + ' см, ';
		}
		if (motherId == '#c-3')
		{
			YR = dimension + "+" + depth + ' см, ';
		}
		if (motherId == '#c-2')
		{
			if (copies < 10)
			{
				depth = 0;
				YR = dimension + "+" + depth + ' см, ';
			}
			else
			{
				YR = width+"x"+height + "+" + depth + ' см, ';				
			}
		}


		
		var L = color + ' ';
		
		var E = 'ПВД ';
		if (material == 'psd')
		{
			E = 'ПСД ';
		}
		if (material == 'pnd')
		{
			E = 'ПНД ';
		}
		
		var G = density;
			
		var bufferText2 = Q + 'Пакет ' + X + F + YR + L + E + G + ' мкм, Печать ' + facecolors + '+' + backcolors;
		
		$('.load-bufer__data-2').html(bufferText2);//buffer
		
		/* /buffer */
		
		var clearText = '';
		
		if (motherId != '#c-3')
		{
			copies = copies * 1000;
		}
		
		if (copies) clearText = clearText + 'Количество копий:' + copies + ';';
		
		if ((motherId == '#c-1' && copies < 10000) || (motherId == '#c-2' && copies < 10000) || motherId == '#c-3')
		{
			if (dimension) clearText = clearText + 'Размер:' + dimension + ';';
		}
		
		if ((motherId == '#c-1' && copies >= 10000) || (motherId == '#c-2' && copies >= 10000))
		{
			if (width) clearText = clearText + 'Ширина:' + width + ';';
			if (height) clearText = clearText + 'Высота:' + height + ';';
		}
		
		if (material) clearText = clearText + 'Материал:' + material + ';';	
		if (density) clearText = clearText + 'Толщина:' + density + ';';
		if (color) clearText = clearText + 'Цвет:' + color + ';';
		if (facecolors) clearText = clearText + 'Цветов на лицевой стороне:' + facecolors + ';';
		if (backcolors) clearText = clearText + 'Цветов на обратной стороне:' + backcolors + ';';
		if (depth) clearText = clearText + 'Размер донной складки:' + depth + ';';
		if (isBio) clearText = clearText + 'Биоразлагаемый:' + isBio + ';';
		if (isStrong) clearText = clearText + 'Укрепленная ручка:' + isStrong + ';';
		if (isSilverGold) clearText = clearText + 'Серебряный или золотой полиэтилен:' + isSilverGold + ';';
		if (isSilverGoldPrint) clearText = clearText + 'Печать серебряной или золотой краской:' + isSilverGoldPrint + ';';
		if (isPlashkaRastr) clearText = clearText + 'Наличие плашки или растра:' + isPlashkaRastr + ';';
		if (oneItemMass) clearText = clearText + 'Масса одного пакета:' + oneItemMass + ';';
		if (fullMass) clearText = clearText + 'Масса заказа:' + fullMass + ';';
		if (oneItemPrice) clearText = clearText + 'Цена одного пакета:' + oneItemPrice + ';';
		if (fullPrice) clearText = clearText + 'Полная цена заказа:' + fullPrice + ';';
		
		$('#calc .calc-text-clear').html(clearText);
	}

$(function () {
	
	$(function() {
        $('.lazy').Lazy();
    });
	
	//Попапы (Fancybox 2.0)
	$(".fancybox").fancybox();
	$(".fancybox-img").fancybox();
	//$.fancybox.open();
	//$.fancybox.close();
	$.extend($.fancybox.defaults, {
		padding : 0,
		openEffect  : 'none',
		closeEffect : 'none',
		nextEffect  : 'none',
		prevEffect  : 'none',
		fitToView   : false,
	});
	$(document).on('click', '.fancybox-image', function() {
		$.fancybox.close();
	});
	$("#products .block .img a").fancybox({
		fitToView: true,
	});

	//Плавный скрол якорей (Smooth Scroll)
	smoothScroll.init({
		updateURL: 1,
	});
	
	// //Цели по клику на кнопки
	// $('a.fancybox').click(function () {
	// 	if (!window.clear)
	// 	{
	// 		yaCounter45178338.reachGoal($(this).data("goal"));
	// 	}
	// });
	
	// //Цель Скрол до конца
	// var scroll_done = false;
	// $(window).scroll(function() {
	//    if($(window).scrollTop() + $(window).height() > $(document).height() - 100 && !scroll_done) {
	// 	   scroll_done = true;
	// 	   yaCounter45178338.reachGoal('g51'); 
	//    }
	// });
	
	//Валидация для всех форм (jQuery Validation Plugin)
	// $("form").each(function () { 
	// 	$(this).validate({ 
	// 		errorPlacement: function(error, element) {},
	// 		submitHandler: function(form) {
	// 			$.cookie('offerCount', '16', {
	// 				expires: 60,
	// 			});
	// 			//Цель метрики перед отправкой формы
	// 			yaCounter45178338.reachGoal('g1'); 
	// 			yaCounter45178338.reachGoal($(form).data("goal")); 
	// 			//console.log($(form).data("goal"));
	// 			if ($(form).hasClass('form-ajax'))
	// 			{
	// 				//console.log($(form).serialize());
	// 				$('.thx-window-trigger').click();
	// 				$.ajax({
	// 					url: $(form).attr('action'),
	// 					type: 'POST',
	// 					data: $(form).serialize(),
	// 					success: function(result) {
	// 						//console.log(result);
	// 					}
	// 				});			
	// 				return false;
	// 			}
	// 			form.submit();
	// 		}
	// 	});
	// });
	
		//Смена значения в Предложение ограничено
	if ($.cookie('offerCount')) {
		$('.offer-count').text($.cookie('offerCount'));
	}

	//Переход в полях телефона
	$('input[name="phone2"]').focus(function () {
		$(this).keyup(function () {
			if ($(this).val().length >= 3) {
				$(this).parent().find('input[name="phone3"]').focus();
			}
		});
	});
	
	//Маска для телефона (Masked input plugin)
	$("input[name='phone3']").mask("999-99-99");

	//Табы
	$('.tabs, .tabs-in').tabslet({
		animation: true,
	});
	
	$('.tabs, .tabs-in').on("_after", function() {
		var tabId = $('#calc .tabs li.active a').attr('href');
		motherId = tabId;
		$(motherId + " select").change(function() {
			calculate_mayka($(this).attr('class'), motherId);
			calctext();
		});
		
		$(motherId + ' input[type="checkbox"]').change(function(){
			var b = ($(this).prop('checked')) ? 1 : 0;
			$(this).attr("value", b);
			calculate_mayka(this.id, motherId);
			calctext();
		})
		
		
		$(motherId + " .c-facecolors", motherId + " .c-backcolors").attr("old", 0);
		$(motherId + " .c-colored", motherId + " .c-strong" ).change(function() {
			var b = ($(this).prop('checked')) ? 1 : 0;
			$(this).attr("value", b);
			calculate_mayka(this.id, motherId)
			
		});
		calculate_mayka(motherId + " .c-width", motherId);
	});
	
	//Переключение табов по нажатию на категории
	$("#products .categories li a").click(function() {
	  $("#products .tabs .btns li:not('.active'):nth-child("+$(this).closest('li').data("tab1")+")").trigger( "click" );
	  $("#products .tabs-in .btns li:not('.active'):nth-child("+$(this).closest('li').data("tab2")+")").trigger( "click" );
	});

	//Заголовок для 1 пункта калькулятора
	$('#calc .tabs li').click(function () {
		$('#calc h3 .type').text($(this).data("type"));
	});

	calctext();
	$('#calc .tabs li a').click(function () {
		motherId = $(this).attr('href');
		calctext();
	});
	
	$("#calc select, #calc input").change(function () {
		calctext();
	});	
	
	$("#calc .fancybox").fancybox({
		afterShow: function () {
			$('.fancybox-opened textarea[name="order"]').text($('#calc .calc-text').html());
			$('.fancybox-opened textarea[name="order_clear"]').text($('#calc .calc-text-clear').html());
		}
	});
	
	//Даные визита в форму
	$("form").each(function () { 
		$(this).append('<textarea name="info" style="display:none;">'+$('#visitinfo').html()+'</textarea>');
	});
	
	

	//Дата сегодня
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	$('.today').text(dd + '.' + mm + '.' + yyyy);

	//Таймер с cookies
	if (!$.cookie('offerTimer')) {
		var now = $.now(); //get first time log page
		var timerSet = 152*60; //159 minutes
		$.cookie('firstTime', now, {
			expires: 60,
		});
		$.cookie('offerTimer', timerSet, {
			expires: 60,
		});
		var runTimer = $.cookie('offerTimer');
	} else {
		var currentTime = $.now();
		var usedTime = (currentTime - $.cookie('firstTime')) / 1000; //calculate and convert into seconds
		var runTimer = $.cookie('offerTimer') - usedTime;
	}
	$('.count>div').countdown({
		labels: ["Лет","Месяцев","Недель","Дней","Часов","Минут","Секунд"], 
		labels1: ["Год","Месяц","Неделя","День","Часа","Минуту","Секунд"], 
		labels2: ["Года","Месяца","Недели","Дня","Часа","Минуты","Секунды"], 
		until: runTimer,
		format: 'DMHS',
		padZeroes: false,
		alwaysExpire: true,
		onExpiry: function() {
			$.removeCookie('offerTimer');
		},
	});
	$('.count-text').countdown({
		labels: ["Лет","Месяцев","Недель","Дней","Часов","Минут","Сек"], 
		labels1: ["Год","Месяц","Неделя","День","Часа","Минуту","Сек"], 
		labels2: ["Года","Месяца","Недели","Дня","Часа","Минуты","Сек"], 
		until: runTimer,
		format: 'MHS',
	});

	//Блок с шариками
	if (!window.isMobile)
	{
		var controller = new ScrollMagic.Controller();
		var tween = new TimelineLite()
		.to("#peoples .baloons", 1, {left: '95%'})
		.to("#peoples .clouds img:nth-child(1)", 0.5, {transform: 'scale(1);'}, 0.1)
		.to("#peoples .clouds img:nth-child(2)", 0.5, {transform: 'scale(1);'}, 0.2)
		.to("#peoples .clouds img:nth-child(3)", 0.5, {transform: 'scale(1);'}, 0.3)
		.to("#peoples .clouds img:nth-child(4)", 0.5, {transform: 'scale(1);'}, 0.4)
		;
		new ScrollMagic.Scene({
			triggerElement: "#peoples .block",
			duration: '80%',
			triggerHook: 0.5
		})
		.setTween(tween).addTo(controller);
		
		new ScrollMagic.Scene({
			triggerElement: "#products",
			duration: 0,
		})
		.setTween("#b-scroller-id", {display: "block"}).addTo(controller);	
	}
	
	//Спойлер
	$('.spoiler .title').click(function() {
		$(this).parent().toggleClass('active');
		$(this).next().slideToggle(200);
	});
	
	//кнопка наверх
	$('#b-scroller-id').click(function(){
		$("body,html").animate({scrollTop:0}, 800);
	});
	//Мобильное меню
	$('.btn-toggle').click(function() {
		$(this).toggleClass('active');
		$(this).parents('body').toggleClass('active');
		$(this).next().toggleClass('active');
	});

	
	//$('#b-scroller-id').css('display','block');

	//триггер на закрытие
	/*
    var Y;

    $(document).mousemove(function(e) {
        Y = e.pageY; // положения по оси Y
    });

    $(document).on('mouseleave', function() {

        var scrollTop = $(document).scrollTop();

        if ((Y <= scrollTop + 10) && !$.cookie('rl_spec')) {
            $('body').addClass('noscroll');
			$('.js-trigger').click();

            var date = new Date();
            var sec = 15;
            date.setTime(date.getTime() + (sec * 1000));
            $.cookie('rl_spec', true, {domain: '.ruspack-logo.ru', path: '/', expires: date});
        }
	});
	*/
	
	function CopyToClipboard(containerid) {
		if (document.selection) 
		{ 
			var range = document.body.createTextRange();
			range.moveToElementText(document.getElementById(containerid));
			range.select().createTextRange();
			document.execCommand("Copy"); 

		} else if (window.getSelection) 
		{
			var range = document.createRange();
			 range.selectNode(document.getElementById(containerid));
			 window.getSelection().removeAllRanges(); 
			 window.getSelection().addRange(range);
			 document.execCommand("Copy");
		}
	}
	
	$('#popup-load .bufer-copy').click(function(){
		CopyToClipboard("load-bufer__data-1");
		return false;
	})
	
	$('#popup-load-2 .bufer-copy').click(function(){
		CopyToClipboard("load-bufer__data-2");
		return false;
	})
	
});

$(document).ready(function() {

	// $('.maika').click(function() {
	// 	$('#c-1').show();
	// 	$('#c-2').hide();
	// 	$('#c-3').hide();
	// });

	// $('.raiter').click(function() {
	// 	$('#c-1').hide();
	// 	$('#c-2').show();
	// 	$('#c-3').hide();
	// });

	// $('.raiter-two').click(function() {
	// 	$('#c-1').hide();
	// 	$('#c-2').hide();
	// 	$('#c-3').show();
	// });

});