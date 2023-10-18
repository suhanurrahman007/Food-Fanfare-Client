import banner from "../../../assets/banner.jpg"
const Slider = () => {
    return (
      <div className="bg-[#262626] text-white flex h-96 px-5 md:px-16 pt-7 space-x-5">
        <div className="w-2/3">
          <h1>
            GOOD FOOD MAKE <br />
            <span className="text-[#c5a35e]">FRESH MIND</span>
          </h1>
          <p>
            Rustle up an easy veggie traybake for a quick midweek dinner,
            perfect for feeding the family with minimal washing up.
          </p>
          <button>Choose Menu</button>
        </div>

        <div className="">
            <img className="rounded-full w-80" src={banner} alt="" />
        </div>
      </div>
    );
};

export default Slider;