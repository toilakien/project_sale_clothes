import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import FooterCopyright from './FooterCopyright';
const FooterUser = () => {
    return (
        <div className="mt-8">
            <div className="text-center leading-8">
                <h1 className="text-5xl font-bold mb-6">Gucci</h1>
                <h2 className="text-xl font-bold">Một thương hiệu nỗ lực truyền cảm hứng và thúc đẩy văn hóa sáng tạo phát triển.</h2>
                <p>
                    Chúng tôi tiếp cận công việc của mình với tâm lý rằng mỗi sản phẩm được tạo ra đều là một trải nghiệm học hỏi để cải thiện kỹ năng của chúng tôi. Chúng tôi là những người thực hành
                    và cung cấp văn hóa sáng tạo và được truyền cảm hứng từ các hình thức khác nhau từ nghệ thuật, thiết kế, thời trang, âm nhạc, phim ảnh, ẩm thực, v.v.
                </p>
                <div className="mx-auto w-full flex justify-center mt-5">
                    <div className="flex gap-8 w-max">
                        <FaSquareFacebook />
                        <FaYoutube />
                        <FaTiktok />
                        <FaTwitter />
                        <FaTelegramPlane />
                    </div>
                </div>
                <div className="mx-auto w-full flex justify-center mt-5">
                    <ul className="flex gap-8 w-max">
                        <li>
                            <a href="">Tìm kiếm</a>
                        </li>
                        <li>
                            <a href="">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="">Chính sách đổi trả</a>
                        </li>
                        <li>
                            <a href="">Chính sách bảo mật</a>
                        </li>
                        <li>
                            <a href="">Điều khoản dịch vụ</a>
                        </li>
                        <li>
                            <a href="">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterCopyright />
        </div>
    );
};

export default FooterUser;
