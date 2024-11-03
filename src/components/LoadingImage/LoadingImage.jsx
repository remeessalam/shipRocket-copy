import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import arrow from "../../assets/svg/arrowRightRop.svg";
import crossBorder from "../../assets/svg/crossBorder.svg";

const LoadingImage = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 113) {
          setCurrentIndex((prevIndex) =>
            prevIndex === info?.details?.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return prev + 1;
      });
    }, 40.9);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCount(0);
  }, [currentIndex]);
  return (
    <div className="w-[1320px] mx-auto my-20">
      <div>
        <h1 className="w-[175px] text-greenGradient text-[42px] font-normal">
          {info.mainHeading}
        </h1>
        <p className="text-[#333] text-[42px] font-normal">{info.subHeading}</p>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div className="w-[45%]">
          <div className="flex flex-col gap-9">
            {info?.details[0]?.headinImage ? (
              <img
                src={crossBorder}
                alt="crossBorder"
                width={250}
                height={58}
                className="mb-[30px]"
              />
            ) : (
              ``
            )}
            {info?.details?.map((obj, index) => (
              <div
                key={obj.id}
                className={`${
                  currentIndex === index ? `opacity-100` : `opacity-35`
                }`}
              >
                {obj.headinImage ? (
                  <img
                    src={obj.headinImage}
                    alt=""
                    width={106}
                    height={36}
                    className="mb-3"
                  />
                ) : (
                  <h1
                    className={`${
                      currentIndex !== index
                        ? `text-[#7c7c81]`
                        : `text-[#0b0757]`
                    } text-[28px] font-normal`}
                  >
                    {obj.heading}
                  </h1>
                )}
                <p className="mb-3 text-[#5a5a5a] text-[20px]">
                  {obj.paragraph}
                </p>
                <h4 className="flex text-[#735ae5] text-lg mb-[15px]">
                  Explore <img src={arrow} alt="arrow" width={22} height={20} />
                </h4>
                <div className="w-full h-[2px] bg-gray-300 overflow-hidden transition-all ">
                  <div
                    className="h-full  bg-four-loading transition-all ease-in"
                    style={{ width: `${index === currentIndex ? count : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[45%] p-10 bg-fourth-pageOne max-h-[675px] rounded-3xl">
          <img
            src={info?.details[currentIndex]?.mainImage}
            alt=""
            width={656}
            height={675}
            className="max-h-[675px]"
          />
        </div>
      </div>
    </div>
  );
};

LoadingImage.propTypes = {
  info: PropTypes.shape({
    mainHeading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        headinImage: PropTypes.string,
        paragraph: PropTypes.string.isRequired,
        mainImage: PropTypes.string.isRequired,
        heading: PropTypes.string,
        count: PropTypes.number,
        isShowImage: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default LoadingImage;
