import { Libros } from "../data/libros";

export const destacadosRandom = (cantidad) => {
  const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * Libros.length);
    if (!nuevoArray.length) {
      nuevoArray.push(Libros[indexRandom]);
    }
    const libroExistente = nuevoArray.find((nuevoLibro) => {
      return nuevoLibro.id === Libros[indexRandom].id;
    });
    if (!libroExistente) {
      nuevoArray.push(Libros[indexRandom]);
    }
  }
  return nuevoArray;
};
