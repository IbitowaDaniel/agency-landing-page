import { NumberedFunctionsData } from "@app/constants";
import { SectionHeader } from "@app/components/SectionHeader";
import { dm_sans, heading } from "@app/components/Fonts";


const NumberedFunctions = () => (
  <section className="paddingY">
    <div className="bg-background_secondary">
      <div className="boxWidth paddingX">
        <div className="py-24">
          {NumberedFunctionsData.map((item, index) => (
            <div key={index}>
              <SectionHeader
                header={item.heading}
                headingText={item.headingText} />

              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4'>
                {item.items.map((c, i) => (
                  <div key={i} className='mt-6 sm:mt-12 text-center sm:text-left'>

                    <div className='flex items-center flex-col md:flex-row md:gap-x-4 justify-center sm:justify-start sm:items-start'>

                      <h4 className={`${heading.className} text-[32px] xs:text-4xl lg:text-[42px] text-heading mt-4 sm:mt-0`}>0{c.id}</h4>

                      <div className={`${dm_sans.className}`}>
                        <h4 className='font-medium text-lg text-heading mt-3 md:mt-0'>{c.title}</h4>
                        <p className='text-text leading-8 mt-2 xs:px-6 sm:px-0'>{c.text}</p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NumberedFunctions