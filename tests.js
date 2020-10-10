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
		ISBN: '9789870400639',
		alquilado: true,
		vecesPrestado: 5
	},
	{
		titulo: 'Lucas Lenz y la mano del emperador',
		autor: 'Pablo De Santis',
		lanzamiento: 2000,
		editorial: 'Alfaguara',
		ISBN: '9789870402435',
		alquilado: false,
		vecesPrestado: 3
	},
	{
		titulo: 'El último deseo',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1993,
		editorial: 'SuperNova',
		ISBN: '9788493283612',
		alquilado: true,
		vecesPrestado: 500
	},
	{
		titulo: 'La espada del destino',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1992,
		editorial: 'Alamut',
		ISBN: '9788498890433',
		alquilado: true,
		vecesPrestado: 485
	},
	{
		titulo: 'La sangre de los elfos',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1994,
		editorial: 'Alamut',
		ISBN: '9788498891065',
		alquilado: true,
		vecesPrestado: 400
	},
	{
		titulo: 'Tiempo de odio',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1995,
		editorial: 'Alamut',
		ISBN: '9788498891072',
		alquilado: false,
		vecesPrestado: 380
	},
	{
		titulo: 'Bautismo de fuego',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1996,
		editorial: 'Alamut',
		ISBN: '9788498891089',
		alquilado: false,
		vecesPrestado: 375
	},
	{
		titulo: 'La torre de la golondrina',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1997,
		editorial: 'Alamut',
		ISBN: '9788498891096',
		alquilado: false,
		vecesPrestado: 373
	},
	{
		titulo: 'La dama del lago',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 1999,
		editorial: 'Alamut',
		ISBN: '9788498890624',
		alquilado: false,
		vecesPrestado: 373
	},
	{
		titulo: 'Estación de tormentas',
		autor: 'Andrzej Sapkowski',
		lanzamiento: 2013,
		editorial: 'Alamut',
		ISBN: '9788498891164',
		alquilado: false,
		vecesPrestado: 373
	},
	{
		titulo: 'Sé lo que estás pensando',
		autor: 'John Verdon',
		lanzamiento: 2010,
		editorial: 'Roca editorial',
		ISBN: '9788499182070',
		alquilado: true,
		vecesPrestado: 200
	},
]


let puedoAlquilar = estaDisponible(miCatalogo, '9789870400639')

console.log(puedoAlquilar)

let meGusta = fanaticoAutor(miCatalogo, 'Andrzej Sapkowski')

console.log(meGusta)

let masSolicitados = topDiez(miCatalogo)

console.log(masSolicitados)
