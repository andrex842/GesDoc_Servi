
function EscanNAPS2(){
   swal({
	title: "Alerta ",
	text: "Sera dirigido a NAPS2, Aplicacion de escaner",
	icon: "warning",
	buttons: true,
	dangerMode: true,
  })
  .then((willDelete) => {
	if (willDelete) {
		swal("NAPS2, en Ejecución...", {
			icon: "success",
		  });
		var win = window.open("executeProgram.php", '_blank');
		// Cambiar el foco al nuevo tab (punto opcional)
		win.close();
	} else {
	  swal("Cancelado por el Usuario!",{
		icon: "warning",
	  });
	}
  });
		
   };
