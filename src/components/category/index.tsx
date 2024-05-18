import React from 'react';
import CategoryItem from './CategoryItem';
import TitleBar from '../TitleBar';
import clothesMen from '../../assets/img/ao-so-mi-denim-nam-moi-2020.jpg';

const Category = () => {
    return (
        <div>
            <TitleBar>Danh mục </TitleBar>
            <div className="w-full flex gap-8">
                <CategoryItem children={<img src={clothesMen} alt="" />} title="Quần áo nam" />
                <CategoryItem children={<img src={clothesMen} alt="" />} title="Quần áo nam" />
                <CategoryItem children={<img src={clothesMen} alt="" />} title="Quần áo nam" />
            </div>
        </div>
    );
};

export default Category;
