import { Route, Routes } from "react-router-dom"

import { useState, useEffect } from "react"

import { Note } from "./components/Note"
import { Register } from "./components/auth/register"
import { Login } from "./components/auth/login"
import { Home } from "./components/home/home"
import { RequireAuth } from "./components/requireAuth.js/requireAuth"

import { getAll, create, update } from "./services/notes"

const App = () => {
	/*const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		getAll()
			.then(res => setNotes(res))
	}, [])

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			important: Math.random() > 0.5,
		}

		create(noteObject)
			.then(res => {
				setNotes(notes.concat(res))
				setNewNote('')
			})
	}

	const handleNoteChange = (event) => {
		setNewNote(event.target.value)
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important)


	const toggleImportanceOf = id => {
		const note = notes.find(n => n.id === id)
		const changedNote = { ...note, important: !note.important }

		update(id, changedNote)
			.then(res =>
				setNotes(notes.map(note =>
					note.id !== id
						? note
						: res
				))
			)
	}*/

	return (
		<Routes>
			<Route path="/" element={
				<RequireAuth>
					<Home />
				</RequireAuth>
			}
			/>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	)
}

export default App;
