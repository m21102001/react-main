import Aos, { AOS } from "aos";
import React from "react";
import Sec1b from "./Blog/Component/Sec1b";
import Sec2b from "./Blog/Component/Sec2b";
import Sec3b from "./Blog/Component/Sec3b";
import Sec8 from "./Home/components/Sec8";


class Blog extends React.Component {

    render() {
        return (
            <div>
                <Sec1b/>
                <Sec2b/>
                <Sec3b/>
                <Sec8/>
            </div>
        )
    }
    componentDidMount() {
        Aos.init()
    }
}
export default Blog;