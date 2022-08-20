import React from "react";
import { Link } from "react-router-dom";

import Card from "../Shared/Card";

import Hero from "../../assets/photos/heroo.jpg";
import offerOne from "../../assets/photos/offer1.png";
import offerTwo from "../../assets/photos/offer2.png";

const Home = () => {
  return (
    <>
      <header className="flex">
        <div className="carousal-wrapper container max-h-full mx-auto overflow-hidden">
          <img src={Hero} alt="" className="object-contain" />
        </div>
      </header>
      {/* ------------------ Offers ------------------ */}
      <section className="offers container mt-2 flex flex-wrap flex-row-reverse justify-between">
        <div className="offer-1 bg-yellow-100 basis-full sm:basis-almost50 flex flex-row-reverse">
          <div className="offer-text basis-1/2 flex flex-col justify-center items-end pr-10 gap-2">
            <h3 className="font-AlmaraiBold text-4xl">أحدث التشكيلات</h3>
            <p className="mb-3">المناسبة لكي ومن اختيار اشهر المصممين</p>
            <button className="font-AlmaraiBold bg-green-300 rounded-md py-3 px-7">
              أحدث العروض
            </button>
          </div>
          <img src={offerOne} alt="" className="" />
        </div>
        <div className="offer-2 bg-red-100 basis-full sm:basis-almost50 flex flex-row-reverse">
          <div className="offer-text basis-1/2 flex flex-col justify-center items-end pr-10 gap-2">
            <h3 className="font-AlmaraiBold text-4xl">أحدث العروض</h3>
            <p className="mb-3">احدث الفساتين ولفات الطرح المناسبة لكي</p>
            <button className="font-AlmaraiBold bg-white rounded-md py-3 px-7">
              أحدث العروض
            </button>
          </div>
          <img src={offerTwo} alt="" />
        </div>
      </section>
      {/* ------------------ Categories ------------------ */}
      <section className="categories container my-2 flex flex-wrap flex-row-reverse justify-between">
        <Link
          to="/products"
          className="basis-almost20 bg-[url('./assets/photos/categorie1.png')] h-48 bg-no-repeat flex justify-center items-center"
        >
          <h3 className="font-AlmaraiBold text-white">طرح تركي</h3>
        </Link>
        <Link
          to="/products"
          className="basis-almost20 bg-[url('./assets/photos/categorie2.png')] h-48 bg-no-repeat flex justify-center items-center"
        >
          <h3 className="font-AlmaraiBold text-white">فساتين</h3>
        </Link>
        <Link
          to="/products"
          className="basis-almost20 bg-[url('./assets/photos/categorie3.png')] h-48 bg-no-repeat flex justify-center items-center"
        >
          <h3 className="font-AlmaraiBold text-white">احذية</h3>
        </Link>
        <Link
          to="/products"
          className="basis-almost20 bg-[url('./assets/photos/categorie5.png')] h-48 bg-no-repeat flex justify-center items-center"
        >
          <h3 className="font-AlmaraiBold text-white">بيجامات</h3>
        </Link>
        <Link
          to="/products"
          className="basis-almost20 bg-[url('./assets/photos/categorie4.png')] h-48 bg-no-repeat flex justify-center items-center"
        >
          <h3 className="font-AlmaraiBold text-white">تونيكات</h3>
        </Link>
      </section>
      {/* ------------------ Sample ------------------ */}
      <section className="sample container mt-20 flex flex-wrap flex-col items-center">
        <h3 className="font-AlmaraiExtraBold text-goblinGreen text-2xl mb-3 basis-full">
          احدث التشكيلات
        </h3>
        <p className="font-AlmaraiBold text-xl basis-full">
          المناسبة لكي ومن اختيار اشهر المصممين
        </p>
        <div className="filter font-AlmaraiBold text-lg basis-full flex flex-row-reverse flex-wrap gap-10 my-5">
          <p className="text-pinkish">الكل</p>
          <p>فساتين السهرة</p>
          <p>ملابس كاجوال</p>
          <p>موديلات حجاب</p>
          <p>بيجامات</p>
          <p>احذية</p>
          <p>شنط</p>
        </div>
        <div className="cards container flex flex-row-reverse flex-wrap justify-between gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
