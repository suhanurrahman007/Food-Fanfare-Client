import { useLoaderData, useParams } from "react-router-dom";

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
            {name}
        </div>
    );
};

export default BrandProductDetails;