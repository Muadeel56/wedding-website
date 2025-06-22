import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594669/ANB06184-Enhanced-NR_m4ontq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09657_wcmt0c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09107_zf0ntw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB07919_copy_dwf91a.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB_6831_copy_r9dltn.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09327_copy_urymev.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB03983_hzid2l.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594667/ANB06203-Enhanced-NR_-_Copy_ejksqc.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594667/ANB01972-Enhanced-NR_lmg6aa.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01408_pivfwh.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01435_copy_ni5ufy.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01828-Enhanced-NR_a8q1wj.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB03159-Enhanced-NR_hlgymw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594665/ANB_8138_yaulcc.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594665/ANB02062_j2do6g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750593371/ANB_1418_lfwezd.avif",
].map((url) => ({ src: url }));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 font-serif">Our Gallery</h1>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, idx) => (
            <div
              key={image.src}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setIndex(idx)}
            >
              <img
                src={image.src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
} 