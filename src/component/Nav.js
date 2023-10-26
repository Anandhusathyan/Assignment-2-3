import React from 'react'
import '../style/nav.css'

function Nav({setfilterby}) {


  return (
    <div id='dropdowm'>
      <select className="sort-by"  onChange={e=>setfilterby(e.target.value)}>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  )
}

export default Nav
