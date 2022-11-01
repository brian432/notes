export const getAll = async () => {
    try {
        let req = await fetch('http://localhost:3001/api/notes')
        let res = await req.json()
        return res
    }catch(err){
        console.log('getNotes bad request', err);
    }
}

export const create = async (noteObject ) => {
    try {
        let req = await fetch('http://localhost:3001/api/notes', {
            method: 'POST',
            body: JSON.stringify(noteObject),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let res = await req.json()
        return res
    } catch (err) {
        console.log('Post failure', err);
    }
}

export const update = async (id, changedNote) => {
    try {
        let req = await fetch(`http://localhost:3001/api/notes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(changedNote),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let res = await req.json()
        return res

        /*El fetch en este codigo envia una request a la base de datos para cambiar un recurso,
        que retorne la respuesta no es necesario para el cambio del recurso pero lo que retorna la respuesta
        es el recurso cambiado y mediante esta respues podemos mostrar el recurso cambiado en el front para no tener
        que volver a actualizar la pagina para que se muestre
        */
    } catch (err) {
        console.log('PUT failure', err);
    }
}