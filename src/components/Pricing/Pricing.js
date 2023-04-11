import { motion } from 'framer-motion';
import './Pricing.css';
import '../General.css';

function Pricing() {
  const buy = (price) => {
    window.alert('not yet impelemented');
  };

  return (
    <section className="container3" id="pricing">
      <motion.div whileInView={{ scale: 1.2 }} transition={{ duration: 1.3 }}>
        <div className="backTitle">
          <h1 className="titleBig">PRICING and FAQ</h1>
        </div>
      </motion.div>
      <div className="boxes1">
        <div className="f2">
          <div className="aboutpricing">
            <h1>Most common questions:</h1>
            <div className="question">
              <text1>Who we are?</text1>
              <text>
                We are the Shelby family, the family which started rulling from
                Birninghem to whole England.
              </text>
            </div>

            <div className="question">
              <text1>How can I pay?</text1>
              <text>
                You can pay by any currency you like. Starting from Funts ending
                to cryptocurrencies or even CASH.
              </text>
            </div>

            <div className="question">
              <text1>Why is it so costly?</text1>
              <text>
                We have our people everywhere around the world. They are
                protecting your servers and always changing their location.
              </text>
            </div>

            <div className="question l">
              <text1>What do I need to use this?</text1>
              <text>
                Mac, Android, Windows... Every platform is supported, even Wi-Fi
                routers.
              </text>
            </div>
          </div>
        </div>

        <div className="s1">
          <div className="paid">
            <motion.div
              initial={{ rotate: 5 }}
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5 }}
              style={{ display: 'inline-block' }}
            >
              <h1>1 month</h1>
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
              style={{ display: 'inline-block' }}
            >
              <h1>6 months</h1>
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
              style={{ display: 'inline-block' }}
            >
              <h1>1 year</h1>
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
              style={{ display: 'inline-block' }}
            >
              <h1>FOREVER</h1>
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
    </section>
  );
}

export default Pricing;
