import right from "../../assets/svg/right-arrow.svg";
import left from "../../assets/svg/left-arrow.svg";
import delightOne from "../../assets/images/delightOne.webp";
import delightTwo from "../../assets/images/delightTwo.webp";
import delightThree from "../../assets/images/delightThree.webp";
import delightFour from "../../assets/images/delightFour.webp";
import arrow from "../../assets/svg/arrowRightRop.svg";

const fifthPageCarousal = [
  {
    image: delightOne,
    heading: "Tracking Page",
    paragraph:
      "Build trust with our brand name, logo, offer, and support detail on your order-tracking page",
  },
  {
    image: delightTwo,
    heading: "Status alerts",
    paragraph:
      "Build trust with our brand name, logo, offer, and support detail on your order-tracking page",
  },
  {
    image: delightThree,
    heading: "Customer feedback",
    paragraph:
      "Build trust with our brand name, logo, offer, and support detail on your order-tracking page",
  },
  {
    image: delightFour,
    heading: "Returns management",
    paragraph:
      "Build trust with our brand name, logo, offer, and support detail on your order-tracking page",
  },
];

const FifthPage = () => {
  return (
    <div className="w-[1320px] mx-auto">
      <div className="flex justify-between items-center mb-[60px]">
        <div>
          <h1 className="text-[42px] font-normal w-52 text-greenGradient">
            Delight
          </h1>{" "}
          <p className="text-[42px] font-normal text-[#333333]">
            Elevate customer experience
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex justify-center pr-1 items-center rounded-full w-10 h-10 bg-white shadow-md border-[1px] border-[#0b07570d]">
            <img src={left} alt="right-arrow" width={18} height={18} />
          </div>
          <div className="flex justify-center pl-1 items-center rounded-full w-10 h-10 bg-white shadow-md">
            <img src={right} alt="right-arrow" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="flex w-full overflow-x-scroll scrollbar-hide">
        {fifthPageCarousal.map((obj) => (
          <div
            key={obj.heading}
            className=" bg-yellow-gradient w-full h-full mr-[35px]"
          >
            <div className="flex flex-col justify-between w-[669px] h-[571px]">
              <img
                src={obj.image}
                alt={obj.image}
                className="pt-[40px] px-[25px] h-[320px] object-contain"
              />
              <div className="pb-[40px] px-[30px] h-[186px]">
                <h1 className="text-[28px] font-medium text-[#0b0757]">
                  {obj.heading}
                </h1>
                <p className="text-[#5a5a5a] text-xl">{obj.paragraph}</p>
                <div className="flex mt-6">
                  <span className="text-[#735ae5] font-medium text-lg">
                    Explore
                  </span>
                  <img src={arrow} alt="arrow" width={22} height={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthPage;
