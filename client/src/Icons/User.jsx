import React from 'react'

const User = ({
    className= '',
}) => {
  return (
    <div className={`${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
    </div>
  )
}

export default User