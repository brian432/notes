import { useState } from "react"

export const CreateNotes = ({ createNote }) => {
    const [newNote, setNewNote] = useState("")

    const handleChangeNote = (e) => {
        setNewNote(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        createNote(newNote)
        setNewNote("")
    }
    return (
        <div className='createNotes'>
            <form onSubmit={onSubmit}>
                <input onChange={handleChangeNote} value={newNote} placeholder='Crea una nueva nota...' />
                <button type='submit'>Guardar</button>
            </form>
        </div>
    )
}