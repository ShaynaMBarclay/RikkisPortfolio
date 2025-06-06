
import { motion } from "framer-motion";
import "./styles/Portfolio.css";



const portfolioImages = [
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749055447/fortheloveofcolorr_1_dzqjrs.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749055448/fortheloveofcolorr_wv5qwz.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749055448/Your_paragraph_text_rixzw4.png",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki5_on0hse.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki6_sqwlwv.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki7_q3xaju.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki3_jd9kmn.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki4_buxapy.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227695/rikki8_dprti3.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227696/rikki9_dbaky3.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227696/rikki10_s2u0in.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227718/rikki11_ceorcb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227718/rikki12_ethkqz.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227894/rikki80_jylm1s.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228094/rikki100_uk5g4w.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227804/rikki50_z22y2g.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227801/rikki45_i3wuqz.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki14_hjasij.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227771/rikki35_t9wvoo.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki13_d5we8p.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227892/rikki78_cmqzji.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227799/rikki43_z2bvsa.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228093/rikki97_lxptjp.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki15_lomasb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227801/rikki46_zfaleb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227869/rikki68_xequhj.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227800/rikki44_ta8ca8.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki16_ph2yvi.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227771/rikki36_rvsktn.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki18_j4w6ej.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228120/rikki110_j0uzzb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki17_syisi6.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227719/rikki19_f3gvvm.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227720/rikki20_kkuswc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227736/rikki21_ad0p0z.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227737/rikki22_qc4z6h.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227771/rikki37_ibi3bn.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227737/rikki23_sdhacb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227737/rikki24_bapemy.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227737/rikki25_q4fqel.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227738/rikki27_celcqu.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227738/rikki28_bmo9uk.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227738/rikki29_rqvmk3.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227739/rikki30_wrfypz.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227746/rikki26_f8q5n2.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227768/rikki31_yqf3la.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227768/rikki32_dix9hf.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228114/rikki102_sfenel.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227768/rikki33_kxapio.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227768/rikki34_wai2cx.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227772/rikki38_k097ck.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227773/rikki39_r07pip.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227773/rikki40_ysvjh1.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227798/rikki41_jgrrhx.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227798/rikki42_lyi50g.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227802/rikki47_bnp2ax.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227803/rikki48_xigzi3.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227804/rikki49_jcceme.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227838/rikki51_uduz7o.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227838/rikki52_zl7x05.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228118/rikki108_gb7chh.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227839/rikki53_j1pumn.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227841/rikki54_tyeofc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227841/rikki55_obrmif.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227842/rikki56_cosudb.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227843/rikki57_v5tgxw.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227844/rikki58_xtaelp.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227844/rikki59_oq0mx1.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227845/rikki60_cqje0d.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227863/rikki61_rfazar.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227863/rikki62_bth4qd.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227864/rikki63_tvr3cp.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228114/rikki103_oez9tc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227866/rikki64_ni6t2e.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227866/rikki65_etj3xs.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227867/rikki66_q46ffr.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227868/rikki67_v95s2j.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227869/rikki69_vdoufg.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227870/rikki70_j59zli.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227886/rikki71_uyesyc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227887/rikki72_joawaa.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227888/rikki73_huupg4.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227889/rikki74_fz2hvv.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227890/rikki75_t2phja.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227891/rikki76_wc6u8d.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227891/rikki77_gsfod1.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749227893/rikki79_lqn94s.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/riki89_iq0cmt.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki82_ndztgy.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki81_flbpjc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki84_vtf9kw.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki83_depitg.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki86_noo8ha.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228065/rikki85_a6mwtt.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228066/rikki87_kg6xi8.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228066/rikki88_mzoryf.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228067/rikki90_tjjbpx.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228088/rikki91_wv1qnm.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228089/rikki92_dy4hyh.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228089/rikki94_xwspro.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228089/rikki93_bfjdxc.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228089/rikki95_vjp2ql.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228091/rikki96_sz5cqf.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228094/rikki98_qjjkmu.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228094/rikki99_bzzwct.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228115/rikki104_oobnsn.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228117/rikki105_tsmxwj.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228117/rikki106_yaecnz.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228118/rikki107_e3u5ly.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228119/rikki109_xmjmol.jpg",
"https://res.cloudinary.com/dizfde4uy/image/upload/v1749228121/rikki111_uvrxq5.jpg",

];


const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Portfolio = () => {
  return (
    <div className="portfolio">
       <h2 className="portfolio-title">My Work</h2>
      <motion.div
        className="portfolio-grid"
        
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {portfolioImages.map((src, i) => (
          <motion.div key={i} variants={imageVariants}>
            <img
              src={src}
              alt={`Portfolio image ${i + 1}`}
              className="portfolio-image"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;