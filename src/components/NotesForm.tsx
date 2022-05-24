import { FormEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useNotes } from '../hooks/useNotes'

export const NotesForm = () => {
  const [error, setError] = useState(false)

  const { dispatch } = useNotes()
  const { values, handlerChange, setValues } = useForm({
    title: '',
    description: ''
  })

  const { title, description } = values

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (title !== '' && description !== '') {
      setError(false)

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

    setError(true)
  }

  return (
    <form onSubmit={handleSubmit} className='notes-form'>
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

      <button type='submit' className='notes-btn'>
        New Note
      </button>

      {error && <p className='notes-error'>Please fill in the form :)</p>}
    </form>
  )
}
