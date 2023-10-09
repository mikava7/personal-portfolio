import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ScrollDownArrow = () => {
  const sectionIds = [
    "projects-section",
    "projects-section1",
    "projects-section2",
    "projects-section3",
    // Add more section IDs here
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        // At the top of the page
        setShowUpArrow(false);
        setShowDownArrow(true);
      } else if (
        scrollTop + window.innerHeight ===
        document.documentElement.scrollHeight
      ) {
        // At the bottom of the page
        setShowUpArrow(true);
        setShowDownArrow(false);
      } else {
        // In between, not at top or bottom
        setShowUpArrow(true);
        setShowDownArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    if (currentIndex < sectionIds.length - 1) {
      const nextSection = document.getElementById(sectionIds[currentIndex + 1]);
      if (nextSection) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const scrollToY =
          nextSection.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;
        window.scrollTo({ top: scrollToY, behavior: "smooth" });
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const scrollToPrevSection = () => {
    if (currentIndex > 0) {
      const prevSection = document.getElementById(sectionIds[currentIndex - 1]);
      if (prevSection) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const scrollToY =
          prevSection.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;
        window.scrollTo({ top: scrollToY, behavior: "smooth" });
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <ArrowWrapper>
      {showUpArrow && (
        <UpArrow onClick={scrollToPrevSection}>
          <FaAngleUp size={32} />
        </UpArrow>
      )}
      {showDownArrow && (
        <DownArrow onClick={scrollToNextSection}>
          <FaAngleDown size={32} />
        </DownArrow>
      )}
    </ArrowWrapper>
  );
};

const ArrowWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpArrow = styled.div`
  cursor: pointer;
`;

const DownArrow = styled.div`
  cursor: pointer;
`;

export default ScrollDownArrow;
