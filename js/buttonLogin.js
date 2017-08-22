jQuery(document).ready(function () {

	jQuery("[name=btnLogin]").on('click', function () {

		var  val = jQuery("#wffm5b702cf18dba4c03bfbdeba6615290b0_Sections_0__Fields_0__Value").val();

		jQuery.ajax({
			type: "POST",
			url: "api/Sitecore/Assessment/CheckUser",
			data: {'id': val},
			success: function (msg) {
				window.location.href = "http://iraspoc-cm/Tax%20Form/" +"?id="+ msg;
			}
		});

	});

	jQuery("#btnClear").on('click', function () {


		jQuery("#yos1").prop("checked", false);
		jQuery("#yos2").prop("checked", false);
		jQuery("#satisfy1").prop("checked", false);
		jQuery("#satisfy2").prop("checked", false);
		jQuery("#fyoa1").prop("checked", false);
		jQuery("#fyoa2").prop("checked", false);
		jQuery("#fyoa3").prop("checked", false);
		jQuery("#revenue").val("");
		jQuery("#FirstRevenue").val("");
		jQuery("#SecondRevenue").val("");
		jQuery("#ThirdTaxrate").val("");
		jQuery("#ThirdRevenue").val("");
		jQuery("#FourthTaxrate").val("");
		jQuery("#FourthRevenue").val("");

		jQuery("#totalECI").html('S$&nbsp;<span id="lblTotalECI" datafieldtobind="TotECIAmt" datasourcetobind="ECIST" readonly="readonly">0</span>');
		jQuery("#totalTaxPay").html('S$&nbsp;<span id="lblEstTaxPayable" title="Estimated Tax Payable" datafieldtobind="TxPyAftRebate" datasourcetobind="ECIST" readonly="readonly" unformattedvalue="712.50">0</span>');


	});

	jQuery("[name=btnSaved]").on('click', function () {

		var yos1="";
		var satisfy1="";
		var fyoa1="";

		removeValidation();

		if(!jQuery('#yos1').is(':checked') && !jQuery('#yos2').is(':checked'))
		{
			alert("Required Field (Year of Assesment)");
			return;
		}

		if(jQuery('#yos1').is(':checked'))
		{
			yos1="1";
		}else{
			yos1="2";
		}

		if(!jQuery('#satisfy1').is(':checked') && !jQuery('#satisfy2').is(':checked'))
		{
			alert("Required Field (Tax Exemption Scheme for New Start-Up Companies)");
			return;
		}

		if(jQuery('#satisfy1').is(':checked'))
		{
			satisfy1="1";
		}else{
			satisfy1="2";
		}

		if(!jQuery('#fyoa1').is(':checked') && !jQuery('#fyoa2').is(':checked') && !jQuery('#fyoa3').is(':checked'))
		{
			alert("Required Field (The company's first Year of Assessment after incorporation)");
			return;
		}

		if(jQuery('#fyoa1').is(':checked'))
		{
			fyoa1="1";
		}if(jQuery('#fyoa2').is(':checked'))
		{
			fyoa1="2";
		}else{
			satisfy1="3";
		}

		var revenue = jQuery("#revenue").val();

		if(revenue.trim().length<=0){

			validationError('#revenue','* Required Field');
			validationClass('#revenue','has-error');

			jQuery("#revenue").focus();
			return;
		}

		var FirstRevenue = jQuery("#FirstRevenue").val();

		if(FirstRevenue.trim().length<=0){
			validationError('#revenue','* Required Field');
			validationClass('#revenue','has-error');
			jQuery("#FirstRevenue").focus();
			return;
		}

		var SecondRevenue = jQuery("#SecondRevenue").val();

		if(SecondRevenue.trim().length<=0){
			validationError('#revenue','* Required Field');
			validationClass('#revenue','has-error');
			jQuery("#SecondRevenue").focus();
			return;
		}

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
				//alert(msg);
			}
		});
		//alert("user:" + jQuery("#user_id").val() + "--" + satisfy1);

	});

	function validationClass(name,validationClass){
		jQuery(name).parents('div[class^="form-group"]').addClass(validationClass);
	}

	function validationError(name,validationError){
		jQuery(name).after('<p class="help-block" style="color:#a94442">'+ validationError +'</p>');
	}

	function removeValidation(){
		jQuery('p.help-block').remove();
		jQuery('div.form-group').removeClass('has-error has-success');
	}

});
