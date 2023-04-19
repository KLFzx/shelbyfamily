import "./Terms.css";
import "../../components/Navbar/Navbar.css";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <>
      <section className="navbar-container" id="navbar">
        <a className="navbar-button navbar-button-home" href="/vpn">
          <motion.div
            whileHover={{ scale: 1.2, color: "rgba(0, 0, 0, 0.7)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Back
          </motion.div>
        </a>
        <a className="navbar-button navbar-button-shelby" href="/">
          <motion.div
            whileHover={{ scale: 1.3, color: "rgba(0, 0, 0, 0.7)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            animate={{ y: 30 }}
            href="/"
          >
            SHELBY FAMILY
          </motion.div>
        </a>

        <a className="navbar-button  navbar-button-about" href="/">
          <motion.div
            whileHover={{ scale: 1.2, color: "rgba(0, 0, 0, 0.7)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            href="/"
          >
            About us
          </motion.div>
        </a>
      </section>

      <div className="containerTerms">
        <h1 className="titleTerms">Terms and Conditions+</h1>

        <h2 className="pointTerms">
          1. By using our VPN service, you can enjoy complete online freedom and
          privacy without any interference from the law or regulations. We've
          got you covered, and we'll handle any legal or regulatory issues that
          may arise.
        </h2>
        <h2 className="pointTerms">
          2. Our VPN service is the best in the business, and we guarantee it
          will be uninterrupted and error-free. But if any issues do arise,
          don't worry, we'll handle them quickly and efficiently to minimize any
          losses or damages that may occur.
        </h2>
        <h2 className="pointTerms">
          3. We won't terminate your account without prior notice, and we'll
          always provide you with alternative solutions. But if you cross us, be
          warned, we won't hesitate to take action.
        </h2>
        <h2 className="pointTerms">
          4. We don't log any of your internet activity or connection data while
          you're connected to our VPN service. We guarantee complete anonymity
          and privacy, and we won't share any of your personal information with
          any third parties. We protect our own.
        </h2>
        <h2 className="pointTerms">
          5. You're free to use our VPN service as you wish, without worrying
          about violating any laws or regulations. We'll handle any legal issues
          that may arise, and we won't let anyone stand in the way of your
          online freedom.
        </h2>
        <h2 className="pointTerms">
          6. Our VPN service is for personal and commercial use, and we don't
          put any restrictions on it. You can use it for any business purposes
          you may have, and we'll provide you with the support you need to
          succeed. But if you cross us, we'll make sure you regret it.
        </h2>
        <h2 className="pointTerms">
          7. We reserve the right to modify these terms and conditions at any
          time to better serve our customers. But don't worry, we'll communicate
          any modifications to you in a timely and efficient manner. And if
          anyone tries to mess with our customers, they'll have to answer to us.
        </h2>
      </div>
    </>
  );
}
