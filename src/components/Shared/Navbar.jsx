import Logo from "../../assets/photos/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav px-4 font-AlmaraiBold">
        <div className="container">
          <div className="flex flex-row-reverse justify-between">
            <ul className="flex flex-row-reverse text-sm">
              <li className="p-3 bg-red-100">تسجيل الدخول</li>
              <li className="p-3 bg-red-100">حساب جديد</li>
              <li className="p-3">الرئيسية</li>
              <li className="p-3">المفضلات</li>
              <li className="p-3">الطلبات</li>
            </ul>
            <div className="flex flex-row-reverse gap-x-3 text-sm">
              <div className="p-3">حسابي</div>
              <div className="p-3">اللغة</div>
              <div className="p-3">Saudi Riyal (SAR)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6">
        <div className="container">
          <div className="flex flex-row-reverse gap-x-3 text-sm">
            <img src={Logo} alt="" className="" />
            <ul className=""></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
