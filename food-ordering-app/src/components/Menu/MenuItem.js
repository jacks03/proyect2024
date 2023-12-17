export default function MenuItem() {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg text-center 
    hover:bg-white">
      <img src="/pizza.png" alt="Pizza" />
      <h4 className=" font-semibold text-xl my-3">Pizza de Peperonni</h4>
      <p className=" text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 ">
        add to cart 12$
      </button>
    </div>
  );
}
