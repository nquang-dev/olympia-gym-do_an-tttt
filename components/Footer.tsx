import CustomButton from "./CustomButton";

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarked,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";

// //variants
// const footerContainerVariant = {
//   hidden: {
//     opacity: 0,
//   },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.4,
//       duration: 0.5,
//       ease: "linear",
//     },
//   },
// };

// const footerItem = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: [0.25, 0.6, 0.3, 0.8],
//     },
//   },
// };

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-10">
      <div className="container mx-auto pb-1">
        <div className="text-white grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12">
          {/* infor */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt={""}
              />
            </Link>
            <p className="max-w-sm">
              Olympia Gym, nơi chinh phục đinh cao sức mạnh.{" "}
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkedAlt className="text-xl text-accent" />
                <span>
                  KP. Phú Thọ, P. Hòa Hiệp Trung, TX. Đông Hòa, tỉnh Phú Yên
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>098 1010 431</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>nhatquang.lvc@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div>
            <h4 className="h4 text-accent mb-4">Tham gia cộng đồng</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">Cộng đồng Facebook</h5>
                {/* <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p> */}
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">Cộng đồng Zalo</h5>
                {/* <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p> */}
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">Cộng đồng tiktok</h5>
                {/* <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p> */}
              </Link>
            </div>
          </div>
          {/* gallery */}

          {/* news */}

          {/* copyright */}
          <div className="text-white border-t border-white/20 py-5">
            <div className="container mx-auto h-full">
              <div className="flex items-center justify-between h-full">
                <span>&copy; Copyright 2024 - Huynh Nhat Quang</span>
                <ul className="flex gap-4 text-xl">
                  <li>
                    <Link
                      href="#"
                      className="text-white hover:text-accent transition-all"
                    >
                      <FaFacebook />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white hover:text-accent transition-all"
                    >
                      <FaInstagram />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white hover:text-accent transition-all"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
