mumuki.load(function() {
  $('canvas').style.border = "thick solid black";
});

// estas tres lineas son opcionales
Muzzle.canvasHeight = 380;
Muzzle.canvasWidth = 600;
Muzzle.pieceSize = 50;
Canvas.borderFill = 20;
// Muzzle.strokeWidth = 0;

const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-alternativa-kids/master/assets/attires/';

Muzzle.basic(5, 5, 'https://flbulgarelli.github.io/headbreaker/static/berni.jpg')


// caso "choice"
//Muzzle.match([
//  `${baseUrl}/va_vacio.png`
//], [
//  `${baseUrl}/va_fru.png`,
//], [
//  `${baseUrl}/cu_vai.png`,
//  `${baseUrl}/choc_mitad_vacio2.png`
//]);


// caso "unir con flechas"
/*Muzzle.match([
   `${baseUrl}/va_vacio.png`,
   `${baseUrl}/cu_vacio.png`,
   `${baseUrl}/chips_poco.png`
 ], [
   `${baseUrl}/va_fru.png`,
   `${baseUrl}/cu_vai.png`,
   `${baseUrl}/chips_mucho.png`,
 ], [
   `${baseUrl}/choc_mitad_vacio2.png` // opcional
 ]);
*/

