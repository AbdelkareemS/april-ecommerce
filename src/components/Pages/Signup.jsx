import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/solid";
import footerLogo from "../../assets/photos/footer-logo.png";
import Login from "./Login";
import axios from "../../api/axios";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/;
const REGISTER_URL = "/auth/register";

const Signup = () => {
  const initialValues = {
    username: "",
    password: "",
    matchPassword: "",
    email: "",
    phone: "",
    registerType: "normal",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `التسجيل`;
  });

  // useEffect(() => {
  //   // Match Password Validation
  //   formValues.password === formValues.matchPassword &&
  //   formValues.password !== "" &&
  //   formValues.matchPassword !== ""
  //     ? setSubmitLock(false)
  //     : setSubmitLock(true);
  // }, [formValues.password, formValues.matchPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    // Handle Submitting Form
    e.preventDefault();
    await axios
      .post("/auth/register", {
        name: formValues.username,
        email: formValues.email,
        phone: formValues.phone,
        password: formValues.password,
        password_confirmation: formValues.matchPassword,
        register_type: formValues.registerType,
      })
      .then((res) => {
        if (res.statusText == "OK") {
          window.location = "/verify";
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "validation.full_name_min") {
          console.log("err.response.data", err.response.data.message);
          setFormErrors({
            ...formErrors,
            username: "اسم المستخدم يجب ان يكون اكثر من 4 احرف",
          });
        }
        if (err.response.data.message === "validation.phone") {
          console.log("err.response.data", err.response.data.message);
          setFormErrors({
            ...formErrors,
            phone: "خطأ في رقم الهاتف",
          });
        }
      });
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!values.username) {
  //     errors.username = "يجب ادخال اسم المستخدم";
  //   }
  //   if (!values.email) {
  //     errors.email = "يجب ادخال الأيميل الخاص";
  //   } else if (!EMAIL_REGEX.test(values.email)) {
  //     errors.email = "هذا الأيميل غير مطابق";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "يجب ادخال رقم الهاتف الخاص بكم";
  //   }
  //   if (!values.password) {
  //     errors.password = "يجب ادخال كلمة السر";
  //   } else if (values.password < 7) {
  //     errors.email = "كلمة السر يجب ان تكون اكثر من 7 ارقام";
  //   }
  //   if (values.password !== values.matchPassword) {
  //     errors.matchPassword = "كلمة السر غير مطابقة";
  //   }
  //   return errors;
  // };

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
            {/* <p
              ref={errRef}
              className={errMsg ? "flex" : "hidden"}
              aria-live="assertive"
            >
              {errMsg}
            </p> */}
            <form className="flex flex-col gap-2 text-right container mb-8">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                onChange={handleChange}
                required
                aria-describedby="uidnote"
                value={formValues.username}
                placeholder="أسم المستخدم"
                className="mb-2 rounded-xl p-4 text-right drop-shadow bg-[#C36FA3] text-white"
              />
              <p
                id="uidnote"
                className={`${
                  formErrors.username ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {formErrors.username}
              </p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formValues.email}
                placeholder="البريد الالكتروني"
                className="mb-2 rounded-xl p-4 text-right drop-shadow"
              />
              <p
                className={`${
                  formErrors.email ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {formErrors.email}
              </p>
              <input
                type="phone"
                name="phone"
                id=""
                onChange={handleChange}
                placeholder="رقم الهاتف"
                value={formValues.phone}
                className="mb-2 rounded-xl p-4 text-right drop-shadow"
              />
              <p
                className={`${
                  formErrors.phone ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {formErrors.phone}
              </p>
              <input
                type="password"
                name="password"
                id="password"
                required
                aria-describedby="pwdnote"
                onChange={handleChange}
                value={formValues.password}
                placeholder="كلمة السر"
                className="mb-2 rounded-xl p-4 text-right drop-shadow"
              />
              <p
                className={`${
                  formErrors.password ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {formErrors.password}
              </p>
              <input
                type="password"
                name="matchPassword"
                id="confirm_pwd"
                required
                onChange={handleChange}
                value={formValues.matchPassword}
                placeholder="تأكيد كلمة السر"
                className="mb-7 rounded-xl p-4 text-right drop-shadow"
              />
              <p
                id="uidnote"
                className={`${
                  formErrors.matchPassword ? "flex" : "hidden"
                } flex-row-reverse bg-red-300 rounded-lg p-2 text-red-700 text-sm border-[1px] border-red-700`}
              >
                <PencilIcon className="h-5 w-5 mx-2" />
                {formErrors.matchPassword}
              </p>
              <input
                type="submit"
                value="تسجيل الحساب"
                onClick={handleSubmit}
                className={`font-AlmaraiBold bg-red-100 py-3 px-4 basis-1/2 rounded-2xl pt mb-7 cursor-pointer`}
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
