import { useState, useEffect } from "react";

export default function ProgressBar({timeout,onTimeout,mode}) {
    
      const [remainingTime, setRemainingTime] = useState(timeout);

      useEffect(()=> {
       const timer = setTimeout(onTimeout,timeout);

       return () => {
        clearTimeout(timer);
       }
      },[timeout,onTimeout]);
    
      useEffect(()=> {
        const interv = setInterval(()=> {
          setRemainingTime(prevTime =>prevTime - 10)
        },10);
    
        return () => {
          clearInterval(interv);
        }
      },[]);

      return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>
}