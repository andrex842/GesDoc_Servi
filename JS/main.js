$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {  
		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 2000, function(){
			window.location.hash = hash;
		});
		}
	});
	});
$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
    var ico     = $('.ico');
   
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
        
		var w = $(window).width();
		if(w > 907 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
        
	});
		
	
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  
/*CARDS*/
$('.card').on('click', function() {
	$('.card').removeClass('flipped');
	$(this).toggleClass('flipped');
	
});

$('#closeerror').on('click', function() {
	$('.error2').slideUp('slow');
	var zd = document.getElementById("consulta4");
	zd.style.display = "none";
	$(".ipc4").val("");
	$(".botonconsulta4").val("Devolver");
	
});
$('.sn').on('click', function() {
	var z = document.getElementById("asi1"); 
	if (z.style.display === "none") 
	{
		z.style.display = "block";
		document.getElementById('sn').innerHTML = 'Ver Menos';

	}
	else{
		z.style.display = "none";
		document.getElementById('sn').innerHTML = 'Ver Mas';
	}
});
$('.ocultamenuliop').on('click', function() {
	var z = document.getElementById("menuliop"); 
	var zy = document.getElementById("imgper"); 
	if (z.style.display === "none") 
	{
		z.style.display = "block";
		zy.style.alignContent = "center";	

	}
	else{
		z.style.display = "none";
	}
});
/*Logg*/
$("#login-button").click(function (e) {
	
	  $("#container").fadeIn();
	  TweenMax.from("#container", 0.4, { scale: 0, ease: "none" });
	  TweenMax.to("#container", 0.4, { scale: 1, ease: "none" });
  });
  function mover() {
	var elem = document.getElementById("barra");   
	var width = 0;
	var id = setInterval(frame, 20);
	function frame() {
	  if (width == 100) {
		clearInterval(id);
	  } else {
		width++;
		elem.innerHTML=width+"%";
		elem.style.width = width + '%'; 
	  }
	}
  }
 
