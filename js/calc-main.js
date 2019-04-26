var dialog;

var motherId = '#c-1';
var c1 = '#c-1';
var c2 = '#c-2';
var c3 = '#c-3';

var c1_copies = 10;
var c2_copies = 10;


$(document).ready(function() {

	

	//Стилизация полей
	$('#calc input, #calc select').styler();
	
	$('.kengo').css('display', 'none');
	$('.not-kengo').css('display', 'table-row');
	
	$(c1 + " .c-density li.op-not-kengo").css('display', 'block');
	$(c1 + " .c-facecolors li.op-not-kengo").css('display', 'block');
	$(c1 + " .c-backcolors li.op-not-kengo").css('display', 'block');
	$(c1 + " .c-facecolors li.op-not-kengo-20").css('display', 'none');
	$(c1 + " .c-backcolors li.op-not-kengo-20").css('display', 'none');
	
	$(c2 + " .c-density li.op-not-kengo").css('display', 'block');
	
	$(c2 + " .c-facecolors li.op-not-kengo").css('display', 'block');
	$(c2 + " .c-backcolors li.op-not-kengo").css('display', 'block');
	$(c2 + " .c-depth li.op-not-kengo").css('display', 'block');
	$(c2 + " .c-material li.op-not-kengo").css('display', 'block');
	
	$(c2 + " .c-density li").css('display', 'none');
	$(c2 + " .c-density li.pvd").css('display', 'block');
	
	$(c2 + ' .c-material').change(function() {
		var material = $(c2 + " .c-material option:selected").attr('value');
		var density = parseInt($(c2 + " .c-density option:selected").attr('value'));
		if (material == 'pvd')
		{
			$(c2 + " .c-density li").css('display', 'none');
			$(c2 + " .c-density li.pvd").css('display', 'block');
			if (density < 50)
			{
				$(c2 + " .c-density .jq-selectbox__select-text").text('50');
			}
		}
		
		if (material == 'psd')
		{
			$(c2 + " .c-density li").css('display', 'none');
			$(c2 + " .c-density li.psd").css('display', 'block');	
			if (density < 40)
			{
				$(c2 + " .c-density .jq-selectbox__select-text").text('40');
			}			
		}
		
		if (material == 'pnd')
		{
			$(c2 + " .c-density li").css('display', 'none');
			$(c2 + " .c-density li.pnd").css('display', 'block');
			if (density > 80)
			{
				$(c2 + " .c-density .jq-selectbox__select-text").text('80');
			}					
		}
	});
	
	$(c1 + ' .c-copies').change(function() {

		var val = $(this).find('option:selected').attr('value');
		
		var density = parseInt($(c1 + " .c-density option:selected").attr('value'));
		var facecolors = parseInt($(c1 + " .c-facecolors option:selected").attr('value'));
		var backcolors = parseInt($(c1 + " .c-backcolors option:selected").attr('value'));
		
		if (val <= 5)
		{
			if (density != 16 && density != 18 && density != 20 && density != 22 && density != 25 && density != 30)
			{
				$(c1 + " .c-density .jq-selectbox__select-text").text('Выбрать');
			}
			$(c1 + " .c-density li.op-not-kengo").css('display', 'none');
			
			if ((facecolors + backcolors) > 2)
			{
				$(c1 + " .c-facecolors .jq-selectbox__select-text").text('0');
				$(c1 + " .c-facecolors li.selected").removeClass('sel selected');
				$('#error-3, #error-4').addClass('hidden');
				
				$(c1 + " .c-backcolors .jq-selectbox__select-text").text('0');
				$(c1 + " .c-backcolors li.selected").removeClass('sel selected');
				$('#error-3, #error-4').addClass('hidden');
			}
			$(c1 + " .c-facecolors li.op-not-kengo").css('display', 'none');
			/*
			if (backcolors == 4 || backcolors == 3)
			{
				$(c1 + " .c-backcolors .jq-selectbox__select-text").text('0');
				$(c1 + " .c-backcolors li.selected").removeClass('sel selected');
				$('#error-3, #error-4').addClass('hidden');
			}
			*/
			$(c1 + " .c-backcolors li.op-not-kengo").css('display', 'none');
		}
		else
		{	
			if (density == 16 || density == 18 || density == 20 || density == 22 || density == 25 || density == 30)
			{
				$(c1 + " .c-density .jq-selectbox__select-text").text('12');
			}
			$(c1 + " .c-density li.op-not-kengo").css('display', 'block');

			$(c1 + " .c-facecolors li.op-not-kengo").css('display', 'block');
			$(c1 + " .c-backcolors li.op-not-kengo").css('display', 'block');
			
			if (val == 10)
			{
				$(c1 + " .c-facecolors li.op-not-kengo-20").css('display', 'none');
				$(c1 + " .c-backcolors li.op-not-kengo-20").css('display', 'none');		

				if ((facecolors + backcolors) > 2)
				{
					$(c1 + " .c-facecolors .jq-selectbox__select-text").text('0');
					$(c1 + " .c-facecolors li.selected").removeClass('sel selected');
					$('#error-3, #error-4').addClass('hidden');
					
					$(c1 + " .c-backcolors .jq-selectbox__select-text").text('0');
					$(c1 + " .c-backcolors li.selected").removeClass('sel selected');
					$('#error-3, #error-4').addClass('hidden');
				}
				$(c1 + " .c-facecolors li.op-not-kengo").css('display', 'none');
				/*
				if (backcolors == 4 || backcolors == 3)
				{
					$(c1 + " .c-backcolors .jq-selectbox__select-text").text('0');
					$(c1 + " .c-backcolors li.selected").removeClass('sel selected');
					$('#error-3, #error-4').addClass('hidden');
				}	
				*/
			}
			else
			{
				$(c1 + " .c-facecolors li.op-not-kengo-20").css('display', 'block');
				$(c1 + " .c-backcolors li.op-not-kengo-20").css('display', 'block');				
			}

			$(c1 + ' .c-material').change();
		}

    });
	
	$(c2 + ' .c-copies').change(function() {

		var val = $(this).find('option:selected').attr('value');
		
		var density = parseInt($(c2 + " .c-density option:selected").attr('value'));
		var facecolors = parseInt($(c2 + " .c-facecolors option:selected").attr('value'));
		var backcolors = parseInt($(c2 + " .c-backcolors option:selected").attr('value'));
		var depth = parseInt($(c2 + " .c-depth option:selected").attr('value'));
		var material = $(c2 + " .c-material option:selected").attr('value');
		
		if (val <= 5)
		{
			if (density != 30 && density != 40 && density != 50 && density != 60 && density != 70 && density != 80)
			{
				$(c2 + " .c-density .jq-selectbox__select-text").text('Выбрать');
			}
			$(c2 + " .c-density li.op-not-kengo").css('display', 'none');
			$(c2 + " .c-density li.op-kengo").css('display', 'block');
			
			if ((facecolors + backcolors) > 2)
			{
				$(c2 + " .c-facecolors .jq-selectbox__select-text").text('0');
				$(c2 + " .c-facecolors li.selected").removeClass('sel selected');
				$('#error-7, #error-8').addClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', '#000');	
				
				$(c2 + " .c-backcolors .jq-selectbox__select-text").text('0');
				$(c2 + " .c-backcolors li.selected").removeClass('sel selected');
				$('#error-7, #error-8').addClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', '#000');
			}
			$(c2 + " .c-facecolors li.op-not-kengo").css('display', 'none');
			/*
			if (backcolors == 4 || backcolors == 3)
			{
				$(c2 + " .c-backcolors .jq-selectbox__select-text").text('0');
				$(c2 + " .c-backcolors li.selected").removeClass('sel selected');
				$('#error-7, #error-8').addClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', '#000');	
			}
			*/
			$(c2 + " .c-backcolors li.op-not-kengo").css('display', 'none');
			
			if (depth == 2)
			{
				$(c2 + " .c-depth .jq-selectbox__select-text").text('0');
				$(c2 + " .c-depth li.selected").removeClass('sel selected');
			}
			//$(c2 + " .c-depth li.op-not-kengo").css('display', 'none');
			
			if (material != 'pvd')
			{
				$(c2 + " .c-material .jq-selectbox__select-text").text('ПВД');
			}
			$(c2 + " .c-material li.op-not-kengo").css('display', 'none');
			
			$(c2 + " .c-material").addClass('disabled');
			$(c2 + " .c-material").addClass('supHidden');
		}
		else
		{	
			
			$(c2 + " .c-density li.op-kengo").css('display', 'none');
			$(c2 + " .c-density li.op-not-kengo").css('display', 'block');

			$(c2 + " .c-facecolors li.op-not-kengo").css('display', 'block');
			$(c2 + " .c-backcolors li.op-not-kengo").css('display', 'block');

			$(c2 + " .c-depth li.op-not-kengo").css('display', 'block');
			$(c2 + " .c-material li.op-kengo").css('display', 'none');
			$(c2 + " .c-material li.op-not-kengo").css('display', 'block');
			
			$(c2 + " .c-material").removeClass('disabled');
			$(c2 + " .c-material").removeClass('supHidden');
			
			$(c2 + ' .c-material').change();
		}
    });
})

