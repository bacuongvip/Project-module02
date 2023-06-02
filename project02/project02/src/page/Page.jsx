import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel';

function Page() {
    return (
        <div>
            {/* page wrapper */}
            <div className='page-wrapper'>
                <div className="side-banner banner-left" style={{width: "290px"}}>
                    <a href="https://www.tncstore.vn/gaming-laptop.html">
                        <img src="/img/banner/left.png" alt="Laptop Gaming 2023" />
                    </a>
                </div>
                <div className='container'>
                    <Carousel autoplay={true}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/2.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/3.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/4.png"
                            alt="fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="side-banner banner-right" style={{width: "290px"}}>
                    <a href="https://www.tncstore.vn/pc-gaming-sanh-dieu">
                        <img src="/img/banner/right.png" alt="PC Gaming" />
                    </a>
                </div> 
            </div>
            
            <div className='container'>            
                    <OwlCarousel items={2}  
                    className="owl-theme"  
                    loop  
                    margin={24} 
                    autoplay={true}
                    responsive={{
                        620: { items: 2 },
                        width: "600px",
                        }}
                    >  
                    <div><img  className="img" src="/img/banner/5.png"/></div>  
                    <div><img  className="img" src="/img/banner/6.png"/></div>  
                    <div><img  className="img" src="/img/banner/7.png"/></div>
                    <div><img  className="img" src="/img/banner/8.png"/></div>
                    <div><img  className="img" src="/img/banner/9.png"/></div>
                    <div><img  className="img" src="/img/banner/10.png"/></div>
                    <div><img  className="img" src="/img/banner/11.png"/></div>
                    <div><img  className="img" src="/img/banner/12.png"/></div>
                    </OwlCarousel>  
            </div> 

            <div className="container">
                {/* category */}
                <div className="block block--home">
                    <div className="block__header">
                        <span className="block__header__title">DANH MỤC SẢN PHẨM</span>
                    </div>
                    <div className="block__content home__category">
                        <a href="/gaming-pc.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(26, 93, 196)" }}
                        />
                        <img src="/img/product/1.png" alt="" />
                        <div className="text">
                            <div>PC Gaming</div>
                            <div className="sm">Chiến mọi game</div>
                        </div>
                        </a>
                        <a href="/ban-phim-co.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(13, 20, 48)" }}  
                        />
                        <img src="/img/product/2.png" alt="" />
                        <div className="text">
                            <div>Bàn Phím Cơ</div>
                            <div className="sm">
                            Gõ lướt <br />
                            như bay
                            </div>
                        </div>
                        </a>
                        <a href="/workstation-pc.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(1, 249, 201)" }}
                        />
                        <img src="/img/product/3.png" alt="" />
                        <div className="text">
                            <div>PC ĐỒ HỌA</div>
                            <div className="sm">TỐI ƯU CÔNG VIỆC</div>
                        </div>
                        </a>
                        <a href="/gaming-laptop.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(255, 204, 58)" }}
                        />
                        <img src="/img/product/4.png" alt="" />
                        <div className="text">
                            <div>GAMING LAPTOP</div>
                            <div className="sm">
                            Làm chủ cuộc chơi <br />
                            mọi nơi
                            </div>
                        </div>
                        </a>
                        <a href="/man-hinh-gaming.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(209, 33, 55)" }}
                        />
                        <img src="/img/product/5.png" alt="" />
                        <div className="text">
                            <div>
                            MÀN HÌNH
                            <br /> GAMING
                            </div>
                            <div className="sm">
                            tận hưởng
                            <br /> thế giới game
                            </div>
                        </div>
                        </a>
                        <a href="/laptop-van-phong.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(52, 61, 87)" }}
                        />
                        <img src="/img/product/6.png" alt="" />
                        <div className="text">
                            <div>
                            laptop
                            <br /> văn phòng
                            </div>
                            <div className="sm">
                            Mỏng nhẹ,
                            <br /> bền bỉ
                            </div>
                        </div>
                        </a>
                        <a href="/chuot-gaming.html">
                        <div
                            className="shape"
                            style={{ borderColor: "rgb(41, 50, 78) transparent rgb(255, 144, 5)" }}
                        />
                        <img src="/img/product/7.png" alt="" />
                        <div className="text">
                            <div>
                            Chuột <br />
                            Gaming
                            </div>
                            <div className="sm">
                            chuyên nghiệp <br />
                            từng cú click
                            </div>
                        </div>
                        </a>
                        <a href="/ghe-gaming.html">
                        <div
                            className="shape"
                            style={{
                            borderColor: "rgb(41, 50, 78) transparent rgb(253, 242, 146)"
                            }}
                        />
                        <img src="/img/product/8.png" alt="" />
                        <div className="text">
                            <div>GhẾ gaming</div>
                            <div className="sm">hiện đại, thoải mái</div>
                        </div>
                        </a>
                    </div>
                </div>

                {/* discount */}
                <div className="block block--home">
                    <div className="block__header">
                        <span className="block__header__title">SẢN PHẨM GIẢM GIÁ</span>
                    </div>
                    <div className="block__content home__product desktop">
                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                            <div className="swiper-wrapper" aria-live="polite">
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/1.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                        <a
                                        href="#"
                                        className="product__link"
                                        >
                                        Tản Nhiệt Khí CPU Deepcool AK620 White
                                        </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">1.890.000 đ</span>{" "}
                                            <span className="price__old">2.090.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-15%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/2.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Màn hình Gaming MSI Optix G27C4X VA/ FullHD
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">5.490.000 đ</span>{" "}
                                            <span className="price__old">6.490.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-10%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/3.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Laptop Acer Aspire 3 A315-59-321N _NX.K6TSV.009
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">10.690.000 đ</span>{" "}
                                            <span className="price__old">11.199.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-10%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/4.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark 
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">790.000 đ</span>{" "}
                                            <span className="price__old">990.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                <div className="block__readmore">
                    <a href="/san-pham-giam-gia">XEM THÊM</a>
                </div>

                {/* hot */}
                <div className="block block--home">
                    <div className="block__header">
                        <span className="block__header__title">SẢN PHẨM NỔI BẬT</span>
                    </div>
                    <div className="block__content home__featured__product pro">
                        <div className="featured__four">
                        <a
                            href="https://www.tncstore.vn/man-hinh-gaming-lg-24gn65r-b.html"
                            title="Màn hình Gaming LG 24GN65R-B 23.8 inch/ FHD /144Hz /1Mz"
                        >
                            <img
                            src="/img/banner/hot1.png"
                            alt="Màn hình Gaming LG 24GN65R-B 23.8 inch/ FHD /144Hz /1Mz"
                            />
                        </a>{" "}
                        <a
                            href="https://www.tncstore.vn/laptop-dell-vostro-15-3520-5m2tt2.html"
                            title="Laptop Dell Vostro 15 3520 5M2TT2 i5-1235U/ 8GB/ 512GB/ 15.6 inch FHD/ Win 11"
                        >
                            <img
                            src="/img/banner/hot2.png"
                            alt="Laptop Dell Vostro 15 3520 5M2TT2 i5-1235U/ 8GB/ 512GB/ 15.6 inch FHD/ Win 11"
                            />
                        </a>{" "}
                        <a
                            href="https://www.tncstore.vn/asus-dual-geforce-rtx-4060ti-8gb-gddr6.html"
                            title="Card Màn Hình ASUS Dual GeForce RTX 4060 Ti 8GB GDDR6"
                        >
                            <img
                            src="/img/banner/hot3.png"
                            alt="Card Màn Hình ASUS Dual GeForce RTX 4060 Ti 8GB GDDR6"
                            />
                        </a>{" "}
                        <a
                            href="https://www.tncstore.vn/chuot-razer-viper-v2-pro-white-wireless-rz01-04390200-r3a1.html"
                            title="Chuột Razer Viper V2 Pro White Wireless"
                        >
                            <img
                            src="/img/banner/hot4.png"
                            alt="Chuột Razer Viper V2 Pro White Wireless"
                            />
                        </a>
                        </div>{" "}
                        <div className="featured__one">
                        <a href="https://www.tncstore.vn/gaming-pc-nova-a4070-wh.html">
                            <img src="/img/banner/hot5.png" alt="" />
                        </a>
                        </div>
                    </div>{" "}
                    <div className="block__readmore">
                        <a href="/san-pham-noi-bat">XEM THÊM</a>
                    </div>
                </div>
                
                {/* best seller */}
                <div className="block block--home">
                    <div className="block__header">
                        <span className="block__header__title">SẢN PHẨM BÁN CHẠY</span>
                    </div>
                    <div className="block__content home__product desktop">
                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                            <div className="swiper-wrapper" aria-live="polite">
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/5.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                        <a
                                        href="#"
                                        className="product__link"
                                        >
                                        Bàn Phím Cơ E-DRA EK384 Triple Mode Alpha Red Switch
                                        </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">849.000 đ</span>{" "}
                                            <span className="price__old">990.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/6.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Bàn phím AKKO 3108 RF Matcha Red Bean (AKKO cs switch - Haze Pink)
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">1.399.000 đ</span>{" "}
                                            <span className="price__old">1.499.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-15%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/7.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Màn Hình VIEWSONIC VX2728-2K 27 INCH/ QHD/ FAST IPS/ 165HZ/ 0.5MS
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">6.990.000 đ</span>{" "}
                                            <span className="price__old">7.990.000 đ</span>
                                        </div>
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} role="group" aria-label="1 / 18" style={{ flexGrow: "1" }}>
                                    <div className="product">
                                        <div className="percent">
                                            <span>-10%</span>
                                        </div>
                                    </div>
                                    <div className="product__thumb">
                                        <a href="#" className="product__link">
                                            <img
                                            src="/img/list-product/8.jpg"
                                            alt="Tản Nhiệt Khí CPU Deepcool AK400 Zero Dark "
                                            />
                                        </a>
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__title">
                                            <a
                                            href="#"
                                            className="product__link"
                                            >
                                            Bộ Chia USB Orico TC4U-U3-SV Type C ra 4 Cổng USB 3.0 
                                            </a>
                                        </div>
                                        <div className="product__rate">
                                            <div className="rate__star">
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " /> <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </div>
                                            <div className="rate__text">&nbsp; 0 đánh giá</div>
                                        </div>
                                        <div className="product__price">
                                            <span className="price__selling">149.000 đ</span>{" "}
                                            <span className="price__old">349.000 đ</span>
                                        </div>  
                                        <button type="button" className="add-to-cart">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                <div className="block__readmore">
                    <a href="/san-pham-giam-gia">XEM THÊM</a>
                </div>
                
                {/* banner */}
                <div class="block block--banner">
                    <a href="https://www.tncstore.vn/build-pc-chat-kem-rtx-4060-4060ti-nhan-ngay-uu-dai-khung.html">
                        <img src="/img/banner/main.png" />
                    </a>
                </div>
                
                {/* introduce */}
                <div className="block block--home">
                    <div className="block__header">
                        <span className="block__header__title">GIỚI THIỆU VỀ TNC</span>
                    </div>{" "}
                    <div className="block__content home__tnc__intro">
                        <div className="tnc__intro__text">
                            <div className="intro__text__title">
                                TNC Store - Địa chỉ sắm PC/Laptop uy tín hàng đầu Việt Nam!{" "}
                            </div>
                            TNC Store tự hào với tôn chỉ luôn lấy khách hàng làm trọng tâm bằng việc
                            cung cấp các dịch vụ hậu mãi chu đáo, tận tâm để mang đến cho khách hàng
                            những sản phẩm có chất lượng và trải nghiệm với PC/Laptop tốt nhất! Chúng
                            tôi đảm bảo bạn sẽ có được những trải nghiệm tuyệt vời nhất khi, sử dụng
                            các dịch vụ và sản phẩm của TNC Store.
                        </div>{" "}
                        <div className="img">
                            <img src="/img/banner/intro.png" alt="" />{" "}
                            <span className="btn__play" />
                        </div>
                    </div>
                </div>
                
                {/* feedback */}
                <div className="block block__feedback">
                    <div className="block__header">
                        <span className="block__header__title">ĐÁNH GIÁ TỪ KHÁCH HÀNG</span>
                    </div>
                    <Carousel autoplay={true}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/feedback1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/feedback2.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/feedback3.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/feedback4.png"
                            alt="fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/banner/feedback5.png"
                            alt="fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Page