import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Product = ({ product, products, setProducts }) => {
    // console.log(products, setProducts);
  const { _id, name, rating, productImageURL, detailedDescription } = product;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The selected item has been successfully Deleted.",
                "success"
              );

              const remaining  = products.filter(product => product._id !== id)
              setProducts(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact bg-[#150f2d] text-white shadow-xl">
        <figure>
          <img src={productImageURL} alt={"Product Image"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

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

          <p>{detailedDescription}</p>

          <div className=" flex justify-center items-center mt-4 space-x-3">
            <Link
              to={`/updateProduct/${_id}`}
              className="btn w-1/2 btn-success"
            >
              <FaEdit /> Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-1/2 btn-error"
            >
              <AiOutlineClose /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
