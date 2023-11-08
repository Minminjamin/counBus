import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { firestore } from "../../libs/Firebase";
import "./Download.scss";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

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

  const onHanldeClickDownload = async (selectDate: string) => {
    const date = selectDate.split("년 ").join("-").split("월").join("");

    const querySnapshot = await getDocs(
      query(
        collection(firestore, "student_data"),
        where("out_time", ">=", date),
        where("out_time", "<=", date + "31")
      )
    );

    const data: any = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      `${selectDate} 학생 외출 · 외박 기록`
    );

    worksheet.addRow([
      "학번",
      "이름",
      "외출/외박",
      "출사 시간",
      "귀사 시간",
      "장소",
      "사유",
      "증빙 서류",
      "보호자 전화번호",
    ]);

    data.forEach((item: any) => {
      worksheet.addRow([
        item.class,
        item.from_name,
        item.type,
        item.out_time,
        item.come_time,
        item.place,
        item.reason,
        item.document,
        item.parents_phone,
      ]);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${selectDate} 학생 외출 · 외박 기록.xlsx`);
  };

  return (
    <section className="downloadWrap">
      {yearDate &&
        yearDate.map((item: string, idx: number) => (
          <article key={idx}>
            <div>
              <span>Excel</span>
              <span>{item} 외출 · 외박 기록</span>
            </div>
            <BsDownload onClick={() => onHanldeClickDownload(item)} />
          </article>
        ))}
      {/* <h1>down</h1> */}
    </section>
  );
};

export default Download;
