import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const Card = () => {
  return (
    <>
      <section className="Card relative w-[250px] h-96 rounded-md bg-[url('./assets/photos/categorie1.png')] bg-no-repeat bg-cover bg-center mt-[3.7rem]">
        <h3 className="absolute top-[-10px] right-7 bg-pinkish text-white text-xs py-1 px-2 rounded-md">
          جديد
        </h3>
        <div className="icon-wrapper absolute top-3 left-3 bg-white rounded-full p-1">
          <HeartIcon className="h-5 w-5 text-pink-400" />
        </div>
        <div className="add-to-cart-btn absolute bottom-3 right-3 left-3 bg-white p-3 rounded-md flex flex-row-reverse justify-between cursor-pointer">
          <p className="text-pinkish">أضف إلي السلة</p>
          <ShoppingCartIcon className="h-5 w-5 text-gray-300" />
        </div>
        <h3 className="absolute bottom-[-30px] right-[0] font-AlmaraiBold text-lg">
          تونك تركي قطيفة
        </h3>
        <h3 className="absolute bottom-[-60px] right-[0] font-AlmaraiLight text-lg">
          <span className="text-gray-300 text-xs line-through">300.00</span>
          <span className="mx-2">220.00</span>
          <span>SAR</span>
        </h3>
      </section>
    </>
  );
};

export default Card;
