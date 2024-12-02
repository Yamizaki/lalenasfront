import React from "react";

function Hero() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h1 className="bg-gradient-to-r from-red-600 via-yellow-800 to-yellow-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Las Leñas
              </h1>
              <span className="text-white text-2xl font-extrabold text-transparent sm:text-2xl"> Sabores únicos, experiencias inolvidables. </span>

              <p className="mt-4">
              Vive momentos únicos en nuestro restaurante. Más que una comida, te ofrecemos experiencias inolvidables que despiertan todos tus sentidos. Descubre cenas temáticas, eventos exclusivos y sabores que cuentan historias. ¡Reserva ahora y transforma cada ocasión en algo especial!
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition bg-yellow-900 hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-black"
              >
                Reservar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
