import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../libs/Firebase";

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
    <div>
      <h1>학생 관리 페이지</h1>

      <table>
        <tr>
          <th scope="col">학번</th>
          <th scope="col">날짜</th>
          <th scope="col">사유</th>
        </tr>
        {dbData &&
          dbData.map((item: any, idx: string) => (
            <tr key={idx}>
              <td>{item.class}</td>
              <td>{item.out_time}</td>
              <td>{item.reason}</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Manage;
