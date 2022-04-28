import Graphbusta from "./graphbusta/graphbusta";
import "./main.scss";
import Multipage from "./multipage/multipage";

const Main = () => {
    return (
        <div className="main">
            <div className="content">
                <div className="sec">
                    <Graphbusta />
                    <div className="down">
                        <form>
                            
                        </form>
                    </div>
                </div>
                
                <Multipage />
            </div>
        </div>
    )
}

export default Main;