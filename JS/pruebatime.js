
function myFunction7() {
                                            
	var p = document.getElementById("containermsn");
	if (p.style.display === "none") 
	{
		$('#containermsn').slideDown('slow');
	} 
	else if( p.style.display = "block")
	{
		$('#containermsn').slideUp('slow');
	}
	}
	function myFunction8() {
                                            
		var p = document.getElementById("containernotifi");
		if (p.style.display === "none") 
		{
			$('.containernotifi').fadeIn(1000);
		} 
		else if( p.style.display = "block")
		{
			$('.containernotifi').fadeOut(1000);
		}
		}
	
	$(document).ready(function() {
		$('#btnmod').click(function() {
		  $('#containermsn').slideUp('slow');
		  
	  
		});
	  });
	$("#actualizarmensaje").click(function() {

			var p = document.getElementById("await");
			var q = document.getElementById("await4");
			jQuery.ajax({
			url: 'pruebaconsulta.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			beforeSend: function(){
				p.style.display= "block";
				q.style.display ="none";
			}			
		})
		
		.done(function(respuesta){
			if(!respuesta.errorHL){
						p.style.display ="none";
						q.style.display ="none";
						p.style.display ="none";
						var cantidades = respuesta.id;
						var myform = document.createElement("form");
							myform.id = "myform";
							document.getElementById("row2").appendChild(myform);
							// mete dentro del div creado, el formulario creado
								// Append <p> to <div> with
							const fecha = new Date();
							// create Div
							var para = document.createElement("div"); 
							para.id = 'para';
							para.style.color = "#000";
							para.style.cursor = 'pointer';
							para.style.borderBottom = '1px solid #000000';
							para.style.padding = '3px';
							para.style.backgroundColor = 'rgb(206, 202, 202)';  // Create a <p> element	
							para.innerHTML = "El usuario: "+respuesta.user[0]+" Solicita la Historia Laboral de: "+respuesta.nombre[0] +
							" con Identificación: "+respuesta.id[0]+" En calidad de prestamo: "+respuesta.tipo[0]+" Para el Area " +respuesta.area[0];
							// mete dentro del div, el div creado
							myform.appendChild(para); 				
							// create input id
							var a = document.createElement('input');
							a.type = "text";
							a.name = 'idm';
							a.value = respuesta.id[0];
							a.innerHTML = respuesta.id[0];
							a.style.backgroundColor = 'transparent';
							a.type = 'hidden';
							// mete dentro del formulario creado, el input creado
							para.appendChild(a);
							// create input submit
							var b = document.createElement('input');
							b.type = "submit";
							b.value ="Atender";
							b.className = "sosi";
							// mete dentro del formulario creado, el input submit creado
							para.appendChild(b);
							document.getElementById('totalItems').innerHTML = Number(cantidades.length);
							document.getElementById("totalItems").animate([
								{transform: 'scale(1.5)'},
								// keyframes
								{ filter: 'drop-shadow(5px 5px 5px #c32aa3)' }
								
							], {
								// timing options
								duration: 1000,
								iterations: 1
							});
						}
						else{
							q.style.display= "block";
							p.style.display ="none";
							
						}
			
			
				$("#myform").click(function(event) {
					event.preventDefault();
					//con esta funcion se debe hacer el update, dependiendo el id
					jQuery.ajax({
						url: 'atiende_prueba.php',
						type: 'POST',
						dataType: 'json',
						data: $(this).serialize(),
						beforeSend: function(){
								
							$(".sosi").val("»»»");
						}
					})
					
					.done(function(respuesta){
						console.log(respuesta);
						if(respuesta.actualizo){
							const buttonClicked  = event.target;
								buttonClicked.closest('#para').remove();
							var n = 1;
											var m = document.getElementById('totalItems').innerText;
											if(m>0){
												
											document.getElementById('totalItems').innerHTML = m-n;
											document.getElementById("totalItems").animate([
											// keyframes
												{ transform: 'translateY(15px)'}
												], {
												// timing options
												duration: 1000,
													iterations: 1
												});
											}
											else{
												m=0;
											}
						}
						
						})
					.fail(function(resp){
						console.log(resp.responseText);
						})
										
			});
		})
		jQuery.ajax({
			url: 'consultacantidad.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize()
		})
		.done(function(respuesta){
			var para = document.createElement("div");
			para.id = 'divcantidad'; 
			document.getElementById("row3").appendChild(para);
			var a = document.createElement('span');
			a.id = 'spancantidad';
			a.innerHTML = "Tiene PENDIENTE por entregar : "+ respuesta.dato +" Historias Laborales al area correspondiente, para su respectiva Quincena";
			// mete dentro del formulario creado, el input creado
			para.appendChild(a);
		})	
		});


	
	$("#fmrta").click(function() {
			var p = document.getElementById("await2");
			var q = document.getElementById("await3");
			jQuery.ajax({
				url: 'consultanotifi.php',
				type: 'POST',
				dataType: 'json',
				data: $(this).serialize(),
				beforeSend: function(){
					p.style.display= "block";
					q.style.display ="none";
				}			
			})
			.done(function(respuesta){
				/*CREAR DOCUMENTO*/
						if(!respuesta.errorHL){

							p.style.display ="none";
							q.style.display ="none";
							var cantidades = respuesta.Id;
								
							cantidades.forEach(function(cantidad)
							{	
								var myform = document.createElement("form");
								myform.id = "myformrta";
								document.getElementById("shopping").appendChild(myform);
								const fecha = new Date();
								var para = document.createElement("div");  
								para.id = 'parak'; 
								para.style.color = "#000";
								para.style.cursor = 'pointer';
								para.style.borderBottom = '1px solid #000000';
								para.style.padding = '3px';
								para.style.backgroundColor = 'rgb(206, 202, 202)';  // Create a <p> element
								para.innerHTML = "La Solicitud realizada por el usuario: "+respuesta. Usuario+", de la Historia Laboral con identificación "+ cantidad +" Fue Atendida el dia: " + fecha.toLocaleDateString(); // Insert text
									// Append <p> to <div> with
								myform.appendChild(para); 				
									// create input id
								var a = document.createElement('input');
								a.type = "text";
								a.name = 'idmrta';
								a.value = respuesta.Id[0];
								a.innerHTML = respuesta.Id[0];
								a.style.backgroundColor = 'transparent';
								a.type = 'hidden';
								// mete dentro del formulario creado, el input creado
								para.appendChild(a);
								// create input submit
								var b = document.createElement('input');
								b.type = "submit";
								b.value ="Leer";
								b.className = "sosirta";
								// mete dentro del formulario creado, el input submit creado
								para.appendChild(b);
								document.getElementById('totalItems2').innerHTML = Number(cantidades.length);
								var m = document.getElementById('totalItems2').innerText;
								if(m>0){
									document.getElementById("fa-bell").animate([
										// keyframes
											{ transform: 'rotate(-10deg)'},
											{ transform: 'rotate(15deg)'}
											], {
											// timing options
												duration: 500,
												iterations: 50
											});
									}
									else{
										m=0;
									}
								
							
								
							});
						}
						else{
							q.style.display= "block";
							p.style.display ="none";
							
						}
				
						$("#myformrta").click(function(event) {
							event.preventDefault();
							//con esta funcion se debe hacer el update, dependiendo el id
							jQuery.ajax({
								url: 'responde_prueba.php',
								type: 'POST',
								dataType: 'json',
								data: $(this).serialize(),
								beforeSend: function(){
										
									$(".sosirta").val("»»»");
								}
							})
							
							.done(function(respuesta){
								console.log(respuesta);
								if(respuesta.actualizo){
									const buttonClicked  = event.target;
										buttonClicked.closest('#parak').remove();
									var n = 1;
													var m = document.getElementById('totalItems2').innerText;
													if(m>0){
														
													document.getElementById('totalItems2').innerHTML = m-n;
													document.getElementById("totalItems2").animate([
													// keyframes
														{ transform: 'translateY(15px)'}
														], {
														// timing options
														duration: 1000,
															iterations: 1
														});
													}
													else{
														m=0;
													}
								}
								})
							.fail(function(resp){
								console.log(resp.responseText);
								})
						
					});
				})
					
			});		


			$("#consultatransfiere").click(function(event) {
				event.preventDefault();
				//con esta funcion se debe hacer el update, dependiendo el id
				jQuery.ajax({
					url: 'consultatransfer.php',
					type: 'POST',
					dataType: 'json',
					data: $(this).serialize(),
					beforeSend: function(){
						document.getElementById("consultatransfiere").innerHTML ="Consultando...";
						
					}			
				})
				
				.done(function(respuesta){
					var containertranfer = document.getElementById("containernottranfer");	
					if(!respuesta.errorHL){
					var cantidades = respuesta.Id;
					containertranfer.style.display = "block";
					cantidades.forEach(function(cantidad)
					{	
						var myform = document.createElement("form");
						myform.id = "myformrta1";
						document.getElementById("containernottranfer").appendChild(myform);
						const fecha = new Date();
						var para = document.createElement("div");  
						para.id = 'paratransfer'; 
						para.style.color = "#000";
						para.style.cursor = 'pointer';
						para.style.borderBottom = '1px solid #000000';
						para.style.padding = '3px';
						para.style.backgroundColor = 'rgba(3, 3, 3, 0.733)';  // Create a <p> element
						para.style.color = '#fff';
						para.innerHTML = "El Usuario: "+respuesta.usuario[0]+", Realizo la transferencia documental de la historia laboral con identificación: "+ cantidad +" con: "
						+respuesta.folios[0] +" Folios y Fue Enviada el dia: " + fecha.toLocaleDateString(); // Insert text
							// Append <p> to <div> with
						myform.appendChild(para); 				
							// create input id
						var a = document.createElement('input');
						a.type = "text";
						a.name = 'idmrtaa';
						a.value = cantidad;
						a.innerHTML = cantidad;
						a.style.backgroundColor = 'transparent';
						a.type = 'hidden';
						// mete dentro del formulario creado, el input creado
						para.appendChild(a);
						// create input submit
						var b = document.createElement('span');
						b.innerHTML = "✓";
						b.className = "sositranfer";
						b.id ="sositranfer";
						// mete dentro del formulario creado, el input submit creado
						para.appendChild(b);
						$("#myformrta1").click(function(event) {
							event.preventDefault();
							//con esta funcion se debe hacer el update, dependiendo el id
							jQuery.ajax({
								url: 'responde_transfer.php',
								type: 'POST',
								dataType: 'json',
								data: $(this).serialize(),
								beforeSend: function(){
									document.getElementById("consultatransfiere").innerHTML ="»»»...";	
								}
							})
							
							.done(function(respuesta){
								if(respuesta.actualizo){
									const buttonClicked  = event.target;
										buttonClicked.closest('#paratransfer').remove();
										containertranfer.style.display = "none";
										document.getElementById("consultatransfiere").innerHTML ="Consultar";	
								}
								
								})
							.fail(function(resp){
								console.log(resp.responseText);
								})
							
							
					});
				
					});
					}	
					else{
						document.getElementById("consultatransfiere").innerHTML ="Consultar";
						alert("Transferencias al día")
					}
					})
				.fail(function(resp){
					console.log(resp.responseText);
					})
										
		});
		
		