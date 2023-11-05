import React, { useEffect, useState } from "react";
import "./Bus.scss";

const path = process.env.PUBLIC_URL;

interface Bus {
  bus_number: string;
  last_stop: string;
  stopover: string;
  time: string;
}

const Bus = () => {
  const [bus, setBus] = useState<Bus[]>([]);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const res = await fetch(`${path}/db/busTime.json`);

        const result = await res.json();

        result.bus.sort((a: Bus, b: Bus) => {
          const timeA = new Date(`2023-10-30T${a.time}`);
          const timeB = new Date(`2023-10-30T${b.time}`);

          return timeA.getTime() - timeB.getTime();
        });

        setBus(result.bus);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBusData();
  }, []);

  return (
    <div className="busWrap">
      <section className="busStopName">
        <h1>경남로봇고등학교</h1>
      </section>
      <section className="busInfo">
        <span className="busType">농어촌버스</span>
        {bus &&
          bus.map((item: Bus, idx: number) => (
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
