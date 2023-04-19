import { motion } from "framer-motion";
import "./Outro.css";
import { dict } from "../../Lan";

function Outro(props) {
  return (
    <section className="container4" id="outro">
      <motion.div whileInView={{ scale: 1.1 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="endingPhrase">{dict.youtrTime[props.lang]}</h1>
        </div>
      </motion.div>

      <div className="outro">
        <cont>
          <text> {dict.allrights[props.lang]}</text>
          <text> {dict.termsAndCond[props.lang]}</text>
          <text>{dict.locations[props.lang]}</text>
        </cont>
        <cont>
          <img src="/images/logo.png" alt="logo" className="imageLogo"></img>
        </cont>
        <cont>
          <text> {dict.alwaysKeep[props.lang]}</text>
          <text> {dict.ourUsersAre[props.lang]}</text>
          <text>{dict.ourMission[props.lang]}</text>
        </cont>
      </div>
    </section>
  );
}

export default Outro;
