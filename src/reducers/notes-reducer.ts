import { Action, ContextState } from '../interfaces'

export const notesReducer = (state: ContextState, action: Action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }

    case 'delete':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }

    default:
      return state
  }
}
