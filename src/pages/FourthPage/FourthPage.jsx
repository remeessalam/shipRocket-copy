import shipX from "../../assets/svg/shipX.svg";
import cargoX from "../../assets/svg/cargoX.svg";
import launchX from "../../assets/svg/launchX.svg";
import launchxBig from "../../assets/images/launchxBig.webp";
import launchImagetwo from "../../assets/images/launchImagetwo.png";
import launchImagethree from "../../assets/images/launchImagethree.webp";
import LoadingImage from "../../components/LoadingImage/LoadingImage";

const FourthPageImageCarousal = {
  mainHeading: "Exports",
  subHeading: "Grow beyond boundaries",
  details: [
    {
      id: "rtsf",
      headinImage: shipX,
      paragraph:
        "Ship your orders to over 220+ countries and territories with India’s leading cross border shipping solution",
      mainImage: launchImagethree,
    },
    {
      id: "rtsweghf",
      headinImage: cargoX,
      paragraph:
        "Access transparent door-to-door B2B deliveries via air from India to anywhere with no weight restrictions",
      mainImage: launchImagetwo,
    },
    {
      id: "werbvn",
      headinImage: launchX,
      paragraph:
        "Take your brand global and start selling to international customers with minimum investment risk",
      mainImage: launchxBig,
    },
  ],
};

const FourthPage = () => {
  return <LoadingImage info={FourthPageImageCarousal} />;
};

export default FourthPage;