jQuery(document).on("submit","#fm", function(event){
	var probar = document.getElementById("bProgreso");
	var ini = document.getElementById("iniciar");
	probar.style.display = "block"
	event.preventDefault();
	
	jQuery.ajax({
		url: 'login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$(".botonlg").val("validando...");
			mover();
			ini.innerHTML = "INICIANDO..."
			ini.style.color ="#b70e21";
		}
	})
	.done(function(respuesta){
							var a = document.getElementById("h2");	
							var b = document.getElementById("h3");	
							var d = document.getElementById("h5");
							var e = document.getElementById("login-button");
							var g = document.getElementById("not");
							var h = document.getElementById("consultatransfiere");
							var botnh = document.getElementById("myBtnquincena");
							var logout = document.getElementById("logout");
							logout.style.display = "block";
							
							
							/*Mostrar consulta en HTML*/
							/*var e = document.getElementById("respUsuario");
							e.innerHTML = respuesta.tipo;*/
		if(!respuesta.error){
			$("#rtauser").val(respuesta.user);
			var m = document.getElementById("rtauser");
			m.type = 'hidden';
			$("#rtauser2").val(respuesta.user);
			var m2 = document.getElementById("rtauser2");
			m2.type = 'hidden';
			$("#rtauser3").val(respuesta.user);
			var m2 = document.getElementById("rtauser3");
			m2.type = 'hidden';
			e.style.display = "none";
			$('.bien').slideDown('slow');
			setTimeout(function(){
				$('.bien').slideUp('slow');
			},10);
			
			if(respuesta.tipo === "ADMINISTRADOR" || respuesta.tipo === "GESTION DOCUMENTAL" ){
				g.style.display = "block";
				botnh.style.cursor = "pointer";
							$('#cart').slideDown('slow');
                             $('#container').slideUp('slow');
							 $('#mone').slideDown('slow');
							
							 $("#myBtnquincena").click(function(event) {	
								var p = document.getElementById("awaitmdfk");
								var q = document.getElementById("awaitmdfk1");	  
								jQuery.ajax({
									url: 'selectcontra.php',
									type: 'POST',
									dataType: 'json',
									data: $(this).serialize(),
									beforeSend: function(){
										p.style.display= "block";
										q.style.display ="none";
									}			
								})
								.done(function(respuesta3){
									const hoy = new Date();
									if(!respuesta3.errorHL){
										p.style.display ="none";
										q.style.display ="none";
										var valores = eval(respuesta3.Identificacion);
										html = "<table id='tabla'class='table table-bordered'><thead><tr><th>#</th><th>Nombre</th><th>Identificación</th><th>Caja</th><th>Carpeta</th><th>Fecha Inicial</th><th>Fecha Final</th><th>Estado</th><th>Acción</th></tr></thead><tbody>";
										for(i=0;i<valores.length;i++){
											html+="<tr id='tr' height = 3><td>"+(i+1)+"</td><td >"+respuesta3.nombre[i]+"</td><td>"+respuesta3.Identificacion[i]+"</td><td>"+respuesta3.caja[i]+"</td><td>"+respuesta3.carpeta[i]+"</td><td >"+respuesta3.Fechainicial[i]+"</td><td>"+respuesta3.Fechafinal[i]+"</td><td>"+respuesta3.Estado[i]+"</td><td width=160><a class='borrar'><i class='fa fa-trash'></i></a></td></tr>";
											
										}
											html+="</tbody></table>"
											$("#mdfk").html(html);
											$("#printtabla").click(function() {
												var pdf = new jsPDF('L', 'pt', 'legal');
												source = $('#mdfk')[0];
										
												specialElementHandlers = {
													'#bypassme': function (element, renderer) {
														return true
													}
												};
												margins = {
													top: 8,
													bottom: 6,
													left: 106,
													width: 22
												};
										
												pdf.fromHTML(
													source, 
													margins.left, // x coord
													margins.top, { // y coord
														'width': margins.width, 
														'elementHandlers': specialElementHandlers
													},
										
													function (dispose) {
														pdf.save('Quinena '+ hoy.toLocaleDateString()+'.pdf');
													}, margins
												);
											})
										}
										
										
									else{
										q.style.display= "block";
										p.style.display ="none";
									}
									
									
								})
								$(document).on('click', '.borrar', function (event) {
									event.preventDefault();
									$(this).closest('tr').remove();
								});
								});
								
								var modalquincena = document.getElementById("myModalquincena");
								
								// Get the button that opens the modal
								var btnquincena = document.getElementById("myBtnquincena");
								
								// Get the <span> element that closes the modal
								var spanquincena = document.getElementsByClassName("closequincena")[0];
								
								// When the user clicks on the button, open the modal
								btnquincena.onclick = function() {
									modalquincena.style.display = "block";
								}
								
								// When the user clicks on <span> (x), close the modal
								spanquincena.onclick = function() {
									modalquincena.style.display = "none";
								}
								
                            
			}else if(respuesta.tipo !== "ADMINISTRADOR" || respuesta.tipo !== "GESTION DOCUMENTAL"){
							h.style.display = "none";
							g.style.display = "block";
							g.style.right = "63px";
							var h = document.getElementById("containernotifi");
							h.style.right = "76px";
                            $('#container').slideUp('slow');
							$('#mone').slideDown('slow');
							b.style.display = "none";
							a.style.display = "none";
							d.style.display = "none";
							


            }

		}else{
			$('.error').slideDown('slow');
		setTimeout(function(){
			$('.error').slideUp('slow');
		},3000);
		$(".botonlg").val("Iniciar Sesion");
		}
		})
	.fail(function(resp){
		console.log(resp.responseText);
		})
	});
        
	$("#cconta").click(function () {
		$("#container").fadeOut("slow");
		$("#login-button").fadeIn();
	  });
	  /*Consulta HL*/

	  $('#imprimir').on('click', function() {
		$('#menu').empty();
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var zb = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var zg = document.getElementById("consulta");
		var za = document.getElementById("consulta2");
		var zc = document.getElementById("consulta3");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var z = document.getElementById("consultaimprimir");
		if (z.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			z.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			zc.style.display = "none";
			zd.style.display = "none";
			ze.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
		}
		else{
			z.style.display = "none";
		}
	});
	$('#h0').on('click', function() {
		$('#menu').empty();
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var zb = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta");
		var za = document.getElementById("consulta2");
		var zc = document.getElementById("consulta3");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");		
		if (zh.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			z.style.display = "none";
			za.style.display = "none";
			zb.style.display = "none";
			zc.style.display = "none";
			zd.style.display = "none";
			ze.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
			zh.style.display = "block";
		}
		else{
			zh.style.display = "none";
		}
	});
	  $('#h1').on('click', function() {
		$('#menu').empty();
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var zb = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta");
		var za = document.getElementById("consulta2");
		var zc = document.getElementById("consulta3");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");
		if (z.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			z.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			zc.style.display = "none";
			zd.style.display = "none";
			ze.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
			zh.style.display = "none";
		}
		else{
			z.style.display = "none";
		}
	});
	/*Actualiza HL*/
	$('#h2').on('click', function() {
		
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("six"); 
		var c = document.getElementById("five"); 
		var zb = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta2"); 
		var za = document.getElementById("consulta");
		var zc = document.getElementById("consulta3");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");
		if (z.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			c.style.display = "none";
			z.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			zc.style.display = "none";
			zd.style.display = "none";
			ze.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
			zh.style.display = "none";
		}
		else{
			z.style.display = "none";
			
		}
	});
	$('#solicitapre').on('click', function() {
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var d = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta3");
		var za = document.getElementById("consulta2");
		var zb = document.getElementById("consulta");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");
		if (z.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			c.style.display = "none";
			d.style.display = "none";
			z.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			zd.style.display = "none";
			ze.style.display = "none";
			zg.style.display = "none";
			zh.style.display = "none";
		}
		else{
			z.style.display = "none";
		}
	});
	$('#devuelvepre').on('click', function() {
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var d = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta3");
		var za = document.getElementById("consulta2");
		var zb = document.getElementById("consulta");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");
		if (zd.style.display === "none") 
		{
			a.style.display = "none";
			b.style.display = "none";
			c.style.display = "none";
			d.style.display = "none";
			zd.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			z.style.display = "none";
			ze.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
			zh.style.display = "none";
		}
		else{
			zd.style.display = "none";
		}
	});
	$('#transfiere').on('click', function() {
		$('#menu').empty();
		var a = document.getElementById("nospan"); 
		var b = document.getElementById("five"); 
		var c = document.getElementById("six"); 
		var zb = document.getElementById("seven");
		var zf = document.getElementById("nine");
		var z = document.getElementById("consulta");
		var za = document.getElementById("consulta2");
		var zc = document.getElementById("consulta3");
		var zd = document.getElementById("consulta4");
		var ze = document.getElementById("consulta5");
		var zg = document.getElementById("consultaimprimir");
		var zh = document.getElementById("consultaname");
		if (ze.style.display === "none") 
		{

			a.style.display = "none";
			c.style.display = "none";
			b.style.display = "none";
			ze.style.display = "block";
			za.style.display = "none";
			zb.style.display = "none";
			zc.style.display = "none";
			zd.style.display = "none";
			zf.style.display = "none";
			zg.style.display = "none";
			z.style.display = "none";
			zh.style.display = "none";
		}
		else{
			ze.style.display = "none";
		}
	});
	/*CONSULTA HL, TOTAL*/
	
	jQuery(document).on("submit","#fm1", function(event){
		event.preventDefault();
		var za = document.getElementById("consulta");
		var estadocontrato = document.getElementById("Estadocontrato");
			var ficontrato = document.getElementById("FechaInical");
			var ffcontrato = document.getElementById("FechaFinal");
		jQuery.ajax({
			url: 'select.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			beforeSend: function(){
				$(".botonconsulta").val("Validando...");
			}
		})
		.done(function(respuesta){
			
			za.style.display = "none";					
			var a = document.getElementById("Nombre");
			var b = document.getElementById("Id");
			var c = document.getElementById("Causa");
			var d = document.getElementById("Cargo");
			var e = document.getElementById("Inicial");
			var f = document.getElementById("Final");
			var g = document.getElementById("Caja");
			var h = document.getElementById("Consecutivo");
			var i = document.getElementById("Carpeta");
			var j = document.getElementById("Tomo");
			var k = document.getElementById("Estante");
			var l = document.getElementById("Estado");
			var m = document.getElementById("imgper");
			var w = document.getElementById("five");
			var x = document.getElementById("six");
			
			var ruta = "Historias_Laborales/";
			if(!respuesta.errorHL){
				x.style.display = "none";
				if (w.style.display === "none") 
				{
					
					w.style.display = "block";
					w.style.marginTop = "-23rem";
					w.style.position="relative";
					w.style.zIndex = 101;
					
				}
				else{
					w.style.display = "none";
										
				}
				
				a.innerHTML = respuesta.Nombre;
				b.innerHTML = respuesta.Id;
				c.innerHTML = respuesta.causa;
				d.innerHTML = respuesta.cargo;
				e.innerHTML = respuesta.inicial;
				f.innerHTML = respuesta.final;
				g.innerHTML = respuesta.caja;
				h.innerHTML = respuesta.conse_caja;
				i.innerHTML = respuesta.carpeta;
				j.innerHTML = respuesta.tomo;
				k.innerHTML = respuesta.estante;
				l.innerHTML = respuesta.estado;
			
				
				var cantidades = respuesta.archi;

				cantidades.forEach(function(cantidad)
				{
					let li = document.createElement('div');
					li.id = "menulicreate"
					li.textContent = "";
					li.style.listStyle = "none"
					menu.appendChild(li);
					let a = document.createElement('a');
					a.textContent = cantidad;
					a.style.cursor = "pointer";
					a.href = ruta +respuesta.Id+ "/" + a.textContent;
					a.target = "_blank"
					li.appendChild(a);
					m.src =ruta +respuesta.Id+ "/" + respuesta.Id+".jpg";
					
						console.log(cantidades.length)

				});
				
				setTimeout(function(){
					$(".botonconsulta").val("Consultar");
					$(".ipc").val("");
				},2000);
			}else{
				$('.errorHL').slideDown('slow');
				$(".botonconsulta").val("Sin Datos");
			setTimeout(function(){
				$('.errorHL').slideUp('slow');
			},3000);
			$(".botonconsulta").val("Consultar");
			$(".ipc").val("");
			}
			})
		jQuery.ajax({
			url: 'selectcontaros.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize()
		})
		.done(function(respuestaw){

			estadocontrato.innerHTML = respuestaw.Estadocontrato;
			ficontrato.innerHTML = respuestaw.Fechainicial;
			ffcontrato.innerHTML = respuestaw.Fechafinal;	
			
		})
		

		.fail(function(resp){
			console.log(resp.responseText);
			})
		});
		
		/*Mostrar consulta en HTML*/
								/*var e = document.getElementById("respUsuario");
								e.innerHTML = respuesta.tipo;*/

