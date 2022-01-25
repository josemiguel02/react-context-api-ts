import { useNotes } from '../hooks/useNotes'
import { NotesItem } from './NotesItem'

export const NotesList = () => {
  const { notes } = useNotes()

  return (
    <div className='notes-list-container'>
      {!notes.length && <h2>No notes yet 😿</h2>}

      {notes.map(note => (
        <NotesItem key={note.id} note={note} />
      ))}
    </div>
  )
}
