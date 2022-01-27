Gobstones, el lenguaje utilizado para presentar los fundamentos de programación, utiliza tableros y bolitas.

Los tableros están compuestos por celdas y cuentan con un cabezal que indica la celda en la que estamos trabajando, es decir el punto de referencia desde dónde va a recibir y realizar instrucciones la computadora. La posición de cada celda en el tablero está asociada a una columna y una fila, representadas con valores numéricos que comienzan desde cero.
Cada celda puede tener bolitas azules, negras, verdes o rojas. Los ejercicios requerirán desplazarse sobre el tablero y sus celdas y operar con las bolitas.
El origen de estos tableros, es decir, el 0 0, se encuentra en la esquina inferior izquierda, incrementando sus columnas hacia arriba y sus  filas hacia la derecha. En Gobstones las direcciones se realizan utilizando los puntos cardinales, es decir que el origen del tablero se encuentra en la esquina de los extremos Sur y Oeste.

Por ejemplo, el tablero
 <gs-board>
GBB/1.0
size 4 2
head 3 0
</gs-board>

es un tablero de 4 columnas y 2 filas, no tiene ninguna bolita y el cabezal está ubicado en la columna 3 fila 0.

Si con el cabezal en esa ubicación ponemos dos bolitas negras  y luego nos desplazamos hacia el Norte obtendremos el tablero:

 <gs-board>
GBB/1.0
size 4 2
cell 3 0 Negro 2
head 3 1
</gs-board>

<a class="sr-only sr-only-focusable"> hola </a>

