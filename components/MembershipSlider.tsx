"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import require modules
import { Pagination } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//membership data
const membershipData = [
  {
    title: "gói 1: cơ bản",
    price: "300.000 VNĐ",
    benefits: [
      {
        icon: FaCheck,
        text: "Không giới hạn thời gian luyện tập",
      },
      {
        icon: FaCheck,
        text: "Nước uống miễn phí",
      },
      {
        icon: MdClose,
        text: "Được tặng gói tập luyện với HLV",
      },
      {
        icon: FaCheck,
        text: "1 buổi định hướng luyện tập riêng biệt và tư vấn dinh dưỡng",
      },

      {
        icon: MdClose,
        text: "Được sử dụng dịch vụ thư giãn sau luyện tập",
      },
      {
        icon: FaCheck,
        text: "Dịch vụ khăn tập thể thao cao cấp.",
      },
      {
        icon: MdClose,
        text: "Được dẫn theo 1 người thân đi tập cùng ",
      },
    ],
  },

  {
    title: "Gói 2: tiêu chuẩn",
    price: "500.000 VNĐ",
    benefits: [
      {
        icon: FaCheck,
        text: "Không giới hạn thời gian luyện tập",
      },
      {
        icon: FaCheck,
        text: "Nước uống miễn phí",
      },
      {
        icon: FaCheck,
        text: "Được tặng gói tập luyện với HLV",
      },
      {
        icon: FaCheck,
        text: "1 buổi định hướng luyện tập riêng biệt và tư vấn dinh dưỡng",
      },

      {
        icon: FaCheck,
        text: "Được sử dụng dịch vụ thư giãn sau luyện tập",
      },
      {
        icon: FaCheck,
        text: "Dịch vụ khăn tập thể thao cao cấp.",
      },
      {
        icon: MdClose,
        text: "Được dẫn theo 1 người thân đi tập cùng ",
      },
    ],
  },

  {
    title: "gói 3: cao cấp",
    price: "900.000 VNĐ",
    benefits: [
      {
        icon: FaCheck,
        text: "Không giới hạn thời gian luyện tập",
      },
      {
        icon: FaCheck,
        text: "Nước uống miễn phí",
      },
      {
        icon: FaCheck,
        text: "Được tặng gói tập luyện với HLV",
      },
      {
        icon: FaCheck,
        text: "1 buổi định hướng luyện tập riêng biệt và tư vấn dinh dưỡng",
      },

      {
        icon: FaCheck,
        text: "Được sử dụng dịch vụ thư giãn sau luyện tập",
      },
      {
        icon: FaCheck,
        text: "Dịch vụ khăn tập thể thao cao cấp.",
      },
      {
        icon: FaCheck,
        text: "Được dẫn theo 1 người thân đi tập cùng ",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
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
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border-b border-accent">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {item.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <item.icon className="text-accent text-lg" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price & button */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  {/* <sup className="text-4xl">$</sup> */}
                  <strong className="text-6xl">{item.price}</strong>
                  <em className="self-end text-2xl"> / tháng</em>
                </p>
                <CustomButton
                  text={"Đăng ký ngay"}
                  containerStyles={"w-[196px] h-[62px]"}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
