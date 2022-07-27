import '../Css/Sec3.css'
import { Outlet, Link } from "react-router-dom";


const Sec3=()=>{
    return(
        <section class="sec3">
            <div class=" d-flex flex-nowrap justify-content-between zz">
                {/* <div class="one"><i class="fa-solid fa-circle"></i><i class="fa-solid fa-face-smile lol"></i></div> */}
                    <div class="all1"> 
                       <div class="d-flex justify-content-evenly info1 col-xl-12 col-lg-12">
                       <div class="move">
                       <i class="fa-solid fa-face-smile icon"></i>
                                <h4>MAKE YOU SMILE</h4> 
                                <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                        <div class="move">
                        <i class="fa-brands fa-pagelines icon"></i>
                            <h4>STAY HEALTHY</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                        <div class="move">
                        <i class="fa-solid fa-person-running icon"></i>
                            <h4>GET ACTIVE</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                       </div>
                       <div class="d-flex justify-content-between info2 col-xl-12 col-lg-12">
                       <div class="move">
                           <i class="fa-solid fa-basketball icon"></i>
                            <h4>MAKE YOU SMILE</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                        <div class="move">
                        <i class="fa-solid fa-clock icon"></i>
                            <h4>STAY HEALTHY</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                        <div class="move">
                        <i class="fa-solid fa-dumbbell icon"></i>
                            <h4>GET ACTIVE</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed <br></br> do eiusmod tempor incididunt ut <br></br> labore et dolore magna <br></br> aliqua.</p>
                        </div>
                       </div>
                    </div>
                <div class="vid col-xl-3 col-lg-3 d-flex align-content-between flex-wrap">
                <button type="button" class="btn btn-success play"><span class="btu"><i class="fa-solid fa-play"></i></span>Play</button>
                <span class="ex"><Link to="/" class="more" >EXPLORE FACILITIES <i class="fa-solid fa-chevron-right"></i></Link></span>
                </div>
            </div>
        </section>
    )
}
export default Sec3;