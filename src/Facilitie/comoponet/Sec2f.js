import '../css/Sec2f.css'
import { Outlet, Link } from 'react-router-dom';

const Sec2f = () => {
    return (
        <section className='Sec2f'>
            <div className=''>
                <div class=" col-xl-3 col-lg-6 img1 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img2 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img3 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img4 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img5 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img6 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img7 gg bb">fitness</div>
                <div class=" col-xl-3 col-lg-6 img8 gg bb">fitness</div>
            </div>

            <div class="container  d-flex justify-content-center">
                <div class="content win col-xl-4 ">
                    <i class="ic fa-brands fa-atlassian "></i>
                    <p className='share'>SHARE YOUR ACTIVITY</p>
                </div>
                <div class="content win col-xl-4 ">
                    <i class="ic fa-solid fa-user-group"></i>
                    <p className='share'>DISCOVER NEW FRIENDS</p>
                </div>
                <div class="content win col-xl-4 ">
                    <i class="ic fa-solid fa-heart-pulse"></i>
                    <p className='share'>GET MORE ACTIVE</p>
                </div>
            </div>
        </section>
    )
}
export default Sec2f