import React, { useState } from 'react'

function Element({valueInput, element}) {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        valueInput(value);
    }
    return (
        <div className='elements'>
            <form>
                <textarea placeholder='Type Review here...' onChange={(e) => setValue(e.target.value)}></textarea>
                <span>5/18/2023</span>   
                <p onClick={handleSubmit}>PUBLISH</p>
            </form>
        </div>
    )
}

export default Element