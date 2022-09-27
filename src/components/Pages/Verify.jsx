import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../api/axios";
// import { Link } from "react-router-dom";
import footerLogo from "../../assets/photos/footer-logo.png";
import resetwithphone from "../../assets/photos/resetwithphone.png";

const Verify = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `التأكد من البيانات`;
  });

  const [verifyCode, setVerifyCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/auth/verify", {
        field: "islam1@example.com",
        code: verifyCode,
      })
      .then((res) => {
        console.log("verify res", res);
      })
      .catch((err) => {
        console.log("These credentials do not match our records.", err);
      });
  };

  return (
    <>
      <section className="Verify container my-20 p-4">
        <div className="flex flex-row flex-grow flex-wrap justify-center bg-gray-100 bg-no-repeat rounded-2xl overflow-hidden">
          <div className="pic bg-[url('./assets/photos/IMG3.png')] basis-1/2 lg:flex justify-center items-center hidden">
            <img src={footerLogo} alt="" />
          </div>
          <div className="form flex flex-col flex-wrap p-10 lg:py-20 lg:px-20 xl:px-40 lg:basis-1/2 items-center lg:items-end">
            <img src={resetwithphone} alt="" />
            <h2 className="font-AlmaraiBold text-3xl lg:text-5xl mb-7 text-right my-10">
              تأكيد رمز التحقق
            </h2>
            <p className="text-md lg:text-xl lg:text-right mb-10 text-right">
              يرجي ادخال رمز التحقق الذي تم ارساله اليك عبر رسالة نصية علي هاتفك
              او علي الأيميل الخاص بك
            </p>
            <form
              action=""
              className="flex flex-col gap-2 text-right container mb-8"
            >
              <input
                type="number"
                name=""
                id=""
                placeholder="رمز التحقق"
                onChange={(e) => {
                  setVerifyCode(e.target.value);
                  console.log(verifyCode);
                }}
                className="mb-4 rounded-xl p-4 text-right drop-shadow"
              />
              <p className="my-10 text-sm font-bold">
                لم تستلم الرمز ؟{" "}
                <a href="#" className="text-[#22B7B1] text-sm font-bold">
                  إعادة ارسال مجدداً
                </a>
              </p>
              <input
                type="submit"
                value="تاكيد"
                onClick={handleSubmit}
                className="font-AlmaraiBold bg-red-100 py-3 px-4 basis-1/2 rounded-2xl pt mb-7"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
