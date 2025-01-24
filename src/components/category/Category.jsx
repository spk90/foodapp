import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://www.shutterstock.com/image-illustration/momos-chutney-on-plate-isolated-600nw-2293941683.jpg',
        name: 'Momo'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUNoCOmc01XBCTXbYD6IgPlnwE4Sma67gmg&s',
        name: 'Alcohol'
    },
    {
        image: 'https://images.unsplash.com/photo-1691480241974-92481cef09ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sausage'
    },
    {
        image: 'https://blueberrymart.net/cdn/shop/products/Shikhar-Filter.jpg?v=1666869359',
        name: 'cigarette'
    },
   
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/{item.name}`)} className=" w-16 h-16 lg:w-40 lg:h-40 max-w-xs square-full  bg-white-500 transition-all hover:bg-white-500 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
       
       <div>
        <text></text>
       </div>
       
        </div>

    );
}

export default Category;