// estas tres lineas son opcionales
Muzzle.canvasHeight = 600;
Muzzle.canvasWidth = 1200;
Muzzle.pieceSize = 100;
// Muzzle.strokeWidth = 0;

const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-alternativa-kids/master/assets/attires/';


// caso "choice"
Muzzle.match([
  `${baseUrl}/va_vacio.png`
], [
  `${baseUrl}/va_fru.png`,
], [
  `${baseUrl}/cu_vai.png`,
  `${baseUrl}/choc_mitad_vacio2.png`
]).then(canvas => {
          canvas.shuffle(0.4);
          canvas.puzzle.pieces.filter(it => !it.metadata.left).forEach(it => it.translate(400, 0))
          canvas.puzzle.pieces[0].relocateTo(360, 60)
          canvas.puzzle.pieces[2].relocateTo(360, 200)
          canvas.puzzle.pieces[3].relocateTo(360, 340)
          canvas.puzzle.pieces[1].relocateTo(760, 200)
          canvas.draw();
        });