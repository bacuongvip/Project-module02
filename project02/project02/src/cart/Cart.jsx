import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Cart({show, setShow, setUpdate}) {
    const temp = JSON.parse(localStorage.getItem("products")) || [];
    let  qty = temp.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity),0);
    let total = temp.reduce((accumulator, currentValue) => (accumulator + +currentValue.price.replaceAll(".","")*currentValue.quantity),0);
    const handleSub = (i) => {
        if(temp[i].quantity > 1){
            temp[i].quantity -= 1;
        } else {
            temp.splice(i, 1);
        }
        localStorage.setItem("products", JSON.stringify(temp));
        setUpdate(Math.random()*10);
    } 
    const handleAdd = (i) => {
        temp[i].quantity += 1;
        localStorage.setItem("products", JSON.stringify(temp));
        setUpdate(Math.random()*10);
    } 
    const handleDel = (i) => {
        temp.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(temp));
        setUpdate(Math.random()*10);
    }
    const handleDelAll = () => {
        temp.splice(0);
        localStorage.setItem("products", JSON.stringify(temp));
        setUpdate(Math.random()*10);
    }
    return (<>
        {/* modal */}
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">Bạn đang có {qty} sản phẩm trong giỏ hàng </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="cart">
            <div className="cart-products modal">

                {/* map */}
                {temp.map((e, i) => (
                    <div className="cart-p-item" key={i}>
                    <div className="cart-p-img">
                        <img
                        src={`/${e.img}`}
                        alt=""
                        />
                    </div>{" "}
                <div className="cart-p-content">
                    <div className="cart-p-desc">
                    <a
                        href="#"
                        target="_blank"
                        className="cart-p-name"
                    >
                        {e.title}
                    </a>{" "}
                    <div className="cart-p-price">{e.price} đ</div>
                </div>{" "}
                <div className="cart-p-actions">
                    <div className="cart-p-qty">
                        <span className="qty-decrease" onClick={() => handleSub(i)}>-</span>
                        <input type="tel" className="qty-input" value={e.quantity} readOnly/>
                        <span className="qty-increase" onClick={() => handleAdd(i)}>+</span>
                    </div>{" "}
                    <div className="cart-p-remove" onClick={() => handleDel(i)}>
                        <svg
                        width={18}
                        height={20}
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M1.5 5H3.16667H16.5"
                            stroke="#005EC4"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />{" "}
                        <path
                            d="M5.66602 4.99984V3.33317C5.66602 2.89114 5.84161 2.46722 6.15417 2.15466C6.46673 1.8421 6.89066 1.6665 7.33268 1.6665H10.666C11.108 1.6665 11.532 1.8421 11.8445 2.15466C12.1571 2.46722 12.3327 2.89114 12.3327 3.33317V4.99984M14.8327 4.99984V16.6665C14.8327 17.1085 14.6571 17.5325 14.3445 17.845C14.032 18.1576 13.608 18.3332 13.166 18.3332H4.83268C4.39065 18.3332 3.96673 18.1576 3.65417 17.845C3.34161 17.5325 3.16602 17.1085 3.16602 16.6665V4.99984H14.8327Z"
                            stroke="#005EC4"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />{" "}
                        <path
                            d="M7.33398 9.1665V14.1665"
                            stroke="#005EC4"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />{" "}
                        <path
                            d="M10.666 9.1665V14.1665"
                            stroke="#005EC4"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                ))}
            {/* end map */}
            </div>{" "}
            <div className="cart-total-prices">
                <div className="cart-prices">
                <div className="title">Thông tin giỏ hàng</div>{" "}
                <div>
                    Số lượng sản phẩm <span className="p-count">{qty}</span>
                </div>{" "}
                <div>
                    Tổng chi phí <span className="price">{total.toLocaleString('vi-VN')} đ</span>
                </div>{" "}
                <div
                    style={{
                    fontSize: 14,
                    color: "rgb(78, 78, 84)",
                    fontWeight: "normal",
                    justifyContent: "flex-end"
                    }}
                >
                    Đã bao gồm VAT (nếu có)
                </div>{" "}
                <Link to={"/payment"} className={`go-cart ${qty==0 ? 'disabled' : ''}`} onClick={() => setShow(false)} >MUA HÀNG</Link>{" "}
                <a onClick={handleDelAll}
                    style={{
                    background: "rgb(237, 27, 36)",
                    borderColor: "rgb(237, 27, 36)",
                    color: "rgb(255, 255, 255)"
                    }}
                >
                    XÓA GIỎ HÀNG
                </a>{" "}
                <a href="/">XEM SẢN PHẨM KHÁC</a>
                </div>{" "}
                <div className="cart-info">
                <div className="info">
                    <div>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                        fill="#27AE60"
                        />{" "}
                        <path
                        d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                        fill="white"
                        stroke="white"
                        />
                    </svg>
                    Hỗ trợ trả góp 0%, trả trước 0đ
                    </div>{" "}
                    <div>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                        fill="#27AE60"
                        />{" "}
                        <path
                        d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                        fill="white"
                        stroke="white"
                        />
                    </svg>
                    Hoàn tiền 200% khi phát hiện hàng giả
                    </div>{" "}
                    <div>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                        fill="#27AE60"
                        />{" "}
                        <path
                        d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                        fill="white"
                        stroke="white"
                        />
                    </svg>
                    Giao hàng nhanh 3H nội thành Hà Nội
                    </div>{" "}
                    <div>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                        fill="#27AE60"
                        />{" "}
                        <path
                        d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                        fill="white"
                        stroke="white"
                        />
                    </svg>
                    Giao hàng từ 5 - 7 ngày toàn quốc
                    </div>{" "}
                    <div>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                        fill="#27AE60"
                        />{" "}
                        <path
                        d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                        fill="white"
                        stroke="white"
                        />
                    </svg>
                    Đội ngũ kĩ thuật hỗ trợ online 7/7
                    </div>
                </div>{" "}
                <div className="bank">
                    <a href="">
                    <img src="/img/icon/tien-mat.png" alt="" />
                    </a>{" "}
                    <a href="">
                    <img
                        src="/img/icon/bo-cong-thuong.png"
                        alt=""
                    />
                    </a>{" "}
                    <a href="">
                    <img src="/img/icon/mastercard.png" alt="" />
                    </a>{" "}
                    <a href="">
                    <img src="/img/icon/visa.png" alt="" />
                    </a>
                </div>
                </div>
            </div>
        </div>

        </Modal.Body>
    </Modal>
    </>
    )
}

export default Cart