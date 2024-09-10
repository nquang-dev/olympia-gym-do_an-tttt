"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Trang Chủ", target: "home", offset: -100 },
  { name: "Giới Thiệu", target: "about", offset: -80 },
  { name: "khóa training", target: "class", offset: -80 },
  { name: "Đội Ngũ PT", target: "team", offset: 0 },
  { name: "bảng giá", target: "prices", offset: -40 },
  { name: "Đánh giá", target: "testimonial", offset: 0 },
  // { name: "blog", target: "blog", offset: 0 },
  // { name: "contact", target: "contact", offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={'${!isMobile ? "active" : ""}'}
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};
export default MobileNav;
