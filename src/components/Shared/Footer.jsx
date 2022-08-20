import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import footerLogo from "../../assets/photos/footer-logo.png";
import masterCard from "../../assets/photos/MasterCard.png";
import visa from "../../assets/photos/visa.png";
import paypal from "../../assets/photos/paypal.png";
import facebook from "../../assets/photos/facebook.png";
import twitter from "../../assets/photos/twitter.png";
import googleplus from "../../assets/photos/googleplus.png";
import instagram from "../../assets/photos/instagram.png";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="contact bg-gray-100 p-10 sm:p-20">
          <div className="container flex flex-col justify-start items-center gap-5">
            <h2 className="font-AlmaraiExtraBold text-3xl sm:text-4xl text-goblinGreen text-right">
              اشترك لتصلك اخر العروض
            </h2>
            <h3 className="font-AlmaraiBold text-lg sm:text-xl text-right">
              سجل للحصول علي اخر العروض والمنتجات الحصرية
            </h3>
            <div className="flex flex-row">
              <div className="bg-white flex items-center p-2">
                <MailIcon className="h-7 w-7 text-pink-400" />
              </div>
              <input
                type="email"
                placeholder="أكتب بريدك الالكتروني"
                className="p-2 text-right active:border-0"
              />
            </div>
          </div>
        </section>
        <section className="links bg-pinkish p-10">
          <div className="container flex flex-row-reverse items-start gap-5 flex-wrap">
            <div className="footer-logo flex items-center justify-center flex-grow  my-auto">
              <img src={footerLogo} alt="" />
            </div>
            <div className="categories  p-4 flex-grow justify-start">
              <div className="font-AlmaraiBold text-xl text-butterYellow mb-3 text-center md:text-right">
                التصنيفات
              </div>
              <div className="divider-wrapper flex flex-row-reverse mb-3 justify-center md:justify-start">
                <div className="divider border-b-4 w-10 text-center"></div>
              </div>
              <ul className="flex flex-col items-center md:items-end gap-3 font-AlmaraiLight text-white">
                <li className="">فساتين السهرة</li>
                <li>ملابس كاجوال</li>
                <li>موديلات حجاب</li>
                <li>بيجامات</li>
                <li>احذية</li>
                <li>شنط</li>
              </ul>
            </div>
            <div className="categories  p-4 flex-grow ">
              <div className="font-AlmaraiBold text-xl text-butterYellow mb-3 text-center md:text-right">
                خدمة العملاء
              </div>
              <div className="divider-wrapper flex flex-row-reverse mb-3 justify-center md:justify-start">
                <div className="divider border-b-4 w-10 text-right"></div>
              </div>
              <ul className="flex flex-col items-center md:items-end gap-3 font-AlmaraiLight text-white">
                <li>اتصل بنا</li>
                <li>سياسة الارجاع</li>
                <li>خريطة الموقع</li>
                <li>ماركات ملابس</li>
                <li>التوصيل</li>
              </ul>
            </div>
            <div className="categories  p-4 flex-grow">
              <div className="font-AlmaraiBold text-xl text-butterYellow mb-3 text-center md:text-right">
                من نحن
              </div>
              <div className="divider-wrapper flex flex-row-reverse mb-3 justify-center md:justify-start">
                <div className="divider border-b-4 w-10 text-right"></div>
              </div>
              <ul className="flex flex-col items-center md:items-end gap-3 font-AlmaraiLight text-white">
                <li>من نحن</li>
                <li>سياسة الخصوصية</li>
                <li>الشروط والاحكام</li>
                <li>حسابي</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="social-media bg-pinkish p-5">
          <div className="container flex flex-row-reverse justify-center flex-wrap">
            <div className="social flex flex-row-reverse flex-grow justify-center sm:justify-start gap-10 mb-5">
              <div className="img-wrapper">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="img-wrapper">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="img-wrapper">
                <img src={googleplus} alt="google plus" />
              </div>
              <div className="img-wrapper">
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="payment flex flex-row-reverse gap-10">
              <div className="img-wrapper">
                <img src={masterCard} alt="MasterCard" />
              </div>
              <div className="img-wrapper">
                <img src={visa} alt="Visa" />
              </div>
              <div className="img-wrapper">
                <img src={paypal} alt="Paypal" />
              </div>
            </div>
          </div>
        </section>
        <section className="copyright flex justify-center">
          <h2 className="p-5 font-AlmaraiBold text-xs text-center">
            جميع الحقوق محفوظة April.com حقوق الطباعة والنشر @2021
          </h2>
        </section>
      </footer>
    </>
  );
};

export default Footer;
