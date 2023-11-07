import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../libs/Firebase";
import "./Manage.scss";

const Manage = () => {
  const navigate = useNavigate();

  const [dbData, setDbData] = useState<any>([]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }

      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "d") {
          navigate("/dormitory");
        } else if (userId === "c") {
          navigate("/commute");
        }
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

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
    <div className="manageWrap">
      <h1>학생 관리 페이지</h1>
      {/* 
      <table>
        <tr className="topMenu">
          <th scope="col">학번</th>
          <th scope="col">날짜</th>
          <th scope="col">사유</th>
          <th scope="col"></th>
        </tr>
        {dbData &&
          dbData.map((item: any, idx: string) => (
            <tr key={idx} className="info">
              <td>{item.class}</td>
              <td>{item.out_time}</td>
              <td>{item.reason}</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          ))}
      </table> */}

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
          <button>다운로드</button>
        </div>
      </section>
    </div>
  );
};

export default Manage;
