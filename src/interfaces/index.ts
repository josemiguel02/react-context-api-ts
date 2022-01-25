export interface Notes {
  id: number
  title: string
  description: string
}

export interface ContextState {
  notes: Notes[]
}

export type Action =
  | { type: 'add', payload: Notes }
  | { type: 'delete', payload: number | string }
