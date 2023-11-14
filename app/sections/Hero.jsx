import { SponsorsData } from "@app/constants";
import { BannerThumb } from "@app/assets";
import Image from "next/image";
import Link from "next/link";
import { dm_sans, heading } from "@app/components/Fonts";

const Hero = () => (
  <section id="home" className="boxWidth paddingX">
    <div className="pt-16 pb-10 lg:mt-6 lg:flex lg:gap-x-12 xl:gap-x-20 text-center lg:text-left">
      <div className="flex-shrink-0 mx-auto max-w-full xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg">
        <h1 className={`${heading.className} text-heading_secondary mb-4 mx-auto max-w-full text-[34px] leading-[3rem] xs:text-[2.5rem] xs:leading-[3.5rem] sm:text-[3rem] lg:leading-[4.2rem] xl:text-[3.5rem] xl:leading-[4.5rem]`}>
          A Creative way to grow your Exciting Business model
        </h1>
        <p className={`text-text_secondary ${dm_sans.className} text-base leading-[2rem] xs:text-[17px] xl:text-[18px] lg:leading-[2.5rem]`}>
          Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
        </p>

        <div className={`my-8 ${dm_sans.className}`}>
          <form action="#" method="POST">
            <div className="flex gap-x-4">
              <label htmlFor="email" className="sr-only">Enter your Email Address to subscribe to our newsletter</label>
              <input
                name="subscribe"
                id="subscribe"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="w-full bg-white rounded-[7px] px-4 border border-[#D4DAE2] outline-none placeholder:text-base"
              />

              <button
                type="submit"
                className="rounded-[7px] py-3 px-5 lg:py-4 lg:px-8 text-base font-bold lg:text-lg text-white bg-primary"
                aria-label="Subscribe">
                Subscribe
              </button>

            </div>
          </form>
        </div>

        <div className={`mt-6 ${dm_sans.className}`}>
          <p className='text-text text-base lg:text-lg mb-4'>
            Sponsored by:
          </p>
          <div className='flex gap-x-3 items-center justify-center lg:items-left lg:justify-start mt-4 sm:mt-0'>
            {SponsorsData.map((item) => (
              <Link key={item.id} href={item.path} >
                <Image src={item.image} alt={item.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-full w-full mx-auto mt-10">
        <Image
          src={BannerThumb}
          className="w-full mx-auto"
          alt=""
        />
      </div>

    </div>
  </section>
);

export default Hero