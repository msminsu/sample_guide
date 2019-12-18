$(document).ready(function () {
	// 셀렉트 박스
	$("select").each(function () {
		var orgSelect = $(this),
			opt_num = $(this).children("option").length,
			customSelect,
			customOptWrap,
			counter,
			customOption;

		for (orgSelect.addClass("select-hidden"),
			orgSelect.wrap('<div class="select"><\/div>'),
			orgSelect.after('<div class="select-styled href="#"><\/a>'),
			customSelect = orgSelect.next("div.select-styled"),
			customSelect.text(orgSelect.children("option").eq(0).text()),
			customOptWrap = $("<ul />", {
				"class": "select-options"
			}).insertAfter(customSelect),
			counter = 0; counter < opt_num; counter++)
			$("<li />", {
				text: orgSelect.children("option").eq(counter).text(),
				rel: orgSelect.children("option").eq(counter).val()
			}).appendTo(customOptWrap);

		customOption = customOptWrap.children("li");

		customSelect.click(function (e) {
			e.stopPropagation();
			$("div.select-styled.active").not(this).each(function () {
				$(this).removeClass("active").next("ul.select-options").hide()
			});
			$(this).toggleClass("active").next("ul.select-options").toggle()
		});

		$('#province').closest(".select-box").find('.select-options').on('click', 'li', function (e) {
			e.stopPropagation();
			$(this).closest(".select-box").find('.select-styled').text($(this).text()).removeClass("active");
			orgSelect.val($(this).attr("rel"));
			orgSelect.closest(".select-box").addClass("active");
			customOptWrap.hide()
		});

		$('#area').closest(".select-box").find('.select-options').on('click', 'li', function (e) {
			e.stopPropagation();
			customSelect.text($(this).text()).removeClass("active");
			orgSelect.val($(this).attr("rel"));
			orgSelect.closest(".select-box").addClass("active");
			customOptWrap.hide()
		});

		$(document).click(function () {
			customSelect.removeClass("active");
			customOptWrap.hide()
		})

	});

	// 약관동의
		/* $(".all-box input").on('click',function(){
			var chk = $(this).is(":checked");//.attr('checked');
			if(chk) $("input").prop('checked', true);
			else  $("input").prop('checked', false);
		}); */
	
})