import knifeImage1 from "../../assets/knife1.webp";
import knifeImage2 from "../../assets/knife2.webp";
import knifeImage3 from "../../assets/knife3.webp";
import knifeImage4 from "../../assets/knife4.webp";
import { CarouselComponent } from "./carousel-component/carousel-component";
import styles from "./page.module.css";

const mockCarouselItems = [
  {
    imageUrl: knifeImage1,
    alt: "Item 1 description",
    link: "https://example.com/item1",
  },
  {
    imageUrl: knifeImage2,
    alt: "Item 2 description",
    link: "https://example.com/item2",
  },
  {
    imageUrl: knifeImage3,
    alt: "Item 3 description",
    link: "https://example.com/item3",
  },
  {
    imageUrl: knifeImage4,
    alt: "Item 4 description",
    link: "https://example.com/item4",
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Carousel</h1>
      <div>
        <CarouselComponent carouselItems={mockCarouselItems} autoScroll />
      </div>
    </div>
  );
}