$(document).ready(function() {
	
    $(motherId + " select").change(function() {
		calculate_mayka($(this).attr('class'), motherId);
		calctext();
    });
    $(motherId + " .c-facecolors", motherId + " .c-backcolors").attr("old", 0);

	$(motherId + ' input[type="checkbox"]').change(function(){
        var b = ($(this).prop('checked')) ? 1 : 0;
        $(this).attr("value", b);
        calculate_mayka(this.id, motherId);
		calctext();
	})

    calculate_mayka(motherId + " .c-width", motherId);
});

function calculate_mayka(inputElement, motherId) {
	
	$(motherId + " .dev-block").html('');

	var copies = parseInt($(motherId + " .c-copies option:selected").attr('value'));//Количество копий
	
	var dimension = $(motherId + " .c-dimension option:selected").attr('value');//Размер
	var width = parseInt($(motherId + " .c-width option:selected").attr('value'));//Ширина
	var height = parseInt($(motherId + " .c-height option:selected").attr('value'));//Высота
	
	var arrDimensions = dimension.split('x');
	if (dimension == 'd35x55-5') arrDimensions[1] = '55';
	if (dimension == 'd35x60-5') arrDimensions[1] = '60';

	var material = $(motherId + " .c-material option:selected").attr('value');//Материал	
	
	var density = parseInt($(motherId + " .c-density option:selected").attr('value'));//Толщина полиэтилена
	
	var color = parseInt($(motherId + " .c-colored-list option:selected").attr('value'));//Цвет полиэтилена
	
	var isColored = (color != 1) ? 1 : 0;// Цветной полиэтилен (1 - белый цвет)
	
	//var facecolors = parseInt($(motherId + " .c-facecolors option:selected").attr('value'));//Количество цветов (лицо)
	//var backcolors = parseInt($(motherId + " .c-backcolors option:selected").attr('value'));//Количество цветов (задняя часть)
	
	var facecolors = parseInt($(motherId + " .c-facecolors .jq-selectbox__select-text").text());
	var backcolors = parseInt($(motherId + " .c-backcolors .jq-selectbox__select-text").text());
	
	var depth = parseInt($(motherId + " .c-depth option:selected").attr('value'));//Размер донной складки
	
	var isBio = ($(motherId + " .c-bio").closest('.jq-checkbox').hasClass('checked')) ? 1 : 0;//Сделать пакет биоразлагаемым
	var isStrong = ($(motherId + " .c-strong").closest('.jq-checkbox').hasClass('checked')) ? 1 : 0;//Укрепленная ручка
	var isSilverGold = ($(motherId + " .c-silver-gold-pol").closest('.jq-checkbox').hasClass('checked')) ? 1 : 0;//Серебряный или золотой полиэтилен
	var isSilverGoldPrint = ($(motherId + " .c-silver-gold").closest('.jq-checkbox').hasClass('checked')) ? 1 : 0;//Печать серебряной или золотой краской
	var isPlashkaRastr = ($(motherId + " .c-plashka-rastr").closest('.jq-checkbox').hasClass('checked')) ? 1 : 0;//Наличие плашки или растра
	
	var facenbackcolors = facecolors + backcolors;
	
	var materialIndex = 0.95;
	if (material == 'psd') materialIndex = 0.94;
	if (material == 'pvd') materialIndex = 0.928;
	
	// kengo - not kengo
	if ((motherId == '#c-1' || motherId == '#c-2') && copies <= 5)
	{
		$(motherId + ' .not-kengo').css('display', 'none');
		$(motherId + ' .kengo').css('display', 'table-row');		
	}
	else
	{
		$(motherId + ' .kengo').css('display', 'none');
		$(motherId + ' .not-kengo').css('display', 'table-row');			
	}

	//устанавливаем подсказку с максимальным весом

	var max_weight = $(motherId + ' .top-m-'+density+'.top-m-'+material).text();//Максимальный вес (из подсказки)
	$(motherId + ' .m-max-weight').text(max_weight);
	
	//обрабатываем выбор цвета
	$(motherId + " .img-big__wrapper").removeClass('img-c-1 img-c-2 img-c-3 img-c-4 img-c-5 img-c-6 img-c-7 img-c-8 img-c-9 img-c-10 img-c-11 img-c-12 img-c-13 img-c-14 img-c-15 img-c-16 img-c-17 img-c-18 img-c-19 img-c-20 img-c-21');
	$(motherId + " .img-big__wrapper").addClass('img-c-' + color);
	$(motherId + " .c-colored-list").addClass('co-' + color);
	if (color == 7)
	{
		$(motherId + " .img-big__wrapper .img-big__wrapper-text").css('color', '#fff');
	}
	else
	{
		$(motherId + " .img-big__wrapper .img-big__wrapper-text").css('color', '#000');			
	}
	
	var calculate = true;
	if (inputElement == 'c-copies' && copies <= 5 && ((motherId == '#c-1' && c1_copies > 5) || (motherId == '#c-2' && c2_copies > 5)))
	{
		
		calculate = false;
		$(motherId + " .c-dimension .jq-selectbox__dropdown .selected").removeClass('sel selected');
		$(motherId + " .c-density .jq-selectbox__dropdown .selected").removeClass('sel selected');

		$(motherId + " .c-dimension .jq-selectbox__select-text").text('Выбрать');
		$(motherId + " .c-density .jq-selectbox__select-text").text('Выбрать');
		$(motherId + " .c-density .jq-selectbox__select-text").css('width', '56px');
	}
	
	if (copies <= 5)
	{
		var densityClass = 'd' + dimension;

		/*
		$(motherId + " .c-density li").css('display', 'none');
		$(motherId + " .c-density li." + densityClass).css('display', 'block');
		*/
		$(motherId + " .c-density li").addClass('disabled');
		$(motherId + " .c-density li." + densityClass).removeClass('disabled');
		
		var class1 = 'c' + copies + dimension;
		$(motherId + " .c-density li." + class1).addClass('disabled');

		
		if ($(motherId + " .c-density li.selected").hasClass('disabled'))
		{
			$(motherId + " .c-density li.selected." + densityClass).removeClass('selected');
			$(motherId + " .c-density .jq-selectbox__select-text").text('Выбрать');
		}
	}
	else
	{
		$(motherId + " .c-density li").removeClass('disabled');
	}
	
	/*
	if (inputElement == 'c-density' && copies <= 5)
	{
		var dimensionClass = 'd' + density;
		
		$(motherId + " .c-dimension li").css('display', 'none');
		$(motherId + " .c-dimension li." + dimensionClass).css('display', 'block');
	}
	*/
	if ($(motherId + " .c-dimension .jq-selectbox__select-text").text() == 'Выбрать' || $(motherId + " .c-density .jq-selectbox__select-text").text() == 'Выбрать')
	{
		calculate = false;
	}
	
	if (motherId == '#c-1') c1_copies = copies;
	if (motherId == '#c-2') c2_copies = copies;
	
	if ((motherId == '#c-1' && copies > 10) || (motherId == '#c-2' && copies > 5))
	{
		$(motherId + " .c-facecolors li").css('display', 'block');		
		$(motherId + " .c-backcolors li").css('display', 'block');		
	}
	
	if (((motherId == '#c-1' && c1_copies > 5) || (motherId == '#c-2' && c2_copies > 5)) && copies <= 5 && (inputElement != 'c-facecolors' && inputElement != 'c-backcolors'))
	{
		$(motherId + " .c-facecolors .jq-selectbox__dropdown .selected").removeClass('sel selected');
		$(motherId + " .c-facecolors .jq-selectbox__select-text").text('0');
		facecolors = 0;
		$(motherId + " .c-backcolors .jq-selectbox__dropdown .selected").removeClass('sel selected');
		$(motherId + " .c-backcolors .jq-selectbox__select-text").text('0');
		backcolors = 0;
		facenbackcolors = 0;
	}
	
	if (((motherId == '#c-1' && copies <= 5) || (motherId == '#c-2' && copies <= 5)) && (inputElement != 'c-facecolors' && inputElement != 'c-backcolors'))
	{
		/*
		var densityClass = 'd' + dimension;
		
		$(motherId + " .c-facecolors li").css('display', 'none');
		$(motherId + " .c-facecolors li." + densityClass).css('display', 'block');		
		
		$(motherId + " .c-backcolors li").css('display', 'none');
		$(motherId + " .c-backcolors li." + densityClass).css('display', 'block');	
		*/
	}
	
	if ((motherId == '#c-1' && copies <= 10) && (inputElement == 'c-facecolors' || inputElement == 'c-backcolors'))
	{
		maxColors = 2;
		if (dimension == '25x45' || dimension == '28x50' || dimension == '30x60' || dimension == '35x60' || dimension == '39x60')
		{
			maxColors = 2;
		}
		
		if (inputElement == 'c-facecolors') 
		{
			var otherColor = maxColors - facecolors;
		}
		if (inputElement == 'c-backcolors') 
		{
			var otherColor = maxColors - backcolors;
		}
		
		var densityClass = 'd' + dimension;
		
		var nextClass = (inputElement == 'c-facecolors') ? 'c-backcolors' : 'c-facecolors';
		
		$(motherId + " ."+nextClass+" li").each(function(){
			/*if ($(this).hasClass(densityClass)) */$(this).css('display', 'block');
			
			var colorValue = parseInt($(this).text());
			if (colorValue > otherColor)
			{
				$(this).css('display', 'none');
			}
		})
	}
	
	if ((motherId == '#c-2' && copies <= 5) && (inputElement == 'c-facecolors' || inputElement == 'c-backcolors'))
	{
		maxColors = 2;
		if (dimension == 'd30x45' || dimension == 'd35x45' || dimension == 'd40x50' || dimension == 'd45x50' || dimension == '35x55+5' || dimension == '35x60+5')
		{
			maxColors = 2;
		}
		
		if (inputElement == 'c-facecolors') 
		{
			var otherColor = maxColors - facecolors;
		}
		if (inputElement == 'c-backcolors') 
		{
			var otherColor = maxColors - backcolors;
		}
		var densityClass = 'd' + dimension;
		
		var nextClass = (inputElement == 'c-facecolors') ? 'c-backcolors' : 'c-facecolors';
		
		$(motherId + " ."+nextClass+" li").each(function(){
			/*if ($(this).hasClass(densityClass)) */$(this).css('display', 'block');
			
			var colorValue = parseInt($(this).text());
			if (colorValue > otherColor)
			{
				$(this).css('display', 'none');
			}
		})
	}
	
	if (motherId == '#c-3' && (inputElement != 'c-facecolors' || inputElement != 'c-backcolors'))
	{
		var copiesClass = 'c' + copies
		if (!facecolors && !backcolors)
		{
			$(motherId + " .c-facecolors li").css('display', 'none');
			$(motherId + " .c-facecolors li." + copiesClass).css('display', 'block');		
			
			$(motherId + " .c-backcolors li").css('display', 'none');
			$(motherId + " .c-backcolors li." + copiesClass).css('display', 'block');	
		}

		if ((copies == 200 && facenbackcolors > 2) || (copies == 300 && facenbackcolors > 4))
		{
			$(motherId + " .c-facecolors .jq-selectbox__select-text").text('0');
			$(motherId + " .c-facecolors li.selected").removeClass('sel selected');	
			$(motherId + " .c-backcolors .jq-selectbox__select-text").text('0');
			$(motherId + " .c-backcolors li.selected").removeClass('sel selected');		

			facecolors = 0;
			backcolors = 0;
			facenbackcolors = 0;			
		}
	}
	
	if (motherId == '#c-3' && (inputElement == 'c-facecolors' || inputElement == 'c-backcolors'))
	{
		maxColors = 6;
		if (copies == 200) maxColors = 2;
		if (copies == 300) maxColors = 4;
		if (inputElement == 'c-facecolors') 
		{
			var otherColor = maxColors - facecolors;
		}
		if (inputElement == 'c-backcolors') 
		{
			var otherColor = maxColors - backcolors;
		}
		
		var copiesClass = 'c' + copies;
		var nextClass = (inputElement == 'c-facecolors') ? 'c-backcolors' : 'c-facecolors';
		
		$(motherId + " ."+nextClass+" li").each(function(){
			$(this).css('display', 'block');
			/*if ($(this).hasClass(copiesClass)) $(this).css('display', 'none');*/
			
			var colorValue = parseInt($(this).text());
			if (colorValue > otherColor)
			{
				$(this).css('display', 'none');
			}
		})
	}
	
	if (motherId == '#c-1' || motherId == '#c-2')
	{
		if (copies == 1 || copies == 2)
		{
			$(motherId + " .c-colored-list li.co-1").click();
			color = 1;
			$(motherId + " .c-colored-list li").css('display', 'none');
			$(motherId + " .c-colored-list li.co-1").css('display', 'inline-block');
			$(motherId + " .c-colored-list .jq-selectbox__dropdown").css('width', '108px');
		}
		else
		{
			$(motherId + " .c-colored-list li").css('display', 'inline-block');
			$(motherId + " .c-colored-list .jq-selectbox__dropdown").css('width', '313px');
			
		}
	}
	
	if (motherId == '#c-1' && copies == 1)
	{
		$(motherId + " .c-dimension li.с1-dis").css('display', 'none');
	}
	if (motherId == '#c-1' && copies != 1)
	{
		$(motherId + " .c-dimension li.с1-dis").css('display', 'block');
	}
	
	/*
	if (motherId == '#c-3')
	{
		var facenbackcolorsClass = 'col' + facenbackcolors;
		$(motherId + " .c-density li").css('display', 'none');
		$(motherId + " .c-density li." + facenbackcolorsClass).css('display', 'block');		
	}
	*/
	//устанавливаем фальцы
	var falci = width / 4;
	$(motherId + " .c-falci").html(falci);
	
	var allsOk = true;
	if (motherId == '#c-2' && copies <= 5)
	{
		$(motherId + " .c-depth li.op-not-kengo").css('display', 'none');
		if (dimension == '30x40' || dimension == '30x45' || dimension == '35x45' || dimension == '40x50' || dimension == '45x50' || (dimension == '50x60' && copies == 5) || (dimension == '60x50' && copies == 5) || dimension == '35x55+5' || dimension == '70x50')
		{
			$('.depth-2').css('display', 'table-row');
		}
		else
		{
			$('.depth-2').css('display', 'none');
			depth = 0;
			$(motherId + " .c-depth li.selected").removeClass('sel selected');
		}
		
		//укрепленная ручка для нового поставщика
		var cstrongCheck = dimension + '-' + density;
		
		if (copies == 5 && (cstrongCheck == '35x45-60' || cstrongCheck == '35x45-70' || cstrongCheck == '35x45-80' || cstrongCheck == '40x50-50' || cstrongCheck == '40x50-60' || cstrongCheck == '40x50-70' || cstrongCheck == '40x50-80' || cstrongCheck == '45x50-50' || cstrongCheck == '45x50-60' || cstrongCheck == '45x50-70' || cstrongCheck == '45x50-80' || cstrongCheck == '50x60-60' || cstrongCheck == '50x60-70' || cstrongCheck == '50x60-80' || cstrongCheck == '60x50-60' || cstrongCheck == '60x50-70' || cstrongCheck == '60x50-80' || cstrongCheck == '70x50-60' || cstrongCheck == '30x45-80' || cstrongCheck == '30x45-70' || cstrongCheck == '30x40-80'))
		{
			$('.strong-2').css('display', 'table-row');
		}
		else
		{
			$('.strong-2').css('display', 'none');
		}
	}
	
	if (motherId == '#c-1')
	{
		if (copies == 10 || copies == 20 || copies == 30)
		{
			$(motherId + " .c-density li.copy-not-10-20-30").css('display', 'none');
			if (density == 12)
			{
				$(motherId + " .c-density .jq-selectbox__select-text").text('Выбрать');
				$(motherId + " .c-density li.copy-not-10-20-30").removeClass('selected sel');
			}
		}
		else
		{
			$(motherId + " .c-density li.copy-not-10-20-30").css('display', 'block');	
		}
	}
	
	
	if (facenbackcolors == 0)
	{
		var oneItemPrice = 0;
		var orderItemPrice = 0;
		var oneItemMass = 0;
		var orderItemMass = 0;	

		$(motherId + " .c-packet_massa").number(oneItemMass, 2, ',', ' ');
		$(motherId + " .c-full_massa").number(orderItemMass, 2, ',', ' ');	

		$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');
		$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');	
	}
	else
	{
	

	
	if (motherId == '#c-1')
	{
		if (copies <= 5)
		{
			$('#error-1, #error-2, #error-3, #error-4, #error-5, #error-6, #error-7, #error-8, #error-9, #error-10, #error-11, #error-12, #error-13').addClass('hidden');
			$(motherId + ' .c-full_massa-c').css('color', '#000');	
			//new logic
			var oneItemPrice = 0;
			var orderItemPrice = 0;
			var oneItemMass = 0;
			var orderItemMass = 0;
			
			if (calculate)
			{
				oneItemPrice = mayka[dimension][density][copies];
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice+'</div>');
				var procent = 1.00;
				if (isColored && (color != 15 && color != 12))
				{
					procent = procent + 0.20;
					$(motherId + " .dev-block").append('<div>+ 15% за цвет</div>');
				}
				if (isColored && (color == 15 || color == 12))
				{
					procent = procent + 0.20;
					$(motherId + " .dev-block").append('<div>+ 20% за цвет</div>');
				}
				if (isBio)
				{
					procent = procent + 0.15;
					$(motherId + " .dev-block").append('<div>+ 15% за био разлагаемый</div>');
				}
				
				var totalProc = ((procent-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговый процент : '+totalProc+'%</div>');
				var basePrice = oneItemPrice;
				oneItemPrice = oneItemPrice * procent;
				var totalPrice = oneItemPrice.toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговая цена : '+basePrice+' + '+ totalProc +' = '+totalPrice+'</div>');
				var klishePrice = mayka[dimension][density]['klishe'];
				orderItemPrice = (oneItemPrice * copies * 1000).toFixed(2);
				
				oneItemMass = ((parseInt(arrDimensions[1]) * (parseInt(arrDimensions[0]) + (2 * falci)) * density * 2 * materialIndex * 1) / 10000).toFixed(2);
				orderItemMass = (((parseInt(arrDimensions[1]) * (parseInt(arrDimensions[0]) + (2 * falci)) * density * 2 * materialIndex * 1) / 10000) * copies).toFixed(2);
			}
			
			$(motherId + " .c-packet_massa").number(oneItemMass, 2, ',', ' ');
			$(motherId + " .c-full_massa").number(orderItemMass, 2, ',', ' ');
			if (allsOk)
			{
				if (oneItemPrice == '-')
					$(motherId + " .c-packet_price_html").html('-');
				else
					$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');
					
				if (orderItemPrice == '-')
					$(motherId + " .c-total_price_html").html('-');
				else
					$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');			
			}
			else
			{
				$(motherId + " .c-packet_price_html").html(oneItemPrice);
				$(motherId + " .c-total_price_html").html(orderItemPrice);			
			}			
		}
		else
		{
			//old logic
			/*
			if (isColored) 
			{
				$('#error-1').removeClass('hidden');
			}
			else
			{
				$('#error-1').addClass('hidden');
			}
			*/
		
			var multiplier = 1;
			//if (isBio == 1) multiplier = multiplier + 0.1;		
			
			if (isColored && (color != 15 && color != 12))
			{
				$(motherId + " .dev-block").append('<div>+ 15% за цвет</div>');
				multiplier = multiplier + 0.20;
			}
			if (isColored && (color == 15 || color == 12))
			{
				$(motherId + " .dev-block").append('<div>+ 20% за цвет</div>');
				multiplier = multiplier + 0.20;
			}
			
			var totalProc = ((procent-1)*100).toFixed(2);
			$(motherId + " .dev-block").append('<div>Итоговый процент : '+totalProc+'%</div>');			
		
			if (facenbackcolors == 0) facenbackcolors = 1;
		
			if (facenbackcolors > 4)
			{
				$('#error-3').removeClass('hidden');			
			}
			else
			{
				$('#error-3').addClass('hidden');
			}
		
			var s = new Array();
			s[1] = 5;
			s[2] = 10;
			s[3] = 15;
			s[4] = 20;
			s[5] = 30;
			s[6] = 40;
			s[7] = 50;
			s[8] = 100;
			s[9] = 250;
			s[10] = 500;
			s[11] = 1000;
			var t = new Array(arrMaikaP_high.length);
			for (var z = 1; z < t.length; z++) 
			{
				t[z] = new Array()
			}
			if (material == 'pvd') {
				t = arrMaikaP_high
			} else {
				if (material == 'pnd') {
					t = arrMaikaP
				} else {
					if (material == 'psd') {
						for (var z = 1; z < arrMaikaP_high.length; z++) {
							for (var y = 1; y < s.length; y++) {
								t[z][s[y]] = arrMaikaP_high[z][s[y]] * 0.3 + arrMaikaP[z][s[y]] * 0.7
							}
						}
					}
				}
			}
			
				
			var oneItemMass = ((height * (width + (2 * falci)) * density * 2 * materialIndex * 1) / 10000).toFixed(2);
			var orderItemMass = (((height * (width + (2 * falci)) * density * 2 * materialIndex * 1) / 10000) * copies).toFixed(2);

			$('#error-4').addClass('hidden');
			var is4error = false;
			
			var oneItemPrice = (height * width * density * 3 * 1 * t[facenbackcolors][copies]) / 10000000;
			$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
			var basePrice = oneItemPrice;
			if (isBio)
			{
				oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
				var bioDiff = (oneItemPrice - basePrice).toFixed(2);
				$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
			}
			else
			{
				var bioDiff = 0;
			}
			
			if (copies == 10 && oneItemMass < 6) multiplier = multiplier + 0.30;//правка от Семена 01.11
			
			oneItemPrice = oneItemPrice * multiplier;
			var totalPrice = oneItemPrice.toFixed(2);
			var totalProc = ((multiplier-1)*100).toFixed(2);
			$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');
			
			//if (oneItemMass < 5) oneItemPrice = oneItemPrice * 1.8;
			//if (oneItemMass < 8 && oneItemMass >= 5) oneItemPrice = oneItemPrice * 1.3;

			var orderItemPrice = (oneItemPrice * copies * 1000).toFixed(2);		
			
			if (facenbackcolors <= 4 || copies >= 100)
			{
				var allsOk = true;			
			}
			else
			{
				oneItemPrice = "-";
				$('#error-4').removeClass('hidden');
				is4error = true;
				var allsOk = true;				
			}
			$('#error-2').addClass('hidden');
			$('#error-5').addClass('hidden');
			$('#calc .result p.res-data').removeClass('mobile-error-margin');
			$('#error-5').html('');
			
			if (orderItemMass < 100 && false) 
			{
				var N = 100 / (oneItemMass/1000);
				N = Math.round(N/100) * 100;
				var Nnum = N/1000;
				if (Nnum <= 10 ) Nnum = 10;
				if (Nnum > 10 && Nnum < 15 ) Nnum = 10;
				if (Nnum >= 15 && Nnum < 20 ) Nnum = 15;
				if (Nnum >= 20 && Nnum < 30 ) Nnum = 20;
				if (Nnum >= 30 && Nnum < 40 ) Nnum = 30;
				if (Nnum >= 40 && Nnum < 50 ) Nnum = 40;
				if (Nnum >= 50 && Nnum < 100 ) Nnum = 50;
				if (Nnum >= 100 && Nnum < 250 ) Nnum = 100;
				if (Nnum >= 250 && Nnum < 500 ) Nnum = 250;
				if (Nnum >= 500 && Nnum < 1000 ) Nnum = 500;
				if (Nnum >= 1000) Nnum = 1000;

				var oneItemPrice = (height * width * density * 3 * 1 * t[facenbackcolors][Nnum]/* * (1 + 0.2 * isColored)*/) / 10000000;
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
				var basePrice = oneItemPrice;
				if (isBio)
				{
					oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
					var bioDiff = (oneItemPrice - basePrice).toFixed(2);
					$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
				}			
				else
				{
					var bioDiff = 0;
				}				
				oneItemPrice = oneItemPrice * multiplier;
				var totalPrice = oneItemPrice.toFixed(2);
				var totalProc = ((multiplier-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');
				/*
				if (oneItemMass < 5)
				{
					oneItemPrice = oneItemPrice * 1.8;
				}
				if (oneItemMass < 8 && oneItemMass >= 5)
				{
					oneItemPrice = oneItemPrice * 1.3;
				}
				*/
					
				orderItemPrice = (oneItemPrice * N).toFixed(2);
					
				//$('#error-2').removeClass('hidden');
				//$('#error-5').removeClass('hidden');
				$('#calc .result p.res-data').addClass('mobile-error-margin');
				if (!is4error)
				{
					$('#error-5').removeClass('hidden');
					$('#error-5').html('Минимальный тираж для выбранных Вами параметров пакета - '+N+' шт.<br>Общая стоимость этого тиража '+$.number(orderItemPrice, 2, ',', ' ')+' руб.');					
				}
					
				if (is4error)
				{
					$('#error-5').addClass('hidden');
					$('#calc .result p.res-data').removeClass('mobile-error-margin');
					oneItemPrice = "-";
					orderItemPrice = "-";
				}
				orderItemPrice = "-";
				allsOk = true;
			}

			$(motherId + " .c-packet_massa").number(oneItemMass, 2, ',', ' ');
			$(motherId + " .c-full_massa").number(orderItemMass, 2, ',', ' ');
			if (allsOk)
			{
				if (oneItemPrice == '-')
					$(motherId + " .c-packet_price_html").html('-');
				else
					$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');
					
				if (orderItemPrice == '-')
					$(motherId + " .c-total_price_html").html('-');
				else
					$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');			
			}
			else
			{
				$(motherId + " .c-packet_price_html").html(oneItemPrice);
				$(motherId + " .c-total_price_html").html(orderItemPrice);			
			}
		}
	}
	if (motherId == '#c-2')
	{
		if (copies <= 5)
		{	
			$('#error-1, #error-2, #error-3, #error-4, #error-5, #error-6, #error-7, #error-8, #error-9, #error-10, #error-11, #error-12, #error-13').addClass('hidden');
			$(motherId + ' .c-full_massa-c').css('color', '#000');
			//new logic
			var oneItemPrice = 0;
			var orderItemPrice = 0;
			var oneItemMass = 0;
			var orderItemMass = 0;
			if (calculate)
			{
				oneItemPrice = virub[dimension][density][copies];
				
				if (isStrong && virub[dimension][density][copies+'d'])
				{
					oneItemPrice = virub[dimension][density][copies+'d'];
				}
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice+'</div>');

				var procent = 1.00;
				if (isColored && (color != 15 && color != 12))
				{
					procent = procent + 0.20;
					$(motherId + " .dev-block").append('<div>+ 15% за цвет</div>');
				}
				if (isColored && (color == 15 || color == 12))
				{
					procent = procent + 0.20;
					$(motherId + " .dev-block").append('<div>+ 20% за цвет</div>');
				}
				if (isBio)
				{
					procent = procent + 0.15;
					$(motherId + " .dev-block").append('<div>+ 15% за био разлагаемый</div>');
				}
				if (depth != 0)
				{
					procent = procent + 0.1;
					$(motherId + " .dev-block").append('<div>+ 10% за донную складку</div>');
				}
				
				var totalProc = ((procent-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговый процент : '+totalProc+'%</div>');
				
				var basePrice = oneItemPrice				
				oneItemPrice = oneItemPrice * procent;				
				var totalPrice = oneItemPrice.toFixed(2);
				
				$(motherId + " .dev-block").append('<div>Итоговая цена : '+basePrice+' + '+ totalProc +' = '+totalPrice+'</div>');				
				
				var klishePrice = virub[dimension][density]['klishe'];
				orderItemPrice = (oneItemPrice * copies * 1000).toFixed(2);
				
				oneItemMass = ((parseInt(arrDimensions[0]) * materialIndex * density * 2 * (parseInt(arrDimensions[1]) + depth)) / 10000 + 3 * isStrong).toFixed(2);
				orderItemMass = (((parseInt(arrDimensions[0]) * materialIndex * density * 2 * (parseInt(arrDimensions[1]) + depth)) / 10000 + 3 * isStrong) * copies).toFixed(2);
			}
			var oneItemMass = new String(oneItemMass);
			var oneItemMass = oneItemMass.replace(".",",");
			$(motherId + " .c-packet_massa").html(oneItemMass);
			$(motherId + " .c-full_massa").number(orderItemMass, 2, ',', ' ');
			if (allsOk)
			{
				if (oneItemPrice == '-')
					$(motherId + " .c-packet_price_html").html('-');
				else
					$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');
					
				if (orderItemPrice == '-')
					$(motherId + " .c-total_price_html").html('-');
				else
					$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');			
			}
			else
			{
				$(motherId + " .c-packet_price_html").html(oneItemPrice);
				$(motherId + " .c-total_price_html").html(orderItemPrice);			
			}	
		}
		else
		{
			//old logic
			var multiplier = 1;
			//if (isBio == 1) multiplier = multiplier * 1.1;
			if (isColored && (color != 15 && color != 12))
			{
				$(motherId + " .dev-block").append('<div>+ 15% за цвет</div>');
				multiplier = multiplier + 0.20;
			}
			if (isColored && (color == 15 || color == 12))
			{
				$(motherId + " .dev-block").append('<div>+ 15% за цвет</div>');
				multiplier = multiplier + 0.20;
			}
			/*
			if (isColored) 
				$('#error-6').removeClass('hidden');
			else	
				$('#error-6').addClass('hidden');
			*/
			if (facenbackcolors == 0) facenbackcolors = 1;
		
			if (facenbackcolors > 4)
			{
				//$('#error-7').css('display', 'inline-block');
				$('#error-7').removeClass('hidden');			
			}
			else
			{
				//$('#error-7').css('display', 'none');	
				$('#error-7').addClass('hidden');			
			}
		
			var r = document.getElementById("material");
			var s = new Array();
			s[1] = 5;
			s[2] = 10;
			s[3] = 20;
			s[4] = 30;
			s[5] = 40;
			s[6] = 50;
			s[7] = 100;
			s[8] = 250;
			s[9] = 500;
			s[10] = 1000;
			var t = new Array(arrFleksoP_high.length);
			for (var z = 1; z < t.length; z++) 
			{
				t[z] = new Array()
			}
			if (material == 'pvd') {
				t = arrFleksoP_high
			} else {
				if (material == 'pnd') 
				{
					t = arrFleksoP_low
				} 
				else 
				{
					if (material == 'psd') 
					{
						for (var z = 1; z < arrFleksoP_high.length; z++) 
						{
							for (var y = 1; y < s.length; y++) {
								t[z][s[y]] = arrFleksoP_high[z][s[y]] * 0.3 + arrFleksoP_low[z][s[y]] * 0.7
							}
						}
					}
				}
			}
			var oneItemMass = ((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong).toFixed(2);
			var orderItemMass = (((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong) * copies).toFixed(2);
			if (oneItemMass <= 10)
			{
				$(motherId + " .dev-block").append('<div>+ 20% за массу менее 10г.</div>');
				multiplier = multiplier + 0.20;
			}
			if (oneItemMass <= 15 && oneItemMass > 10)
			{
				$(motherId + " .dev-block").append('<div>+ 15% за массу менее 15г.</div>');
				multiplier = multiplier + 0.15;
			}
			
			if (copies == 10 && orderItemMass <= 80)
			{
				multiplier = multiplier + 2.8;
				$(motherId + " .dev-block").append('<div>+ 280% за массу тиража менее 80кг.</div>');
			}
			
			if (copies >= 20 && oneItemMass < 7) multiplier = multiplier + 0.50;//правка от Семена 01.11 (0.2 + 0.5 = 0.7)
			
			var totalProc = ((multiplier-1)*100).toFixed(2);
			$(motherId + " .dev-block").append('<div>Итоговый процент : '+totalProc+'%</div>');
			
			var allsOk = true;

			if (facenbackcolors <= 4 || orderItemMass >= 500) {

				var oneItemPrice = (((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong) * t[facenbackcolors][copies]) / 1000;
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
				var basePrice = oneItemPrice;				
				if (isBio)
				{
					oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
					var bioDiff = (oneItemPrice - basePrice).toFixed(2);
					$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
				}	
				else
				{
					var bioDiff = 0;
				}				
				oneItemPrice = oneItemPrice * multiplier;
				var totalPrice = oneItemPrice.toFixed(2);
				var totalProc = ((multiplier-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');

				var orderItemPrice = (oneItemPrice * copies * 1000).toFixed(2);

				var allsOk = true;	
			}
		
			var is8error = false;		
			if (facenbackcolors > 4 && orderItemMass < 500)
			{
				var N = 500 / (oneItemMass/1000);
				N = Math.round(N/100) * 100;
				// ---
				var oneItemPrice = (((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong) * t[facenbackcolors][copies]) / 1000;
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
				var basePrice = oneItemPrice;
				if (isBio)
				{
					oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
					var bioDiff = (oneItemPrice - basePrice).toFixed(2);
					$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
				}	
				else
				{
					var bioDiff = 0;
				}				
				oneItemPrice = oneItemPrice * multiplier;
				var totalPrice = oneItemPrice.toFixed(2);
				var totalProc = ((multiplier-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');

				var orderItemPrice = (oneItemPrice * N).toFixed(2);

				// ---
				orderItemPrice = orderItemPrice;

				oneItemPrice = "-";
				
				$('#error-11').addClass('hidden');
				$('#error-12').addClass('hidden');
				$('#calc .result p.res-data').removeClass('mobile-error-margin');
				$('#error-10').addClass('hidden');
				$('#error-9').addClass('hidden');
				$('#error-8').removeClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', 'red');
				is8error = true;
				var allsOk = true;					
			}
			else
			{
				$('#error-8').addClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', '#000');				
			}
		
			if (allsOk && (facenbackcolors == 5 || facenbackcolors == 6) && !is8error)
			{
				if (copies < 15)
				{
					var oneItemPrice = (((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong) * t[facenbackcolors][15]) / 1000;
					$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
					var basePrice = oneItemPrice;	
					if (isBio)
					{
						oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
						var bioDiff = (oneItemPrice - basePrice).toFixed(2);
						$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
					}	
					else
					{
						var bioDiff = 0;
					}						
					oneItemPrice = oneItemPrice * multiplier;
					var totalPrice = oneItemPrice.toFixed(2);
					var totalProc = ((multiplier-1)*100).toFixed(2);
					$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');
					
					var X3 = oneItemPrice * 15000;
					oneItemPrice = "-";
					orderItemPrice = X3;
					
					$('#error-11').addClass('hidden');
					$('#error-12').addClass('hidden');
					$('#calc .result p.res-data').removeClass('mobile-error-margin');
					$('#error-10').addClass('hidden');
					$('#error-8').addClass('hidden');
					$(motherId + ' .c-full_massa-c').css('color', '#000');	
					//$('#error-9').removeClass('hidden');
					var allsOk = true;
				}
				else
				{
					$('#error-9').addClass('hidden');
					var allsOk = true;
				}
			}
			else
			{
				$('#error-9').addClass('hidden');
				
			}
			//  необработано ниже
			
			if (orderItemMass < 100 && false) {
				var N = 100 / (oneItemMass/1000);
				N = Math.round(N/100) * 100;
				var Nnum = N/1000;
				if (Nnum <= 10 ) Nnum = 10;
				if (Nnum > 10 && Nnum < 15 ) Nnum = 10;
				if (Nnum >= 15 && Nnum < 20 ) Nnum = 15;
				if (Nnum >= 20 && Nnum < 30 ) Nnum = 20;
				if (Nnum >= 30 && Nnum < 40 ) Nnum = 30;
				if (Nnum >= 40 && Nnum < 50 ) Nnum = 40;
				if (Nnum >= 50 && Nnum < 100 ) Nnum = 50;
				if (Nnum >= 100 && Nnum < 250 ) Nnum = 100;
				if (Nnum >= 250 && Nnum < 500 ) Nnum = 250;
				if (Nnum >= 500 && Nnum < 1000 ) Nnum = 500;
				if (Nnum >= 1000) Nnum = 1000;
					
				var oneItemPrice = (((width * materialIndex * density * 2 * (height + depth)) / 10000 + 3 * isStrong) * t[facenbackcolors][copies]) / 1000;
				$(motherId + " .dev-block").append('<div>Значение из таблицы : '+oneItemPrice.toFixed(2)+'</div>');
				var basePrice = oneItemPrice;				
				if (isBio)
				{
					oneItemPrice = (oneItemPrice + ((14 * orderItemMass)  / (copies * 1000))).toFixed(2);
					var bioDiff = (oneItemPrice - basePrice).toFixed(2);
					$(motherId + " .dev-block").append('<div>+14 руб/кг за биоразлагаемый : + '+bioDiff+' руб/пакет</div>');
				}
				else
				{
					var bioDiff = 0;
				}
				oneItemPrice = oneItemPrice * multiplier;
				var totalPrice = oneItemPrice.toFixed(2);
				var totalProc = ((multiplier-1)*100).toFixed(2);
				$(motherId + " .dev-block").append('<div>Итоговая цена : ('+basePrice.toFixed(2)+' + '+bioDiff+'(за био)) + '+ totalProc +'% = '+totalPrice+'</div>');

				var orderItemPrice = (oneItemPrice * N).toFixed(2);

				var newPrice = (oneItemPrice * N).toFixed(2);

				orderItemPrice = "-";
				
				$('#error-8').addClass('hidden');
				$(motherId + ' .c-full_massa-c').css('color', '#000');	
				$('#error-9').addClass('hidden');
				$('#error-10').addClass('hidden');
				//$('#error-11').removeClass('hidden');
				//$('#error-12').removeClass('hidden');
				$('#calc .result p.res-data').addClass('mobile-error-margin');
				
				//$('#error-12').html("Минимальная масса тиража 100 кг, минимальный тираж для пакета Ваших параметров – "+N+"шт. Общая стоимость тиража "+$.number(newPrice, 2, ',', ' ')+'<span class="rub"> i</span><br><a href="#calc" data-scroll="" onclick="$(\'#popup-10-1 form\').data(\'goal\', \'54\');$(\'#c-2 .btn\').click(); return false;" class="link dotted">Заказать '+N+' шт. За '+$.number(newPrice, 2, ',', ' ')+' руб.</a>');
				allsOk = true;
			}
			else
			{
				$('#error-11').addClass('hidden');
				$('#error-12').addClass('hidden');	
				$('#calc .result p.res-data').removeClass('mobile-error-margin');			
			}
		
		
			var oneItemMass = new String(oneItemMass);
			var oneItemMass = oneItemMass.replace(".",",");
			$(motherId + " .c-packet_massa").html(oneItemMass);
			$(motherId + " .c-full_massa").number(orderItemMass, 2, ',', ' ');
			if (allsOk)
			{
				if (oneItemPrice == '-')
					$(motherId + " .c-packet_price_html").html('-');
				else
					$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');
					
				if (orderItemPrice == '-')
					$(motherId + " .c-total_price_html").html('-');
				else
					$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ').append('<span class="rub"> i</span>');			
			}
			else
			{
				$(motherId + " .c-packet_price_html").html(oneItemPrice);
				$(motherId + " .c-total_price_html").html(orderItemPrice);			
			}			
		}
	}
	if (motherId == '#c-3' && calculate)
	{
		//new special logic
		var oneItemPrice = 0;
		var orderItemPrice = 0;
		if (facenbackcolors > 0)
		{
			var basePrice = shelk[facenbackcolors][copies];
			$(motherId + " .dev-block").append('<div>Значение из таблицы : '+basePrice+'</div>');
		}		
		if (isPlashkaRastr == 1)
		{
			basePrice = basePrice * 1.15;
			$(motherId + " .dev-block").append('<div>+ 15% за плашку/растр</div>');
		}
		if (dimension == '20x30' || dimension == '30x40')
		{
			basePrice = basePrice - 0.5;
			$(motherId + " .dev-block").append('<div>-0,5 от цены за 20x30 или 30x40</div>');
		}
		if (dimension == '60x50')
		{
			basePrice = basePrice + 3.0;
			$(motherId + " .dev-block").append('<div>+3.0 к цене за 60x50</div>');
		}
		if (dimension == '70x60')
		{
			basePrice = basePrice + 7.0;
			$(motherId + " .dev-block").append('<div>+7.0 к цене за 70x60</div>');
		}
		if (density == 70)
		{
			basePrice = basePrice + 2.0;
			$(motherId + " .dev-block").append('<div>+2.0 к цене за 70</div>');
		}
		if (density == 80)
		{
			basePrice = basePrice + 2.5;
			$(motherId + " .dev-block").append('<div>+2.5 к цене за 80</div>');
		}
		if (isSilverGoldPrint == 1)
		{
			basePrice = basePrice + 1.0;
			$(motherId + " .dev-block").append('<div>+1,0 к цене за серебряный/золотой</div>');
		}
		if (color != 1)
		{
			basePrice = basePrice + 2.0;
			$(motherId + " .dev-block").append('<div>+2,0 к цене за цвет</div>');
		}
		
		oneItemPrice = basePrice;
		if (oneItemPrice)
		{
			$(motherId + " .dev-block").append('<div>Итого цена: '+oneItemPrice.toFixed(2)+'</div>');
		}
		orderItemPrice = oneItemPrice * copies;
		
		if (allsOk)
		{
			$(motherId + " .c-packet_price_html").number(oneItemPrice, 2, ',', ' ');
			$(motherId + " .c-total_price_html").number(orderItemPrice, 2, ',', ' ');			
		}
		else
		{
			$(motherId + " .c-packet_price_html").html(oneItemPrice);
			$(motherId + " .c-total_price_html").html(orderItemPrice);			
		}
	}
	
	}//цвета != 0
}