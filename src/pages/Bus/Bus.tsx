import React, { useEffect, useState } from "react";
import "./Bus.scss";

const path = process.env.PUBLIC_URL;

const Bus = () => {
  const [bus, setBus] = useState<any>([]);
  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const res = await fetch(`${path}/db/busTime.json`);

        const result = await res.json();

        setBus(result.bus);
        console.log(result.bus);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBusData();
  }, []);

  return (
    <div className="wrap">
      <section className="busStopName">
        <h1>경남로봇고등학교</h1>
      </section>
      <section className="busInfo">
        <span className="busType">농어촌버스</span>
        {bus &&
          bus.map((item: any, idx: string) => (
            <article key={idx}>
              <div>
                <h2>
                  {item.bus_number} ({item.last_stop})
                </h2>
                <span>{item.stopover}</span>
              </div>

              <span className="time">{item.time}</span>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Bus;
