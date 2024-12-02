import React from "react";

function Header() {
  return (
    <>
      <header className="flex flex-wrap gap-10 justify-center items-center p-5 bg-orange-200">
        <div>
        <img width="100px" src="https://static.wixstatic.com/media/8a0a29_79e84b8453e54aeab84a2330dc4d5f46~mv2.png/v1/fill/w_591,h_591,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logos-06.png" alt="" />
        </div>

        <div class="w-full max-w-sm min-w-[200px] text-slate-800">
          <input
            className="w-full bg-transparent placeholder:text-slate-800  text-sm border border-slate-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Buscar evento..."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button class="bg-orange-950 hover:bg-orange-800 py-1.5 px-4 rounded-2xl  "> Registrarse </button>

          <button class="bg-amber-900 hover:bg-amber-800 py-1.5 px-4 rounded-2xl "> Ingresar</button>
        </div>
      </header>
    </>
  );
}

export default Header;
