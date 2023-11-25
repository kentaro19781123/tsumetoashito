import { cssStyle } from "./gallery.css";
import { Slide } from "@/component/Top/Gallery/Slide";
import { Title } from "@/component/common/Title";
import { galleryItems } from "@/const/galleryItems";

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
