import React from 'react'

function Footer() {
    return (<>
        {/* footer */}
        <footer className="footer">
        <div className="footer__top">
            <div className="container">
                <div className="f__links">
                    <div className="f__links__group">
                        <span className="f__title">Danh mục sản phẩm</span>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/gaming-pc.html">PC Gaming</a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/gaming-laptop.html">
                            Laptop Gaming
                            </a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/vga-nvidia-rtx-4070.html">
                            VGA NVIDIA RTX 4070
                            </a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/monitor.html">Màn hình máy tính</a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/laptop-acer-nitro.html">
                            Laptop Acer Nitro
                            </a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/man-hinh-gaming.html">
                            Màn hình gaming
                            </a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/ban-phim-co.html">Bàn phím cơ</a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/linh-kien-pc.html">
                            Linh kiện máy tính
                            </a>
                        </p>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/gaming-gear.html">Gaming Gears</a>
                        </p>
                    </div>{" "}
                    <div className="f__links__group">
                        <span className="f__title">Thông tin chung</span>{" "}
                        <p>
                            <a href="https://www.tncstore.vn/gioi-thieu-tnc-store">
                            Giới thiệu TNC Store
                            </a>
                        </p>{" "}
                        <p>
                            <a href="">Tuyển dụng</a>
                        </p>{" "}
                        <p>
                            <a href="/tin-tuc">Tin tức</a>
                        </p>{" "}
                        <p>
                            <a href="">Ý kiến khách hàng</a>
                        </p>{" "}
                        <p>
                            <a href="/index.php?route=information/contact">Liện hệ hợp tác</a>
                        </p>
                    </div>{" "}
                    <div className="f__links__group">
                        <span className="f__title">Chính sách chung</span>{" "}
                        <p>
                            <a href="">Quy định chung</a>
                        </p>{" "}
                        <p>
                            <a href="/chinh-sach-van-chuyen-tnc-store.html">
                            Chính sách vận chuyển
                            </a>
                        </p>{" "}
                        <p>
                            <a href="/chinh-sach-va-quy-dinh-bao-hanh-tai-tnc-store.html">
                            Chính sách bảo hành
                            </a>
                        </p>{" "}
                        <p>
                            <a href="/chinh-sach-va-quy-dinh-bao-hanh-tai-tnc-store.html">
                            Chính sách đổi, trả lại hàng
                            </a>
                        </p>{" "}
                        <p>
                            <a href="">Chính sách cho doanh nghiệp</a>
                        </p>
                    </div>{" "}
                    <div className="f__links__group">
                        <span className="f__title">Thông tin khuyến mãi</span>{" "}
                        <p>
                            <a href="/san-pham-ban-chay.html">Sản phẩm bán chạy</a>
                        </p>{" "}
                        <p>
                            <a href="/san-pham-giam-gia.html">Sản phẩm khuyến mãi</a>
                        </p>{" "}
                        <p>
                            <a href="">Hàng thanh lý</a>
                        </p>
                    </div>{" "}
                    <div className="f__links__group">
                        <span className="f__title">Follow us!</span>{" "}
                        <div className="f__links__social">
                            <a href="https://www.facebook.com/tncstore/" target="_blank">
                                <img src="/img/icon/facebook.png" />
                            </a>{" "}
                            <a href="https://www.youtube.com/channel/UCvLGkK-wBBaoXwV71Tgx08Q" target="_blank">
                                <img src="/img/icon/youtube.png" />
                            </a>{" "}
                            <a href="https://shopee.vn/tncofficialstore" target="_blank">
                                <img src="/img/icon/shoppe.png" alt="gg" />
                            </a>{" "}
                            <a href="https://www.instagram.com/tncstore_vn/" target="_blank">
                                <img src="/img/icon/instagram.png" />
                            </a>
                        </div>{" "}
                        <div style={{ marginTop: 15 }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.070737640484!2d105.844173!3d21.0019476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac70cf94287f%3A0x7362ea6005b5ac6e!2sTNC%20Store!5e0!3m2!1sen!2s!4v1683824721069!5m2!1sen!2s"
                                width={300}
                                height={200}
                                allowFullScreen="allowfullscreen"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="f__store__info">
                    <div className="f__title">Công ty TNHH Thương mại &amp; Tin học Tú Nguyệt</div>{" "}
                    <p>Showroom : 172 Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội / Tel: (024) 36288790 / (086) 830.2123</p>
                    <p>Trung tâm bảo hành : 172 Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội / Tel: (098) 978 1468</p>
                    <p>Trụ sở (Không bán hàng): 11 Vũ Thạnh - Cát Linh - Đống Đa - Hà Nội / Tel: (086) 8302123; Fax : (024) 36288790</p>
                    <a
                        href="https://www.dmca.com/Protection/Status.aspx?ID=4fc14405-0653-4489-bece-2453699c60a7&refurl=https://www.tncstore.vn/"
                        title="DMCA.com Protection Status"
                        className="dmca-badge"
                        >
                        <img
                            src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=4fc14405-0653-4489-bece-2453699c60a7"
                            alt="DMCA.com Protection Status"
                        />
                    </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="f__bottom__copyright">
                        © 2020 - Bản quyền của Công ty TNHH Thương mại &amp; Tin học Tú Nguyệt
                    </div>{" "}
                    <div className="f__bottom__icon">
                        <a href="">
                            <img src="/img/icon/tien-mat.png" alt="" />
                        </a>{" "}
                        <a href="">
                            <img
                                src="/img/icon/mastercard.png"
                                alt=""
                            />
                        </a>{" "}
                        <a href="">
                        <img src="/img/icon/visa.png" alt="" />
                        </a>{" "}
                        <a href="http://online.gov.vn/Home/WebDetails/63325" target="_blank">
                        <img
                            src="/img/icon/bo-cong-thuong.png"
                            alt=""
                        />
                        </a>
                    </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer