import Aos, { AOS } from "aos";
import React from "react";
import Sec1 from "./Home/components/Sec1"
import Sec2 from "./Home/components/Sec2"
import Sec3 from "./Home/components/Sec3"
import Sec5 from "./Home/components/Sec5"
import Sec6 from "./Home/components/Sec6"
import Sec7 from "./Home/components/Sec7"
import Sec8 from "./Home/components/Sec8"
import Sec1f from "./Facilitie/comoponet/Sec1f";
import Sec2f from "./Facilitie/comoponet/Sec2f";
import Sec3f from "./Facilitie/comoponet/Sec3f";


class Facilitie extends React.Component {

    render() {
        return (
            <div>
                <Sec1f/>
                <Sec2f/>
                <Sec3f/>
                <Sec5/>
                <Sec6/>
                <Sec7/>
                <Sec8/>
            </div>
        )
    }
    componentDidMount() {
        Aos.init()
    }
}
export default Facilitie;