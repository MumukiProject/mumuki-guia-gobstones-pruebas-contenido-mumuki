$('.mu-kids-state-image').css('opacity', '0.5');
$('canvas').css('border', '5px');
$('canvas').css('border-style', 'solid');
$('.btn-submit-container').remove();

// estas tres lineas son opcionales
Muzzle.canvasHeight = 380;
Muzzle.canvasWidth = 600;
Muzzle.pieceSize = 50;
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