/*CONSULTA HL PARA ACTUALIZAR, TOTAL*/
	jQuery(document).on("submit","#fm2", function(event){
		event.preventDefault();
		var zb = document.getElementById("consulta2");	
		jQuery.ajax({
			url: 'select.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			beforeSend: function(){
				$(".botonconsulta2").val("Validando...");
			
			}
		})
		.done(function(respuesta){
			zb.style.display = "none";
			var m = document.getElementById("imgper2");
			var w = document.getElementById("six");
			var y = document.getElementById("five");
			
			var ruta = "Historias_Laborales/";
			if(!respuesta.errorHL){
				if (w.style.display === "none") 
				{
					w.style.display = "block";
					w.style.marginTop = "-23 rem";
					w.style.position="relative";
					w.style.zIndex = 101;
					y.style.display ="none";
					
				}
				else{
					w.style.display = "none";
					
				}
				$('#Nombre2').val(respuesta.Nombre);
				$('#Id2').val(respuesta.Id);
				$('#Causa2').val(respuesta.causa);
				$('#Cargo2').val(respuesta.cargo);
				$('#Inicial2').val(respuesta.inicial);
				$('#Final2').val(respuesta.final);
				$('#Caja2').val(respuesta.caja);
				$('#Consecutivo2').val(respuesta.conse_caja);
				$('#Carpeta2').val(respuesta.carpeta);
				$('#Tomo2').val(respuesta.tomo);
				$('#Estante2').val(respuesta.estante);
				$('#Estado2').val(respuesta.estado);
				m.src =ruta +respuesta.Id+ "/" + respuesta.Id+".jpg";

					
			
				setTimeout(function(){
					$(".botonconsulta2").val("Consultar");
					$(".ipc").val("");
				},3000);
			}else{
				$('.errorHL').slideDown('slow');
				$(".botonconsulta2").val("Sin Datos");
			setTimeout(function(){
				$('.errorHL').slideUp('slow');
			},3000);
			$(".botonconsulta2").val("Consultar");
			$(".ipc").val("");
			}
			})
			jQuery.ajax({
				url: 'selectcontaros.php',
				type: 'POST',
				dataType: 'json',
				data: $(this).serialize()
			})
			.done(function(respuestaw){
				
				$('#fechainicialcontrato').val(respuestaw.Fechainicial);
				$('#fechafinalcontrato').val(respuestaw.Fechafinal);
				
			})
		.fail(function(resp){
			console.log(resp.responseText);
			})
		
		});

