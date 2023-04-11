import { motion } from 'framer-motion';
import './Outro.css';

function Outro() {
  return (
    <section className="container4" id="outro">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="endingPhrase">
            It's your time to start rulling the world...
          </h1>
        </div>
      </motion.div>

      <div className="outro">
        <cont>
          <text> All rights reserved 2023</text>
          <text> Terms and conditions+</text>
          <text> Our locations</text>
        </cont>
        <cont>
          <img src="/images/logo.png" alt="logo" className="imageLogo"></img>
        </cont>
        <cont>
          <text> Always keep trust</text>
          <text> Our users are</text>
          <text> Our mission</text>
        </cont>
      </div>
    </section>
  );
}

export default Outro;
