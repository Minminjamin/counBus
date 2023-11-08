import React, { useEffect, useRef, useState } from "react";
import "./ApplicationForm.scss";
import { useDispatch } from "react-redux";
import { isApplicate } from "../../redux/isApplicateSlice/isApplicateSlice";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../libs/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface FirebaseData {
  class: number;
  come_time: string;
  document: string;
  from_name: string;
  out_time: string;
  parents_phone: string;
  place: string;
  reason: string;
  type: string;
  home_address?: string;
}

interface FormField {
  name: string;
  label: string;
}

const ApplicationForm = () => {
  const dispatch = useDispatch();

  const [classNum, setClassNum] = useState<number>(0);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const loginClassNum: number = Number(
          user.email?.split("@")[0].slice(5, 9)
        );
        setClassNum(loginClassNum);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const onHandleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isErr: boolean = false;

    const isRequire: FormField[] = [
      { name: "from_name", label: "이름" },
      { name: "type", label: "외출, 외박" },
      { name: "out_time", label: "출사 일시" },
      { name: "come_time", label: "귀사 일시" },
      { name: "reason", label: "상세 사유" },
      { name: "place", label: "장소" },
      { name: "document", label: "증빙 서류" },
      { name: "parents_phone", label: "보호자 HP" },
    ];

    isRequire.forEach((item: FormField) => {
      const input = form.current?.elements.namedItem(
        item.name
      ) as HTMLInputElement;

      if (input && !input.value.trim()) {
        isErr = true;
        input.classList.add("err");
      } else {
        input?.classList.remove("err");
      }
    });

    if (isErr) {
      const firstErrFiled = form.current?.querySelector(".err") as HTMLElement;

      if (firstErrFiled) firstErrFiled.scrollIntoView({ behavior: "smooth" });
    } else {
      if (form.current) {
        let firebaseData: FirebaseData = {
          class: classNum,
          come_time: "",
          document: "",
          from_name: "",
          out_time: "",
          parents_phone: "",
          place: "",
          reason: "",
          type: "",
        };

        isRequire.forEach((item) => {
          const data = form.current?.elements.namedItem(
            item.name
          ) as HTMLInputElement;

          (firebaseData as any)[item.name] = data.value;
        });

        const date = new Date();
        const time = `${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        setDoc(
          doc(firestore, "student_data", `${classNum}${time}`),
          firebaseData
        ).then(
          () => {
            dispatch(isApplicate());
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      }
    }
  };

  return (
    <form onSubmit={onHandleEmailSubmit} ref={form}>
      <h1>외출 · 외박 신청서 </h1>

      <div className="inputForm">
        <label>
          이름 <span className="check">*</span>
        </label>
        <input type="text" placeholder="내 답변" name="from_name" />
      </div>

      <div className="inputForm">
        <label>
          외출, 외박 <span className="check">*</span>
        </label>
        <select name="type">
          <option value="외출">외출</option>
          <option value="외박">외박</option>
        </select>
      </div>

      <div className="inputForm">
        <label>
          출사 일시 <span className="check">*</span>
        </label>
        <input type="date" placeholder="내 답변" name="out_time" />
      </div>

      <div className="inputForm">
        <label>
          귀사 일시 <span className="check">*</span>
        </label>
        <input type="date" placeholder="내 답변" name="come_time" />
      </div>

      <div className="inputForm">
        <label>
          상세 사유 <span className="check">*</span>
        </label>
        <input type="text" placeholder="내 답변" name="reason" />
      </div>

      <div className="inputForm">
        <label>
          장소 <span className="check">*</span>
        </label>
        <input type="text" placeholder="내 답변" name="place" />
      </div>

      <div className="inputForm">
        <label>
          증빙 서류 <span className="check">*</span>
        </label>
        <input type="text" placeholder="내 답변" name="document" />
      </div>

      <div className="inputForm">
        <label>자택 주소 및 전화 번호</label>
        <input type="text" placeholder="내 답변" name="home_address" />
      </div>

      <div className="inputForm">
        <label>
          보호자 HP <span className="check">*</span>
        </label>
        <input type="text" placeholder="내 답변" name="parents_phone" />
      </div>

      <div className="btn">
        <button>수정</button>
        <button type="submit">제출</button>
      </div>
    </form>
  );
};

export default ApplicationForm;