/* ACTUALIZA HL, TOTAL*/
	jQuery(document).on("submit","#fm3", function(event){
		event.preventDefault();
		
		jQuery.ajax({
			url: 'update.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			beforeSend: function(){
				$(".botonactualiza").val("Actualizando...");
			}
		})
		
		.done(function(respuesta){
			var w = document.getElementById("six");
			var formData = new FormData($("#fm3")[0]);
			$.ajax({
			type: 'POST',
			url: 'carga.php',
			data: formData,
			contentType: false,
			processData: false
			});
					
			if(!respuesta.actualizo){
				$("#botonactualiza").val("ERROR");
				setTimeout(function(){
					$("#Nombre2").val("");
						$("#Id2").val("");
						$("#Causa2").val("");
						$("#Cargo2").val("");
						$("#Inicial2").val("");
						$("#Final2").val("");
						$("#Caja2").val("");
						$("#Consecutivo2").val("");
						$("#Carpeta2").val("");
						$("#Tomo2").val("");
						$("#Estante2").val("");
						$("#Estado2").val("");
						$("#TipoDoc").val("");
						$("#image2").val("");
						
						

				},3000);
				$(".botonactualiza").val("Actualizar");
			}
			else{
				
				$('.actualizo').slideDown('slow');
				setTimeout(function(){
					$(".botonactualiza").val("Actualizar");
					$("#Nombre2").val("");
					$("#Id2").val("");
					$("#Causa2").val("");
					$("#Cargo2").val("");
					$("#Inicial2").val("");
					$("#Final2").val("");
					$("#Caja2").val("");
					$("#Consecutivo2").val("");
					$("#Carpeta2").val("");
					$("#Tomo2").val("");
					$("#Estante2").val("");
					$("#Estado2").val("");
					$("#TipoDoc").val("");
					$("#image2").val("");
					w.style.display = "none";

				},3000);
				setTimeout(function(){
					$('.actualizo').slideUp('slow');
				},3000);
			
			}
			})
			
		.fail(function(resp){
			console.log(resp.responseText);
			})
		
		});

		$('#datos').on('click', function() {
		
			var a = document.getElementById("nospan"); 
			var b = document.getElementById("six"); 
			var c = document.getElementById("five"); 
			var z = document.getElementById("seven");
			var za = document.getElementById("consulta");
			var zb = document.getElementById("consulta2");
			if (z.style.display === "none") 
			{
				a.style.display = "none";
				b.style.display = "none";
				c.style.display = "none";
				z.style.display = "block";
				za.style.display = "none";
				zb.style.display = "none";
			}
			else{
				z.style.display = "none";
				
			}
		});

		   $('#ubicacion').on('click', function() {
			var campo = $('#Cargo3').val();
			var a = document.getElementById("card2");
			if(campo === ''){
				alert("Debe Completar los Campos");
			}else{
				if(a.style.display === "none"){
					a.style.display = "block";
				}
				else{
					a.style.display = "none";
				}
				
			};
			jQuery.ajax({
				url: 'consulta.php',
				type: 'POST',
				dataType: 'json',
				data: $(this).serialize(),
				beforeSend: function(){
					
				}
			})
			.done(function(respuesta){
				
				var cont = 1;
				 var car = respuesta.carpetas;
				 var car2 = car.replace('CAD-SA ', '')
				 var car3 = Number(car2) + cont;
				 $('#Carpeta3').val('CAD-SA '+'000000'+car3);
				})
			.fail(function(resp){
				console.log(resp.responseText);
				})
			
			}); 
			
		$('#digitalizar').on('click', function() {
			var campo = $('#Estante3').val();
			var a = document.getElementById("card3");
			if(campo === ''){
				alert("Debe Completar los campos");
			return false;
			}else{
				if(a.style.display === "none"){
					a.style.display = "block";
				}
				else{
					a.style.display = "none";
				}
				
			}
		});
		
		
		$('#i_file').change( function(event) {
			var ab = document.getElementById("botonregistro");
				ab.style.display = "block";
			var tmppath = URL.createObjectURL(event.target.files[0]);
			$("#imag-reg").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
			});


