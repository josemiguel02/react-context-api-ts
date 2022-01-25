import { NotesForm } from './NotesForm'
import { NotesHeader } from './NotesHeader'
import { NotesList } from './NotesList'
import '../styles/notes.css'

export const Notes = () => {
  return (
    <div className='notes-container'>
      <NotesHeader />
      <NotesForm />
      <NotesList />
    </div>
  )
}
