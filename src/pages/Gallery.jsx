import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223725/ANB06184-Enhanced-NR_cq7ppu.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223725/ANB_0995-Enhanced-NR_vxeulm.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223724/ANB01435_copy_dcscq4.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223724/ANB01360_copy_p1sfgu.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223721/ANB01408_k1jhky.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223719/ANB03159-Enhanced-NR_tpdkmn.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223719/ANB_8138_epmgsv.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223719/ANB_9400_copy_dozx4p.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223718/ANB02613_uoysbf.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223717/ANB02719_jbkhwt.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223717/ANB06203-Enhanced-NR_-_Copy_kvca1g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223715/ANB02062_gbajdh.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223714/ANB_6184_ya9brx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223714/ANB02700_i0g6bb.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223713/ANB_0993_copy_trm9bn.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223713/ANB_0959_copy_crtcrt.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223712/ANB02624-2_axzzhq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223711/ANB_6185_wv2rus.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223710/ANB_2115_copy_sv10q0.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223710/ANB_7782_copy_h1avgq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223709/ANB_2459_vbrpds.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223708/ANB_1104_of1jgy.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223708/ANB_9295-2_copy_e1fis5.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223707/ANB_3276_copy_mqytiq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223706/ANB_7724_kaavsk.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223706/ANB_5856-2_ulir1g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223706/ANB08661_copy_kqkd0j.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223705/ANB_4150_copy_qd0cim.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223705/ANB_0377_xi3fje.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223705/ANB_5809---8_utyjml.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223705/ANB02054_gx0n1b.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223704/ANB_8207_koe7vy.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223704/ANB01828-Enhanced-NR_otqyb5.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223703/ANB_6831_copy_kdenig.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223703/ANB_1581_hhacfu.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223703/ANB07919_copy_lluwih.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223702/ANB_6038_qv9j38.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB_5777-Enhanced-NR_vy1pcl.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB01972-Enhanced-NR_hlllsa.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB_1418_odiy5f.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223700/ANB_2653_d9jvn8.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223700/ANB_2160_copy_egtm5f.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB_8148._fqq0nl.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB08637_copy_p543fe.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB_5981_ppimzi.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB_6042_copy_tq51ro.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223698/ANB01845-Enhanced-NR_tbchcx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223697/ANB_1227_copy_n2mgo3.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223697/ANB08545_copy_2.._er8iwf.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223696/ANB09327_copy_ahg9xl.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223696/ANB03983_k9aant.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223696/ANB09671_copy_x9zxll.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223696/ANB09643_copy_nmk7qx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223694/ANB09107_expaty.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223693/ANB_8068_i96iuh.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223693/ANB_9008_copy_sn0b5b.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223693/ANB_1123_wfyxkk.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223693/ANB_0058_ggavtg.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223692/ANB09436_copy_avqsny.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223692/ANB09657_w6bj5s.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223691/ANB_3369_copy_guu5df.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223691/ANB_9438_copy_elbkiu.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_3315_umez8g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_9436_p4lboy.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_9007_mm810g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB00660_ijjge3.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223689/ANB00951-2_wxjgky.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223689/ANB00951-2_eytzpv.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222347/ANB_9438_copy_bjty8u.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222347/ANB_9436_udjdvs.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222339/ANB_8207_trmq12.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222338/ANB_9007_hrzi6t.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222336/ANB_6831_copy_u7rtkq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222333/ANB_6042_copy_jskuff.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222332/ANB_5981_e4boua.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222332/ANB_8068_vnhexp.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222332/ANB09436_copy_cbhuqc.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222323/ANB_2160_copy_cjwaan.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222322/ANB_3315_t9nfph.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222322/ANB_3369_copy_s8uojx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222321/ANB_0058_q6e5vh.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222316/ANB_1123_rqgd81.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222315/ANB09643_copy_bgx0nz.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222314/ANB09671_copy_xymwlt.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222311/ANB09657_ezhzie.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222304/ANB09107_hmqsph.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222304/ANB08661_copy_byksr3.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222304/ANB09327_copy_y0rgt1.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222302/ANB08545_copy_2.._plunrp.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222302/ANB02054_tt30sw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222299/ANB08637_copy_poahyg.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222291/ANB00816_copy_ffjtha.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751222286/ANB00660_aapsnx.jpg",
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