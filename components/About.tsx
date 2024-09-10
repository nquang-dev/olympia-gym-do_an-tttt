"use client";

import { FaUser } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUser />,
    title: "Đội ngũ PT",
    subtitle:
      "Huấn luyện viên chuyên nghiệp giúp bạn đạt mục tiêu thể hình qua các bài tập hiệu quả và khoa học.",
  },
  {
    icon: <IoIosPricetags />,
    title: "Các khóa học đa dạng",
    subtitle:
      "Khóa học cung cấp các bài tập khoa học, giúp bạn nhanh chóng đạt được mục tiêu thể hình và sức khỏe.",
  },
  {
    icon: <FaDumbbell />,
    title: "Trang thiết bị hiện đại",
    subtitle:
      "Trang thiết bị hiện đại, đáp ứng mọi nhu cầu tập luyện để bạn đạt hiệu quả tối đa.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            Giới thiệu
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Olympia Gym - Nơi khởi nguồn sức khỏe bền vững và tinh thần mạnh mẽ.
            Với trang thiết bị hiện đại và đội ngũ huấn luyện viên chuyên
            nghiệp, chúng tôi cam kết mang đến cho bạn trải nghiệm tập luyện
            đỉnh cao. Hãy đến và khám phá hành trình nâng cao sức khỏe cùng
            Olympia Gym!
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4  "
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
