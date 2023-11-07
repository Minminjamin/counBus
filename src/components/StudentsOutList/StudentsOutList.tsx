import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../libs/Firebase";
import "./StudentsOutList.scss";

const StudentsOutList = ({
  setIsDown,
}: {
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dbData, setDbData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(firestore, "student_data")
      );

      const data: any = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setDbData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="studentsOutListWrap">
      <h1>학생 관리 페이지</h1>
      <section>
        <div className="top">
          <span>학번</span>
          <span>날짜</span>
          <span>사유</span>
        </div>

        <div className="studentInfoWrap">
          {dbData &&
            dbData.map((item: any, idx: string) => (
              <section key={idx} className="info">
                <span>{item.class}</span>
                <span>{item.out_time}</span>
                <span>{item.reason.slice(0, 8)}</span>

                <button>삭제</button>
              </section>
            ))}
        </div>

        <div className="btnSet">
          <button onClick={() => setIsDown(true)}>다운로드</button>
        </div>
      </section>
    </div>
  );
};

export default StudentsOutList;
