import React from 'react'

function Input({title, type, patterns}) {
    return (
        <div>
            <input type={type || 'text'} name="q" className="py-2 h-8 text-sm text-black border border-black-80 outline-none pl-4" placeholder={title} autocomplete="off" pattern={patterns}required/> 
        </div>
    )
}

export default Input
