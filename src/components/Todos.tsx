import React from 'react'

const Todos: React.FC<{items: string[]}> = ({items}) => {
  return (
    <ul className='m-5'>
        {items.map((item) => (
            <li className='font-bold' key={item}>{item}</li>
        ))}
    </ul>
  )
}

export default Todos