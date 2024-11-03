import ConversionOne from "../../assets/images/ConversionOne.webp";
import arrow from "../../assets/svg/arrowRightRop.svg";

let details = [
  {
    id: "aasdfasdfdasfsdf",
    image: ConversionOne,
    heading: "Trust building",
    paragraph:
      "Show Shiprocket’s badge of trust throughout your website to boost credibility",
  },
  {
    id: "werqwerqewfasdfg",
    image: ConversionOne,
    heading: "Trust building",
    paragraph:
      "Show Shiprocket’s badge of trust throughout your website to boost credibility",
  },
  {
    id: "cvbxfgsrasfs",
    image: ConversionOne,
    heading: "Trust building",
    paragraph:
      "Show Shiprocket’s badge of trust throughout your website to boost credibility",
  },
  {
    id: "tufhdfghdgds",
    image: ConversionOne,
    heading: "Trust building",
    paragraph:
      "Show Shiprocket’s badge of trust throughout your website to boost credibility",
  },
];

const SeventhPage = () => {
  return (
    <div className="w-[1320px] mx-auto my-20">
      <div>
        <h1 className="w-[195px] text-greenGradient text-[42px] font-normal">
          Conversion
        </h1>
        <p className="text-[#333] text-[42px] font-normal">
          Drive repeat purchases
        </p>
      </div>
      <div className="mt-[50px] flex flex-wrap justify-between">
        {details.map((obj, i) => (
          <div key={obj.id} className={`${i % 2 !== 0 ? `mt-20` : ``}`}>
            <div className="flex flex-col w-[533px] h-[630px] gap-[30px]">
              <img
                src={obj.image}
                alt="ConversionOne"
                width={533}
                height={434}
              />
              <div>
                <h1 className="text-[#0b0757] text-[28px] font-medium mb-3">
                  {obj.heading}
                </h1>
                <p className="text-[#5a5a5a] text-[20px] mb-[12px]">
                  {obj.paragraph}
                </p>
                <h4 className="flex text-[#735ae5] text-lg mb-[15px]">
                  Explore <img src={arrow} alt="arrow" width={22} height={20} />
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhPage;
