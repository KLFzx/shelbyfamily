import { motion } from "framer-motion";
import "./Reviews.css";
import { dict } from "../../Lan";

function Reviews(props) {
  return (
    <section className="container5" id="reviews">
      <motion.div whileInView={{ scale: 1.1 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">{dict.firstclass[props.lang]}</h1>
        </div>
      </motion.div>

      <div className="reviewsBlock">
        <div className="frow">
          <div className="Review">
            <img
              src="/images/Johnny2.jpg"
              alt="Johnny"
              className="avatar"
            ></img>
            <div className="sign">
              <text className="name1">{dict.dog[props.lang]}</text>
              <text className="quote">"{dict.dog2[props.lang]}"</text>
            </div>
          </div>
          <div className="Review">
            <img src="/images/Curly2.jpg" alt="Curly" className="avatar"></img>
            <div className="sign">
              <text className="name1">{dict.curly[props.lang]}</text>
              <text className="quote">
                "{dict.curly2[props.lang]}
                <br></br>
                {dict.curly3[props.lang]}"
              </text>
            </div>
          </div>
          <div className="Review">
            <img
              src="/images/Michael2.jpg"
              alt="Micahel"
              className="avatar"
            ></img>
            <div className="sign">
              <text className="name1">{dict.michael[props.lang]}</text>
              <text className="quote">"{dict.michael2[props.lang]}"</text>
            </div>
          </div>
        </div>
        <div className="frow">
          <div className="Review">
            <img src="/images/Alfie2.jpg" className="avatar" alt="Alfie"></img>
            <div className="sign">
              <text className="name1">{dict.alfie[props.lang]}</text>
              <text className="quote">"{dict.alfie2[props.lang]}"</text>
            </div>
          </div>
          <div className="Review">
            <img src="/images/Luca2.jpg" className="avatar" alt="Luca"></img>
            <div className="sign">
              <text className="name1">{dict.luca[props.lang]}</text>
              <text className="quote">"{dict.luca2[props.lang]}"</text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
