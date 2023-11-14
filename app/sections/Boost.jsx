import { BoostData } from "@app/constants";
import { SectionHeaderLeft } from "@app/components/SectionHeaderLeft";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaAngleRight } from 'react-icons/fa';
import Image from "next/image";
import { dm_sans } from "@app/components/Fonts";


const Boost = () => (
  <section className="paddingY">
    <div className=" bg-background_secondary">
      <div className="boxWidth paddingX">
        <div className="py-20">
          {BoostData.map((item, index) => (
            <div key={index} className="md:flex flex-row-reverse gap-x-12 xl:gap-x-20">
              <div className="flexCenter flex-col md:items-start flex-shrink-0">
                <SectionHeaderLeft
                  header={item.heading}
                  headingText={item.headingText}
                />
                <div className="my-4 md:my-0 lg:my-4">
                  {item.lists.map((c, i) => (
                    <ul key={c.id} index={i} className={`${c.id !== 2 ? "ml-4 md:ml-0" : "ml-0"} flex gap-x-2 mb-4`}>
                      <span className="text-[#3FDBB1]">
                        <IoIosCheckmarkCircle />
                      </span>
                      <li className={`text-text_secondary ${dm_sans.className} font-medium -mt-0.5`}>{c.text}</li>
                    </ul>
                  ))}
                </div>

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

              <div className="mt-16 lg:mt-0">
                <Image
                  src={item.img}
                  alt={item.altText}
                  className="max-w-full mx-auto" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  </section>
);

export default Boost