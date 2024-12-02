import React from "react";

function Event() {
  return (
    <div className="w-96">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg ">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-orange-200 p-4 sm:p-6 text-black">
          <time dateTime="2022-10-10" className="block text-xs  ">
            Sab, 15 Nov - 8:45 p.m.
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg ">Caballo de paso Peruano</h3>
          </a>

          <div className="flex justify-between">
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Desde: S/. 52.00
            </p>

            <button className="bg-[#47924C] text-white py-1 px-4 rounded-full">
              {" "}
              Comprar{" "}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Event;
