import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'

/* styled */
const Form = styled.div`
	position: relative;
`
const Input = styled.input`
	padding: 0.5em 0;
`

const RemoveButton = styled.i`
	position: absolute;
	right: 0.5em;
	top: 0.55em;
	font-size: 1.25em;
	cursor: pointer;
	color: #333;
	&:hover {
		color: #b90909;
	}
`

const Search = (props) => {
	const [query, setQuery] = useState('')
	const inputRef = useRef(null)
	
	const handleChange = e => {
		onChange(e.target.value)
	}
	const handleRemove = e => {
		onChange('')
		inputRef.current.focus()
	}
	const onChange = value => {
		props.onChange(value)
		setQuery(value)
	}
	return (
		<Form className="form-search">
			<Input className="form-control" type="text" onChange={handleChange} autoFocus value={query} ref={inputRef} />
			{
				query.length > 0
				? <RemoveButton className="fa fa-times-circle" onClick={handleRemove} />
				: ''
			}
		</Form>
	)
}

export default Search;