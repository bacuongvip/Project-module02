import React, { useState } from 'react'
import Search from './Search'
import Element from './Element'
import DarkMode from './DarkMode'
function Total() {
    const [element, setElement] = useState([{
        value: "",
    }])
    const dataElement = (data) => {
        setElement(data)
    }
    return (
        <div>
            <div className='container'>
                <DarkMode/>
                <Search/>
                <Element valueInput={dataElement} element={element}/>
            </div>
        </div>
    )
}

export default Total