/*REGISTRA HL*/


jQuery(document).on("submit","#fm4", function(event){
	
	event.preventDefault();
	var a = document.getElementById("slideThree");
		if(a.checked !== true)	{
			jQuery.ajax({
				url: 'insertcontratos.php',
				type: 'POST',
				dataType: 'json',
				data: $(this).serialize()
			})
		}
	
	jQuery.ajax({
		url: 'Insert.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$(".botonregistro").val("Registrando...");
		}
	})
	.done(function(respuesta){
		var formData = new FormData($("#fm4")[0]);
		$.ajax({
		type: 'POST',
		url: 'subida.php',
		data: formData,
		contentType: false,
		processData: false
		});
		console.log(respuesta);
		if(!respuesta.error1){
			var b = document.getElementById("card2");
		var c = document.getElementById("card3");
		                    $('.bien1').slideDown('slow');
							setTimeout(function(){
								$('.bien1').slideUp('slow');
								$(".botonregistro").val("Registrar");
								$("#Nombre3").val("").attr('readonly', false);
								$("#Id3").val("").attr('readonly', false);
								$("#Causa3").val("").attr('readonly', false);
								$("#Cargo3").val("").attr('readonly', false);
								$("#Inicial3").val("").attr('readonly', false);
								$("#Final3").val("").attr('readonly', false);
								$("#Caja3").val("").attr('readonly', false);
								$("#Consecutivo3").val("").attr('readonly', false);
								$("#Carpeta3").val("").attr('readonly', false);
								$("#Tomo3").val("").attr('readonly', false);
								$("#Estante3").val("").attr('readonly', false);
								$("#Estado3").val("").attr('readonly', false);
								$("#Inicial4").val("").attr('readonly', false);
								$("#Final4").val("").attr('readonly', false);
								b.style.display = "none";
								c.style.display = "none";        
							},3000);
						
		
		}else{
			$('.error1').slideDown('slow');
		setTimeout(function(){
			$('.error1').slideUp('slow');
		},3000);
		$(".botonregistro").val("Registrarse");
		}
		})
	.fail(function(resp){
		console.log(resp.responseText);
		})
	
	});

	$('#slideThree').on('click', function() {
		var a = document.getElementById("slideThree");
		var b = document.getElementById("ultimocontrato");
		
		if(a.checked !== true)	{
			/*console.log( 'Esta en si')*/
			$('#Causa3').val('LABORANDO ACTUALMENTE').attr('readonly', true);
			$('#Final3').val('LABORANDO ACTUALMENTE').attr('readonly', true);
			$('#Caja3').val('ESTANTE ACTIVO').attr('readonly', true);
			$('#Consecutivo3').val('ESTANTE ACTIVO').attr('readonly', true);
			$('#Estante3').val('ESTANTE ACTIVO').attr('readonly', true);
			$('#select').val('ACTIVA').attr('readonly', true);
			b.style.display = "block";

		}
		else{
			$('#Causa3').val('').attr('readonly', false);
			$('#Final3').val('').attr('readonly', false);
			$('#Caja3').val('').attr('readonly', false);
			$('#Consecutivo3').attr('readonly', false);
			$('#Estante3').val('').attr('readonly', false);
			$('#select').attr('readonly', false);
			b.style.display = "none";
			
		}
		
	});

	$('.custom-checkbox-label1').on('click', function() {
		var a = document.getElementById("custom-checkbox-discovery");
		var ab = document.getElementById("botonregistro");
		var ac = document.getElementById("card3");
		
				
		if(a.checked !== true)	{
			ab.style.display = "block";
			ac.style.display = "none";

		}
		else{
			ab.style.display = "none";
			ac.style.display = "block";

			
		}
		
	});

