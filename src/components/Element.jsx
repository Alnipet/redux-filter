import React from 'react'

export const Element = ({id, name, price, handleDelete, handleEdit}) => {
	return (
		<li className='element'>
			<div className='element-name'>
				{name} {price} руб.
			</div>
			<button onClick={() => handleEdit({id, name, price})}>Edit</button>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</li>
	)
}
