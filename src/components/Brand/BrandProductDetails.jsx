import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Experience from "../Experience/Experience";

const BrandProductDetails = () => {
    const products = useLoaderData()
    const {id} = useParams()
    // console.log(products, id);
    const filterProduct = products.find(product => product._id === id)

    const {
      name,
      brandName,
      productType,
      price,
      rating,
      productImageURL,
      detailedDescription,
    } = filterProduct

    console.log(filterProduct);
    return (
      <div>
        <div className="py-10 text-white bg-[#010313]">
          <div className="px-5 md:px-16 lg:px-24 grid lg:grid-cols-3 gap-4 lg:gap-20">
            <div className="col-span-2">
              <div className="card h-80  bg-base-100 shadow-xl image-full">
                <figure>
                  <img className="w-full" src={productImageURL} alt="Shoes" />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-3xl">{brandName}</h2>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-2 items-center gap-5 py-5">
                  <p>
                    <span className="text-lg font-bold mr-3">
                      Product Name :{" "}
                    </span>{" "}
                    <span className="text-sm text-[#c5a35e]">{name}</span>
                  </p>
                  <p>
                    <span className="text-lg font-bold mr-3">
                      The Types Of Products :{" "}
                    </span>{" "}
                    <span className="text-sm text-[#c5a35e]">
                      {productType}
                    </span>
                  </p>
                  <p>
                    <span className="text-lg font-bold mr-3">
                      Price of Product :{" "}
                    </span>{" "}
                    <span className="text-sm text-[#c5a35e]">${price}</span>
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          rating > i ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ☆
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-justify text-sm">{detailedDescription}</p>

                <p className="text-gray-400 mt-10 text-justify">
                  Nestled in the heart of the city, Green Earth Grocers stands
                  as a beacon for all culinary enthusiasts, health aficionados,
                  and every individual who cherishes quality in their food. We
                  believe that every meal is a celebration, and every
                  ingredient, a testament to the Earth's generosity. <br />
                  Our mission is to bring the finest produce, the rarest spices,
                  and the most diverse range of grocery items right to your
                  doorstep. We source our products directly from local farmers
                  and artisans, ensuring not only the freshness of what you buy
                  but also supporting the backbone of our agricultural
                  community. Our extensive range of organic products ensures
                  that you get the best of nature, untouched by chemicals, and
                  preserved with love. <br /> Every aisle in our store tells a
                  story - of traditions passed down through generations, of
                  exotic cultures from distant lands, and of the innovative
                  spirit of contemporary culinary artists. Whether you're
                  looking for the comforting flavors of your childhood, or
                  yearning to experiment with something new, Green Earth Grocers
                  promises an unmatched journey for your taste buds.
                </p>
              </div>
            </div>
            <div className="col-span-1 space-y-5">
              <div className="space-y-14">
                <div className="flex gap-5">
                  <div className="text-6xl text-orange-900">
                    <FaRegClock></FaRegClock>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Open Hours</h2>
                    <p className="text-sm font-semibold text-gray-400">
                      Monday – Friday 8.00 am – 5.00 pm <br />
                      Weekend Closed
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="text-6xl text-orange-900">
                    <div>
                      {" "}
                      <BiSolidPhoneCall></BiSolidPhoneCall>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Phone & E-mail</h2>
                    <p className="text-sm font-semibold text-gray-400">
                      Phone: 1-800-64-38
                    </p>
                    <p className="text-sm font-semibold text-gray-400">
                      Fax: 1-800-64-39
                    </p>
                    <a className="text-sm font-semibold text-gray-400" href="#">
                      office@fable.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <Experience></Experience>
        </div>
      </div>
    );
};

export default BrandProductDetails;