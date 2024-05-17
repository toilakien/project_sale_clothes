import logo from '../../assets/img/logo.webp';

const FooterCopyright = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__top">
                    <div className="site-footer__description">
                        <h6 className="flex gap-5">
                            <img className="w-[50px]" src={logo} alt="" />
                            <span>Gucci-Clothes</span>
                        </h6>
                        <p>Chừng Nào Đôi Chân Tôi Còn Bước Trên Mặt Đất – Tôi Sẽ Chỉ Đi Các Đôi Giày Chất Nhất !!!</p>
                        <ul className="site-footer__social-networks">
                            <li>
                                <a href="#">
                                    <i className="icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icon-youtube-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="site-footer__links">
                        <ul>
                            <li>Mua sắm trực tuyến</li>
                            <li>
                                <a href="#">Tình trạng đặt hàng</a>
                            </li>
                            <li>
                                <a href="#">Vận chuyển và giao hàng</a>
                            </li>
                            <li>
                                <a href="#">Lợi nhuận</a>
                            </li>
                            <li>
                                <a href="#">Nhiều lựa chọn thanh toán</a>
                            </li>
                            <li>
                                <a href="#">Liên hệ chúng tôi</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Thông tin</li>
                            <li>
                                <a href="#">Thẻ quà tặng</a>
                            </li>
                            <li>
                                <a href="#">Tìm một cửa hàng</a>
                            </li>
                            <li>
                                <a href="#">Bản tin</a>
                            </li>
                            <li>
                                <a href="#">Trở thành một thành viên</a>
                            </li>
                            <li>
                                <a href="#">Phản hồi trang web</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Thông tin liên hệ</li>
                            <li>
                                <a href="#">shoes@product.com</a>
                            </li>
                            <li>
                                <a href="#">Hotline: 09999999999</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <div className="container">
                    <p>Team ken Zen - 2024. BẢN QUYỀN BỞI TEAM KENZEN.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterCopyright;
