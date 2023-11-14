import { SupportData } from "@app/constants";
import { SectionHeader } from "@app/components/SectionHeader";
import Image from "next/image";
import { dm_sans, heading } from "@app/components/Fonts";


const Support = () => (
  <section id="support" className="boxWidth paddingX paddingY">
    {SupportData.map((item, index) => (
      <div key={index}>
        <SectionHeader
          header={item.heading}
          headingText={item.headingText} />

        <div className="max-w-full mx-auto mt-12 md:mt-16">
          <Image
            src={item.img}
            alt={item.altText}
            className="max-w-full mx-auto" />
        </div>
      </div>
    ))}
  </section>
);

export default Support