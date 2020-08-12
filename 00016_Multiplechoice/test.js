$('#muzzle-canvas').css('border', '3px');
$('#muzzle-canvas').css('border-style', 'solid');
$('#muzzle-canvas').css('margin-top', '15px');
$('#muzzle-canvas').css('border-radius', '10px');
$('.mu-kids-exercise .mu-kids-character .mu-kids-character-speech-bubble').css('width', '50%');
$('.mu-kids-character').append('<div position="left" margin-left="100px"><img src="https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-pruebas-contenido-mumuki/master/assets/luz_apagada-01_1597270246443.png" alt="luz_apagada-01_1597270246443.png" width="10%" height="10%" style = "margin-left: 90%;" onclick="changeBulb()"></div>');

function changeBulb() {
  $('img[src="https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-pruebas-contenido-mumuki/master/assets/luz_apagada-01_1597270246443.png"]').attr("src", "https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-pruebas-contenido-mumuki/master/assets/luz_encendida-01_1597270985305.png" alt='luz_encendida-01_1597270985305.png'");
}

// estas tres lineas son opcionales
Muzzle.canvasHeight = 450;
Muzzle.canvasWidth = 1200;
Muzzle.pieceSize = 80;
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