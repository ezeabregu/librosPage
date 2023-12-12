export const agregarCarrito = (cartItems, product) => {
  const librosCarrito = cartItems.find((item) => item.id === product.id);
  if (librosCarrito) {
    return cartItems.map((item) =>
      item.id === librosCarrito.id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
  }
  return [...cartItems, { ...product, cantidad: 1 }];
};

export const borrarCarrito = (cartItems, id) => {
  const libroABorrar = cartItems.find((item) => item.id === id);
  if (libroABorrar.cantidad > 1) {
    return cartItems.map((item) =>
      item.id === libroABorrar.id
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== libroABorrar.id);
};

export const resetCostoEnvio = (cartItems, costoEnvio) => {
  if (cartItems.length === 1 && cartItems[0].cantidad === 1) {
    return 0;
  }
  return costoEnvio;
};
