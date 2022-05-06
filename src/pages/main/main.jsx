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
                            <div className="input">
                                {/* <label>Bet:</label><br /> */}
                                <input type="number" placeholder="Enter bet amount"/>
                                <span>bits</span>
                            </div>
                            <div className="input">
                                {/* <label>Payout:</label><br /> */}
                                <input type="number" placeholder="Enter Payout"/>
                            </div>
                            <button type="submit">BET <i className="fas fa-paperplane"></i></button>
                        </form>
                    </div>
                </div>
                
                <Multipage />
            </div>
        </div>
    )
}

export default Main;