/*CONSULTA HL PARA PRESTAR, TOTAL*/
jQuery(document).on("submit","#fm7", function(event){
	event.preventDefault();
	var zb = document.getElementById("consulta3");	
	jQuery.ajax({
		url: 'Pconsulta.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$(".botonconsulta3").val("Validando...");
		
		}
	})
	.done(function(respuesta){
		zb.style.display = "none";
		
		var ruta = "Historias_Laborales/";
		var f = document.getElementById("nine");
		if(!respuesta.errorHL){
			
			if(respuesta.estado === "DISPONIBLE" ||	 respuesta.estado === ""){
				$('#card0').slideDown('slow');
				f.style.display = "block"
				f.style.marginTop = "-27rem";
				
				$('#Pid1').val( respuesta.iden).attr('readonly', true);
				$('#Pnombre').val( respuesta.nombre).attr('readonly', true);
				$('#card0').css("background", "url("+ruta +respuesta.iden+ "/" + respuesta.iden+".jpg"+")");
				$('#card0').css('background-position', 'center');
				$('#card0').css('background-repeat', 'no-repeat');
				$('#card0').css('background-size', '300px');
				$("#card0").hover(function() {
					$('.icons').css("display","grid")
					$('#card0').css("background", "url("+ruta +respuesta.iden+ "/" + respuesta.iden+".jpg"+")");
					$('#card0').css('background-position', 'left');
					$('#card0').css('background-repeat', 'no-repeat');
					$('#card0').css('background-size', '600px');}, function() {
					$('#card0').css("background", "url("+ruta +respuesta.iden+ "/" + respuesta.iden+".jpg"+")");
					$('#card0').css('background-position', 'center');
					$('#card0').css('background-repeat', 'no-repeat');
					$('#card0').css('background-size', '300px');
					$('.icons').css("display","none")

				  });
			}
			else{
				alert("Historia laboral en Prestamo, en Posesión del area: "+respuesta.areasol);	
				f.style.display = "none"
			}
			
			setTimeout(function(){
				$(".botonconsulta3").val("Consultar");
			},3000);
		}else{
			$('.errorHL').slideDown('slow');
			$(".botonconsulta3").val("Sin Datos");
		setTimeout(function(){
			$('.errorHL').slideUp('slow');
			
		},3000);
		$(".botonconsulta3").val("Consultar");
		$(".ipc3").val("");
		}
		})
	.fail(function(resp){
		console.log(resp.responseText);
		})
	.always(function(){
		$(".ipc3").val("");
		});
	});

	/*SOLICITA PRESTAMO*/
	jQuery(document).on("submit","#fm8", function(event){
		event.preventDefault();
		
		jQuery.ajax({
			url: 'uprestamo.php',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			beforeSend: function(){
				$(".solicitar").val("Enviando...");
			}
		})
		
		.done(function(respuesta){
			$('#card0').slideUp('slow');	
			if(respuesta.actualizo){
				setTimeout(function(){
					$("#Pid1").val("");
					$("#Pid2").val("");
					$("#Pid3").val("");
					$(".solicitar").val("Solicitar");
				},1500);	
						
			}
			})
			
		.fail(function(resp){
			console.log(resp.responseText);
			})
		
		});
		
		jQuery(document).on("submit","#fma", function(event){
			event.preventDefault();
			jQuery.ajax({
				url: 'atiende.php',
				type: 'POST',
				dataType: 'json',
				data: $(this).serialize(),
				beforeSend: function(){
					$(".sosi").val("»»»");
				}
			})
			
			.done(function(respuesta){
						
				if(respuesta.actualizo){
					
				
				}
				})
				
			.fail(function(resp){
				console.log(resp.responseText);
				})
			
			});

			jQuery(document).on("submit","#fm9", function(event){
				event.preventDefault();
				
				jQuery.ajax({
					url: 'devuelve.php',
					type: 'POST',
					dataType: 'json',
					data: $(this).serialize(),
					beforeSend: function(){
						$(".botonconsulta4").val("En proceso...");
					}
				})
				
				.done(function(respuesta){

					var zd = document.getElementById("consulta4");
					
					if(respuesta.actualizo){
						
						
							$('.bien2').slideDown('slow');	
							$(".botonconsulta4").val("Devolver");
							setTimeout(function(){
								$('.bien2').slideUp('slow');
								zd.style.display = "none";
							},1000);
								
					}
					else{
						$('.error2').slideDown('slow');
					}
					})
					
				.fail(function(resp){
					console.log(resp.responseText);
					})
				
				});

				jQuery(document).on("submit","#fm10", function(event){
					event.preventDefault();
					
					jQuery.ajax({
						url: 'tranfer.php',
						type: 'POST',
						dataType: 'json',
						data: $(this).serialize(),
						beforeSend: function(){
							$(".botontransfer").val("En proceso...");
						}
					})
					
					.done(function(respuesta){
	
						var zd = document.getElementById("consulta5");
						
						if(respuesta.bien){
							
							
								$('.bien').slideDown('slow');	
								$(".botontransfer").val("Transferir");
								setTimeout(function(){
									$('.bien').slideUp('slow');
									zd.style.display = "none";
								},1000);
									
						}
						else{
							$('.errorHL').slideDown('slow');
							setTimeout(function(){
								$('.errorHL').slideUp('slow');
								$('.ipc5').val('');
								$('#tipodoc').val('Seleccionar');
								$(".botontransfer").val("Transferir");
							},1000);
						}
						})
						
					.fail(function(resp){
						console.log(resp.responseText);
						})
					
					});
					/*CIRCULAR MENU*/
					var items = document.querySelectorAll('.circular a');

					for(var i = 0, l = items.length; i < l; i++) {
					items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
					
					items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
					}

					document.querySelector('#gesdoc').onclick = function(e) {
					e.preventDefault(); 
					document.querySelector('.circular').classList.toggle('open');
				}

					//MODAL 1
					var modalcircular = document.getElementById("myModalcircular");
					var btncircular = document.getElementById("myBtncircular");
					var spancircular = document.getElementsByClassName("closecircular")[0];
					btncircular.onclick = function() {
					  modalcircular.style.display = "block";
					}
					spancircular.onclick = function() {
					  modalcircular.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular) {
						modalcircular.style.display = "none";
					  }
					}
					//MODAL 2
					var modalcircular2 = document.getElementById("myModalcircular2");
					var btncircular2 = document.getElementById("myBtncircular2");
					var spancircular2 = document.getElementsByClassName("closecircular2")[0];
					btncircular2.onclick = function() {
					  modalcircular2.style.display = "block";
					}
					spancircular2.onclick = function() {
					  modalcircular2.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular2) {
						modalcircular2.style.display = "none";
					  }
					}
					//MODAL 3
					var modalcircular3 = document.getElementById("myModalcircular3");
					var btncircular3 = document.getElementById("myBtncircular3");
					var spancircular3 = document.getElementsByClassName("closecircular3")[0];
					btncircular3.onclick = function() {
					  modalcircular3.style.display = "block";
					}
					spancircular3.onclick = function() {
					  modalcircular3.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular3) {
						modalcircular3.style.display = "none";
					  }
					}
					//MODAL 4
					var modalcircular4 = document.getElementById("myModalcircular4");
					var btncircular4 = document.getElementById("myBtncircular4");
					var spancircular4 = document.getElementsByClassName("closecircular4")[0];
					btncircular4.onclick = function() {
					  modalcircular4.style.display = "block";
					}
					spancircular4.onclick = function() {
					  modalcircular4.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular4) {
						modalcircular4.style.display = "none";
					  }
					}
					//MODAL 5
					var modalcircular5 = document.getElementById("myModalcircular5");
					var btncircular5 = document.getElementById("myBtncircular5");
					var spancircular5 = document.getElementsByClassName("closecircular5")[0];
					btncircular5.onclick = function() {
					  modalcircular5.style.display = "block";
					}
					spancircular5.onclick = function() {
					  modalcircular5.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular5) {
						modalcircular5.style.display = "none";
					  }
					}
					//MODAL 6
					var modalcircular6 = document.getElementById("myModalcircular6");
					var btncircular6 = document.getElementById("myBtncircular6");
					var spancircular6 = document.getElementsByClassName("closecircular6")[0];
					btncircular6.onclick = function() {
					  modalcircular6.style.display = "block";
					}
					spancircular6.onclick = function() {
					  modalcircular6.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular6) {
						modalcircular6.style.display = "none";
					  }
					}
					//MODAL 7
					var modalcircular7 = document.getElementById("myModalcircular7");
					var btncircular7 = document.getElementById("myBtncircular7");
					var spancircular7 = document.getElementsByClassName("closecircular7")[0];
					btncircular7.onclick = function() {
					  modalcircular7.style.display = "block";
					}
					spancircular7.onclick = function() {
					  modalcircular7.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular7) {
						modalcircular7.style.display = "none";
					  }
					}
					//MODAL 8
					var modalcircular8 = document.getElementById("myModalcircular8");
					var btncircular8 = document.getElementById("myBtncircular8");
					var spancircular8 = document.getElementsByClassName("closecircular8")[0];
					btncircular8.onclick = function() {
					  modalcircular8.style.display = "block";
					}
					spancircular8.onclick = function() {
					  modalcircular8.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcircular8) {
						modalcircular8.style.display = "none";
					  }
					}
					//MODAL CONTACTO
					var modalcontacto = document.getElementById("myModalcontacto");
					var btncontacto = document.getElementById("contacto");
					var spancontacto = document.getElementsByClassName("closecontacto")[0];
					btncontacto.onclick = function() {
						modalcontacto.style.display = "block";
					}
					spancontacto.onclick = function() {
						modalcontacto.style.display = "none";
					}
					window.onclick = function(event) {
					  if (event.target == modalcontacto) {
						modalcontacto.style.display = "none";
					  }
					}

					$(document).ready(function() {
						function hideShowContainers() {
							document.getElementById("C4").animate([
								// keyframes
								{ 
									transform: ' rotate(45deg)',
									transform: 'skewX(-45deg)',
									opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							document.getElementById("D4").animate([
								// keyframes
								{ 
								 
									transform: ' rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("E4").animate([
								// keyframes
								{ transform: ' rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("F4").animate([
								// keyframes
								{ transform: ' rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("G4").animate([
								// keyframes
								{ transform: '  rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("B4").animate([
								// keyframes
								{ transform: '  rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("C5").animate([
								// keyframes
								{ transform: ' rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  document.getElementById("A4").animate([
								// keyframes
								{ transform: ' rotate(45deg)',
								transform: 'skewX(-45deg)',
								opacity: 0
								}
								 
							  ], {
								// timing options
								duration: 1000, 
								
							  });
							  
							
						}
						/*Colors*/
						function Colors() {
							document.getElementById("B4").animate([
								// keyframes
								{ background: '#f6aab6',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 100, 
								
							  });
							  document.getElementById("C5").animate([
								// keyframes
								{ background: '#c7a1e8',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 200, 
								
							  });
							document.getElementById("C4").animate([
								// keyframes
								{ 
									background: '#8fc3df',
									border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 300, 
								
							  });
							document.getElementById("D4").animate([
								// keyframes
								{ 
								 
									background: '#80d8cf',
									border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 400, 
								
							  });
							  document.getElementById("E4").animate([
								// keyframes
								{ background: '#ddf59a',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 500, 
								
							  });
							  document.getElementById("F4").animate([
								// keyframes
								{ background: '#ccc6c6',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 600, 
								
							  });
							  document.getElementById("G4").animate([
								// keyframes
								{ background: '#f99669',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 700, 
								
							  });
							 
							  document.getElementById("A4").animate([
								// keyframes
								{ background: '#e77979',
								border: '2px solid #fcfff4'
								}
								 
							  ], {
								// timing options
								duration: 800, 
								
							  });
							  
							
						}
						var containercolors = document.getElementById("containercolors");
						function Borra() {
							containercolors.style.display ="none";
							document.querySelector('.circular').classList.toggle('open');
						}
						//Ejecutamos la función para que evalue los condicionales cada 5 segundos
						
						var llevamapa = document.getElementById("llevamapa");
						llevamapa.onclick = function() {
							if(containercolors.style.display ="none"){
								containercolors.style.display ="block";
								setInterval(Colors,800,setTimeout(hideShowContainers,2800));							
							setTimeout(Borra,3500);
							
							}
							else{
								containercolors.style.display ="none";
								
							}
							
					  }
					  });

/*FORM GENERATOR PDF*/
jQuery(document).on("submit","#fmimprimir", function(event){
	
	event.preventDefault();
	
	jQuery.ajax({
		url: 'selectimprime.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$(".botonconsultaimprimir").val("Consultando...");
		}
	})
	.done(function(respuesta){
	var imprimir = document.getElementById("contentpdf");
	var consultaimprimir = document.getElementById("consultaimprimir");
	var generarpdf = document.getElementById("generator");
		if(!respuesta.errorHL){
			$(".botonconsultaimprimir").val("Consultar");
			$(".ipcimprimir").val("");
				consultaimprimir.style.display ="none";
				imprimir.style.display ="block";
					  generarpdf.onclick = function() {
						var doc = new jsPDF('p','mm','legal');

						var logo = new Image();
						logo.src = '/Imagenes/caratula.JPG';
						doc.addImage(logo, 'JPG',  0.3, 0.3, 218, 330);
						doc.setFontSize(15).setFont(undefined, 'bold');
						doc.text(90, 151, respuesta.Nombre);
						doc.text(110, 157.5, 'C.C. '+ respuesta.Id);
						if(respuesta.cargo ==="GESTOR"){
							doc.text(117, 163.5, respuesta.cargo);
						}else{
							doc.text(105, 163.5, respuesta.cargo);
						}
						doc.text(90, 169, respuesta.causa).setFontSize(12);
						
						if(respuesta.caja != "ESTANTE ACTIVO"){
							doc.text(123, 208, respuesta.caja);/*CAJA*/
						}else{
							doc.text(112, 208, respuesta.caja);/*CAJA*/
						}
						doc.text(90, 230, respuesta.inicial);
						if( respuesta.final != "LABORANDO ACTUALMENTE"){
							doc.text(158, 230, respuesta.final).setFontSize(10);
						}else{
							doc.text(135, 230, respuesta.final).setFontSize(10);
						}
						
						doc.text(170, 278, respuesta.conse_caja);
						doc.text(112, 278, respuesta.caja);/*CAJA-2*/
						doc.text(165, 208, respuesta.conse_caja);
						doc.save('Caratula de: '+respuesta.Id+'.pdf');
						imprimir.style.display ="none";
					}
					
		
		}else{
			imprimir.style.display ="none";
			$('.errorHL').slideDown('slow');
			$(".botonconsultaimprimir").val("Sin Datos");
		setTimeout(function(){
			$('.errorHL').slideUp('slow');
		},3000);
		$(".botonconsultaimprimir").val("Consultar");
		$(".ipcimprimir").val("");
		}
		})
	.fail(function(resp){
		console.log(resp.responseText);
		})
	
	});
/*
 * 
 * 
 * 
 */

/*GENERA PDF*/

					