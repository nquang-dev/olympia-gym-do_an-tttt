"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import require modules
import { Pagination } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

// testimonial data
const testimonialData = [
  {
    img: "/assets/img/testimonial/nx-1.jpg",
    messenger: "Huấn luyện viên rất tận tâm và động viên từng buổi.",
    name: "Quang Nhật Huỳnh",
  },

  {
    img: "/assets/img/testimonial/nx-3.jpg",
    messenger: "Chương trình tập luyện hiệu quả, tôi thấy sự thay đổi rõ rệt",
    name: "Dịu Nguyễn",
  },

  {
    img: "/assets/img/testimonial/nx-2.jpg",
    messenger: "Môi trường tập luyện thân thiện và hỗ trợ rất tốt.",
    name: "Gia Bảo",
  },

  {
    img: "/assets/img/testimonial/nx-4.jpg",
    messenger: "Bài tập đa dạng, luôn có động lực để tiếp tục.",
    name: "Nguyễn Bảo Ngọc",
  },

  {
    img: "/assets/img/testimonial/nx-5.jpg",
    messenger: "ôi cảm thấy khỏe hơn và tự tin hơn sau mỗi buổi tập.",
    name: "Quỳnh Như",
  },

  {
    img: "/assets/img/testimonial/nx-6.jpg",
    messenger: "Huấn luyện viên luôn sẵn sàng giải đáp thắc mắc và hướng dẫn.",
    name: "Nhật Quang",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Nhận xét của học viên
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.messenger}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonial;
