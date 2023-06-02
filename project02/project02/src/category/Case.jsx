import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
function Case({setUpdate}) {
    const [product, setProduct] = useState([]);
    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8000/products`);
        const array = result.data.filter((e) => e.category === 'case')
        setProduct(array);
    }
    useEffect(() => {
        loadProduct();
    },[]);

    const handleCart = (i) => {
        const temp = JSON.parse(localStorage.getItem("products")) || [];
        const tempArray = [...temp];
        const existingProduct = tempArray.find((item) => item.img === product[i].img);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product[i].quantity = 1;
            tempArray.push(product[i]);
        }
        localStorage.setItem("products", JSON.stringify(tempArray));
        setUpdate(Math.random()*10);
    };

    // sort
    const handleSort = (e) => {
        const temp = [...product];
        switch (e.target.value) {
            case "1": 
                loadProduct();
                break;
            case "2": 
                temp.sort((a, b) => {
                    return a.price.replaceAll(".", "") -b.price.replaceAll(".", "");
                })
                setProduct(temp);
                break;
            case "3": 
                temp.sort((a, b) => {
                    return b.price.replaceAll(".", "") -a.price.replaceAll(".", "");
                })
                setProduct(temp);
                break;
            case "4":
                temp.sort((a, b) => a.title.localeCompare(b.title));
                setProduct(temp);
                break;
            case "5":
                temp.sort((a, b) => b.title.localeCompare(a.title));
                setProduct(temp);
                break;
        }
    }
        // search
        const [value, setValue] = useState("");
        const nav = useNavigate();
        const handleSearch = () => {
            if (value === "laptops"){
                nav("/laptops");
            }else if (value === "apple"){
                nav("/apple");
            }else if (value === "screen"){
                nav("/screen");
            }
        }

    return (<>
        {/* page wrapper */}
        <div className='page-wrapper'>
                <div className="side-banner banner-left" style={{width: "290px"}}>
                    <a href="https://www.tncstore.vn/gaming-laptop.html">
                        <img src="/img/banner/left.png" alt="Laptop Gaming 2023" />
                    </a>
                </div>

                {/* main */}
                <div className='container'>
                    <div className="breadcrumb">
                        <ul className="breadcrumb__list">
                        <li>
                            <a href="/">
                            <i aria-hidden="true" className="fa fa-home" />
                            </a>
                            <i class="fa-solid fa-angle-right"></i>
                        </li>
                        <li>
                            <a href="https://www.tncstore.vn/">Trang chủ</a>
                            <i class="fa-solid fa-angle-right"></i>
                        </li>
                        <li>
                            <a href="https://www.tncstore.vn/apple.html">Case PC</a>
                        </li>
                        </ul>
                    </div>
                    <div id="content" className="category__content">
                        <aside id="column-left" className="category__sidebar">
                            <div className="sidebar__title">Bộ lọc sản phẩm</div>
                            <div className="sidebar__wrapper">
                                <div className="block-filter">
                                    <div className="filter-header">Hãng sản xuất</div>
                                    <div className="filter-body">
                                        <div id="brand-filter-container" className="filter-body-inner">
                                            <div className="find-filter-wrap">
                                                <input type="text" placeholder="Tìm hãng sản xuất" onChange={(e) => setValue(e.target.value)}/>
                                                <i class="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="category__product-list">
                            <div className="list-header">
                                <div className="list-header__top">
                                <div class="category-name">Case PC</div>
                                    <div className="category-sort">Sắp xếp theo:
                                    <select
                                        id="input-sort"
                                        className="form-control"
                                        onChange={handleSort}
                                    >
                                        <option value={1}>
                                        Mới nhất
                                        </option>
                                        <option value={2}>
                                        Giá (Thấp - cao)
                                        </option>
                                        <option value={3}>
                                        Giá (Cao - thấp)
                                        </option>
                                        <option value={4}>
                                        Tên (A - Z)
                                        </option>
                                        <option value={5}>
                                        Tên (Z - A)
                                        </option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                {product.map((e, i) => (
                                <div key={i} className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product__thumb">
                                        <Link to={`/case/${e.id}`} className="product__link">
                                            <img
                                            src={e.img}
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </Link>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                        <Link to={`/case/${e.id}`}
                                        className="product__link"
                                        >
                                        {e.title}
                                        </Link>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; {e.rate} đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">{e.price} đ</span>{" "}
                                            <span className="price__old">{e.price_old} đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart" onClick={() => handleCart(i)}>
                                            THÊM VÀO GIỎ
                                        </button>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="category__description">
                        <div className="title">Case PC</div> 
                        <div className="description collapse" />
                        <div className="readmore">Xem thêm </div>
                    </div>
                </div>
                {/* end main */}
                
                <div className="side-banner banner-right" style={{width: "290px"}}>
                    <a href="https://www.tncstore.vn/pc-gaming-sanh-dieu">
                        <img src="/img/banner/right.png" alt="PC Gaming" />
                    </a>
                </div> 
            </div>
        </>
    )
}

export default Case