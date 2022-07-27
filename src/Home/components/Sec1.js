import { Link } from 'react-router-dom';
import '../Css/Sec1.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Sec1=()=>{
    return(
            <section class='sec1 col-12 '>
                <div class='header'>
                    <h2  data-aos="fade-down" >AVADA SPORTS</h2>
                        <h3>GET ACTIVE. LIVE LIFE.</h3>
                            <button type="button" class="btn btn-success col">JOIN NOW</button> <br></br>
                                <Link to=""><i class="fa-solid fa-chevron-down"></i></Link>
                </div>
            </section>
    )
}
export default Sec1;