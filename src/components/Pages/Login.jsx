import React from "react";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import footerLogo from "../../assets/photos/footer-logo.png";
import { PencilIcon } from "@heroicons/react/solid";

const Login = () => {
  const initLoginValues = {
    email: "",
    password: "",
    loginType: "normal",
  };
  const [loginValues, setLoginValues] = useState(initLoginValues);
  const [notValid, setNotValid] = useState({
    msg: "",
    visible: false,
  });

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `تسجيل الدخول`;
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
    console.log("loginValues", loginValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/auth/login", {
        field: loginValues.email,
        password: loginValues.password,
        login_type: loginValues.loginType,
      })
      .then((res) => {
        console.log(res);
        setNotValid({
          msg: "",
          visible: false,
        });
        if (res.statusText === "OK") {
          window.location = "/";
        }
      })
      .catch((err) => {
        let errorMessage = err.response.data.message;
        if (errorMessage === "These credentials do not match our records.") {
          setNotValid({
            msg: "خطأ في البريد الالكتروني او كلمة المرور",
            visible: true,
          });
        }
      });
  };

  return (
    <>
      <section className="login container my-20 p-4">
        <div className="flex flex-row flex-grow flex-wrap justify-center bg-gray-100 bg-no-repeat rounded-2xl overflow-hidden">
          <div className="pic bg-[url('./assets/photos/IMG1.png')] basis-1/2 lg:flex justify-center items-center hidden">
            <img src={footerLogo} alt="" />
          </div>
          <div className="form flex flex-col flex-wrap p-10 lg:py-20 lg:px-20 xl:px-40 lg:basis-1/2 items-center lg:items-end">
            <h2 className="font-AlmaraiBold text-3xl lg:text-5xl mb-7 text-center">
              تسجيل الدخول
            </h2>
            <p className="text-md lg:text-2xl lg:text-right mb-7 text-center">
              موقع يضم احدث التشكيلات المناسبة لكي ومن اختيار اشهر المصممين
            </p>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 text-right container mb-10"
            >
              <p
                id=""
                className={`${
                  notValid.visible ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {notValid.msg}
              </p>
              <input
                type="email"
                name="email"
                id=""
                placeholder="البريد الالكتروني"
                value={loginValues.email}
                onChange={handleLoginChange}
                className="mb-2 rounded-xl p-4 text-right drop-shadow"
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="كلمة السر"
                value={loginValues.password}
                onChange={handleLoginChange}
                className="mb-7 rounded-xl p-4 text-right drop-shadow"
              />
              <p className="font-AlmaraiBold text-sm lg:text-md text-center lg:text-right mb-5">
                أو سجل الدخول بوسائل التواصل الأجتماعي
              </p>
              <div className="social-btns flex flex-row gap-2 justify-end mb-5">
                <button className="text-white bg-facebook py-3 px-4 basis-1/2 rounded-2xl">
                  facebook
                </button>
                <button className="text-white bg-gmail py-3 px-4 basis-1/2 rounded-2xl pt">
                  Gmail
                </button>
              </div>
              <input
                type="submit"
                value="تسجيل الدخول"
                onClick={handleSubmit}
                className="font-AlmaraiBold bg-red-100 py-3 px-4 basis-1/2 rounded-2xl pt"
              />
            </form>
            <p className="text-sm lg:text-md text-center lg:text-right">
              نسيت كلمة السر ؟
            </p>
            <p className="mt-3 text-sm lg:text-md text-center lg:text-right">
              ليس لديك حساب يمكنك{" "}
              <span className="text-goblinGreen">انشاء حساب جديد</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
