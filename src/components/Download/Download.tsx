import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import "./Download.scss";

const Download = () => {
  const [yearDate, setYearDate] = useState([]);

  useEffect(() => {
    const startYear = 2023;

    const date = new Date();
    const endYear = date.getFullYear();
    const endMonth = date.getMonth() + 1;

    const months: any = [];

    for (let year = startYear; year <= endYear; year++) {
      const startMonth = year === startYear ? 10 : 1; // year 가 startYear 와 같을 경우, 시작 월을 10으로 설정하고, 그렇지 않으면 시작 월을 1로 설정
      const maxMonth = year === endYear ? endMonth : 12; //현재 연도 year 가 endYear (현재 연도)와 같을 경우, 최대 월을 현재 월인 endMonth로 설정하고, 그렇지 않으면 최대 월을 12로 설정

      for (let month = startMonth; month <= maxMonth; month++) {
        months.push(`${year}년 ${month}월`);
      }
    }

    setYearDate(months);
  }, []);

  return (
    <section className="downloadWrap">
      {yearDate &&
        yearDate.map((item, idx) => (
          <article key={idx}>
            <div>
              <span>Excel</span>
              <span>{item} 외출 · 외박 기록</span>
            </div>
            <BsDownload />
          </article>
        ))}
      {/* <h1>down</h1> */}
    </section>
  );
};

export default Download;
