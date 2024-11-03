import arrow from "../../assets/svg/arrowRightTopWhite.svg";
import xpressbees from "../../assets/images/xpressbees.png";
import bluedart from "../../assets/images/bluedart.png";
import delhivery from "../../assets/images/delhivery.png";
import gati from "../../assets/images/gati.png";
import shadow from "../../assets/images/shadow.png";
import ecom from "../../assets/images/ecom.png";
import "./eightpage.css";

const imagesOne = [
  xpressbees,
  bluedart,
  delhivery,
  xpressbees,
  bluedart,
  delhivery,
  xpressbees,
  bluedart,
  delhivery,
  xpressbees,
  bluedart,
  delhivery,
  xpressbees,
  bluedart,
  delhivery,
];

const imagesTwo = [
  gati,
  shadow,
  ecom,
  gati,
  shadow,
  ecom,
  gati,
  shadow,
  ecom,
  gati,
  shadow,
  ecom,
  gati,
  shadow,
  ecom,
  gati,
  shadow,
  ecom,
];

const EightPage = () => {
  return (
    <div className="w-full h-[369px] bg-[#470aaa] rounded-tr-[120px] ">
      <div className="w-[1320px] mx-auto h-full overflow-hidden">
        <div className="flex gap-24 h-full items-center">
          <div className="w-[50%]">
            <h1 className="text-[50px] font-bold text-white">From anywhere</h1>
            <h3 className="text-[50px] w-[300px] font-normal text-gradient mb-7 leading-10">
              to everywhere
            </h3>
            <p className="text-[20px] text-white mb-4">
              <span>
                Our multi-courier network spread across 24000+ pin codes
              </span>
              <br />
              <span>
                lets you say yes to every order, even from remote areas.
              </span>
            </p>
            <div className="flex mt-[35px] text-white text-[18px] font-medium">
              Explore integrations{" "}
              <img src={arrow} alt="arrow" width={22} height={20} />
            </div>
          </div>
          <div className="flex justify-end w-[50%]">
            <div className="overflow-hidden ">
              <div
                className="flex gap-7 flex-col transition-all ease-in-out justify-center items-center animate-slideOne"
                style={{
                  height: `${imagesOne.length * 100}px`,
                }}
              >
                {imagesOne.map((src, index) => (
                  <div
                    className="hover:shadow-lg flex justify-center items-center rounded-lg"
                    key={index}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="carouselImageOne"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden ">
              <div
                className="flex gap-7 flex-col transition-all ease-in-out justify-center items-center animate-slidetwo"
                style={{
                  height: `${imagesTwo.length * 100}px`,
                }}
              >
                {imagesTwo.map((src, index) => (
                  <div
                    className="hover:shadow-lg flex justify-center items-center rounded-lg"
                    key={index}
                  >
                    <img
                      src={src}
                      alt={`Slide2 ${index + 1}`}
                      className="carouselImagetwo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightPage;
