export default function MenuItem() {
  return (
    <div
      className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:transition-all hover:shadow-md
    hover:shadow-black/50"
    >
      <div>
        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Indulge in the timeless allure of our Pepperoni Pizza. Each slice is a
        harmonious blend of zesty tomato sauce.
      </p>
      <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Card Rs.12
      </button>
    </div>
  );
}
