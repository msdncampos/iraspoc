jQuery(document).ready(function () {

	jQuery("[name=btnLogin]").on('click', function () {

		var  val = jQuery("#wffm5b702cf18dba4c03bfbdeba6615290b0_Sections_0__Fields_0__Value").val();

		jQuery.ajax({
			type: "POST",
			url: "api/Sitecore/Assessment/CheckUser",
			data: {'id': val},
			success: function (msg) {

				var url="";

				switch(msg) {
					case "0":
						//walang modal diretso na sa tax form
						window.location.href = "http://iraspoc-cm/Tax%20Form/" +"?id="+ val;
						break;
					case "1":
					alert("1");
						//may modal muna bago mag proceed.
						jQuery("#ContinueModal").show();

						jQuery("#yes").on('click', function (e) {
						e.preventDefault();
							window.location.href = "http://iraspoc-cm/Tax%20Form/" +"?id="+ val;
						});
						break;
					case "2":
						//may modal muna bago mag proceed.
						jQuery("#ContinueModal").show();
						jQuery("#yes").on('click', function (e) {
							e.preventDefault();
							window.location.href = "http://iraspoc-cm/Confirmation%20Page/" +"?id="+ val;
						});
						break;
					case "3":
						window.location.href = "http://iraspoc-cm/Acknowledgement%20Page/" +"?id="+ val;
						break;
					default:
						window.location.href = "http://iraspoc-cm/Tax%20Form/" +"?id="+ val;
				}

				//window.location.href = url;
			}
		});

	});

	jQuery("#btnClear").on('click', function () {
		jQuery('input:text').val('');
		jQuery('input[type=radio]').prop('checked', false);

	});

	jQuery("[name=btnSaved]").on('click', function () {

		var yos1="";
		var satisfy1="";
		var fyoa1="";
		var hasError=false;

		removeValidation();

		if(!jQuery('#yos1').is(':checked') && !jQuery('#yos2').is(':checked'))
		{
			validationError('#divyos','* Required Field');
			jQuery("#yos2").focus();
			//AjaxPostToChatBot();
			//return;
			hasError=true;
		}

		if(jQuery('#yos1').is(':checked'))
		{
			yos1="1";
		}else{
			yos1="2";
		}

		if(!jQuery('#satisfy1').is(':checked') && !jQuery('#satisfy2').is(':checked'))
		{
			validationError('#divexcempt','* Required Field');
			jQuery("#satisfy2").focus();
			//return;
			hasError=true;
		}

		if(jQuery('#satisfy1').is(':checked'))
		{
			satisfy1="1";
		}else{
			satisfy1="2";
		}

		if(!jQuery('#fyoa1').is(':checked') && !jQuery('#fyoa2').is(':checked') && !jQuery('#fyoa3').is(':checked'))
		{
			validationError('#divfyoa','* Required Field');
			jQuery("#fyoa3").focus();
			//return;
			hasError=true;
		}

		if(jQuery('#fyoa1').is(':checked'))
		{
			fyoa1="1";
		}else if(jQuery('#fyoa2').is(':checked'))
		{
			fyoa1="2";
		}else{
			fyoa1="3";
		}

		var revenue = jQuery("#revenue").val();

		if(revenue.trim().length<=0){

			validationError('#revenue','* Required Field');
			jQuery("#revenue").focus();
			//return;
			hasError=true;
		}

		var FirstRevenue = jQuery("#FirstRevenue").val();

		if(FirstRevenue.trim().length<=0){

			if(!jQuery.isNumeric(FirstRevenue)){
				validationError('#FirstRevenue','* ECI is less than 0');
				jQuery("#FirstRevenue").focus();
				//return;
				hasError=true;
			}else{
				var tempVal = parseFloat(FirstRevenue);
				if(tempVal<0){
					validationError('#FirstRevenue','* ECI is less than 0');
					jQuery("#FirstRevenue").focus();
					//return;
					hasError=true;
				}
			}


		}

		var SecondRevenue = jQuery("#SecondRevenue").val();

		if(SecondRevenue.trim().length<=0){

			if(!jQuery.isNumeric(SecondRevenue)){
				validationError('#SecondRevenue','* ECI is less than 0');
				jQuery("#SecondRevenue").focus();
				//return;
				hasError=true;
			}else{
				var tempVal = parseFloat(SecondRevenue);
				if(tempVal<0){
					validationError('#SecondRevenue','* ECI is less than 0');
					jQuery("#SecondRevenue").focus();
					//return;
					hasError=true;
				}
			}

		}

		var ThirdTaxrate = jQuery("#ThirdTaxrate").val();

		if(ThirdTaxrate.trim().length>0){
			if(jQuery.isNumeric(ThirdTaxrate)){

				var tempVal = parseFloat(ThirdTaxrate);

				if(tempVal<0 || tempVal>10){
					validationError('#ThirdTaxrate','* Invalid Tax Rate');
					jQuery("#ThirdTaxrate").focus();
					//return;
					hasError=true;
				}

				var ThirdRevenue = jQuery("#ThirdRevenue").val();
				if(!jQuery.isNumeric(ThirdRevenue)){
					validationError('#ThirdRevenue','* ECI is less than 0');
					jQuery("#ThirdRevenue").focus();
					//return;
					hasError=true;
				}else{
					var tempVal = parseFloat(ThirdRevenue);
					if(tempVal<=0){
						validationError('#ThirdRevenue','* ECI is less than 0');
						jQuery("#ThirdRevenue").focus();
						//return;
						hasError=true;
					}
				}

			}else{
				validationError('#ThirdTaxrate','* Invalid Tax Rate');
				jQuery("#ThirdTaxrate").focus();
				//return;
				hasError=true;
			}
		}

		var FourthTaxrate = jQuery("#FourthTaxrate").val();
		if(FourthTaxrate.trim().length>0){
			if(jQuery.isNumeric(FourthTaxrate)){

				var tempVal = parseFloat(FourthTaxrate);

				if(tempVal<0 || tempVal>10){
					validationError('#FourthTaxrate','* Invalid Tax Rate');
					jQuery("#FourthTaxrate").focus();
					//return;
					hasError=true;
				}

				var FourthRevenue = jQuery("#FourthRevenue").val();
				if(!jQuery.isNumeric(FourthRevenue)){
					validationError('#FourthRevenue','* ECI is less than 0');
					jQuery("#FourthRevenue").focus();
					//return;
					hasError=true;
				}else{
					var tempVal = parseFloat(FourthRevenue);
					if(tempVal<=0){
						validationError('#FourthRevenue','* ECI is less than 0');
						jQuery("#FourthRevenue").focus();
						//return;
						hasError=true;
					}
				}

			}else{
				validationError('#FourthTaxrate','* Invalid Tax Rate');
				jQuery("#FourthTaxrate").focus();
				//return;
				hasError=true;
			}
		}

		if(hasError){
			return;
		}

		//Show Modal
		jQuery("#modal").show();

		jQuery("#btnYes").on('click', function (e) {

			e.preventDefault();
			jQuery.ajax({
						type: "POST",
						url: "http://iraspoc-cm/api/Sitecore/Assessment/SaveForm",
						data: {'id': jQuery("#user_guid").val(),
						'FinancialYearEnd' : jQuery("[name=FinancialYearEnd]").val(),
						'YearOfAssessment' : yos1,
						'SatisfiesAllConditions' : satisfy1,
						'FirstYOA' : fyoa1,
						'Revenue' : jQuery("[name=revenue]").val(),
						'FirstRevenue': jQuery("[name=FirstRevenue]").val(),
						'SecondRevenue': jQuery("[name=SecondRevenue]").val(),
						'ThirdTaxrate': jQuery("[name=ThirdTaxrate]").val(),
						'ThirdRevenue': jQuery("[name=ThirdRevenue]").val(),
						'FourthTaxrate': jQuery("[name=FourthTaxrate]").val(),
						'FourthRevenue': jQuery("[name=FourthRevenue]").val(),
					},
					success: function (msg) {

						//alert("message: " + msg);

						var user = jQuery("#user_id").val();
						user = user.replace(";","");

						var  val = "http://iraspoc-cm/Confirmation%20Page/" +"?id="+ user;

						window.location.href = val;

					}

				});


		});

	});



jQuery("#btnNo").on('click', function () {

	jQuery("#modal").hide();
	return false;

});
jQuery("#no").on('click', function(){
	jQuery("#ContinueModal").hide();
	return false;
});


jQuery("#btnAmend").on('click', function () {

	var user = jQuery("#user_id").val();
	user = user.replace(";","");

	var guid = jQuery("#user_guid").val();
	guid = guid.replace(";","");

	jQuery.ajax({
		type: "POST",
		url: "http://iraspoc-cm/api/Sitecore/Confirmation/Amend",
		data: {'id': guid,
	},
	success: function (e) {

		var  val = "http://iraspoc-cm/Tax%20Form//" +"?id="+ user;

		window.location.href = val;

	}
});

});


function validationClass(name,validationClass){
		//jQuery(name).parents('div[class^="form-group"]').addClass(validationClass);
		jQuery(name).addClass(validationClass);
	}

	function validationError(name,validationError){
		jQuery(name).after('<p class="help-block" style="color:#a94442">'+ validationError +'</p>');
	}

	function removeValidation(){
		//jQuery('p.help-block').remove();
		jQuery('.help-block').remove();
		//jQuery('div.form-group').removeClass('has-error has-success');
	}

	function putMessageIfEmpty(id, message){

		validationError(id,message);
		jQuery(id).focus();

	}

	jQuery("[name=btnConfirm]").on('click', function () {

		var  designation1 = jQuery("#confirm_designation1").val();
		var  designation2 = jQuery("#confirm_designation2").val();
		var  contactPerson = jQuery("#confirm_contact_person").val();
		var  contactNo = jQuery("#confirm_contact_no").val();

		var hasError = false;

		if(contactPerson.trim().length<=0){

			putMessageIfEmpty('#confirm_contact_person','* Required Field');
			//return;
			hasError=true;

		}
		if(designation1.trim().length<=0){

			putMessageIfEmpty('#confirm_designation1','* Required Field');
			//return;
			hasError=true;
		}
		if(designation2.trim().length<=0){

			putMessageIfEmpty('#confirm_designation2','* Required Field');
			//return;
			hasError=true;
		}
		if(contactNo.trim().length<=0){
			putMessageIfEmpty('#confirm_contact_no','* Required Field');
			//return;
			hasError=true;
		}
		if(contactNo.trim().length<8){
			putMessageIfEmpty('#confirm_contact_no','* Enter a valid contact number');
			//return;
			hasError=true;
		}

		var user = jQuery("#user_id").val();
		user = user.replace(";","");

		var guid = jQuery("#user_guid").val();
		guid = guid.replace(";","");

		if(hasError){
			return;
		}

		jQuery.ajax({
			type: "POST",
			url: "http://iraspoc-cm/api/Sitecore/Confirmation/SaveConfirm",
			data: {
				'id': guid,
				'name:':user,
				'designation1': designation1,
				'designation2': designation2,
				'contact_person': contactPerson,
				'contact_no': contactNo,
			},
			success: function (msg) {

				if(msg=="1"){
					var  val = "http://iraspoc-cm/Acknowledgement%20Page/" +"?id="+ user;

					window.location.href = val;
				}

			}
		});

	});


	function AjaxPostToChatBot(msg, guid, url){

		jQuery.ajax({
			type: "POST",
			url: url,
			data: {'msg': msg,
			'guid': guid},
			success: function (e) {


			}
		});

	}



});
