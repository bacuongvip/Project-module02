import React from 'react'

function Success() {
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
            <div className='success'>
                <div><img src="img/icon/success.png" /></div>
                <div className='success-content'>Mua hàng thành công!</div>
                <div className='success-content2'>Đơn hàng của bạn đã được ghi nhận thành công.
                     Bộ phận CSKH của TNC Store sẽ liên hệ lại để xác nhận đơn hàng từ 09:00 tới 18:30.
                      Chân thành cảm ơn quý khách đã tin tưởng và lựa chọn TNC Store!
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
    )
}

export default Success