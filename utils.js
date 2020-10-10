function buscaLibro(catalogo, ISBN) {
	for(let i = 0; i <catalogo.length; i++) {
		let libro = catalogo[i]
		if (libro.ISBN === ISBN) {
			return libro
		}
	}
}