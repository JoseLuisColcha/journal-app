import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
	const { active: note } = useSelector(state => state.notes)

	const [values, handleInputChange, reset] = useForm(note)
	const { body, title, id } = values

	const activeId = useRef(note.id)
	const dispatch = useDispatch()

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note)
			activeId.current = note.id
		}
	}, [note, reset])

	useEffect(() => {
		dispatch(activeNote(values.id, { ...values }))
	}, [values, dispatch])

	const handleDelete = () => {
		dispatch(startDeleting(id))
	}

	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					name='title'
					className='notes__title-input'
					autoComplete='off'
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					placeholder='What happened today'
					name='body'
					className='notes__textarea'
					value={body}
					onChange={handleInputChange}
				></textarea>
				{note.url && (
					<div className='notes__image'>
						<img src={note.url} alt='imagen' />
					</div>
				)}
			</div>
			<button className='btn btn-danger' onClick={handleDelete}>
				Delete
			</button>
		</div>
	)
}
