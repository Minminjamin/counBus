import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../libs/Firebase";
import "./StudentsOutList.scss";

const StudentsOutList = ({
  setIsDown,
}: {
  setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dbDataId, setDbDataId] = useState([]);
  const [dbData, setDbData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(firestore, "student_data")
      );

      const id: any = [];
      const data: any = [];

      querySnapshot.forEach((doc) => {
        id.push(doc.id);
        data.push(doc.data());
      });

      setDbDataId(id);
      setDbData(data);
    };

    fetchData();
  }, []);

  const onHandleClickDelete = async (id: any) => {
    try {
      await deleteDoc(doc(firestore, "student_data", id));
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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

                <button
                  onClick={() => onHandleClickDelete(dbDataId[parseInt(idx)])}
                >
                  삭제
                </button>
              </section>
            ))}
        </div>

        <div className="downloadBtnSet">
          <button onClick={() => setIsDown(true)}>다운로드</button>
        </div>
      </section>
    </div>
  );
};

export default StudentsOutList;
