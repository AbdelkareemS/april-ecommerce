import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/photos/footer-logo.png";

const Signup = () => {
  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [userPwd, setPwdFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   useRef.current.focus();
  // }, []);

  return (
    <>
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
            <form
              action=""
              className="flex flex-col gap-2 text-right container mb-8"
            >
              <input
                type="email"
                name=""
                id=""
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
                id=""
                placeholder="كلمة السر"
                className="mb-7 rounded-xl p-4 text-right drop-shadow"
              />
              <input
                type="submit"
                value="تسجيل الحساب"
                className="font-AlmaraiBold bg-red-100 py-3 px-4 basis-1/2 rounded-2xl pt mb-7"
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
    </>
  );
};

export default Signup;
