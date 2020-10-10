function buscaLibro(catalogo, ISBN) {
	for(let i = 0; i <catalogo.length; i++) {
		const libro = catalogo[i]
		if(libro.ISBN === ISBN) {
			return libro
		}
	}
}

function buscaLibrosAutor(catalogo, autor) {
	let librosAutor = []
	
	for(let i = 0; i <catalogo.length; i++) {
		const libro = catalogo[i]
		if(libro.autor === autor) {
			librosAutor.push(libro)
		}
	}

	return librosAutor
}