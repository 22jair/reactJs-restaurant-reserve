import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import * as style from './MenuSearch.style'

export default function MenuSearch({textSearch, setTextSearch, handleSearchMenu}) {
    return (
        <style.MenuSearchContent>
            <style.MenuSearchInput type="text" value={textSearch} onChange={ (e)=>setTextSearch(e.target.value) } />
            <style.MenuSearchIcon onClick={ () => handleSearchMenu() }>  <AiOutlineSearch /> </style.MenuSearchIcon>
        </style.MenuSearchContent>
    )
}
