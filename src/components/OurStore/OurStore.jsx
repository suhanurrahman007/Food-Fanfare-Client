
const OurStore = () => {
    return (
      <div className="bg-[#151620] px-5 md:px-16 lg:px-20 py-10 space-y-14 text-white">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold">
            VISIT <span className="text-[#c5a35e]">OUR STORE</span>
          </h1>
          <p className="text-sm text-gray-300 ">
            There are many Yummy Store in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="space-y-5 hover:bg-[#1b1c27] p-5">
              <h2 className="text-xl font-semibold">Main Store, California</h2>
              <p className="text-sm text-gray-300">
                1600 Amphitheatre Parkway Mountain View, California
              </p>
              <hr className="w-28 border-[#c5a35e] border-dotted border" />
              <p className="text-sm text-gray-300">+62 000 999 000</p>
          </div>

          <div className="space-y-5 p-5 hover:bg-[#1b1c27]">
            <h2 className="text-xl font-semibold">Alabama Store</h2>
            <p className="text-sm text-gray-300">
              320 Winslow, Montgomery, Alabama, United State of America
            </p>
            <hr className="w-28 border-[#c5a35e] border-dotted border" />
            <p className="text-sm text-gray-300">+962 000 999 000</p>
          </div>

          <div className="space-y-5 p-5 hover:bg-[#1b1c27]">
            <h2 className="text-xl font-semibold">Toronto Store</h2>
            <p className="text-sm text-gray-300">
              27 Lawrence Allen Centre, Yorkdale, Toronto, Ontario, Canada
            </p>
            <hr className="w-28 border-[#c5a35e] border-dotted border" />
            <p className="text-sm text-gray-300">+862 000 999 000</p>
          </div>

          <div className="space-y-5 p-5 hover:bg-[#1b1c27]">
            <h2 className="text-xl font-semibold">Texas Store</h2>
            <p className="text-sm text-gray-300">
              560 Scott Seed, Hereford, Texas, United State of America
            </p>
            <hr className="w-28 border-[#c5a35e] border-dotted border" />
            <p className="text-sm text-gray-300">+562 000 999 000</p>
          </div>
        </div>
      </div>
    );
};

export default OurStore;