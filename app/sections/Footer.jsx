import { FooterLogo } from "@app/assets";
import { FooterData } from "@app/constants";
import Image from "next/image";
import Link from "next/link";
import { dm_sans } from "@app/components/Fonts";


const Footer = () => (
  <footer className="bg-background_secondary">
    <div className="boxWidth paddingX">
      <div className={`py-4 ${dm_sans.className} lg:flex lg:flex-row-reverse lg:justify-between lg:max-w-5xl xl:max-w-full lg:mx-auto`}>
        <div className="grid grid-cols-2 sm:pt-10 md:grid-cols-4 lg:gap-x-6 xl:gap-x-12 xl:mr-12">
          {FooterData.map((item) => (
            <div key={item.header} className="md:max-w-full md:mx-auto">
              <h3 className="mb-3 mt-12 lg:mt-0 font-bold text-base xs:text-lg text-heading">{item.header}</h3>

              <ul>
                {item.items.map((c, i) => (
                  <li index={i} className="text-sm xs:text-base text-text_secondary py-1.5 md:py-2">
                    <Link href={c.path}>
                      <div className="flex gap-x-2">
                        <span className={`${c.btnColor} ${item.id !== 4 ? "hidden" : "block"}`}>{c.media} </span>
                        <p className="-mt-0.5">{c.label}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:ml-8 xl:ml-12">
          <div className="mt-12 flex flex-row items-center justify-center lg:items-start lg:justify-start h-4 lg:h-0 pb-4 xs:pb-8 lg:pb-0">
            <a href="https://daniel-ibitowa.vercel.app" target="_blank">
              <Image
                src={FooterLogo}
                alt="logo"
                className="w-28 xs:w-48 lg:mt-6"
              />
            </a>
          </div>

          <div className="text-sm sm:text-base text-center lg:text-left">
            <p className="text-heading my-3">Terms of use | Privacy </p>
            <p className="text-text my-3"> Copyright {new Date().getFullYear()} <span className="font-bold text-base text-heading_secondary hover:text-primary"><a href="https://daniel-ibitowa.vercel.app" target="_blank"> Daniel Ibitowa</a></span></p>

          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer