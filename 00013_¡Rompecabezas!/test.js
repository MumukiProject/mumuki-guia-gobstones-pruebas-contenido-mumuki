Muzzle.canvasHeight = 400
Muzzle.canvasWidth = 400
const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-alternativa-kids/master/assets/attires/';

// with left and right pieces
Muzzle.match([
  `${baseUrl}/va_vacio.png`,
  `${baseUrl}/cu_vacio.png`,
  `${baseUrl}/chips_poco.png`
], [
  `${baseUrl}/va_fru.png`,
  `${baseUrl}/cu_vai.png`,
  `${baseUrl}/chips_mucho.png`,
]);