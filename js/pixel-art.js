<<<<<<< HEAD
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var numeroDePixeles = 1750;

var nombreColores = [
	'White',
	'LightYellow',
	'LemonChiffon',
	'LightGoldenrodYellow',
	'PapayaWhip',
	'Moccasin',
	'PeachPuff',
	'PaleGoldenrod',
	'Bisque',
	'NavajoWhite',
	'Wheat',
	'BurlyWood',
	'Tan',
	'Khaki',
	'Yellow',
	'Gold',
	'Orange',
	'DarkOrange',
	'OrangeRed',
	'Tomato',
	'Coral',
	'DarkSalmon',
	'LightSalmon',
	'LightCoral',
	'Salmon',
	'PaleVioletRed',
	'Pink',
	'LightPink',
	'HotPink',
	'DeepPink',
	'MediumVioletRed',
	'Crimson',
	'Red',
	'FireBrick',
	'DarkRed',
	'Maroon',
	'Brown',
	'Sienna',
	'SaddleBrown',
	'IndianRed',
	'RosyBrown',
	'SandyBrown',
	'Goldenrod',
	'DarkGoldenrod',
	'Peru',
	'Chocolate',
	'DarkKhaki',
	'DarkSeaGreen',
	'MediumAquaMarine',
	'MediumSeaGreen',
	'SeaGreen',
	'ForestGreen',
	'Green',
	'DarkGreen',
	'OliveDrab',
	'Olive',
	'DarkOliveGreen',
	'YellowGreen',
	'LawnGreen',
	'Chartreuse',
	'GreenYellow',
	'Lime',
	'SpringGreen',
	'LimeGreen',
	'LightGreen',
	'PaleGreen',
	'PaleTurquoise',
	'AquaMarine',
	'Cyan',
	'Turquoise',
	'MediumTurquoise',
	'DarkTurquoise',
	'DeepSkyBlue',
	'LightSeaGreen',
	'CadetBlue',
	'DarkCyan',
	'Teal',
	'Steelblue',
	'LightSteelBlue',
	'Honeydew',
	'LightCyan',
	'PowderBlue',
	'LightBlue',
	'SkyBlue',
	'LightSkyBlue',
	'DodgerBlue',
	'CornflowerBlue',
	'RoyalBlue',
	'SlateBlue',
	'MediumSlateBlue',
	'DarkSlateBlue',
	'Indigo',
	'Purple',
	'DarkMagenta',
	'Blue',
	'MediumBlue',
	'DarkBlue',
	'Navy',
	'Thistle',
	'Plum',
	'Violet',
	'Orchid',
	'DarkOrchid',
	'Fuchsia',
	'Magenta',
	'MediumOrchid',
	'BlueViolet',
	'DarkViolet',
	'DarkOrchid',
	'MediumPurple',
	'Lavender',
	'Gainsboro',
	'LightGray',
	'Silver',
	'DarkGray',
	'Gray',
	'DimGray',
	'LightSlateGray',
	'DarkSlateGray',
	'Black'
];

// Funcion generador de paletas

function generadorDePaletas() {
	for (i = 0; i < nombreColores.length; i++) {
		var hijo = document.createElement('div');
		hijo.classList.add('color-paleta');
		hijo.classList.add(nombreColores[i]);
		hijo.style.backgroundColor = nombreColores[i];
		paleta.appendChild(hijo);
	}
}

// Activa el generador de paletas

generadorDePaletas();

// Funcion generador de Pixeles

function generadorDePixeles() {
	for (j = 0; j <= numeroDePixeles; j++) {
		var singlePixel = document.createElement('div');
		grillaPixeles.appendChild(singlePixel);
	}
}

generadorDePixeles();

// Funcion Borrar Todo

function borrarTodo() {
	grillaPixeles.style.backgroundColor = "white";
	console.log(grillaPixeles);
}

=======
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

>>>>>>> be3495381bcb94243ae9629fccdf893072e184cc
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

<<<<<<< HEAD
colorPersonalizado.addEventListener('change', function() {
	// Se guarda el color de la rueda en colorActual
	colorActual = colorPersonalizado.value;
	// Completar para que cambie el indicador-de-color al colorActual
});

$('body').on('click', function(e) {
	console.log(e);
});
=======
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual


  })
);
>>>>>>> be3495381bcb94243ae9629fccdf893072e184cc
