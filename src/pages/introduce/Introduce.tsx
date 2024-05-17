import React from 'react';
import BreakCrum from '../../components/BreakCrum';

const Introduce = () => {
    return (
        <div>
            <hr />
            <BreakCrum a="Trang chủ" b="Giới thiệu" />
            <hr />
            <div className="flex">
                <div className="mt-8 border-1 border-[#ddd]">
                    <h1 className="text-xl font-bold">Giới thiệu</h1>
                    <p>
                        Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng
                        cảm thấy tin tưởng khi mua hàng trên website của bạn.
                    </p>
                    <ul className="intro">
                        Một vài gợi ý cho nội dung trang Giới thiệu:
                        <li>Bạn là ai</li>
                        <li>Giá trị kinh doanh của bạn là gì</li>
                        <li>Địa chỉ cửa hàng</li>
                        <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                        <li>Đội ngũ của bạn gồm những ai</li>
                        <li>Thông tin liên hệ</li>
                        <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                    </ul>
                </div>
                <div className="p-4">
                    <img src="https://watermark.lovepik.com/photo/20211208/large/lovepik-fashionable-womens-clothing-picture_501667331.jpg" alt="" />
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <header className="section__intro">
                        <h4>Tại sao bạn chọn chúng tôi?</h4>
                    </header>

                    <ul className="shop-data-items">
                        <li>
                            <i className="icon-shipping"></i>
                            <div className="data-item__content">
                                <h4>Miễn phí vẩn chuyển</h4>
                                <p>Tất cả các giao dịch mua trên 5 triệu đều đủ điều kiện để được giao hàng miễn phí.</p>
                            </div>
                        </li>

                        <li>
                            <i className="icon-payment"></i>
                            <div className="data-item__content">
                                <h4>Thanh toán dễ dàng</h4>
                                <p>Tất cả các khoản thanh toán được xử lý ngay lập tức qua một giao thức thanh toán an toàn.</p>
                            </div>
                        </li>

                        <li>
                            <i className="icon-cash"></i>
                            <div className="data-item__content">
                                <h4>Đảm bảo hoàn lại tiền</h4>
                                <p>Nếu một mặt hàng đến nơi bị hỏng hoặc bạn đã đổi ý, bạn có thể gửi nó quay lại để được hoàn lại đầy đủ.</p>
                            </div>
                        </li>

                        <li>
                            <i className="icon-materials"></i>
                            <div className="data-item__content">
                                <h4>Chất lượng tốt nhất</h4>
                                <p>Được thiết kế để bền lâu, mỗi đôi giày của chúng tôi đều được chế tác bằng những vật liệu tốt nhất.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Introduce;
