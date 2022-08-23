import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/solid";
import footerLogo from "../../assets/photos/footer-logo.png";
import Login from "./Login";
import axios from "../../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/;
const REGISTER_URL = "/auth/register";

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  // const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name: user, password: pwd }),
        {
          headers: { "content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("response.data", response.data);
      console.log("response.accessToken", response.accessToken);
      console.log("response string", JSON.stringify(response));
      setSuccess(true);
      // clear input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 490) {
        setErrMsg("user");
      } else {
        setErrMsg("Registration Failed");
      }
      // errRef.current.focus();
    }

    console.log(user, pwd);
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Login />
      ) : (
        <section className="Signup container my-20 p-4">
          <div className="flex flex-row flex-grow flex-wrap justify-center bg-gray-100 bg-no-repeat rounded-2xl overflow-hidden">
            <div className="pic bg-[url('./assets/photos/IMG2.png')] basis-1/2 lg:flex justify-center items-center hidden">
              <img src={footerLogo} alt="" />
            </div>
            <div className="form flex flex-col flex-wrap p-10 lg:py-20 lg:px-20 xl:px-40 lg:basis-1/2 items-center lg:items-end">
              <h2 className="font-AlmaraiBold text-3xl lg:text-5xl mb-7 text-center">
                حساب جديد
              </h2>
              <p className="text-md lg:text-2xl lg:text-right mb-7 text-center">
                موقع يضم احدث التشكيلات المناسبة لكي ومن اختيار اشهر المصممين
              </p>
              {/* <p
              ref={errRef}
              className={errMsg ? "flex" : "hidden"}
              aria-live="assertive"
            >
              {errMsg}
            </p> */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 text-right container mb-8"
              >
                <input
                  type="text"
                  name=""
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="أسم المستخدم"
                  className="mb-2 rounded-xl p-4 text-right drop-shadow bg-[#C36FA3] text-white"
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName ? "flex" : "hidden"
                  }
                >
                  <PencilIcon className="h-5 w-5" />
                  bla bla blaaaaaaa
                </p>
                <input
                  type="email"
                  name=""
                  id="email"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="البريد الالكتروني"
                  className="mb-2 rounded-xl p-4 text-right drop-shadow"
                />
                <input
                  type="phone"
                  name=""
                  id=""
                  placeholder="رقم الهاتف"
                  className="mb-2 rounded-xl p-4 text-right drop-shadow"
                />
                <input
                  type="password"
                  name=""
                  id="password"
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="كلمة السر"
                  className="mb-7 rounded-xl p-4 text-right drop-shadow"
                />
                <p
                  id="pwdnote"
                  className={pwdFocus && pwd && !validPwd ? "flex" : "hidden"}
                >
                  <PencilIcon className="h-5 w-5" />
                  8 to 24 characters. <br />
                  must include uppercase and lowercase letters, a number and a
                  spacial character. <br />
                </p>
                <input
                  type="password"
                  name=""
                  id="confirm_pwd"
                  required
                  aria-invalid={validMatchPwd ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder="تأكيد كلمة السر"
                  className="mb-7 rounded-xl p-4 text-right drop-shadow"
                />
                <p
                  id="confirmnote"
                  className={matchFocus && !validMatchPwd ? "flex" : "hidden"}
                >
                  <PencilIcon className="h-5 w-5" />
                  must match the first password input field
                </p>
                <input
                  type="submit"
                  value="تسجيل الحساب"
                  disabled={
                    !validName || !validPwd || !validMatchPwd ? true : false
                  }
                  className="font-AlmaraiBold bg-red-100 py-3 px-4 basis-1/2 rounded-2xl pt mb-7 cursor-pointer"
                />
                <p className="font-AlmaraiBold text-sm lg:text-md text-center lg:text-right mb-5">
                  أو أنشئ حساب جديد باستخدام وسائل التواصل الأجتماعي
                </p>
                <div className="social-btns flex flex-row gap-2 justify-end">
                  <button className="text-white bg-facebook py-3 px-4 basis-1/2 rounded-2xl">
                    facebook
                  </button>
                  <button className="text-white bg-gmail py-3 px-4 basis-1/2 rounded-2xl pt">
                    Gmail
                  </button>
                </div>
              </form>
              <p className="mt-2 text-sm lg:text-md text-center lg:text-right">
                لديك حساب بالفعل ؟ يمكنك
                <span className="text-goblinGreen">
                  <Link to="/login"> تسجيل الدخول</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;
