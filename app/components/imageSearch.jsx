'use client'
import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center  border-b-2 border-white py-2">
        <input onChange={e => setText(e.target.value)} className="w-full outline-none text-white  py-[6px] px-[10px] placeholder-[#fff] bg-transparent" type="text" placeholder="Search Image Term..." />
        <button className="flex-shrink-0 bg-white  border-whitetext-sm border-4 text-black py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default ImageSearch;