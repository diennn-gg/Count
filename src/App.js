import { useState } from "react";
import Countdown from "react-countdown";

function Count(props) {
  const [date, setDate] = useState(props?.date || Date.now() + 10000)

  const handleIncrease = () => {
    setDate(date + 10000)
  }

  return (
    <div className="count">
      <button onClick={handleIncrease}>increase</button>
      <Countdown date={date} />
    </div>
  );
}

export default Count;
