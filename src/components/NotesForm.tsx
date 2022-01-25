import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import { useNotes } from '../hooks/useNotes'

export const NotesForm = () => {
  const { dispatch } = useNotes()
  const { values, handlerChange, setValues } = useForm({
    title: '',
    description: ''
  })

  const { title, description } = values

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (title !== '' && description !== '') {
      dispatch({
        type: 'add',
        payload: { id: Date.now(), title, description }
      })

      setValues({
        title: '',
        description: ''
      })

      return
    }

    alert('Please fill in the form')
  }

  return (
    <form onSubmit={handlerSubmit} className='notes-form'>
      <input
        value={title}
        onChange={handlerChange}
        name='title'
        type='text'
        placeholder='Title'
        className='notes-input'
      />

      <input
        value={description}
        onChange={handlerChange}
        name='description'
        type='text'
        placeholder='Description'
        className='notes-input'
      />

      <button className='notes-btn'>New Note</button>
    </form>
  )
}
