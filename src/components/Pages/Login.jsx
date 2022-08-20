import React from "react";
import footerLogo from "../../assets/photos/footer-logo.png";

const Login = () => {
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
              className="flex flex-col gap-2 text-right container mb-10"
            >
              <input
                type="email"
                name=""
                id=""
                placeholder="البريد الالكتروني"
                className="mb-2 rounded-xl p-4 text-right drop-shadow"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="كلمة السر"
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
