import { FC } from 'react'
import { useNotes } from '../hooks/useNotes'
import { Notes } from '../interfaces'

interface NoteItemProps {
  note: Notes
}

export const NotesItem: FC<NoteItemProps> = ({ note }) => {
  const { id, title, description } = note
  const { dispatch } = useNotes()

  return (
    <div
      className='notes-item'
      onClick={() => dispatch({ type: 'delete', payload: id })}
    >
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
