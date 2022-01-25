import { useNotes } from '../hooks/useNotes'

export const NotesHeader = () => {
  const { notes } = useNotes()

  return (
    <>
      <h1>Note App React + TypeScript</h1>
      <h3>Total notes: {notes.length}</h3>
    </>
  )
}
