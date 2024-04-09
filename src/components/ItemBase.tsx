type Props = {
    img: string;
    price: string;
    disCount: string;
    title: String;
    id: number;
    handleClick: (id: number) => void;
};

const ItemBase = ({ img, disCount, price, title, handleClick, id }: Props) => {
    return (
        <a onClick={() => handleClick(Number(id))} className="card-item">
            <div className="h-[300px] px-8 py-4">
                <img className="object-contain h-[100%]" src={img} alt="" />
            </div>
            <div className="px-8 ">
                <h1 className="text-xl font-medium hover:text-[#fce477]">{title}</h1>
                <p className="text-left text-xl text-[14px] text-linebreak text-[red]">{Number(price) * (100 - Number(disCount) / 100)}đ</p>
                <p className="text-left text-[14px] text-linebreak line-through">{price}đ</p>
                <span>-{disCount}%</span>
            </div>
        </a>
    );
};

export default ItemBase;
