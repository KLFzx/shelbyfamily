import Shelby from "../../components/Shelby/Shelby";

import About from "../../components/About/About";

import Pricing from "../../components/Pricing/Pricing";

import Reviews from "../../components/Reviews/Reviews";

import Navbar from "../../components/Navbar/Navbar";

export default function Home(props) {
  return (
    <>
      <Navbar lang={props.lang}></Navbar>
      <Shelby lang={props.lang}></Shelby>
      <About lang={props.lang}></About>
      <Pricing lang={props.lang}></Pricing>
      <Reviews lang={props.lang}></Reviews>
    </>
  );
}
