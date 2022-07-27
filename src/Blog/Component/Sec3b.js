import "../Css/Sec3b.css";
const Sec3b = () => {
    return (
        <section className="sec3b">
            <div className="div">

                <h1 className="today">JOIN TODAY</h1>
                <p className="rr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="container pt pt-5">

                <div class="mb-3">
                    <input type="text" class="form-control ftth" id="exampleFormControlInput1" placeholder="NAME*" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control ftth" id="exampleFormControlInput2" placeholder="EMAIL*" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control ftth" id="exampleFormControlInput3" placeholder="PHONE" />
                </div>
                <div class="mb-3">
                    <textarea class="form-control textarea" id="exampleFormControlTextarea1" placeholder="HOW CAN WE HELP YOU?" rows="8"></textarea>
                </div>

                <button type="button" class="nn btn btn-success"><span class="jo"></span>JOIN NOW</button>

            </div>
        </section>
    );
};
export default Sec3b;