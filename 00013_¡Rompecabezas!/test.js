// estas tres lineas son opcionales
Muzzle.canvasHeight = 600;
Muzzle.canvasWidth = 1200;
Muzzle.pieceSize = 200;

const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-alternativa-kids/master/assets/attires/';


// caso "choice"
Muzzle.match([
  `${baseUrl}/va_vacio.png`
], [
  `${baseUrl}/va_fru.png`,
], [
  `${baseUrl}/cu_vai.png`,
  `${baseUrl}/choc_mitad_vacio2.png`
]);


// caso "unir con flechas"
// Muzzle.match([
//   `${baseUrl}/va_vacio.png`,
//   `${baseUrl}/cu_vacio.png`,
//   `${baseUrl}/chips_poco.png`
// ], [
//   `${baseUrl}/va_fru.png`,
//   `${baseUrl}/cu_vai.png`,
//   `${baseUrl}/chips_mucho.png`,
// ], [
////   `${baseUrl}/choc_mitad_vacio2.png` // opcional
// ]);


