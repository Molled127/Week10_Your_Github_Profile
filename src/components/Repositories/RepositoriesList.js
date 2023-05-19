// You don't need to change anything in this file.
// Uma baahnid inaa meeshaan wax ka badasho.

import React from 'react'
import RepositoreisCard from './RepositoreisCard';
function RepositoriesList(props) {

    const {repositories} = props;

    

  return (
    <div>
        {repositories.map((repository) => (
            <RepositoreisCard key={repository.id} repository={repository} />
        ))}
    </div>
  )
}

export default RepositoriesList