import { ReactNode, useReducer, FC } from 'react'
import { notesData } from '../data/notes'
import { ContextState } from '../interfaces'
import { notesReducer } from '../reducers/notes-reducer'
import NotesContext from './NotesContext'

interface Props {
  children: ReactNode
}

const INITIAL_STATE: ContextState = {
  notes: notesData
}

const NoteProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, INITIAL_STATE)

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  )
}

export default NoteProvider
