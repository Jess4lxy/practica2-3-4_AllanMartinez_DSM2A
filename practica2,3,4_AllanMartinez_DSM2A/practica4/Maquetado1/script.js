// Obtener elementos select
var diaNacimiento = document.getElementById("dia");
var mesNacimiento = document.getElementById("mes");
var añoNacimiento = document.getElementById("año");
var diaEmisionPasaporte = document.getElementById("dia_emision_pasaporte");
var mesEmisionPasaporte = document.getElementById("mes_emision_pasaporte");
var añoEmisionPasaporte = document.getElementById("año_emision_pasaporte");
var diaVencimientoPasaporte = document.getElementById("dia_vencimiento_pasaporte");
var mesVencimientoPasaporte = document.getElementById("mes_vencimiento_pasaporte");
var añoVencimientoPasaporte = document.getElementById("año_vencimiento_pasaporte");

// Aqui genero los dias
for (var dia = 1; dia <= 31; dia++) {
    var option = document.createElement("option");
    option.text = dia;
    diaNacimiento.add(option);
    diaEmisionPasaporte.add(option.cloneNode(true)); // Copia el elemento para la fecha de emisión
    diaVencimientoPasaporte.add(option.cloneNode(true)); // Copia el elemento para la fecha de vencimiento
}

// Aqui genero los meses
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    var option = document.createElement("option");
    option.text = meses[i];
    option.value = i + 1; // Valor numérico del mes
    mesNacimiento.add(option);
    mesEmisionPasaporte.add(option.cloneNode(true)); // Copia el elemento para la fecha de emisión
    mesVencimientoPasaporte.add(option.cloneNode(true)); // Copia el elemento para la fecha de vencimiento
}

// Genero opciones para los años de nacimiento
var añoInicioNacimiento = 1904; // Año mínimo de nacimiento permitido
var añoFinNacimiento = 2024; // Año máximo de nacimiento permitido
for (var año = añoFinNacimiento; año >= añoInicioNacimiento; año--) {
    var option = document.createElement("option");
    option.text = año;
    añoNacimiento.add(option);
}

// Genero opciones para los años de emisión
var añoInicioEmision = 2000;
var añoFinEmision = 2024; // Año máximo de emisión del pasaporte
for (var año = añoFinEmision; año >= añoInicioEmision; año--) {
    var option = document.createElement("option");
    option.text = año;
    añoEmisionPasaporte.add(option);
}

// Genero opciones para los años de vencimiento
var añoInicioVencimiento = 2035; // Año máximo de vencimiento del pasaporte
var añoFinVencimiento = 2000; // Año mínimo de vencimiento del pasaporte
for (var año = añoInicioVencimiento; año >= añoFinVencimiento; año--) {
    var option = document.createElement("option");
    option.text = año;
    añoVencimientoPasaporte.add(option);
}

// Lista de todos los países
var paises = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

// Obtener elementos select
var paisNacimiento = document.getElementById("pais_nacimiento");
var nacionalidad = document.getElementById("nacionalidad");
var paisEmisionPasaporte = document.getElementById("pais_emision_pasaporte");

// Función para generar opciones de países
function agregarOpcionesPaises(selectElement, paises) {
    for (var i = 0; i < paises.length; i++) {
        var option = document.createElement("option");
        option.text = paises[i];
        selectElement.add(option);
    }
}

// Agregar opciones de países a los selects correspondientes
agregarOpcionesPaises(paisNacimiento, paises);
agregarOpcionesPaises(nacionalidad, paises);
agregarOpcionesPaises(paisEmisionPasaporte, paises);

