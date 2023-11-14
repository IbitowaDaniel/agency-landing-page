import { CommitmentData } from "@app/constants";
import { FaAngleRight } from 'react-icons/fa';
import { SectionHeaderLeft } from "@app/components/SectionHeaderLeft";
import Image from "next/image";
import { dm_sans, heading } from "@app/components/Fonts";


const Commiment = () => (
  <section className="boxWidth paddingX paddingY">
    {CommitmentData.map((item, index) => (
      <div key={index} className="md:flex gap-x-12 xl:gap-x-20">
        <div className={`flexCenter flex-col md:items-start flex-shrink-0`}>
          <SectionHeaderLeft
            header={item.heading}
            headingText={item.headingText}
          />

          <button
            className={`ouline-0 ${dm_sans.className} font-medium text-secondary flex gap-x-1`}
            aria-label="Explore Details"
          >
            {item.btnText}
            <span className="mt-1">
              <FaAngleRight />
            </span>
          </button>
        </div>

        <div className="max-w-full mx-auto mt-16 lg:mt-0">
          <Image
            src={item.img}
            alt={item.altText}
            className="max-w-full mx-auto" />
        </div>

      </div>
    ))}

  </section>
);

export default Commiment