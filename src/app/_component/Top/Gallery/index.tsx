import { cssStyle } from "./gallery.css";
import { Slide } from "@/app/_component/Top/Gallery/Slide";
import { Title } from "@/app/_component/common/Title";
import { galleryItems } from "@/app/_const/galleryItems";

export const Gallery: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <Title text="施術例" />
        <Slide items={galleryItems} />
      </div>
    </section>
  );
};
