import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {
    const temp = JSON.parse(localStorage.getItem("products")) || [];
    let qty = temp.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity),0);
    let total = temp.reduce((accumulator, currentValue) => (accumulator + +currentValue.price.replaceAll(".","")*currentValue.quantity),0);



    const [info, setInfo] = useState({
        username: "",
        email: "",
        telephone: "",
        address: "",
        receive_username: "",
        receive_telephone: "",
        receive_address: "",
        receive_note: "",
        pay_method: "",
        deliverd: false
    })
    
    // validate
    const [validation, setValidation] = useState({
        username: false,
        email: false,
        telephone: false,
        address: false,
        receive_username: false,
        receive_telephone: false,
        receive_address: false,
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]: value})
       
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        const validateInputs = () => {
            const { username, email, telephone, address, receive_username, receive_telephone, receive_address } = info;
            const isUsernameValid = username.trim() !== "";
            const isEmailValid = email.trim() !== "";
            const isTelephoneValid = telephone.trim() !== "";
            const isAddressValid = address.trim() !== "";
            const isReceiveUsernameValid = receive_username.trim() !== "";
            const isReceiveTelephoneValid = receive_telephone.trim() !== "";
            const isReceiveAddressValid = receive_address.trim() !== "";
            setValidation({ ...validation,  
                username: !isUsernameValid,
                email: !isEmailValid,
                telephone: !isTelephoneValid,
                address: !isAddressValid,
                receive_username: !isReceiveUsernameValid,
                receive_telephone: !isReceiveTelephoneValid,
                receive_address: !isReceiveAddressValid,});
            
            return (
                isUsernameValid &&
                isEmailValid &&
                isTelephoneValid &&
                isAddressValid &&
                isReceiveUsernameValid &&
                isReceiveTelephoneValid &&
                isReceiveAddressValid
              );
        }
        if (validateInputs()){
            axios.post("http://localhost:8000/info", info);
            localStorage.removeItem("products");
            navigate("/success");
        }
    }

    return (<>
    {/* banner-left */}
    <div className="page-wrapper">
    <div className="side-banner banner-left" style={{ width: "290px" }}>
          <a href="https://www.tncstore.vn/gaming-laptop.html">
            <img src="/img/banner/left.png" alt="Laptop Gaming 2023" />
          </a>
    </div>

        {/* main */}
        <div className="container">
            <div className="cart">
                <div className="cart-products inline">
                    <div className="cart-process">
                    <div className="process active">
                        <span>1. Chọn sản phẩm</span>
                    </div>
                    <div className="process active">
                        <span>2. Xác nhận đơn hàng</span>
                    </div>
                    <div className="process active">
                        <span>3. Thanh toán</span>
                    </div>
                    </div>
                    <form
                    id="formdathang"
                    className="form-checkout"
                    >
                    <div className="group-info">
                        <div className="title">Thông tin khách hàng</div>
                        <div style={{ marginBottom: 16 }}>
                        <span style={{ color: "red" }}>*</span> Trường bắt buộc
                        </div>
                        <div className="input-group">
                        <label htmlFor="">
                            Họ tên quý khách <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên khách hàng"
                            name="username"
                            onChange={handleChange}
                            onFocus={() => setValidation({ ...validation, username: false})}
                        />
                        {validation.username && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}
                        </div>
                        <div className="input-group">
                        <label htmlFor="">
                            Địa chỉ email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="email" placeholder="Nhập email" name="email" onChange={handleChange} onFocus={() => setValidation({ ...validation, email: false})}/>
                        {validation.email && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                        </div>
                        <div className="input-group">
                        <label htmlFor="">
                            Số điện thoại <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            name="telephone"
                            onChange={handleChange}
                            onFocus={() => setValidation({ ...validation, telephone: false})}
                        />
                        {validation.telephone && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                        </div>
                        <div className="input-group">
                        <label htmlFor="">
                            Địa chỉ thường trú <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="text" name="address" placeholder="Nhập địa chỉ" onChange={handleChange} onFocus={() => setValidation({ ...validation, address: false})}/>
                        {validation.address && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                        </div>
                    </div>
                    <div className="group-info">
                        <div id="info-shipping-address">
                        <div className="title">Thông tin giao hàng</div>
                        <div style={{ marginBottom: 16, paddingTop: 15 }}>
                            <span style={{ color: "red" }}>*</span> Trường bắt buộc
                        </div>
                        <div>
                            <div className="input-group">
                            <label htmlFor="">
                                Họ &amp; tên người nhận{" "}
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập tên khách hàng"
                                name="receive_username"
                                onChange={handleChange}
                                onFocus={() => setValidation({ ...validation, receive_username: false})}
                            />
                            {validation.receive_username && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                            </div>
                            <div className="input-group">
                            <label htmlFor="">
                                Số điện thoại <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập số điện thoại"
                                name="receive_telephone"
                                onChange={handleChange}
                                onFocus={() => setValidation({ ...validation, receive_telephone: false})}
                            />
                            {validation.receive_telephone && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                            </div>
                            <div className="input-group">
                            <label htmlFor="">
                                Địa chỉ giao hàng <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập địa chỉ giao hàng"
                                name="receive_address"
                                onChange={handleChange}
                                onFocus={() => setValidation({ ...validation, receive_address: false})}
                                rows={2}
                            />
                            {validation.receive_address && (<input type="text" className="validate" value={"Trường này không được bỏ trống"}/>)}

                            </div>
                        </div>
                        </div>
                        <div className="input-group">
                        <label htmlFor="">Ghi chú</label>
                        <textarea
                            placeholder="Nhập ghi chú"
                            name="receive_note"
                            rows={2}
                            defaultValue={""}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className="group-info pay-method">
                        <div className="title">Hình thức thanh toán</div>
                        <div className="input-group">
                        <input
                            type="radio"
                            defaultValue="Thanh toán tại nơi giao hàng"
                            name="pay_method"
                            defaultChecked="checked"
                            className="input-radio"
                            value={0}
                            onChange={handleChange}
                        />
                        <label htmlFor="">Thanh toán tại nơi giao hàng</label>
                        </div>
                        <div className="input-group">
                        <input
                            type="radio"
                            defaultValue="Thanh toán bằng chuyển khoản"
                            name="pay_method"
                            value={1}
                            className="input-radio"
                            onChange={handleChange}
                        />
                        <label htmlFor="">Thanh toán bằng chuyển khoản</label>
                        </div>
                        <div className="bank-option">
                        <div>
                            <p>
                            Tại Ngân hàng TMCP Công Thương Việt Nam (Vietinbank) – CN Đống
                            Đa (Hà Nội)
                            </p>
                            <p>Số tài khoản : 113000009229</p>
                            <p>Tên TK: CT TNHH TM VA TIN HOC TU NGUYET.</p>
                        </div>
                        <div>
                            <p>Tại Ngân hàng TMCP Quân đội (MB Bank) – CN An Phú (HCM)</p>
                            <p>Số tài khoản: 000019971997</p>
                            <p>Tên TK: BA CUONG VIP</p>
                        </div>
                        <div>
                            <p>
                            Tại ngân hàng TMCP Ngoại thương Việt Nam (VCB) - CN Chương
                            Dương (Hà Nội).
                            </p>
                            <p>Số tài khoản: 0541000322265</p>
                            <p>Tên TK: CT TNHH THUONG MAI VA TIN HOC TU NGUYET.</p>
                        </div>
                        <div>
                            <p>TaTại ngân hàng TMCP Ngoại thương Việt Nam (VCB)</p>
                            <p>Số tài khoản: 1018060197</p> <p>Chủ TK: Bùi Ánh Nguyệt.</p>
                        </div>
                        <div>
                            <p>Tại Ngân hàng TMCP Quân đội (MB Bank)</p>
                            <p>Số tài khoản: 1919998888</p> <p>Chủ TK: Trương Trung Đức.</p>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="cart-total-prices">
                    <div className="cart-prices">
                    <div className="title">THÔNG TIN GIỎ HÀNG</div>
                    <div>
                        Số lượng sản phẩm <span className="p-count">{qty}</span>
                    </div>
                    <div>
                        Tổng chi phí <span className="price">{total.toLocaleString('vi-VN')} đ</span>
                    </div>
                    <div
                        style={{
                        fontSize: 14,
                        color: "rgb(78, 78, 84)",
                        fontWeight: "normal",
                        justifyContent: "flex-end",
                        }}
                    >
                        Đã bao gồm VAT (nếu có)
                    </div>
                    {temp.map((e, i) => (
                    <div className="cart-item">
                        <div className="product-name">{e.title}
                        </div>
                        <div className="product-content">
                            <div className="collapse"></div>
                            <div className="cart-item-price">Số lượng: {e.quantity} x {e.price} đ</div>
                        </div>
                    </div>
                    ))}
                    <a className="go-checkout" onClick={handleSubmit}> XÁC NHẬN MUA HÀNG</a>
                    </div>
                </div>
            </div>
        </div>
        {/* end-main */}

    {/* banner-right */}
    <div className="side-banner banner-right" style={{ width: "290px" }}>
          <a href="https://www.tncstore.vn/pc-gaming-sanh-dieu">
            <img src="/img/banner/right.png" alt="PC Gaming" />
          </a>
    </div>
    </div>
    </>
  );
}

export default Payment;
