import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail({show, setShow, setUpdate}) {
  const params = useParams();
  const [product, setProduct] = useState([]);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8000/products`);
        const array = result.data.filter((e) => e.id == params.id)
        setProduct(array);
    }
    useEffect(() => {
        loadProduct();
    },[]);

  
    const [count, setCount] = useState(1);
    const handleCart = () => {
      const temp = JSON.parse(localStorage.getItem("products")) || [];
      const tempArray = [...temp];
      const existingProduct = tempArray.find((item) => item.img === product[0].img);
      if (existingProduct) {
          existingProduct.quantity += count;
      } else {
          product[0].quantity = count;
          tempArray.push(product[0]);
      }
      localStorage.setItem("products", JSON.stringify(tempArray));
      setUpdate(Math.random()*10);
    };

    const handleSub = () => {
        if(count > 1){
            setCount(count - 1);
        }
    } 
  return (
    <>
      <div className="page-wrapper">
        <div className="side-banner banner-left" style={{ width: "290px" }}>
          <a href="https://www.tncstore.vn/gaming-laptop.html">
            <img src="/img/banner/left.png" alt="Laptop Gaming 2023" />
          </a>
        </div>

        {/* main */}
        <div className="container">
          <div className="breadcrumb">
            <ul className="breadcrumb__list">
              <li>
                <a href="/">
                  <i aria-hidden="true" className="fa fa-home" />
                </a>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                <a href="/">Trang chủ</a>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                <a href="/apple">Apple</a>
              </li>
            </ul>
          </div>
          <div className="product-detail">
            <div className="product-img">
              <img src={`/${product[0]?.img}`} alt="aaaaa"/>
            </div>
            <div className="product-info">
              <h1>{product[0]?.title}</h1>
              <div className="rating-guarantee">
                <div className="product__rate">
                  <div className="rate__star">
                    <i className="fas fa-star " />{" "}
                    <i className="fas fa-star " />
                    <i className="fas fa-star " />{" "}
                    <i className="fas fa-star " />
                    <i className="fas fa-star " />
                  </div>
                  <div className="rate__text">{product[0]?.rate} đánh giá</div>
                </div>
                <div className="guarantee">
                  <span>Bảo hành 12 Tháng</span>
                </div>
              </div>
              <div className="short-desc">
                <p>Tỉ lệ: 16:9</p>
                <p>Kích thước: 23.8 inch</p>
                <p>- Tấm nền: IPS</p>
                <p>- Độ phân giải: FHD (1920x1080)</p>
                <p>- Tốc độ làm mới: 75 Hz</p>
                <p>
                  - Thời gian đáp ứng: 8 ms (Mức 1) / 6 ms (Mức 2) / 5 ms (Mức
                  3) / 4 ms (Mức 4) / 14 ms (Chế độ Tắt)
                </p>
                <p>- Cổng kết nối: 1x HDMI 1.4, 1x DP 1.2</p>
                <p>- Phụ kiện: Cáp nguồn, Cáp HDMI</p>
              </div>
              <div id="product" className="status-price">
                <div className="col1">
                  <div>
                    <p className="status_stock">
                      <span className="status status1">
                        <i aria-hidden="true" className="fa fa-circle" />
                        Còn hàng
                      </span>
                    </p>
                    <div className="quantity">
                      Số lượng
                      <div className="quantity-wrap">
                        <input type="text" name="quantity" value={count} readOnly />
                        <div className="qty-action">
                          <span title="Thêm" className="add-qty" onClick={() => setCount(count+1)}>
                            +
                          </span>
                          <span title="Bớt" className="sub-qty" onClick={handleSub}>
                            -
                          </span>
                        </div>
                      </div>
                      <input type="hidden" name="product_id" />
                    </div>
                  </div>
                </div>
                <div className="col2">
                  <ul className="list-unstyled list-price">
                    <li>
                      <p className="price-old">{product[0]?.price_old} đ</p>
                    </li>
                    <li>
                      <p className="price">{product[0]?.price} đ</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="add-cart-buttons">
                <button type="button" className="btn-add-cart btn-add-cart-2"  onClick={handleCart}>
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00033 18.3334C8.46056 18.3334 8.83366 17.9603 8.83366 17.5001C8.83366 17.0398 8.46056 16.6667 8.00033 16.6667C7.54009 16.6667 7.16699 17.0398 7.16699 17.5001C7.16699 17.9603 7.54009 18.3334 8.00033 18.3334Z"
                      stroke="#005EC4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.1663 18.3334C17.6266 18.3334 17.9997 17.9603 17.9997 17.5001C17.9997 17.0398 17.6266 16.6667 17.1663 16.6667C16.7061 16.6667 16.333 17.0398 16.333 17.5001C16.333 17.9603 16.7061 18.3334 17.1663 18.3334Z"
                      stroke="#005EC4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.33301 0.833252H4.66634L6.89967 11.9916C6.97588 12.3752 7.1846 12.7199 7.4893 12.9652C7.79399 13.2105 8.17526 13.3407 8.56634 13.3333H16.6663C17.0574 13.3407 17.4387 13.2105 17.7434 12.9652C18.0481 12.7199 18.2568 12.3752 18.333 11.9916L19.6663 4.99992H5.49967"
                      stroke="#005EC4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Thêm vào giỏ
                </button>
                <button type="button" className="btn-add-cart" onClick={() => setShow(true)}>
                  <svg
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  Mua hàng
                </button>
              </div>
            </div>
          </div>
          <div class="block block--policy desktop">
            <div class="policy__item">
              <svg
                width="64"
                height="39"
                viewBox="0 0 64 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.73752e-06 38.9324H53.1079L64 0H10.8921L9.73752e-06 38.9324ZM13.808 3.84369H58.9334L58.1253 6.5H12.9999L13.808 3.84369ZM57.4999 9L56.6253 12H11.4999L12.3746 9H57.4999ZM50.192 35.0887H5.06664L10.8746 14.5H55.9999L50.192 35.0887Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  d="M14.9249 28.0364H10.9336L9.85825 31.8801H13.8495L14.9249 28.0364Z"
                  fill="#29324E"
                ></path>
              </svg>{" "}
              <div class="policy__item__text">
                Hỗ trợ trả góp 0%, trả trước 0đ
              </div>
            </div>{" "}
            <div class="policy__item">
              <svg
                width="55"
                height="32"
                viewBox="0 0 55 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.500153 26H5.00014L3.1826 31.7219H46.6621L54.2567 4.80592H48.0731L49.4084 0.5L45.3493 0.5H7.91538L0.500153 26ZM4.5351 21.9159L5.03735 20.1207L5.53959 18.3255L9.69671 3.46644H40.6606H42.5248H44.3889H45.7241L45.3493 4.80592H44.0142H42.15H40.2859H10.7129L6.93056 18.3256L6.42831 20.1208L5.92607 21.916L5.56637 23.2017H4.17539L4.5351 21.9159ZM43.9469 28.1315H7.91538L8.29013 26.792L8.79237 24.9968L9.29461 23.2016L9.65431 21.9159L10.1566 20.1207L10.6588 18.3255L13.4367 8.39634H39.2814H41.1455H43.0097H44.3449H46.209H48.0731H49.5155L43.9469 28.1315Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  d="M31.5353 14.3047H35.3325L36.2926 10.8727H32.4954L32.8417 9.63525H29.2778L28.9316 10.8727H24.3721L22.287 18.3254L21.8455 19.9035H26.4051L26.3443 20.1206L25.8421 21.9158L25.7989 22.0701H21.931L21.6145 23.2015L21.1122 24.9967L20.9708 25.5022H24.8387L24.4779 26.7919H28.0417L28.4025 25.5022H32.8379L32.9793 24.9967L33.4816 23.2015L33.8413 21.9158L34.3435 20.1206L34.8457 18.3254L35.3644 16.4715H30.9291L31.5353 14.3047ZM30.2774 21.9158L30.2342 22.0701H29.3627L29.4059 21.9158L29.9081 20.1206L29.9689 19.9035H30.8404L30.7796 20.1206L30.2774 21.9158ZM26.3695 16.4715L26.9757 14.3048H27.9714L27.3653 16.4715H26.3695Z"
                  fill="#29324E"
                ></path>
              </svg>{" "}
              <div class="policy__item__text">
                Hoàn tiền 200% nếu có hàng giả
              </div>
            </div>{" "}
            <div class="policy__item">
              <svg
                width="72"
                height="39"
                viewBox="0 0 72 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.9844 3.80453H20.6917L21.7561 0H53.9512L52 6.5L51 8L49.2289 13.7914L49.2289 15.1261H58.5L63.2257 13.7914L66.4656 19.7821L62.6866 33.2896H12.4427L13.5071 29.4851H59.8485L62.1898 21.1166L60.2857 17.596H45.126L48.9844 3.80453Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.8514 4.28027H59.6664L64.8191 17.5961H45.126L48.8514 4.28027ZM51 8.0848L49.5 14.5H58.9079L56.4842 8.0848H51Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  d="M57.986 30.9118C56.8103 35.1142 52.3628 38.5209 48.0523 38.5209C43.7418 38.5209 41.2005 35.1142 42.3762 30.9118C43.5519 26.7094 47.9994 23.3027 52.3099 23.3027C56.6204 23.3027 59.1617 26.7094 57.986 30.9118Z"
                  fill="#F0F3FC"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.1167 34.7163C51.272 34.7163 53.4957 33.013 54.0835 30.9118C54.6714 28.8106 53.4008 27.1073 51.2455 27.1073C49.0902 27.1073 46.8665 28.8106 46.2787 30.9118C45.6908 33.013 46.9615 34.7163 49.1167 34.7163ZM48.0523 38.5209C52.3628 38.5209 56.8103 35.1142 57.986 30.9118C59.1617 26.7094 56.6204 23.3027 52.3099 23.3027C47.9994 23.3027 43.5519 26.7094 42.3762 30.9118C41.2005 35.1142 43.7418 38.5209 48.0523 38.5209Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  d="M32.62 30.9118C31.4443 35.1142 26.9969 38.5209 22.6864 38.5209C18.3759 38.5209 15.8346 35.1142 17.0103 30.9118C18.186 26.7094 22.6334 23.3027 26.9439 23.3027C31.2544 23.3027 33.7957 26.7094 32.62 30.9118Z"
                  fill="#F0F3FC"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.7508 34.7163C25.906 34.7163 28.1297 33.013 28.7176 30.9118C29.3054 28.8106 28.0348 27.1073 25.8795 27.1073C23.7243 27.1073 21.5006 28.8106 20.9127 30.9118C20.3249 33.013 21.5955 34.7163 23.7508 34.7163ZM22.6864 38.5209C26.9969 38.5209 31.4443 35.1142 32.62 30.9118C33.7957 26.7094 31.2544 23.3027 26.9439 23.3027C22.6334 23.3027 18.186 26.7094 17.0103 30.9118C15.8346 35.1142 18.3759 38.5209 22.6864 38.5209Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1241 6.18213L30.2876 6.18213L29.2233 9.98666L15.0597 9.98666L16.1241 6.18213Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.14159 13.7915L25.7875 13.7915L24.6459 16.5L7 16.5L8.14159 13.7915Z"
                  fill="#29324E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.93956 21.4004L18.6957 21.4004L17.7561 24L8 24L8.93956 21.4004Z"
                  fill="#29324E"
                ></path>
              </svg>{" "}
              <div class="policy__item__text">
                Giao hàng nhanh trên toàn quốc
              </div>
            </div>{" "}
            <div class="policy__item">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.6538 44.9597H22.4736L11.7289 52.3122L6.8905 55.6231L8.18165 50.5243L8.60884 48.8373L9.59075 44.9597H6.65381H5.59075H2.65381L3.63571 41.0821L10.0181 15.8776L11 12H15H59H63L62.0181 15.8776L55.6357 41.0821L54.6538 44.9597H50.6538ZM20.623 42.0108L13.02 47.2134L13.5907 44.9597L14.5727 41.0821H10.5727H7.63571L14.0181 15.8776H58.0181L51.6357 41.0821H23.4555H21.9802L20.623 42.0108ZM24.5632 25.5718H18.5632L17.0904 31.3882H23.0904L24.5632 25.5718ZM30.5632 25.5718H36.5632L35.0904 31.3882H29.0904L30.5632 25.5718ZM48.5632 25.5718H42.5632L41.0904 31.3882H47.0904L48.5632 25.5718Z"
                  fill="#29324E"
                ></path>
              </svg>{" "}
              <div class="policy__item__text">Hỗ trợ kĩ thuật online 7/7</div>
            </div>
          </div>
          <div className="block__header">
            <span className="block__header__title">THÔNG TIN SẢN PHẨM</span>
          </div>
          <div className="block__content">
            <div className="tab-content">
              <div className="content-specification">
                <table >
                    <tr>
                      <td className="att-name">Thương Hiệu </td>
                      <td className="att-value">
                        <p>Lenovo</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Model </td>
                      <td className="att-value">
                        <p>Q24i-20 66EEGAC3VN</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Màu Sắc </td>
                      <td className="att-value">
                        <p>Đen</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=1.%20K%C3%ADch%20th%C6%B0%E1%BB%9Bc%20m%C3%A0n%20h%C3%ACnh"
                          target="_blank"
                        >
                          Kích Thước Màn Hình
                        </a>
                      </td>
                      <td className="att-value">
                        <p>23.8 inch</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=4.%20%C4%90%E1%BB%99%20ph%C3%A2n%20gi%E1%BA%A3i"
                          target="_blank"
                        >
                          Độ Phân Giải
                        </a>
                      </td>
                      <td className="att-value">
                        <p>FHD (1920x1080)</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=5.%20T%E1%BA%A7n%20s%E1%BB%91%20qu%C3%A9t"
                          target="_blank"
                        >
                          Tần Số Quét
                        </a>
                      </td>
                      <td className="att-value">
                        <p>75 Hz</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=8.%20Th%E1%BB%9Di%20gian%20ph%E1%BA%A3n%20h%E1%BB%93i"
                          target="_blank"
                        >
                          Tốc Độ Phản Hồi
                        </a>
                      </td>
                      <td className="att-value">
                        <p>8 ms (Mức 1)&nbsp;</p>
                        <p>6 ms (Mức 2)&nbsp;</p>
                        <p>5 ms (Mức 3)&nbsp;</p>
                        <p>4 ms (Mức 4)&nbsp;</p>
                        <p>14 ms (Chế độ Tắt)</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Góc Nhìn </td>
                      <td className="att-value">
                        <p>178 / 178</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=6.%20M%C3%A0u%20s%E1%BA%AFc"
                          target="_blank"
                        >
                          Màu Sắc Hiển Thị
                        </a>
                      </td>
                      <td className="att-value">
                        <p>16,7 triệu</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=7.%20%C4%90%E1%BB%99%20s%C3%A1ng"
                          target="_blank"
                        >
                          Độ Sáng
                        </a>
                      </td>
                      <td className="att-value">
                        <p>300cd/m²</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Độ Tương Phản </td>
                      <td className="att-value">
                        <p>1000: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=3.%20T%E1%BB%B7%20l%E1%BB%87%20khung%20h%C3%ACnh"
                          target="_blank"
                        >
                          Tỉ Lệ Màn Hình
                        </a>
                      </td>
                      <td className="att-value">
                        <p>16:9</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">
                        <a
                          href="https://www.tncstore.vn/giai-ma-nhung-thong-so-man-hinh.html#:~:text=9.%20T%E1%BA%A5m%20n%E1%BB%81n"
                          target="_blank"
                        >
                          Tấm Nền
                        </a>
                      </td>
                      <td className="att-value">
                        <p>IPS</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Công Nghệ Đồng Bộ </td>
                      <td className="att-value">
                        <p>99% sRGB</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Cổng Kết Nối </td>
                      <td className="att-value">
                        <p>1x HDMI 1.4, 1x DP 1.2</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Công Suất Tiêu Thụ Tối Đa </td>
                      <td className="att-value">
                        <p>24W / 32W</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Hỗ Trợ Giá Treo VESA </td>
                      <td className="att-value">
                        <p>no</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Kích Thước (H x W x D) </td>
                      <td className="att-value">
                        <p>448,5x539,4x38,1 mm</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="att-name">Trọng Lượng (Net) </td>
                      <td className="att-value">
                        <p>4,5 kg</p>
                      </td>
                    </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* end main */}

        <div className="side-banner banner-right" style={{ width: "290px" }}>
          <a href="https://www.tncstore.vn/pc-gaming-sanh-dieu">
            <img src="/img/banner/right.png" alt="PC Gaming" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Detail;
