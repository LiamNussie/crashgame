import Graphbusta from "./graphbusta/graphbusta";
import "./main.scss";
import Multipage from "./multipage/multipage";

const Main = () => {
    return (
        <div className="main">
            <div className="content">
                <Graphbusta />
                <Multipage />
            </div>
        </div>
    )
}

export default Main;