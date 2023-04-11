import { motion } from 'framer-motion';
import './About.css';
import '../General.css';

function About() {
  return (
    <section className="container2" id="whywe">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">Why we?</h1>
        </div>
      </motion.div>
      <div className="boxes">
        <div className="box">
          <h1 className="title">We value your privacy</h1>
          <div className="text">
            Our lips are closed, no goverment can tell us what to do.
          </div>
          <img src="/images/gun.gif" alt="Arthur" className="gif" />
        </div>

        <div className="box">
          <h1 className="title"> Never keep your data</h1>
          <div className="text">We NEVER keep data on our servers.</div>
          <img src="/images/burn.gif" alt="Arthur" className="gif" />
        </div>
        <div className="box">
          <h1 className="title"> 100% clean IP addresses</h1>
          <div className="text">
            We change our IP addresses every week, so noone will ever track.
          </div>
          <img src="/images/manson.gif " alt="Arthur" className="gif" />
        </div>
      </div>
    </section>
  );
}

export default About;
