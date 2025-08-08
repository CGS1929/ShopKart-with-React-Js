import React from 'react'

function SearchBar({setSearch}) {
  return (
    <div className='my-2'>
      <input type="text" placeholder="Search" className="form-control" onChange={(e)=>{setSearch(e.target.value)}} />
    </div>
  )
}

export default SearchBar;
