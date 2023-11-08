import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../libs/Firebase";
import "./Login.scss";

interface Error {
  id?: string;
  pw?: string;
  check?: string;
}

const Login = () => {
  const navigate = useNavigate();

  const id = useRef<HTMLInputElement | null>(null);
  const pw = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<Error>({});

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "t" || userId === "m") {
          navigate("/manage");
        } else {
          navigate("/menu");
        }
      } else {
        return null;
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const onHanldeLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError({});

    if (id.current?.value && pw.current?.value) {
      const idValue: string = id.current.value.trim();
      const pwValue: string = pw.current.value.trim();

      try {
        await signInWithEmailAndPassword(
          auth,
          `${idValue}@robotsh.com`,
          pwValue
        ).then(() => {
          if (idValue.slice(-1) === "t" || idValue.slice(-1) === "m") {
            navigate("/manage");
          } else {
            navigate("/menu");
          }
        });
      } catch (err: any) {
        if (
          err.code === "auth/user-not-found" ||
          err.code === "auth/invalid-login-credentials"
        ) {
          setError((prev) => ({
            ...prev,
            check: "id와 password를 다시 한 번 확인해주세요.",
          }));
        }
      }
    }

    if (!id.current?.value) {
      setError((prev) => ({ ...prev, id: "id를 입력해주세요." }));
    }
    if (!pw.current?.value) {
      setError((prev) => ({ ...prev, pw: "password를 입력해주세요." }));
    }
  };

  return (
    <form className="wrap" onSubmit={onHanldeLogin}>
      <input placeholder="id" ref={id} type="text" />
      {error.id && <span className="checkInput">{error.id}</span>}
      <input placeholder="password" ref={pw} type="password" />
      {error.pw && <span className="checkInput">{error.pw}</span>}

      {error.check && <span className="checkInput">{error.check}</span>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
