import Aos, { AOS } from "aos";
import React from "react";
import Sec4 from "./Home/components/Sec4";
import Sec7 from "./Home/components/Sec7"
import Sec8 from "./Home/components/Sec8"
import Sec1a from "./Actives/comoponet/Sec1a"
import Sec2a from "./Actives/comoponet/Sec2a";
class Actives extends React.Component {

    render() {
        return (
            <div>
                <Sec1a/>
                <Sec4/>
                <Sec2a/>
                <Sec7/>
                <Sec8/>
            </div>
        )
    }
    componentDidMount() {
        Aos.init()
    }
}
export default Actives;