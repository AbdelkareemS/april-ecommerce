import React from "react";
import offerOne from "../../assets/photos/categorie2.png";

const Cart = () => {
  return (
    <>
      <section className="Cart flex flex-row justify-center items-center">
        <div className="container bg-[#F9F9F9] flex flex-col rounded-xl p-10 m-5">
          <div className="cart-title flex flex-row-reverse border-[#D9D9D9] border-b-[1px] w-full">
            <h3 className="font-AlmaraiBold text-xl mb-6">سلة مشترياتك</h3>
          </div>
          {/* { First Row } */}
          <div className="flex flex-row-reverse border-[#D9D9D9] border-b-[1px] w-full flex-start py-5">
            <div className="product-details w-[70%] flex justify-end font-bold text-sm">
              <h4>تفاصيل المنتج</h4>
            </div>
            <div className="product-quantity w-[10%] flex justify-center font-bold text-sm">
              <h4>الكمية</h4>
            </div>
            <div className="product-price w-[10%] flex justify-center font-bold text-sm">
              <h4>السعر</h4>
            </div>
            <div className="product-total w-[10%] flex justify-center font-bold text-sm">
              <h4>الإجمالي</h4>
            </div>
          </div>
          {/* { item Row } */}
          <div className="flex flex-row-reverse border-[#D9D9D9] border-b-[1px] w-full flex-start py-5">
            <div className="product-details w-[70%] flex flex-row-reverse font-bold">
              <img
                className="w-[179px] h-[195px] object-cover ml-7"
                src={offerOne}
                alt=""
              />
              <div className="info flex flex-col gap-5">
                <h3>بلاك فالنتينو فستان مع تول</h3>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">اللون</p>
                  <p className="text-xs">اسود</p>
                </div>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">المقاس</p>
                  <p className="text-xs">L</p>
                </div>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">رقم المنتج</p>
                  <p className="text-xs">185721</p>
                </div>
              </div>
            </div>
            <div className="product-quantity w-[10%] flex justify-center font-bold text-sm">
              <div className="text-center">
                <input
                  type="select"
                  className="w-[70%] rounded-full border-[1px] border-[#D9D9D9] py-2 text-center"
                />
              </div>
            </div>
            <div className="product-price w-[10%] flex justify-center font-bold text-sm">
              <h4 className="text-[#C36FA3]">580 ريال</h4>
            </div>
            <div className="product-total w-[10%] flex justify-center font-bold text-sm">
              <h4 className="text-[#22B7B1]">1160 ريال</h4>
            </div>
          </div>
          {/* { item Row } */}
          <div className="flex flex-row-reverse border-[#D9D9D9] border-b-[1px] w-full flex-start py-5">
            <div className="product-details w-[70%] flex flex-row-reverse font-bold">
              <img
                className="w-[179px] h-[195px] object-cover ml-7"
                src={offerOne}
                alt=""
              />
              <div className="info flex flex-col gap-5">
                <h3>بلاك فالنتينو فستان مع تول</h3>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">اللون</p>
                  <p className="text-xs">اسود</p>
                </div>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">المقاس</p>
                  <p className="text-xs">L</p>
                </div>
                <div className="flex flex-row-reverse ">
                  <p className="text-xs text-[#8B8B8B] ml-2">رقم المنتج</p>
                  <p className="text-xs">185721</p>
                </div>
              </div>
            </div>
            <div className="product-quantity w-[10%] flex justify-center font-bold text-sm">
              <div className="text-center">
                <input
                  type="select"
                  className="w-[70%] rounded-full border-[1px] border-[#D9D9D9] py-2 text-center"
                />
              </div>
            </div>
            <div className="product-price w-[10%] flex justify-center font-bold text-sm">
              <h4 className="text-[#C36FA3]">580 ريال</h4>
            </div>
            <div className="product-total w-[10%] flex justify-center font-bold text-sm">
              <h4 className="text-[#22B7B1]">1160 ريال</h4>
            </div>
          </div>
          {/* Total Price */}
          <div className="cart-title flex flex-row w-full mt-10 ml-10">
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-bold">الإجمالي 1250 ريال</p>
              <button className="bg-[#3D8475] text-white text-sm px-10 py-3 rounded-md my-3">
                شراء الان
              </button>
              <p className="text-xs font-bold">استكمل تصفح المنتجات</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
