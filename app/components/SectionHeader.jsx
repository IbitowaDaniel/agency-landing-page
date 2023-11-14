import { dm_sans, heading } from "@app/components/Fonts";


export const SectionHeader = ({ header, headingText }) => (
  <div className="text-center max-w-[600px] mx-auto">
    <h3 className={`heading ${heading.className}`}>{header}</h3>
    <p className={`headingText ${dm_sans.className} text-text`}>{headingText}</p>
  </div>
);