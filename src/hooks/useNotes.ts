import { useContext } from 'react'
import NotesContext from '../context/NotesContext'

export const useNotes = () => {
  const { state, dispatch } = useContext(NotesContext)

  return {
    ...state,
    dispatch
  }
}
