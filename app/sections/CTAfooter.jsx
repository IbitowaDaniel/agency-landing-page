import { Shape, ShapeBottom, ShapeTop } from "@app/assets";
import Image from "next/image";
import { dm_sans, heading } from "@app/components/Fonts";


const CTAfooter = () => (
  <section className="boxWidth">
    <div className="bg-[#183656] rounded-[12px] py-[45px] px-[20px] lg:px-[60px] mt-0 flex items-center text-center flex-col justify-center lg:flex-row lg:justify-between lg:text-left">
      <h3 className={`text-white ${heading.className} xs:max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-full text-[1.5rem] leading-[2.2rem] xs:text-[1.8rem] xs:leading-[2.5rem] sm:text-[2rem] lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2rem] xl:leading-[3rem] mb-[20px] xs:mb-[35px] lg:mb-[0px]`}>
        Do you have any question? <br className="hidden xl:block" /> Feel free to contact us
      </h3>
      <Image
        src={Shape}
        className="hidden lg:block -mt-10 w-[250px] xl:w-[300px] lg:-ml-5"
        alt=""
        aria-hidden />

      <div className="flex flex-col gap-y-2 justify-center items-center">
        <Image
          src={ShapeTop}
          className=""
          alt=""
          aria-hidden />
        <button
          className={`bg-white ${dm_sans.className} text-heading_secondary text-sm xl:text-base rounded-[5px] font-bold py-[10px] px-[24px] xl:py-[15px] relative outline-none hover:bg-primary transition duration-300 hover:text-white uppercase`}
          aria-label="Contact Us Now"
        >
          Contact Us Now
        </button>
        <Image
          src={ShapeBottom}
          className=""
          alt=""
          aria-hidden />

      </div>
    </div>
  </section>
);

export default CTAfooter