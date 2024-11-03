import fulfillment from "../../assets/images/fulfillment.webp";
import fulfillmenttwo from "../../assets/images/fulfillmenttwo.webp";
import fulfillmentthree from "../../assets/images/fulfillmentthree.webp";
import LoadingImage from "../../components/LoadingImage/LoadingImage";

const sixthPageImageCarousal = {
  mainHeading: "Fulfillment",
  subHeading: "Fulfill every need",
  details: [
    {
      id: "adsfds",
      heading: "B2C fulfillment",
      paragraph:
        "Ship your orders to over 220+ countries and territories with India’s leading cross border shipping solution",
      mainImage: fulfillment,
    },
    {
      id: "adasdfsfds",
      heading: "B2B shipping",
      paragraph:
        "Access transparent door-to-door B2B deliveries via air from India to anywhere with no weight restrictions",
      mainImage: fulfillmenttwo,
    },
    {
      id: "asdf",
      heading: "Omnichannel enablement",
      paragraph:
        "Take your brand global and start selling to international customers with minimum investment risk",
      mainImage: fulfillmentthree,
    },
  ],
};
const SixthPage = () => {
  return (
    <div>
      <LoadingImage info={sixthPageImageCarousal} />
    </div>
  );
};

export default SixthPage;
