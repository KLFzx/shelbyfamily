import { motion } from "framer-motion";
import "./Shelby.css";

import { dict } from "../../Lan";

function Shelby(props) {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 1.2,
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const firstItemVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const middleItemVariants = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  return (
    <section id="shelby">
      <motion.div
        className="container positionRelative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={firstItemVariants} transition={{ delay: 0.2 }}>
          <img src="/images/Arthur2.png" alt="Arthur" className="shelby" />
        </motion.div>
        <motion.div variants={middleItemVariants}>
          <img src="/images/Tommy2.png" alt="Tommy" className="shelby" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <img src="/images/John2.png" alt="John" className="shelby" />
        </motion.div>

        <div className=" textbox positionAbsolute first ">
          <h1 className="txt">{dict.t1[props.lang]}</h1>
        </div>
        <div className=" textbox positionAbsolute sec ">
          <h1 className="txt">{dict.t2[props.lang]}</h1>
        </div>
        <div className=" textbox positionAbsolute third ">
          <h1 className="txt">{dict.t3[props.lang]}</h1>
          <h1 className="txt txt2">SHELBY INC. VPN.</h1>
        </div>
      </motion.div>
    </section>
  );
}

export default Shelby;
