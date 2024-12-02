import Event from "./Event"
function EventList() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h1 className="text-4xl font-bold mb-8"> Eventos Principales</h1>
        <section className="flex flex-wrap gap-5 justify-center items-center">
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        </section>
    </div>
  )
}

export default EventList