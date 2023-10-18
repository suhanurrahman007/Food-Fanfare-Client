import banner from "../../../assets/banner.jpg"
const Slider = () => {
    return (
      <div className="bg-[#262626] text-white lg:flex py-7 items-center px-5 md:px-16 pt-7 ">
        <div className="lg:w-2/3 mb-7 text-center lg:text-left space-y-5  items-center">
          <h1 className="text-5xl font-extrabold">
            GOOD FOOD MAKE <br />
            <span className="text-[#c5a35e]">FRESH MIND</span>
          </h1>
          <p className="md:w-3/4 text-gray-300">
            Rustle up an easy veggie traybake for a quick midweek dinner,
            perfect for feeding the family with minimal washing up.
          </p>
          <button className="btn rounded-none border-none bg-[#c5a35e] text-white hover:bg-white hover:text-black text-xs">Choose Menu</button>
        </div>

        <div className="flex md:justify-center lg:justify-start">
          <img className="rounded-full w-full md:w-96" src={banner} alt="" />
        </div>
      </div>
    );
};

export default Slider;