const CategoryItem = ({ children, title }: any) => {
    return (
        <div className="category_item">
            {children}
            <div className="title">{title}</div>
        </div>
    );
};

export default CategoryItem;
