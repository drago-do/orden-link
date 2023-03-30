import React from "react";
import NavigationBar from "@/components/NavigationBar";

export default function bebidas() {
  return (
    <div className="container mx-auto pt-20 max-h-screen">
      <NavigationBar tituloActividad="Bebidas a Preparar" />
      {/* Titulo "Bebidas pendientes" */}
      <ContenedorBebidas bebidasPendientes={true} />
      <ContenedorBebidas bebidasPendientes={false} />
    </div>
  );
}

const ContenedorBebidas = ({ bebidasPendientes }) => {
  const smallSizeForEnd = bebidasPendientes ? "" : "max-h-10";
  return (
    <div
      className={`flex flex-col items-start justify-start mx-5 ${smallSizeForEnd}`}
    >
      <h2 className="font-medium">
        {bebidasPendientes ? "Bebidas Pendientes" : "Bebidas despachadas"}
      </h2>
      <div
        className="flex flex-col items-start justify-start w-full h-3/6 py-3 px-2"
        style={{
          border: "3px var(--foreground) solid",
          borderRadius: "var(--border-radius)",
          background: "var(--background-secondary",
        }}
      >
        <div className="flex flex-col items-center justify-between w-full overflow-scroll">
          <ItemBebida nombreMesa="Mesa 1" mesero="Drago" />
          <ItemBebida nombreMesa="Mesa 1" mesero="Drago" />
          <ItemBebida nombreMesa="Mesa 1" mesero="Drago" />
          <ItemBebida nombreMesa="Mesa 1" mesero="Drago" />
          <ItemBebida nombreMesa="Mesa 1" mesero="Drago" />
        </div>
      </div>
    </div>
  );
};

const ItemBebida = ({ nombreMesa, mesero, items }) => {
  return (
    <div
      className="flex flex-col items-start justify-start w-full p-2 rounded-md my-1"
      style={{
        background: "var(--background)",
        border: "1px solid var(--foreground)",
      }}
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex">
          <input type="checkbox" />
          <h3 className="font-medium">{nombreMesa}</h3>
        </div>
        <h4 className="font-medium">{mesero}</h4>
      </div>
      <div className="flex flex-col items-start justify-start pl-7  w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex">
            <input type="checkbox" />
            <h4 className="font-medium">2</h4>
            <h4 className="font-medium">Coca Cola</h4>
          </div>
          <h4 className="font-medium">1/2</h4>
        </div>
        <p className="pl-5">Comentarios de esta bebida</p>
      </div>
    </div>
  );
};
