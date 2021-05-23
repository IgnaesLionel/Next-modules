import Head from "next/head";
import Image from "next/image";

import About from "../components/About/About";
import Header01 from "../components/Header01/Header01";
import FourSquareInfo from "../components/FourSquareInfo/FourSquareInfo";
import ThreeCardsBuy from "../components/ThreeCardsBuy/ThreeCardsBuy";
import Stories from "../components/Stories/Stories";
import Booking from "../components/Booking/Booking";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Footer00 from "../components/Footer00/Footer00";

export default function Home() {
  return (
    <div>
      <Header01 />
      {/*  <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">Col 1 of 2</div>
          <div className="col-1-of-2">Col 1 of 2</div>
        </div>

        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
        </div>

        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-2-of-3">Col 2 of 3</div>
        </div>

        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
        </div>

        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-2-of-4">Col 2 of 4</div>
        </div>

        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-3-of-4">Col 3 of 4</div>
        </div>
  </section> */}
      <About />
      <FourSquareInfo />
      <ThreeCardsBuy />
      <Stories />
      <Booking />
      <Footer00 />
    </div>
  );
}
