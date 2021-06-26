import React from 'react'

const Buttton = ({ title, bgColor, color})=> {
    return (
        <div>
            <button className={`text-center w-64 p-2 mt-4 outline-none capitalize ${bgColor} ${color}`} type="submit">{title}</button>

        </div>
    )
}

export default Buttton
