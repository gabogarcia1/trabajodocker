import dynamic from "next/dynamic";

// Importa el componente contador como cliente
const Contador = dynamic(() => import("./components/Contandor"));

export default function Home() {


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>BIenvenido a mi paginita de prueba</h1>
        <p>Esta es una aplicación de ejemplo utilizando Next.js y Docker.</p>
        <Contador />
      </main>
    </div>
  );
}
