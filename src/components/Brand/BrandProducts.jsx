import { Link, useLoaderData, useParams } from "react-router-dom";
import AddSlider from "../addSlider/addSlider";
import { FaBoxOpen, FaEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import OurStore from "../OurStore/OurStore";


const BrandProducts = () => {
  const { brandName } = useParams();

  const products = useLoaderData();


  console.log(products);
    const brandProducts = products.filter(
      (product) => product.brandName.toLowerCase() === brandName.toLowerCase()
    );

    console.log(brandProducts);
  return (
    <div>
      <AddSlider></AddSlider>
      <div className="px-5 md:px-20 -mt-2 text-center space-y-9 text-white py-12 bg-[#010313]">
        <h2 className="text-4xl font-bold">
          {brandName} <span className="ml-2">Products</span>
        </h2>
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {brandProducts.map((product) => (
              <div
                key={product._id}
                className="card card-compact bg-[#150f2d] text-white rounded-md shadow-xl"
              >
                <figure>
                  <img src={product.productImageURL} alt={"Product Image"} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.name}</h2>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          product.rating > i
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ☆
                      </span>
                    ))}
                  </div>

                  <p>{product.brandName}</p>

                  <div className=" flex justify-center items-center mt-4 space-x-3">
                    <Link
                      to={`/updateProduct/${product._id}`}
                      className="btn w-1/2 border-none  text-white text-xs hover:bg-[#13341a] bg-[#1e4427]"
                    >
                      <FaEdit /> Update
                    </Link>
                    <Link
                      to={`/details/${product._id}`}
                      className="btn w-1/2 border-none  text-white text-xs hover:bg-[#511b1b] bg-[#7d2530]"
                    >
                      <TbListDetails></TbListDetails> Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <FaBoxOpen className="text-gray-500 w-12 h-12" />{" "}
            <p>Oops! No products here.</p>
            <p>
              Looks like we are out of stock for this brand. Please come back
              soon!
            </p>
          </div>
        )}
      </div>

      <OurStore></OurStore>
    </div>
  );
};

export default BrandProducts;
