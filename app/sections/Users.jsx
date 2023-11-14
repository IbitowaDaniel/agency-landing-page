import { UsersData } from "@app/constants";
import { SectionHeader } from "@app/components/SectionHeader";
import Image from "next/image";


const Users = () => (
  <section id="feedback" className="boxWidth paddingX paddingY">
    {UsersData.map((item, index) => (
      <div key={index}>
        <SectionHeader
          header={item.heading}
          headingText={item.headingText} />

        <div className="mt-12 md:mt-16">
          <Image
            src={item.img}
            alt={item.altText}
            className="max-w-full mx-auto" />
        </div>
      </div>
    ))}
  </section>
);

export default Users