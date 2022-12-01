import React from 'react'
import {Element} from './Element'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeElement} from '../redux/actions/removeElement'
import {editElement} from '../redux/actions/editElement'

export const List = () => {
	const {filteredElements} = useSelector((state) => state.elements)
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(removeElement(id))
	}

	const handleEdit = (arg) => {
		dispatch(editElement(arg))
	}

	const elemetsArr = filteredElements.map((el) => {
		return <Element key={el.id} id={el.id} name={el.name} price={el.price} handleDelete={handleDelete} handleEdit={handleEdit} />
	})

	return <ul className='list'>{elemetsArr}</ul>
}
