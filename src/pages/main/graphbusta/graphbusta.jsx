import "./graphbusta.scss";
import Countdown from "react-countdown";
import { useState } from "react";

const Graphbusta = () => {
  const [bust, setBust] = useState(((Math.random() * 10) + 1).toFixed(2));
  
//   let score = 0;
//     const resolve = ["one", "one", "one", "one"]
//     const resolve2 = ["one", "one", "one", "one"]

//     // check answers
//     resolve2.forEach((answer, index) => {
//         if(answer === resolve2[index]){
//             score += 10;
//         }
//     });

//     let output = 0;
//     const timer = setInterval(() => {
//         // result.querySelector('span').textContent = `${output}%`
//         if(output === score){
//             clearInterval(timer);
//         } else {
//             output++;
//         }
//     }, 10);


  function Completionist(){
     return (
        <div className="chart">
            {bust}x
        </div>
    );
  } 

  

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div style={{textAlign: "center", marginTop: "4rem"}}><p style={{color: "#fff"}}>Next game in</p><span style={{color: "#fff", fontSize: "2rem", fontWeight: "700"}}>{seconds}</span></div>;
    }
  };

  return (
    <div className="graph">
      <div className="cont">
        <Countdown date={Date.now() + 5000} renderer={renderer} />
      </div>
    </div>
  );
};

export default Graphbusta;
