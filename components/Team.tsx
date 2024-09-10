"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/ptbang.jpg",
    name: "Nguyễn Bảo Bằng",
    role: "Body builder coach",
    description: "Khỏe mạnh từ bên trong, mạnh mẽ từ bên ngoài!",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/pthoa.jpg",
    name: "Nguyễn Ngọc Hòa",
    role: "Body builder coach",
    description: "Chinh phục giới hạn bản thân, đạt được mục tiêu lớn.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/pthuy.jpg",
    name: "Trần Huy",
    role: "Body builder coach",
    description: "Đổ mồ hôi trong tập luyện, gặt hái thành công lớn.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/ptnhu.jpg",
    name: "Phan Quỳnh Như",
    role: "Body builder coach",
    description: "Tập luyện chăm chỉ, thành công tự đến!",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our trainers
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[300px] h-[300px] mx-auto mb-4 ">
                  <Image src={trainer.image} fill alt="" />
                </div>
                {/* name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* description */}
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* social */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="Đăng ký ngay"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
