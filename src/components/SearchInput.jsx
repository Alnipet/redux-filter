import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filterElement} from '../redux/actions/filterElement'

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState('')

	const {elements} = useSelector((state) => state.elements)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(filterElement({value: searchValue}))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue, elements])

	const handleChangeSearch = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<div>
			<input name='search' value={searchValue} onChange={handleChangeSearch} className='search-input' placeholder='Search...' required />
		</div>
	)
}
