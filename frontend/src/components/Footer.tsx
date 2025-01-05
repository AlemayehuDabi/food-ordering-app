export default function Footer() {
  return (
    <div className="bg-orange-400 py-10 border-t-4 border-orange-700 rounded-t-lg">
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between md:gap-0">
        <span className="text-3xl text-white font-bold tracking-tighter">
          FoodOrdering
        </span>
        <span className="flex gap-4 text-white tracking-tighter font-semibold">
          <span>Private Policy</span>
          <span>Private Policy</span>
          <span>Private Policy</span>
          <span>Private Policy</span>
        </span>
      </div>
    </div>
  );
}
