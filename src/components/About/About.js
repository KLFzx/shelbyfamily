import { motion } from "framer-motion";
import "./About.css";
import "../General.css";
import { dict } from "../../Lan";

function About(props) {
  return (
    <section className="container2" id="whywe">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">{dict.whywe[props.lang]}</h1>
        </div>
      </motion.div>
      <div className="boxes">
        <div className="box">
          <h1 className="title">{dict.value[props.lang]}</h1>
          <div className="text">{dict.value2[props.lang]}</div>
          <img src="/images/gun.gif" alt="Arthur" className="gif" />
        </div>

        <div className="box">
          <h1 className="title"> {dict.keep[props.lang]}</h1>
          <div className="text">{dict.keep2[props.lang]}</div>
          <img src="/images/burn.gif" alt="Arthur" className="gif" />
        </div>
        <div className="box">
          <h1 className="title"> {dict.ip[props.lang]}</h1>
          <div className="text">{dict.ip2[props.lang]}</div>
          <img src="/images/manson.gif " alt="Arthur" className="gif" />
        </div>
      </div>
    </section>
  );
}

export default About;
