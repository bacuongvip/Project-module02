import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { add, del, update } from '../action';

function Total() {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    // add
    const [inputValue, setInputValue] = useState('');
    const handleAdd = () => {
        dispatch(add(inputValue))
        setInputValue('');
    }

    // delete
    const handleDelete = (i) => {
      dispatch(del(i));
    }

    // update
    const [checkClick, setCheckClick] = useState(false);
    const [index, setIndex] = useState(-1);
    const handleClick = (i) => {
        setCheckClick(true);
        setInputValue(list[i]);
        setIndex(i);
    }
    const handleUpdate = () => {
        setCheckClick(pre => !pre);
        dispatch(update(index, inputValue));
        setInputValue('');
    }

    return (
      <div>
          <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          {checkClick ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleAdd}>Add</button> }
          <div className="list">
            {list.map((e, i) => (
                  <div key={i} className="todo-list">
                    <div >{e}
                      <button className="btn" style={{backgroundColor: "blue", color: "white", padding: "5px", borderRadius:"20px", border:"none"}} onClick={()=> handleClick(i)}>Update</button>
                      <button className="btn" style={{backgroundColor: "red", color: "white", padding: "5px", borderRadius:"20px", border:"none"}} onClick={()=> handleDelete(i)}>Delete</button>
                    </div>
                  </div>
            ))}
          </div>
      </div>
    )
}

export default Total