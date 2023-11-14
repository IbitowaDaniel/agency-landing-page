import { dm_sans, heading } from "@app/components/Fonts";


export const SectionHeaderLeft = ({ header, headingText }) => (
  <div className="text-center max-w-[600px] mx-auto md:max-w-sm md:text-left lg:max-w-md">
    <h3 className={`heading ${heading.className}`}>{header}</h3>
    <p className={`headingText ${dm_sans.className} text-text_secondary lg:text-[17px] xl:leading-10`}>{headingText}</p>
  </div>
);