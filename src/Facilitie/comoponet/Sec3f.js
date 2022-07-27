import '../css/Sec3f.css'
import fr from "../css/11.webp";
import sec from "../css/12.webp";
import thr from "../css/13.webp";
import { Outlet, Link } from 'react-router-dom';

const sec3f = () => {
    return (
        <section className='sec3f '>
            <div className='container '>
                <h1 className='meet'>MEET OUR <br /> TRAINERS</h1>
                <p className='dolor mon'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='container d-flex justify-content-center'>
                <div className='wwin win col-xl-4'>
                    <img className='iimage' src={fr} alt="fr" />
                    <h3 className='anna '>ANNA WILZKO</h3>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <div className="mon">
                        <span className=" icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>
                <div className='wwin win col-xl-4'>
                    <img className='iimage' src={sec} alt="sec" />
                    <h3 className='anna'>MIKE WALKER</h3>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <div className="mon">
                        <span className=" icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>
                <div className='wwin win col-xl-4'>
                    <img className='iimage' src={thr} alt="thr" />
                    <h3 className='anna'>KATE SHULTZ</h3>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <div className="mon">
                        <span className=" icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default sec3f