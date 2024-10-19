import knifeImage from "../../assets/knife.webp";
import { CarouselComponent } from "./carousel-component/carousel-component";
import styles from "./page.module.css";

const mockCarouselItems = [
  {
    imageUrl: knifeImage,
    alt: "Item 1 description",
    link: "https://example.com/item1",
  },
  {
    imageUrl: knifeImage,
    alt: "Item 2 description",
    link: "https://example.com/item2",
  },
  {
    imageUrl: knifeImage,
    alt: "Item 3 description",
    link: "https://example.com/item3",
  },
  {
    imageUrl: knifeImage,
    alt: "Item 4 description",
    link: "https://example.com/item4",
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Carousel</h1>
      <div>
        <CarouselComponent carouselItems={mockCarouselItems} />
      </div>
    </div>
  );
}
