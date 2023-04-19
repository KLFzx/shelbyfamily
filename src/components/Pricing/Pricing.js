import { motion } from "framer-motion";
import "./Pricing.css";
import "../General.css";
import { useState } from "react";

import { dict } from "../../Lan";

function Pricing(props) {
  const buy = (price) => {
    // window.alert('not yet impelemented');

    setShowModal(true);
    setPrice(price);
  };

  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const finalBuy = () => {};

  return (
    <section className="container3" id="pricing">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">{dict.pricingFaq[props.lang]}</h1>
        </div>
      </motion.div>
      <div className="boxes1">
        <div className="f2">
          <div className="aboutpricing">
            <h1>{dict.mostCommon[props.lang]}</h1>
            <div className="question">
              <text1>{dict.q1[props.lang]}</text1>
              <text>{dict.a1[props.lang]}</text>
            </div>

            <div className="question">
              <text1>{dict.q2[props.lang]}</text1>
              <text>{dict.a2[props.lang]}</text>
            </div>

            <div className="question">
              <text1>{dict.q3[props.lang]}</text1>
              <text>{dict.a3[props.lang]}</text>
            </div>

            <div className="question l">
              <text1>{dict.q4[props.lang]}</text1>
              <text>{dict.a4[props.lang]}</text>
            </div>
          </div>
        </div>

        <div className="s1">
          <div className="paid">
            <motion.div
              initial={{ rotate: 5 }}
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5 }}
              style={{ display: "inline-block" }}
            >
              <h1>1 {dict.month[props.lang]}</h1>
            </motion.div>
            <h2 className="buy">200£</h2>
            <motion.img
              initial={{ originX: 0.5, originY: 0 }}
              whileHover={{ scale: 1, rotate: [0, 5, 0] }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
              className="butt"
              src="/images/sign.png"
              alt="Buy"
              onClick={() => buy(200)}
            />
          </div>
          <div className="paid">
            <motion.div
              initial={{ rotate: -5 }}
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5 }}
              style={{ display: "inline-block" }}
            >
              <h1>6 {dict.months[props.lang]}</h1>
            </motion.div>
            <h2 className="buy">666£</h2>
            <motion.img
              initial={{ originX: 0.5, originY: 0 }}
              whileHover={{ scale: 1, rotate: [0, 5, 0] }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
              className="butt"
              src="/images/sign.png"
              alt="Buy"
              onClick={() => buy(666)}
            />
          </div>
          <div className="paid">
            <motion.div
              initial={{ rotate: 5 }}
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5 }}
              style={{ display: "inline-block" }}
            >
              <h1>1 {dict.year[props.lang]}</h1>
            </motion.div>
            <h2 className="buy"> 1 000£</h2>
            <motion.img
              initial={{ originX: 0.5, originY: 0 }}
              whileHover={{ scale: 1, rotate: [0, 5, 0] }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
              className="butt"
              src="/images/sign.png"
              alt="Buy"
              onClick={() => buy(1000)}
            />
          </div>

          <div className="paid">
            <motion.div
              initial={{ rotate: -5, scale: 1.3 }}
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5 }}
              style={{ display: "inline-block" }}
            >
              <h1>{dict.forever[props.lang]}</h1>
            </motion.div>
            <h2 className="buy"> 10 000£</h2>

            <motion.img
              initial={{ originX: 0.5, originY: 0 }}
              whileHover={{ scale: 1, rotate: [0, 5, 0] }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
              className="butt"
              src="/images/sign.png"
              alt="Buy"
              onClick={() => buy(10000)}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src="cross.svg"
              alt="r"
              className="close"
              onClick={handleCloseModal}
            ></img>
            <p>Confirmation</p>
            <div>
              <p>
                {dict.byPurchasing[props.lang]}{" "}
                <a className="my-link" href="/terms">
                  {dict.termsAndCond[props.lang]}
                </a>{" "}
              </p>
            </div>
            <p className="buy">{price}£</p>
            <motion.img
              initial={{ originX: 0.5, originY: 0 }}
              whileHover={{ scale: 1, rotate: [0, 5, 0] }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
              className="butt buttFinal"
              src="/images/sign.png"
              alt="Buy"
              onClick={() => finalBuy()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Pricing;
