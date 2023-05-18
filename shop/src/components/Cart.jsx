import React, { useState } from 'react'

let t = 0;
function Cart({listItem}) {
    const a = [];
    for(let e of listItem){
        if(e.qty !== 0){
            t += e.price;
            a.push(e);
        }
    }
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(() => {
        for(let e of listItem){
                t += e.price;
        }
        return t;
    })
    return (<>
        <div className="head" onClick={() => setShow(true)}><span>Giỏ Hàng</span></div>
        {show && <div className='tab'>
            <table border="1">
            {a.map((e, i) => (
            <tr>
                <td><img src={e.imageUrl}/></td>
                <td>{e.name}</td>
                <td>${e.price}</td>
                <td>
                    <div>
                        <div className="form">
                            <button className="sell">&lt;</button>
                            <span className="number">{e.qty}</span>
                            <button className="buy">&gt;</button>
                        </div>
                    </div>
                </td>
                <td><button>Xoá</button></td>
            </tr>
            ))}
        </table>
        <div className='total'>Tổng thanh toán: ${total}</div>
        </div>}
        </>
    )
}

export default Cart