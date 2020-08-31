$('.capital-animation').remove();

// estas tres lineas son opcionales
Muzzle.canvasHeight = 500;
Muzzle.canvasWidth = 1200;
Muzzle.pieceSize = 100;
// Muzzle.strokeWidth = 0;

const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-alternativa-kids/master/assets/attires/';


// caso "unir con flechas"
Muzzle.match([
   `${baseUrl}/va_vacio.png`,
   `${baseUrl}/cu_vacio.png`,
   `${baseUrl}/chips_poco.png`
 ], [
   `${baseUrl}/va_fru.png`,
   `${baseUrl}/cu_vai.png`,
   `${baseUrl}/chips_mucho.png`,
 ]/*, [
   `${baseUrl}/choc_mitad_vacio2.png` // opcional
 ]*/);/*.then(canvas => {
          canvas.shuffle(0.5);
          canvas.puzzle.pieces.filter(it => !it.metadata.left).forEach(it => it.translate(600, 0))
          canvas.puzzle.pieces[0].relocateTo(360, 60)
          canvas.puzzle.pieces[4].relocateTo(360, 200)
          canvas.puzzle.pieces[2].relocateTo(360, 340)
          canvas.puzzle.pieces[5].relocateTo(760, 60)
          canvas.puzzle.pieces[1].relocateTo(760, 200)
          canvas.puzzle.pieces[3].relocateTo(760, 340)
          canvas.draw();
        });*/
