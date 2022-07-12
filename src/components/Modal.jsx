import { X } from "phosphor-react";
export function Modal({ item, onClose, show }) {
  if (!show) {
    return null;
  }
  return (
    <div className="bg-blend-normal">
      <div className="bg-gray-700 text-white p-3 rounded-xl shadow-2xl w-[240px] md:w-[500px] m-auto mb-5 ">
        <div onClick={onClose} className="cursor-pointer flex justify-between">
          <span className="md:text-2xl font-semibold mb-2">Visão geral</span>
          <X size={22} />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="w-[160px] h-auto  sm:w-[280px] rounded-md mb-3"
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          />
          <p>{item.overview}</p>
        </div>
      </div>
    </div>
  );
}
