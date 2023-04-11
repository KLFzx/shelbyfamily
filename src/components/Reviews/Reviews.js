import { motion } from 'framer-motion';
import './Reviews.css';

function Reviews() {
  return (
    <section className="container5" id="reviews">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">Our first class people</h1>
        </div>
      </motion.div>

      <div className="reviewsBlock">
        <div className="frow">
          <div className="Review">
            <img src="/images/Johnny2.jpg" className="avatar"></img>
            <div className="sign">
              <text className="name1">Johnny Dog</text>
              <text className="quote">
                "I never let anyone get past my back"
              </text>
            </div>
          </div>
          <div className="Review">
            <img src="/images/Curly2.jpg" className="avatar"></img>
            <div className="sign">
              <text className="name1">Curly</text>
              <text className="quote">
                "I've raised Thomas from his pillows.
                <br></br>I know that this damn boy will change the world"
              </text>
            </div>
          </div>
          <div className="Review">
            <img src="/images/Michael2.jpg" className="avatar"></img>
            <div className="sign">
              <text className="name1">Michael</text>
              <text className="quote">
                "I admire and disguise him at the same time"
              </text>
            </div>
          </div>
        </div>
        <div className="frow">
          <div className="Review">
            <img src="/images/Alfie2.jpg" className="avatar"></img>
            <div className="sign">
              <text className="name1">Alfie Solomons</text>
              <text className="quote">
                "Even though he is my enemy I've made a good bussiness with
                them"
              </text>
            </div>
          </div>
          <div className="Review">
            <img src="/images/Luca2.jpg" className="avatar"></img>
            <div className="sign">
              <text className="name1">Luca Chengretta</text>
              <text className="quote">
                "He calls me Maccaronni, I call him Billy Bonny"
              </text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
