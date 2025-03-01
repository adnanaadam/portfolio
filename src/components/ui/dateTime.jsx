import { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date(), 1000);
  //   const [time, setTime] = useState(new Date(), 1000);
  //   const [day, setDay] = useState(new Date(), 1000);
  //   const [month, setMonth] = useState(new Date(), 1000);
  //   const [year, setYear] = useState(new Date(), 1000);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div>
        <div className="relative">
          <span className="h-3 w-3 bg-blue absolute top-0 -right-2 rounded-full"></span>
          <span className="h-3 w-3 bg-blue absolute top-0 -right-2 rounded-full animate-ping"></span>
          <h2 className="text-2xl text-blue">Available</h2>
        </div>
        <p>{date.toDateString()}</p>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    </>
  );
};

export default DateTime;
