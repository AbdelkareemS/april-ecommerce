import React from "react";
import { SearchIcon, StarIcon } from "@heroicons/react/solid";
import Card from "../Shared/Card";
import axios from "../../api/axios";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    async function getItmes() {
      await axios
        .get("/products/asdasd")
        .then((res) => console.log("res", res));
    }
    getItmes();
  }, []);

  return (
    <>
      <main className="shop container border-2 border-blue-400 flex flex-row-reverse flex-wrap mb-20">
        <form className="filter basis-1/4 border-2 border-green-400 flex flex-col items-end p-10">
          {/* ------------------------- Search ------------------------- */}
          {/* ----------------- Search-title ----------------- */}
          <div className="flex flex-col items-end mb-10">
            <h3 className="mb-3 font-bold">البحث</h3>
            {/* ----------------- Search input ----------------- */}
            <div className="search-bar flex flex-row-reverse items-center container">
              <input
                type="search"
                name=""
                id=""
                placeholder="ما تودي البحث عنه"
                className="text-xs border-2 border-y-grey-500 border-grey-500 text-right py-2 px-3 w-100"
              />
              {/* <button className="bg-pinkish text-white rounded-lg">
                <SearchIcon className="h-[30px] w-10 text-white border-2 border-y-grey-500 border-l-grey-500 border-r-white z-10" />
              </button> */}
            </div>
          </div>
          {/* ------------------------- Size ------------------------- */}
          {/* ----------------- Size-title ----------------- */}
          <div className="size-title flex flex-row-reverse items-center justify-between flex-wrap container">
            <h3 className="mb-3 font-bold">المقاس</h3>
            <h3 className="mb-3 text-sm font-AlmaraiBold text-pinkish">
              دليل المقاسات
            </h3>
          </div>
          {/* ----------------- Choose Size ----------------- */}
          <div className="size flex flex-row-reverse flex-wrap items-center justify-start gap-2 mb-10 container">
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              M
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              S
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              XS
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              XXS
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              XXXL
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              XXS
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              XXS
            </button>
            <button className="border-2 border-grey-500 rounded-sm p-3 text-sm font-AlmaraiBold w-[22.9%] focus:bg-pinkish">
              L
            </button>
          </div>
          {/* ------------------------- Categories ------------------------- */}
          {/* ----------------- Categories-title ----------------- */}
          <div className="Categories-title flex flex-row-reverse items-center justify-between flex-wrap container">
            <h3 className="mb-3 font-bold">التصنيفات</h3>
          </div>
          {/* ----------------- Choose-Category ----------------- */}
          <div className="choose-category flex flex-col container mb-10">
            {/* category-item */}
            <div className="category-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="category-input flex flex-row-reverse gap-2">
                <input type="checkbox" id="" name="gulfDress" value="" />
                <label for="gulfDress" className="font-AlmaraiBold text-sm">
                  عبايات خليجي
                </label>
              </div>
              <span className="bg-gray-200 rounded-sm py-1 px-3 font-AlmaraiBold text-xs">
                170
              </span>
            </div>
            {/* category-item */}
            <div className="category-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="category-input flex flex-row-reverse gap-2">
                <input type="checkbox" id="" name="casualDress" value="" />
                <label for="casualDress" className="font-AlmaraiBold text-sm">
                  عبايات كاجوال
                </label>
              </div>
              <span className="bg-gray-200 rounded-sm py-1 px-3 font-AlmaraiBold text-xs">
                190
              </span>
            </div>
            {/* category-item */}
            <div className="category-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="category-input flex flex-row-reverse gap-2">
                <input type="checkbox" id="" name="dresses" value="" />
                <label for="dresses" className="font-AlmaraiBold text-sm">
                  فساتين
                </label>
              </div>
              <span className="bg-gray-200 rounded-sm py-1 px-3 font-AlmaraiBold text-xs">
                110
              </span>
            </div>
            {/* category-item */}
            <div className="category-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="category-input flex flex-row-reverse gap-2">
                <input type="checkbox" id="" name="gulfDress" value="" />
                <label for="gulfDress" className="font-AlmaraiBold text-sm">
                  عبايات خليجي
                </label>
              </div>
              <span className="bg-gray-200 rounded-sm py-1 px-3 font-AlmaraiBold text-xs">
                170
              </span>
            </div>
            {/* category-item */}
            <div className="category-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="category-input flex flex-row-reverse gap-2">
                <input type="checkbox" id="" name="gulfDress" value="" />
                <label for="gulfDress" className="font-AlmaraiBold text-sm">
                  عبايات خليجي
                </label>
              </div>
              <span className="bg-gray-200 rounded-sm py-1 px-3 font-AlmaraiBold text-xs">
                170
              </span>
            </div>
          </div>
          {/* ------------------------- Rate ------------------------- */}
          {/* ----------------- Rate-title ----------------- */}
          <div className="rate-title flex flex-row-reverse items-center justify-between flex-wrap container">
            <h3 className="mb-3 font-bold">التقييم</h3>
          </div>
          {/* ----------------- Choose-Rate ----------------- */}
          <div className="choose-category flex flex-col container mb-10">
            {/* Rate-item */}
            <div className="rate-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="rate-stars flex flex-row-reverse">
                <input
                  type="checkbox"
                  id=""
                  name="gulfDress"
                  value=""
                  className="ml-2"
                />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            {/* Rate-item */}
            <div className="rate-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="rate-stars flex flex-row-reverse">
                <input
                  type="checkbox"
                  id=""
                  name="gulfDress"
                  value=""
                  className="ml-2"
                />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-gray-200" />
              </div>
            </div>
            {/* Rate-item */}
            <div className="rate-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="rate-stars flex flex-row-reverse">
                <input
                  type="checkbox"
                  id=""
                  name="gulfDress"
                  value=""
                  className="ml-2"
                />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
              </div>
            </div>
            {/* Rate-item */}
            <div className="rate-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="rate-stars flex flex-row-reverse">
                <input
                  type="checkbox"
                  id=""
                  name="gulfDress"
                  value=""
                  className="ml-2"
                />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
              </div>
            </div>
            {/* Rate-item */}
            <div className="rate-item mb-2 flex flex-row-reverse items-center justify-between">
              <div className="rate-stars flex flex-row-reverse">
                <input
                  type="checkbox"
                  id=""
                  name="gulfDress"
                  value=""
                  className="ml-2"
                />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
                <StarIcon className="h-5 w-5 text-gray-200" />
              </div>
            </div>
          </div>
          {/* ------------------------- Color ------------------------- */}
          {/* ----------------- Color-title ----------------- */}
          <div className="color-title flex flex-row-reverse items-center justify-between flex-wrap container">
            <h3 className="mb-3 font-bold">اللون</h3>
          </div>
          {/* ----------------- Color-Palette ----------------- */}
          <div className="color-palette flex flex-row-reverse flex-wrap gap-2 container mb-10">
            <button className="bg-red-500 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-red-300 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-red-200 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-green-500 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-green-300 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-green-200 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-yellow-500 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-yellow-300 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-yellow-200 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-blue-500 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-blue-300 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-blue-200 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-black w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-white w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-purple-500 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-purple-300 w-[20px] h-[20px] border-[1px]"></button>
            <button className="bg-purple-200 w-[20px] h-[20px] border-[1px]"></button>
          </div>
          {/* ------------------------- Price ------------------------- */}
          {/* ----------------- Price-title ----------------- */}
          <div className="Price-title flex flex-row-reverse items-center justify-between flex-wrap container">
            <h3 className="mb-3 font-bold">السعر</h3>
          </div>
          <div className="price-input"></div>
          {/* ------------------------- Submit ------------------------- */}
          <input
            type="submit"
            value="البحث"
            className="bg-pinkish text-white container py-2 rounded-md cursor-pointer"
          />
        </form>
        <section className="products basis-3/4 flex flex-row-reverse flex-wrap justify-between gap-12 border-2 border-red-400">
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};

export default Shop;
