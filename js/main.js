		

		
		//ESCRIBIMOS EL SCRIPT que va a LANZAR LOS EVENTOS ONCLICK. 
		//Por defecto el display del card_menu esta activo, y lo que tenemos que hacer con la
		//función es que se desactive y se vuelva a activar si le volvemos a dar

		var sections = new Array(5); //Creamos un ARRAY con 6 elementos que van a ser las diferentes secciones
		sections[0] = "Home";
		sections[1] = "Sobremí";
		sections[2] = "Skills";
		sections[3] = "Portfolio";
		sections[4] = "Blog";
	
		//FALTA Función para identificar el ancho de la ventana. COMPATIBLIDAD CON OTROS NAVEGADORES (No entiendo esto muy bien por lo que no lo he hecho aun)

		function displayMenu(){
			var display; //Variable que recoge el display actual del menú
			var card_menu = document.getElementById("card_menu");
			display = card_menu.style.display;

			if(display == "none"){
				card_menu.style.display = "block";
			}
			else{
				card_menu.style.display = "none";
			}	
		}

		// Después de hacer las funciones de NAVSECTION y DISPLAYSECTION, vemos que estamos repitiendo el cambio de color de las secciones, por lo que vamos a crear una nueva FUNCIÓN para OPTIMIZAR el CÓDIGO en el cambio de colores en la navegación

		function setColors(i) {
			var search;
			var bkgr_body = "#233D58";
			var	bkgr_menu = "#233D58";

			if(sections[i] == "Home"){
				bkgr_body = "#233D58";
				bkgr_menu = "#233D58";
			}
			else {
				bkgr_body = "#f1f1f1";
				bkgr_menu = "#29abe2";
			}
			search = document.getElementById(sections[i]);
			search.style.background = bkgr_body;
			var menu = document.getElementsByTagName("header")[0];
			menu.style.background = bkgr_menu;
		}

		// FUNCIÓN que funcione el DISPLAY de las SECCIONES a través de la barra de NAVEGACIÓN - Añadir evento ON CLICK en la Lista de Navegación con la función navSection();

		function navSection(nav) {
			var search; //Variable de búsqueda, donde vamos a ir añadiendo cada elemento
			var bkgr_body = "#233D58";
			var	bkgr_menu = "#233D58";
		
			for(var i=0; i<5; i++){
				search = document.getElementById(sections[i]);
				search.style.display = "none"; //Cada elemento que recorro lo voy a anular
				if (sections[i] == nav){
					// Activar el que estemos recorriendo en ese momento
					setColors(i);
					// TODO ESTE CÓDIGO QUEDA OPTIMIZADO CON LA FUNCIÓN setColors(); y lo único que hay que hacer es llamar a la FUNCIÓN
				}	
			}
		}

		// FUNCIÓN que funcione el DISPLAY de las SECCIONES a través de las FLECHAS

		function displaySection(nav){
				
			var search; //Variable de búsqueda, donde vamos a ir añadiendo cada elemento
			var show;

			for(var i=0; i<5; i++){
				search = document.getElementById(sections[i]);
				show = search.style.display; //Guardamos la variable que hemos rastreado

				if(show == "block"){
					search.style.display = "none";
						if(nav == "next"){	
							i++;
							if(i>4) i=0;
						}
						//Si nav es next, entonces sumamos a i 1, pero si i es mayor de 4, ponemos que i sea 0 para que vuelva a la pestaña de home

						if(nav == "prev"){
							i--;
							if(i<0) i=4;
						}
						//Si nav es prev, entonces restamos a i 1, pero si i es menor que 0, ponemos que i sea 4 para que vuelva a la última pestaña que es el Bloh
						search = document.getElementById(sections[i]);
						search.style.display = "block";
						break; // Para que ya no continúe haciendo búsquedas
				}
			}
			//Ahora tenemos que cambiar el color del fondo del menu, que en el home es un color, y en resto es otro color.
		
			setColors(i);

			// TODO ESTE CÓDIGO QUEDA OPTIMIZADO CON LA FUNCIÓN setColors(); y lo único que hay que hacer es llamar a la FUNCIÓN
		}

		//FUNCION PARA HABILITAR EL BOTON DE FORMULARIO DE CONTACTO

		function displayFormContact(status){
			var form = document.getElementById("contact_form");
			form.style.display = status;
		}

	