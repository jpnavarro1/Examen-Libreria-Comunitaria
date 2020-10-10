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

const miCatalogo = [
	{
		titulo: 'Lucas Lenz y el Museo del Universo',
		autor: 'Pablo De Santis',
		lanzamiento: 1992,
		editorial: 'Alfaguara',
		ISBN: 9789870400639,
		alquilado: true
	},
	{
		titulo: 'Lucas Lenz y la mano del emperador',
		autor: 'Pablo De Santis',
		lanzamiento: 2000,
		editorial: 'Alfaguara',
		ISBN: 9789870402435,
		alquilado: false
	},
]


let puedoAlquilar = estaDisponible(miCatalogo, 9789870400639)

console.log(puedoAlquilar)

let meGusta = fanaticoAutor(miCatalogo, 'Pablo De Santis')

console.log(meGusta)