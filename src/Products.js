import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import Product from './Product'
import styled from 'styled-components'

const ListWrapper = styled.div`
	width: 24%; margin: 0.5%; border: 1px solid #ccc; padding: 0.5em;
`

const Products = (props) => {
	return (
		<ListWrapper>
			{ props.products.map(v => <Product value={v} key={v.id+'_'+v.title}/>) }
		</ListWrapper>
	)
}

export default Products