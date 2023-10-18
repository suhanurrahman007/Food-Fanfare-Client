import nestle from "../../assets/NESTLE_BANNER_NEW_jMLY6My.png"
import Kellogg from "../../assets/Kellogg.jpg";
import Unilever from "../../assets/Unilever-office-sign.jpg";
import PepsiCo from "../../assets/PepsiCo.jpg";
import CocaCola from "../../assets/coca-cola-hd.jpg";
import KraftHeinz from "../../assets/Kraft Heinz.webp";



const Brand = () => {
    return (
      <div className="text-center px-5 md:px-16 space-y-14 lg:px-20 py-7 bg-[#e1d3b7] text-white">
        <div className="space-y-5">
          <h2 className="text-black text-5xl font-bold">Brand</h2>
          <p className="text-sm lg:px-60 text-black">
            Good food provides the essential nutrients the body needs. This
            would include fresh fruits and vegetables, whole grains, lean
            proteins, and healthy fats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card shadow-xl image-full">
            <figure>
              <img src={nestle} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">Nestle!</h2>
            </div>
          </div>

          <div className="card shadow-xl image-full">
            <figure>
              <img src={Kellogg} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">Kellogg!</h2>
            </div>
          </div>
 
          <div className="card shadow-xl image-full">
            <figure>
              <img src={Unilever} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">Unilever!</h2>
            </div>
          </div>

          <div className="card shadow-xl image-full">
            <figure>
              <img src={PepsiCo} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">PepsiCo!</h2>
            </div>
          </div>

          <div className="card shadow-xl image-full">
            <figure>
              <img src={CocaCola} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">Coca Cola!</h2>
            </div>
          </div>
          
          <div className="card shadow-xl image-full">
            <figure>
              <img src={KraftHeinz} alt="nestle" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">Kraft Heinz!</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand;