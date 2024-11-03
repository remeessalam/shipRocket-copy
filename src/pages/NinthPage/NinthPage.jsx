import Button from "../../components/Button/Button";

const NinthPage = () => {
  return (
    <div className="w-[1320px] mx-auto my-20">
      <div>
        <h1 className="text-[50px] font-bold text-[#0b0757] mb-4">
          What makes it all{" "}
          <span className="font-medium text-gradient">work together</span>
        </h1>
        <h4 className="text-[42px] font-normal text-[#333]">
          Seamlessly connected components
        </h4>
        <p className="text-[20px] text-[#5a5a5a]">
          Use one platform to manage everything, including your sales channels,
          inventory, catalogues, carriers and customer data
        </p>
        <Button
          style={
            " py-[18px] px-[48px] mt-[30px] hover:bg-white hover:border-[#735ae5] border border-[#735ae5] hover:text-[#735ae5] transition-colors duration-200 ease-in"
          }
          text="Sign up for free"
        />
      </div>
      <div></div>
    </div>
  );
};

export default NinthPage;
