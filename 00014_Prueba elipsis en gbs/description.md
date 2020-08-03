Como ya sabés, las expresiones no sólo sirven para operar con números. Vamos a construir ahora una función que retorne un valor **booleano** (`True` / `False`).

Lo que queremos averiguar es si el color `Rojo` es dominante dentro de una celda. Veamos algunos ejemplos. 

En este casillero:

<gs-board>
 GBB/1.0
 size 1 1
 cell 0 0 Rojo 2 Verde 1 Negro 3 Azul 4
 head 0 0
<gs-board>

`rojoEsDominante()` **retorna** `False` (hay 2 bolitas rojas contra 8 de otros colores).
Pero en este otro:

<gs-board>
 GBB/1.0
 size 1 1
 cell 0 0 Rojo 9 Verde 1 Negro 3 Azul 4
 head 0 0
<gs-board>

`rojoEsDominante()` **retorna** `True` (hay 9 bolitas rojas contra 8 de otros colores)

> Definí la función `rojoEsDominante()` que nos diga si cantidad de bolitas rojas **es mayor** que la suma de las bolitas de los otros colores. En la _Biblioteca_ está `todasExcepto(color)` lista para ser invocada. :wink: