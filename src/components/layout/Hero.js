import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold ">
          Indulge  in <span className="text-primary ">Pizza</span> <br />
          Paradise
        </h1>
        <p className=" my-6  mt-4 text-gray-500 ">
          Welcome to a world where pizza dreams come true! Dive into a symphony
          of flavors and textures as you explore our mouthwatering selection of
          handcrafted pizzas.
        </p>
        <div className="flex gap-4 mt-5 text-sm">
          <button className="bg-primary uppercase items-center flex gap-2 text-white rounded-full px-4 py-2 ">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
