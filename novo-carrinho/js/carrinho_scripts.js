
// FUNÇÕES ====================================


// ===== Verificação de CPF ===================

function TestaCPF(cpf) {	
		console.log('Alô', cpf);
		let caixaCPF = document.getElementById('cliCPF');
		
		cpf = cpf.replace(/[^\d]+/g,'');	
		if(cpf == '') return false;	
		// Elimina CPFs invalidos conhecidos	
		if (cpf.length != 11 || 
			cpf == "00000000000" || 
			cpf == "11111111111" || 
			cpf == "22222222222" || 
			cpf == "33333333333" || 
			cpf == "44444444444" || 
			cpf == "55555555555" || 
			cpf == "66666666666" || 
			cpf == "77777777777" || 
			cpf == "88888888888" || 
			cpf == "99999999999")
				return caixaCPF.classList.add('is-invalid');;		
		// Valida 1o digito	
		add = 0;	
		for (i=0; i < 9; i ++)		
			add += parseInt(cpf.charAt(i)) * (10 - i);	
			rev = 11 - (add % 11);	
			if (rev == 10 || rev == 11)		
				rev = 0;	
			if (rev != parseInt(cpf.charAt(9)))		
				return caixaCPF.classList.add('is-invalid');		
		// Valida 2o digito	
		add = 0;	
		for (i = 0; i < 10; i ++)		
			add += parseInt(cpf.charAt(i)) * (11 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)	
			rev = 0;	
		if (rev != parseInt(cpf.charAt(10)))
			return caixaCPF.classList.add('is-invalid');		
		return caixaCPF.classList.remove('is-invalid');   
}




function mPagCartaoShow() {
	if (document.getElementById('mPagCartao').checked){
		$('#mPagCartao-dados').removeClass("d-none");
		$('#mPagSeguro-dados').addClass("d-none");
		$('#mPagBoleto-dados').addClass("d-none");

	}  else if (document.getElementById('mPagSeguro').checked) {
		$('#mPagCartao-dados').addClass("d-none");
		$('#mPagSeguro-dados').removeClass("d-none");
		$('#mPagBoleto-dados').addClass("d-none");

	}	else if (document.getElementById('mPagBoleto').checked) {
		$('#mPagCartao-dados').addClass("d-none");
		$('#mPagSeguro-dados').addClass("d-none");
		$('#mPagBoleto-dados').removeClass("d-none");
	}
}

//preenche texto do cartão selecionado e armazena valor
function mPagCartaoSelect() {
	$(document).ready(function(){ 
		var brandCartao = $('input[type=radio][name=options]:checked').prop('id')

		switch (brandCartao) {
			case "brand-mastercard":
				brandCartao = "Mastercard"
				break;
			case "brand-visa":
				brandCartao = "Visa"
				break;
			case "brand-elo":
				brandCartao = "Elo"
				break;
			case "brand-hipercard":
				brandCartao = "Hipercard"
				break;
			case "brand-amex":
				brandCartao = "American Express"
				break;
			case "brand-diners":
				brandCartao = "Diners"
				break;
		}

		//Preenche campo de texto
		document.getElementById("brand-cartao-show").innerHTML = brandCartao;

		//Remove msg de erro do campo de digitação do cartão
		$('#cliCartao').removeClass("is-invalid");
	});
}



/* Totaliza o a primeira etapa do carrinho,
somando subtotais das caixas dos produtos*/
function totalizarCarrinho1() {
	var total = 0;
	$('.subtotal').each(function() {
		var subtotalRow = document.getElementById($(this).attr('id')).innerHTML;
		subtotalRow = subtotalRow.replace(/,/g, '.')

		total = parseFloat(total) + parseFloat(subtotalRow);

	});

	total = Number(total).toFixed(2);
	total = total.replace(/[.]/g, ',');

	// console.log(total);
	document.getElementById("carrinhoTotal").innerHTML = total;
}


// Verifica Carrinho vazio e atualiza página
function checkCarrinhoVazio() {
	var countProds = 0;
	$('.eComm-carrinho-box-prod').each( function () {countProds++; } );

	if (countProds === 0){
		$('#box-carrinho-all').addClass("d-none");
		$('#box-carrinho-off').removeClass("d-none");
	}
}


// FIM FUNÇÕES ================================


