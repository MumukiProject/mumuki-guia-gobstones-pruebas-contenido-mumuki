// caso "básico"
// Muzzle.basic(3, 2, 'https://flbulgarelli.github.io/headbreaker/static/berni.jpg');

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


