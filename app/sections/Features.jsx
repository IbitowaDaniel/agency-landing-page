import { FeaturesData } from "@app/constants";
import { SectionHeader } from "@app/components/SectionHeader";
import Image from "next/image";
import { dm_sans, heading } from "@app/components/Fonts";


const Features = () => (
  <section id="features" className="boxWidth paddingX paddingY">
    {FeaturesData.map((item, index) => (
      <div key={index}>
        <SectionHeader
          header={item.heading}
          headingText={item.headingText} />

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 ${dm_sans.className}`}>
          {item.items.map((c, i) => (
            <div key={i} className='mt-10 sm:mt-16 text-center sm:text-left'>
              <div className='flex items-center flex-col sm:flex-row sm:gap-x-4 justify-center sm:justify-start sm:items-start'>

                <Image
                  src={c.img}
                  alt={c.altText}
                  className='w-12 lg:w-16' />
                <div>
                  <h4 className='font-bold text-lg text-heading mt-4 sm:mt-0'>{c.title}</h4>
                  <p className='text-text leading-8 mt-2 xs:px-6 sm:px-0 md:max-w-[280px] mx-auto'>{c.text}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

  </section>
);

export default Features