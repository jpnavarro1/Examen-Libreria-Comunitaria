/*
	La libreria se maneja actualmente con un cuaderno donde
	anotan ingresos y egresos

	Por cada libro anotan:
		titulo
		autor
		año de lanzamiento
		editorial
		ISBN (International Standard Book Number)

	los lectores los alquilan pidiendolos por su ISBN

	1: Saber si un libro está o no disponible
*/

function estaDisponible(catalogo, ISBN) {
/*
	1:
		Reviso el catalogo de libros, anoto el ISBN del
		que me interesa, pregunto si está disponible,
		reviso en la ficha del libro si fue prestado,
		contesto si está disponible o no.

	2:
		busco el libro dentro del catalogo por su ISBN
		si el libro fue prestado
			devuelvo fue prestado
		si no
			devuelvo está disponible
*/

	const libro = buscaLibro(catalogo, ISBN)

	if(libro.alquilado) {
		return 'fue prestado'
	} else {
		return 'está disponible'
	}

}


