$(document).ready(function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	$("#contactForm").submit(function(event){
		event.preventDefault();
		// console.log( "See paró el evento php");
		var $form = $(this);
		var name = $form.find("input[name='name']").val();
		var email = $form.find("input[name='email']").val();
		var mensaje = $form.find("textarea[name='mensaje']").val();
		var url = $form.attr("action");
		// console.log("Form: " + $form);
		// console.log("Name: " + name);
		// console.log("Email: " + email);
		// console.log("msj: " + mensaje);
		var posting = $.post(url, {name: name, email: email, mensaje: mensaje});
		posting.done(function(data){
			console.log(data);
			$("#contactForm .alert").html(data);
			$("#contactForm .al").removeClass("display-none");
			$("#contactForm .al").addClass("display-block");
		});
	});
})

