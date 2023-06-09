import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function Header({show, setShow}) {
    const temp = JSON.parse(localStorage.getItem("products")) || [];
    let qty = temp.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity),0);
    
    // search
    const [value, setValue] = useState("");
    const nav = useNavigate();
    const handleSearch = () => {
        if (value === "laptops"){
            nav("/laptops");
        }else if (value === "case"){
            nav("/case");
        }else if (value === "screen"){
            nav("/screen");
        }else if (value === "apple"){
            nav("/apple");
        }
    }

    return (<>
            <div className='banner'>
                <img src="/img/banner/1110X60.png" alt="banner" />
            </div>
            <div className="header__top">
                <div className="container">
                    <span>Hotline : (086) 830.2123 • Email: cskh@tncstore.vn</span>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__logo">
                        <a href="/">
                            <img src="/img/banner/tnc-logo.svg" alt="" />
                        </a>
                    </div>
                    <form id="form-search" onClick={handleSearch}>
                        <div className="searchbox">
                            <div className="searchbox__keyword">
                                <input
                                    type="text"
                                    name="search"
                                    autoComplete="off"
                                    placeholder="Nhập sản phẩm cần tìm ..."
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </div>
                            <div className="searchbox__select">
                                <div className="space"></div>
                                <NavDropdown title="Tất cả danh mục" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="1.1">AMD</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.2">Balo Gaming</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.3">Bàn di chuột</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.4">Bàn Gaming</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.5">Bộ chia/Hub USB</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.6">Card màn hình cũ</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="1.7">Combo linh kiện</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <img
                                src="/img/banner/search-icon.svg"
                                alt=""
                                className="searchbox__icon"
                                style={{cursor: "pointer"}}
                            />
                        </div>
                    </form>
                    <div className="header__cart" onClick={() => setShow(true)}>
                        <img
                            src="/img/banner/cart-icon.svg"
                            alt=""
                            className="head__cart__icon"
                        />
                        <span className="head__cart__amount">{qty}</span>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="header__bottom__left">
                        <div className="header_bottom_item">
                            <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="computer-icon"
                            >
                            <path
                                d="M19.6445 10.2915C19.6147 10.188 19.5525 10.0966 19.4671 10.0307C18.7419 9.47168 17.9973 9.16426 17.2593 9.09492C17.2593 9.09492 17.161 9.0791 16.9243 9.0791C16.6874 9.0791 16.5667 9.09451 16.5667 9.09451C15.8551 9.17843 15.1425 9.49178 14.4433 10.0307C14.3578 10.0965 14.2957 10.188 14.2659 10.2915C13.9227 11.4812 13.8312 12.6224 13.9776 13.883C14.107 14.9974 14.4141 16.1159 14.7723 17.3576C14.8021 17.4612 14.8643 17.5526 14.9496 17.6184C15.4987 18.0418 16.2109 18.2747 16.9551 18.2747C17.6992 18.2747 18.4116 18.0418 18.9607 17.6185C19.0461 17.5527 19.1082 17.4612 19.1381 17.3577C19.4963 16.1158 19.8034 14.9974 19.9328 13.8831C20.0792 12.6224 19.9877 11.4811 19.6445 10.2915ZM17.3983 12.3574C17.3983 12.6022 17.1998 12.8006 16.9551 12.8006C16.7103 12.8006 16.512 12.6022 16.512 12.3574V10.5091C16.512 10.2644 16.7103 10.0659 16.9551 10.0659C17.1998 10.0659 17.3983 10.2644 17.3983 10.5091V12.3574Z"
                                fill="#29324E"
                            />
                            <path
                                d="M13.583 17.0868H12.7839L12.1244 14.8446H13.4705C13.4284 14.6043 13.3925 14.3641 13.3644 14.123C13.2795 13.3916 13.2692 12.6969 13.3347 12.0111H1.5456V2.12031H17.5168V8.46947C18.0371 8.52166 18.5539 8.67359 19.0624 8.92259V1.34751C19.0624 0.920715 18.7163 0.574707 18.2896 0.574707H0.772799C0.346008 0.574707 0 0.920715 0 1.34751V14.0718C0 14.4987 0.346008 14.8446 0.772799 14.8446H6.93788L6.27848 17.0868H5.47951C5.27662 17.0868 5.11212 17.2513 5.11212 17.4542V18.0583C5.11212 18.2612 5.27662 18.4257 5.47951 18.4257H13.583C13.7859 18.4257 13.9503 18.2612 13.9503 18.0583V17.4542C13.9502 17.2513 13.7858 17.0868 13.583 17.0868Z"
                                fill="#29324E"
                            />
                            </svg>
                            <NavDropdown title="DANH MỤC SẢN PHẨM" id="nav-dropdown" className='text dropdown2'>
                                    <NavDropdown.Item eventKey="2.1"><Link to="/xay-dung-cau-hinh">XÂY DỰNG CẤU HÌNH PC</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.2"><Link to="/may-tinh-van-phong">MÁY TÍNH VĂN PHÒNG</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.3"><Link to="/laptops">LAPTOPS</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.4"><Link to="/apple">APPLE</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.5"><Link to="/case">LINH KIỆN MÁY TÍNH</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.6"><Link to="/screen">MÀN HÌNH MÁY TÍNH</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.7"><Link to="/audio">AUDIO</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.7"><Link to="/tan-nhiet">PHỤ KIỆN - TẢN NHIỆT</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.7"><Link to="/thiet-bi-van-phong">THIẾT BỊ VĂN PHÒNG</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="2.7"><Link to="/thiet-bi-mang">THIẾT BỊ MẠNG</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                            </NavDropdown>
                        </div>
                        <div className="header_bottom_item">
                            <svg
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="setting-icon"
                                >
                                <path
                                    d="M19.9371 9.38956C19.9056 9.10846 19.5777 8.89699 19.2942 8.89699C18.3778 8.89699 17.5646 8.35917 17.2236 7.52676C16.8755 6.67438 17.1001 5.68049 17.7828 5.05419C17.9978 4.8576 18.024 4.5284 17.8438 4.29989C17.3746 3.7043 16.8416 3.16623 16.2596 2.69995C16.0318 2.51727 15.6972 2.5427 15.4995 2.76144C14.9035 3.42156 13.8328 3.66685 13.0054 3.32166C12.1447 2.95951 11.6015 2.08706 11.6548 1.1506C11.6724 0.856264 11.4572 0.600505 11.1639 0.56634C10.4169 0.479847 9.66326 0.477339 8.91406 0.560459C8.62448 0.592461 8.40946 0.842166 8.41906 1.13278C8.4515 2.06007 7.90209 2.91713 7.04971 3.2663C6.23226 3.60025 5.16901 3.35677 4.57419 2.70245C4.3776 2.48691 4.04884 2.46045 3.81955 2.63923C3.22032 3.10949 2.67533 3.64791 2.20187 4.23865C2.01738 4.46829 2.04463 4.80112 2.26146 4.99841C2.95764 5.62885 3.18209 6.6313 2.82064 7.49364C2.47553 8.31575 1.62193 8.84535 0.644825 8.84535C0.327742 8.83514 0.102082 9.04817 0.0670529 9.33654C-0.0208239 10.0876 -0.0217753 10.8532 0.0628147 11.6104C0.0943846 11.8927 0.431966 12.1023 0.718603 12.1023C1.58959 12.0802 2.42528 12.619 2.77635 13.4725C3.1257 14.3248 2.90082 15.3183 2.21701 15.9455C2.00311 16.1421 1.97578 16.4705 2.15637 16.6987C2.62075 17.2906 3.15424 17.829 3.73807 18.2993C3.96727 18.4839 4.30062 18.458 4.49929 18.239C5.09765 17.5773 6.16817 17.3325 6.99219 17.6783C7.85539 18.0395 8.39839 18.9119 8.34537 19.8486C8.32798 20.143 8.5437 20.3995 8.83596 20.4329C9.21826 20.4776 9.60254 20.4997 9.98804 20.4997C10.3539 20.4997 10.7199 20.4798 11.0858 20.439C11.3757 20.407 11.5904 20.1571 11.5806 19.8664C11.5472 18.9395 12.0978 18.0824 12.9491 17.7339C13.772 17.3978 14.8305 17.6437 15.4257 18.2971C15.6233 18.5122 15.9501 18.5383 16.1803 18.3603C16.7785 17.8912 17.3225 17.353 17.798 16.7607C17.9827 16.5315 17.9565 16.1983 17.7384 16.0006C17.0424 15.3706 16.8167 14.3677 17.1782 13.5063C17.5179 12.6952 18.3398 12.1507 19.2237 12.1507L19.3474 12.154C19.6344 12.1772 19.8981 11.9562 19.9328 11.6635C20.0211 10.9117 20.0221 10.147 19.9371 9.38956ZM10.0001 16.2649C6.816 16.2649 4.23497 13.6838 4.23497 10.4999C4.23497 7.3159 6.81609 4.73486 10.0001 4.73486C13.184 4.73486 15.7652 7.3159 15.7652 10.4999C15.7652 11.5806 15.4672 12.5914 14.9497 13.4558L12.4253 10.9314C12.6081 10.5005 12.7046 10.0333 12.7045 9.55122C12.7045 8.60715 12.3368 7.71964 11.6692 7.05218C11.0017 6.38471 10.1142 6.01712 9.17034 6.01712C8.85533 6.01712 8.54179 6.05898 8.23846 6.14158C8.10561 6.17782 7.99698 6.28732 7.9616 6.42044C7.92545 6.55658 7.96619 6.69609 8.07257 6.80256C8.07257 6.80256 9.31885 8.05844 9.73583 8.47533C9.77951 8.51901 9.77942 8.62323 9.77328 8.66077L9.76939 8.68819C9.72735 9.1466 9.64631 9.69687 9.57945 9.90835C9.57045 9.91725 9.56198 9.92478 9.55281 9.93395C9.54321 9.94355 9.53439 9.9528 9.52513 9.96232C9.31089 10.0311 8.75215 10.1131 8.28647 10.1548L8.28655 10.1523L8.26562 10.1575C8.2619 10.158 8.25498 10.1585 8.24582 10.1585C8.19548 10.1585 8.12144 10.1444 8.05415 10.0772C7.62013 9.64316 6.42272 8.45431 6.42272 8.45431C6.3153 8.34724 6.2051 8.32475 6.13167 8.32475C5.9605 8.32475 5.80724 8.44843 5.75897 8.62583C5.42935 9.84564 5.77878 11.1577 6.67113 12.0502C7.33877 12.7177 8.22636 13.0853 9.17043 13.0853C9.65254 13.0853 10.1197 12.9889 10.5505 12.8061L13.1023 15.3579C12.2064 15.9312 11.1425 16.2649 10.0001 16.2649Z"
                                    fill="#29324E"
                                />
                            </svg>
                            <a href="/xay-dung-cau-hinh-pc" className="text">XÂY DỰNG CẤU HÌNH</a>
                        </div>
                        <div className="header_bottom_item">
                            <a href="/tin-tuc" className="text" style={{ textTransform: "uppercase", marginLeft: "0px !important" }}>
                            Tin tức
                            </a>
                        </div>
                    </div>
                    <div className="header__bottom__right">
                        <a href="https://www.facebook.com/tncstore/" target="_blank">
                            <img src="/img/icon/fb-icon.svg" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCvLGkK-wBBaoXwV71Tgx08Q"
                            target="_blank"
                        >
                            <img src="img/icon/yt-icon.svg" />
                        </a>
                        <a href="https://www.instagram.com/tncstore_vn/" target="_blank">
                            <img src="img/icon/instagram-icon.svg" />
                        </a>
                        <a href="https://shopee.vn/tncofficialstore" target="_blank">
                            <img src="img/icon/png-xanh.png" />
                        </a>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Header