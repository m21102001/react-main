import '../Css/Sec2.css'
import { Outlet, Link } from "react-router-dom";


const Sec2=()=>{
    return(
      <section class="sec2 col-12">
            <div class="half">
                <h1 class="head">MAKE YOURS AN <br></br> <span class="gr">ACTIVE</span> LIFE</h1>
                <p class="dot"><i class="fa-solid fa-ellipsis"></i></p>
                <div clas>
                    <p  class="up">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br></br> exercitation dolor lacus tempus.</p>
                    <p class="down">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br></br> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br></br> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br></br> doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                </div>
                <button type="button" class="btn btn-light ll">LEARN MORE ABOUT AVADA <i class="fa-solid fa-chevron-right"></i></button>

            </div>  
      </section>
    )
}
export default Sec2;