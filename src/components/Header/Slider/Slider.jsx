import { useTheme } from "../../../ThemeProvider/ThemeProvider";
import banner from "../../../assets/banner.jpg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Slider = () => {
  const { theme, setTheme } = useTheme();
  const buttonStyles =
    theme === "light"
      ? "bg-black text-[#c5a35e] hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-black hover:text-[#c5a35e]";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="lg:flex py-7 items-center px-5 md:px-16 pt-7 ">
      <div className="lg:w-2/3 mb-7 text-center lg:text-left space-y-5  items-center">
        <h1 className="text-5xl font-extrabold">
          GOOD FOOD MAKE <br />
          <span className="text-[#c5a35e]">FRESH MIND</span>
        </h1>
        <p className="md:w-3/4 text-gray-500">
          Rustle up an easy veggie traybake for a quick midweek dinner, perfect
          for feeding the family with minimal washing up.
        </p>
        <button
          className={`btn rounded-none font-normal border-none text-xs ${buttonStyles}`}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <span className="text-3xl font-bold">
              <MdDarkMode></MdDarkMode>
            </span>
          ) : (
            <span className="text-3xl font-bold">
              <MdLightMode></MdLightMode>
            </span>
          )}{" "}
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="flex md:justify-center lg:justify-start">
        <img className="rounded-full w-full md:w-96" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Slider;
