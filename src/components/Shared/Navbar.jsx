import Logo from "../../assets/photos/logo.png";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";
import { MailIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <>
      <div className="nav px-0 sm:px-4 font-AlmaraiBold">
        <div className="container">
          <div className="flex flex-row-reverse justify-center sm:justify-between flex-wrap">
            <section className="flex flex-row-reverse flex-wrap text-sm justify-center">
              <div className="p-3 bg-red-100">
                <Link to="/login">تسجيل الدخول</Link>
              </div>
              <div className="p-3 bg-red-100">
                <Link to="/signup">حساب جديد</Link>
              </div>
              <div className="p-3">
                <Link to="/">الرئيسية</Link>
              </div>
              <div className="p-3 flex flex-row-reverse justify-center items-center">
                <div className="pl-1">المفضلات</div>
                <div className="bg-pinkish rounded-full text-center text-white text-xs w-4 h-4">
                  2
                </div>
              </div>
              <div className="p-3">الطلبات</div>
            </section>
            <div className="flex flex-row-reverse gap-x-3 text-sm">
              <div className="p-3">حسابي</div>
              <div className="p-3">اللغة</div>
              <div className="p-3">Saudi Riyal (SAR)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 font-AlmaraiBold">
        <div className="container">
          <div className="flex flex-row-reverse justify-between flex-wrap">
            <div className="right flex flex-row-reverse gap-x-3 text-sm items-center flex-wrap">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <div className="p-5 active:font-AlmaraiExtraBold">
                <Link to="/products">العروض</Link>
              </div>
              <div className="p-5 active:font-AlmaraiExtraBold">فساتين</div>
              <div className="p-5 active:font-AlmaraiExtraBold">
                موديلات ملابس
              </div>
              <div className="p-5 active:font-AlmaraiExtraBold">عبايات</div>
              <div className="p-5 active:font-AlmaraiExtraBold">اكسسوارات</div>
            </div>
            <div className="left flex flex-row-reverse gap-x-3 text-sm items-center flex-wrap">
              <SearchIcon className="h-5 w-5" />
              <MailIcon className="h-5 w-5 text-pink-400" />
              <div className="flex flex-col items-end">
                <span className="text-sm">تواصلي معنا</span>
                <span className="text-xs font-AlmaraiLight">
                  اتركي لنا رسالة
                </span>
              </div>
              <div className="flex flex-row-reverse border-2 border-teal-400 rounded gap-1 px-4 py-2">
                <span>0</span>
                <span className="pl-3">منتجات</span>
                <span>0.00</span>
                <span className="pl-3">SAR</span>
                <ShoppingCartIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
