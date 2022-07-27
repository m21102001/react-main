import "../Css/Sec4.css";
import img11 from "../Css/11.jpg";
import img10 from "../Css/10.jpg";
import img9 from "../Css/9.jpg";

const Sec4 = () => {
  return (
    <section class="sec4">
      <div>
        <div class=" col-xl-3 col-lg-6 img1 gg"></div>
        <div class=" col-xl-3 col-lg-6 img2 gg"></div>
        <div class=" col-xl-3 col-lg-6 img3 gg"></div>
        <div class=" col-xl-3 col-lg-6 img4 gg"></div>
        <div class=" col-xl-3 col-lg-6 img5 gg"></div>
        <div class=" col-xl-3 col-lg-6 img6 gg"></div>
        <div class=" col-xl-3 col-lg-6 img7 gg"></div>
        <div class=" col-xl-3 col-lg-6 img8 gg"></div>
        {/* <img src={img1}></img> */}
      </div>
      <div class="allimg2 d-flex justify-content-between">
        <div class="con col-xl-4 col-lg-4 img11">
          <img class="move3" src={img11}></img>
          <p class="move2">
            Praesent pulvinar dui eget diam <br></br> suscipit, a faucibus leo
            faucibus. <br></br> Fusce porttitor dui rutrum orci <br></br>{" "}
            pellentesque, vel gravida sem <br></br> volutpat. Duis a luctus
            diam.
          </p>
          <span class="color1">SARA IFFIL,</span>
          <a class="anchor" href="">
            ThemeFusion
          </a>
        </div>
        <div class="con col-xl-4 col-lg-4 img10">
          <img class="move3" src={img10}></img>
          <p class="move2">
            Praesent pulvinar dui eget diam <br></br> suscipit, a faucibus leo
            faucibus. <br></br> Fusce porttitor dui rutrum orci <br></br>{" "}
            pellentesque, vel gravida sem <br></br> volutpat. Duis a luctus
            diam.
          </p>
          <span class="color1">John Walters,</span>
          <a class="anchor" href="">
            ThemeFusion
          </a>
        </div>
        <div class="con col-xl-4 col-lg-4 img9">
          <img class="move3" src={img9}></img>
          <p class="move2">
            Praesent pulvinar dui eget diam <br></br> suscipit, a faucibus leo
            faucibus. <br></br> Fusce porttitor dui rutrum orci <br></br>{" "}
            pellentesque, vel gravida sem <br></br> volutpat. Duis a luctus
            diam.
          </p>
          <span class="color1">LAURA HUGHES,</span>
          <a class="anchor" href="">
            ThemeFusion
          </a>
        </div>
      </div>
    </section>
  );
};
export default Sec4;
