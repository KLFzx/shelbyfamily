import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './Main.css';
import { dict } from '../../Lan.js';

export default function Main(props) {
  const [language, setLanguage] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const finalBuy = (lang) => {
    localStorage.setItem('lang', lang);
    const language = localStorage.getItem('lang');
    console.log(lang);
    setLanguage(language);
    handleCloseModal();
  };

  useEffect(() => {
    setLanguage(props.lang);
    console.log(props.lang);
  }, [props.lang]);

  return (
    <div className='inner'>
      <h1 className='navbar-button whhatIn'> {dict.whatInt[language]}</h1>
      <div className='imgCont'>
        <img
          src='/images/TommyGun.png'
          alt='tommygun'
          className='tommygun'
        ></img>
      </div>
      <div className='selectionBlock'>
        <div className='option1'>
          <text className='tText'>Whisky</text>
          <div className='visit'>
            <motion.div
              className='visit'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.02, opacity: 0.7 }}
            >
              <a href='/whisky'>
                <img
                  src='/images/tullamore.png'
                  alt='whiskey'
                  className='imgOption'
                ></img>
              </a>
            </motion.div>
            {/* <text className="vText"> Soon..</text> */}
          </div>
        </div>

        <div className='option1'>
          <text className='tText'>Vpn</text>
          <motion.div
            className='visit'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.02, opacity: 0.7 }}
          >
            <a href='/vpn'>
              <img
                src='/images/logo.png'
                alt='logo'
                className='imgOption'
              ></img>
            </a>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal modalOver'>
            <p>{dict['region'][language]}</p>
            <div className='flagContainer'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.02, opacity: 0.7 }}
                transition={{ duration: 0.1 }}
                src='/images/Ukraine.png'
                alt='Buy'
                onClick={() => finalBuy('1')}
                className='flag'
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.02, opacity: 0.7 }}
                transition={{ duration: 0.1 }}
                src='/images/GB.png'
                alt='Buy'
                onClick={() => finalBuy('0')}
                className='flag'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
