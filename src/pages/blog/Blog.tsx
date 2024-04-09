import React, { useEffect, useState } from 'react';
import BreakCrum from '../../components/BreakCrum';
import { getBlogs } from '../../services';

type IBlogItemProps = {
    img?: string;
    title?: string;
    description?: string;
    author?: string;
    date?: string;
};

const BlogItem = ({ img, title, description, author, date }: IBlogItemProps) => {
    return (
        <div className="blog-item ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="p-2 leading-6">
                <h1 className=" indent-4 text-xl font-bold cursor-pointer">{title}</h1>
                <p className="indent-4"> {description}</p>
            </div>
            <div className="p-2">
                <ul className="flex gap-2">
                    <li>Bởi: {author}</li>
                    <li>-</li>
                    <li>{date}</li>
                </ul>
            </div>
        </div>
    );
};
const Blog = () => {
    const [blog, setBlog] = useState<any[] | undefined>([]);
    async function getBlogList() {
        const response = await getBlogs();
        if (response?.data) setBlog(response?.data);
    }
    useEffect(() => {
        getBlogList();
    }, []);
    return (
        <div>
            <hr />
            <BreakCrum a="Trang chủ" b="Blog" />
            <hr />
            <div className="flex wrap gap-16">
                {blog &&
                    blog.map((e, index) => {
                        const { img, title, description, author, date } = e?.attributes;

                        return <BlogItem title={title} description={description} author={author} date={date} img={`http://localhost:1337${img?.data[0]?.attributes?.formats?.thumbnail?.url}`} />;
                    })}
            </div>
        </div>
    );
};

export default Blog;
