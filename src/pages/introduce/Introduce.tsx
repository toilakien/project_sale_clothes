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
        </div>
    );
};

export default Introduce;
