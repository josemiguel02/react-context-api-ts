import { createContext, Dispatch } from 'react'
import { Action, ContextState } from '../interfaces'

interface NotesContextProps {
  state: ContextState
  dispatch: Dispatch<Action>
}

const NoteContext = createContext<NotesContextProps>({} as NotesContextProps)

export default NoteContext
