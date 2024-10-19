"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import carouselStyles from "./carousel-component.module.css";

type CarouselProps = {
  carouselItems: any[];
  autoScroll?: boolean;
  autoScrollSecondsInterval?: number;
};

export const CarouselComponent = ({
  carouselItems,
  autoScroll,
  autoScrollSecondsInterval,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;

    const currentTouch = e.targetTouches[0].clientX;
    if (touchStart) {
      setOffset(currentTouch - touchStart);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart) return;
    const distance = offset;
    const isLeftSwipe = distance < -50;
    const isRightSwipe = distance > 50;

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    } else if (isRightSwipe) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselItems.length) % carouselItems.length
      );
    }

    setTouchStart(null);
    setIsDragging(false);
    setOffset(0);
  };

  const handleCarouselItemClick = (itemLink: string) => {
    // TODO: Need SDK integration probably will open a deeplink
    console.log("handleCarouselItemClick", itemLink);
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }, autoScrollSecondsInterval || 3 * 1000);
      return () => clearInterval(interval);
    }
  }, [carouselItems.length]);

  return (
    <div className={carouselStyles.carousel}>
      <div
        className={`${carouselStyles.carouselInner} ${
          isDragging ? "" : carouselStyles.carouselInnerTransition
        }`}
        style={{
          transform: `translate3d(calc(-${
            currentIndex * 100
          }% + ${offset}px), 0, 0)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselItems.map((item, index) => (
          <div className={carouselStyles.carouselItem} key={index}>
            <div className={carouselStyles.carouselItemBorder}>
              <Image
                src={item.imageUrl}
                alt={item.alt}
                className={carouselStyles.carouselItemImg}
                style={{
                  margin: "0px 0px",
                }}
                onClick={() => handleCarouselItemClick(item.link)}
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <div className={carouselStyles.carouselDots}>
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`${carouselStyles.dot} ${
              index === currentIndex ? carouselStyles.dotActive : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
