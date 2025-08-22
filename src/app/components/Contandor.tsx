"use client";
import { useRedisFetch } from "../hooks/useRedisFetch";

export default function Contador() {
  const contador = useRedisFetch();
  if (contador < 10)
    return (
      <p>
        Cantidad de visitas a la pagina : {contador} 😡 visita mas veces dale
      </p>
    );
  if (10 < contador && contador < 20)
    return (
      <p>Cantidad de visitas a la pagina : {contador} . eso nomas?? 😒 </p>
    );
  if (20 < contador && contador < 50)
    return (
      <p>
        Cantidad de visitas a la pagina : {contador} . ahi va dale dale que ya
        llegas{" "}
      </p>
    );
  if (contador > 50) return <p> buscate un 8 horas hermano 🤦‍♂️🤦‍♂️🤦‍♂️</p>;

  return <p>Cantidad de visitas a la pagina : {contador}</p>;
}
