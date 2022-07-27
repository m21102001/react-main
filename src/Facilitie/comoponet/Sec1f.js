import sec1f from "../css/Sec1f.css"
import logo from "../css/1.webp";
const Sec1f =()=>{
    return(
<section className="sec1f">
<div className=" container">
    <img src={logo} alt=""/>
    <p className="av">AVADA<span className="sp">SPORTS</span></p>
    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolor lacus tempus.</p>
<p className="lorem">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
</div>
</section>
    )
}
export default Sec1f