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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleStart = (clientX: number) => {
    setTouchStart(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || touchStart === null) return;
    setOffset(clientX - touchStart);
  };

  const handleEnd = () => {
    if (touchStart === null) return;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.targetTouches[0].clientX);
  };

  const handleMouseStart = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleMouseEnd = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }, autoScrollSecondsInterval || 3 * 1000);
      return () => clearInterval(interval);
    }
  }, [carouselItems.length, autoScroll, autoScrollSecondsInterval]);

  return (
    <div className={carouselStyles.carousel}>
      <div
        className={`${carouselStyles.carouselInner} ${
          isDragging ? "" : carouselStyles.carouselInnerTransition
        }`}
        style={{
          transform: `translateX(calc(-${
            (currentIndex * 100) / 0.8
          }% + ${offset}px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
        onMouseLeave={handleMouseLeave}
      >
        {carouselItems.map((item, index) => (
          <div className={carouselStyles.carouselItem} key={index}>
            <div className={carouselStyles.carouselItemBorder}>
              <Image
                src={item.imageUrl}
                alt={item.alt}
                className={carouselStyles.carouselItemImg}
                width={0}
                height={0}
                priority
                draggable={false}
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
