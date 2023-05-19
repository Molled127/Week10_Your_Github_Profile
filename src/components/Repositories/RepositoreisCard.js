// You don't need to change anything in this file.
// Uma baahnid inaa meeshaan wax ka badasho.

import React from 'react'

function RepositoreisCard(props) {

    const {repository} = props;

  return (
    <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
    <div className="h-[60px] shadow-md w-[60px] rounded-full border-4 overflow-hidden border-white">
    <img
      src={repository.repos_url
      } alt={repository.repos_url
      }
      className="w-full h-full rounded-full object-center object-cover"
    />
  </div>
      <div className="leading-3">
        <p className=" text-sm font-bold text-slate-700">{repository.login}</p>
        <span className="text-xs text-slate-600">{repository.repos_url}</span>
      </div>
    </div>
  )
}

export default RepositoreisCard