import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row w-full mb-8 flex-col`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row flex-wrap flex-[1.5] justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col sm:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((Link, index) => (
                  <li
                    key={Link.name}
                    className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {Link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-between items-center md:flex-row pt-6 border-t border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          <span className="mr-6">Copyright </span>
          <span> 2024 HooBank. All Rights Reserved.</span>
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