// EXECUÇÃO ===================================
$(document).ready(function(){

	//Validação NOME !!!!!! (FALTA ELIMINAR ESPAÇOS DUPLICADOS E NÚMEROS)
	$('#cliNome').on('change', function(){
		if ( $('#cliNome').val().length < 4 ){
			$('#cliNome').addClass("is-invalid");
		} else {
			$('#cliNome').removeClass("is-invalid");
		}	
	});



	//Valudação CPF
	/*
	$('#cliCPF').on('change', function(){
		if ( TestaCPF( $('#cliCPF').val() )

		) { $('#cliCPF').removeClass("is-invalid"); }
		else { $('#cliCPF').addClass("is-invalid"); }

	});
	*/


	//Validação Telefone
	$('#cliTelefone').on('change', function(){
		if ( $('#cliTelefone').val().length > 11 || $('#cliTelefone').val().length < 10 ){
			$('#cliTelefone').addClass("is-invalid");
		} else {
			$('#cliTelefone').removeClass("is-invalid");
		}
	})

	//Validação CEP !!!!!! (FALTA CONSULTA VALORES)
	$('#cliEndCEP').on('change', function(){
		if ( $('#cliEndCEP').val().length != 8 ){
			$('#cliEndCEP').addClass("is-invalid");
		} else {
			$('#cliEndCEP').removeClass("is-invalid");
		}	
	});

	//Validação Bairro
	$('#cliEndBairro').on('change', function(){
		if ( $('#cliEndBairro').val().length < 3 ){
			$('#cliEndBairro').addClass("is-invalid");
		} else {
			$('#cliEndBairro').removeClass("is-invalid");
		}	
	});

	//Validação Endereço
	$('#cliEndRua').on('change', function(){
		if ( $('#cliEndRua').val().length < 3 ){
			$('#cliEndRua').addClass("is-invalid");
		} else {
			$('#cliEndRua').removeClass("is-invalid");
		}	
	});

	//Validação Número
	$('#cliEndNum').on('change', function(){
		if ( $('#cliEndNum').val().length == 0 ){
			$('#cliEndNum').addClass("is-invalid");
		} else {
			$('#cliEndNum').removeClass("is-invalid");
		}	
	});
	//Validação Complemento
	$('#cliEndCompl').on('change', function(){
		if ( $('#cliEndCompl').val().length != 8 ){
			$('#cliEndCompl').addClass("is-invalid");
		} else {
			$('#cliEndCompl').removeClass("is-invalid");
		}	
	});


	//Check seleção de bandeira
	$('#cliCartao').on('change', function(){
		//console.log( $("input[name=options]:checked").val() );
		if ( $("input[name=options]:checked").val() != "on") {
			console.log("error")
			$('#cliCartao').addClass("is-invalid");
		} else {
			$('#cliCartao').removeClass("is-invalid");
		}
	});








	//Contador + / -
	$('.btn-number').click(function(e){
	    e.preventDefault();
	    
	    fieldName = $(this).attr('data-field');
	    type      = $(this).attr('data-type');
	    var input = $("input[name='"+fieldName+"']");
	    var currentVal = parseInt(input.val());
	    if (!isNaN(currentVal)) {
	        if(type == 'minus') {
	            
	            if(currentVal > input.attr('min')) {
	                input.val(currentVal - 1).change();
	            } 
	            if(parseInt(input.val()) == input.attr('min')) {
	                $(this).attr('disabled', true);
	            }

	        } else if(type == 'plus') {

	            if(currentVal < input.attr('max')) {
	                input.val(currentVal + 1).change();
	            }
	            if(parseInt(input.val()) == input.attr('max')) {
	                $(this).attr('disabled', true);
	            }

	        }
	    } else {
	        input.val(0);
	    }
	});
	$('.input-number').focusin(function(){
	   $(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {
	    
	    minValue =  parseInt($(this).attr('min'));
	    maxValue =  parseInt($(this).attr('max'));
	    valueCurrent = parseInt($(this).val());
	    
	    name = $(this).attr('name');
	    if(valueCurrent >= minValue) {
	        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the minimum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	    if(valueCurrent <= maxValue) {
	        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
	    } else {
	        alert('Sorry, the maximum value was reached');
	        $(this).val($(this).data('oldValue'));
	    }
	    
	    
	});
	$(".input-number").keydown(function (e) {
	        // Allow: backspace, delete, tab, escape, enter and .
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
	             // Allow: Ctrl+A
	            (e.keyCode == 65 && e.ctrlKey === true) || 
	             // Allow: home, end, left, right
	            (e.keyCode >= 35 && e.keyCode <= 39)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	});



	$(".prodQuant").on("change", function(){
		var box_valor_name = $(this).attr('name');
		var idProd = box_valor_name.slice(10);

		var prodQuant = $(this).val();
		var valorProdId = ("prodValor-"+idProd);
		var subtotalProdId = ("prodSubtotal-"+idProd);

		valorProd = document.getElementById(valorProdId).innerHTML;
		valorProd = valorProd.replace(/,/g, '.');

		var subtotal = prodQuant * valorProd;

		subtotal = Number(subtotal).toFixed(2);
		subtotal = subtotal.replace(/[.]/g, ',');

		document.getElementById(subtotalProdId).innerHTML = subtotal;
		// console.log(subtotal); retirar na versão final



		var total = 0;
		$('.subtotal').each(function() {
			subtotalRow = document.getElementById($(this).attr('id')).innerHTML;
			subtotalRow = subtotalRow.replace(/,/g, '.')

			total = parseFloat(total) + parseFloat(subtotalRow);

		});

		total = Number(total).toFixed(2);
		total = total.replace(/[.]/g, ',');

		// console.log(total);
		document.getElementById("carrinhoTotal").innerHTML = total;

	});


	//Deletar box produto
	$('.deleteProdBox').click(function(){
		//falta deletar produto do Carrinho no Back
		var boxClass = ("box-Prod-"+ $(this).attr('id'));
		 $("."+boxClass).remove();

		 totalizarCarrinho1();
		 checkCarrinhoVazio();
	});



//end
});