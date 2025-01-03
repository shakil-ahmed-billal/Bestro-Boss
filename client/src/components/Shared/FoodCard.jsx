

const FoodCard = ({item}) => {


    const { name , image , price , recipe} = item || {}

    return (
        <div>
            <div className="card dark:bg-gray-800  border-2 bg-base-100 shadow-xl rounded-none">
                <figure className="relative">
                    <img
                        src={image}
                        alt="Shoes" />
                        <p className="absolute top-5 right-5 bg-black px-3 py-2 text-yellow-300">$ {price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center ">
                        <button className="btn-main ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default FoodCard;
