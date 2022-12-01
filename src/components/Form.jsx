import React, {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import {useDispatch, useSelector} from 'react-redux'
import {addElement} from '../redux/actions/addElement'
import {addEditedElement} from '../redux/actions/addEditedElement'
import {clearEditingElement} from '../redux/actions/clearEditingElement'

export const Form = () => {
	const [nameValue, setNameValue] = useState('')
	const [priceValue, setPriceValue] = useState('')
	const [isEditing, setIsEditing] = useState(false)
	const {id, name, price} = useSelector((state) => state.elements.editingElement)

	const dispatch = useDispatch()

	useEffect(() => {
		if (id) {
			setIsEditing(true)
			setNameValue(name)
			setPriceValue(price)
			return
		}

		setIsEditing(false)
		setNameValue('')
		setPriceValue('')
	}, [id, isEditing, name, price])

	const resetInputs = () => {
		setNameValue('')
		setPriceValue('')
	}

	const handleChangeName = (e) => {
		setNameValue(e.target.value)
	}

	const handleChangePrice = (e) => {
		setPriceValue(e.target.value)
	}

	const handleSave = (e) => {
		e.preventDefault()
		if (!isEditing) {
			dispatch(addElement({id: nanoid(), name: nameValue, price: priceValue}))
			resetInputs()
			return
		}

		dispatch(addEditedElement({id, name: nameValue, price: priceValue}))
		resetInputs()
	}

	const handleCancel = () => {
		dispatch(clearEditingElement())
		resetInputs()
		setIsEditing(false)
	}

	return (
		<div>
			<form onSubmit={handleSave}>
				<input name='name' value={nameValue} onChange={handleChangeName} placeholder='Name' required />
				<input value={priceValue} onChange={handleChangePrice} type='number' placeholder='Price' required />
				<button>Save</button>
				{isEditing && <button onClick={() => handleCancel()}>Cancel</button>}
			</form>
		</div>
	)
}
