export const agregarCarrito = (cartItems, product) => {
  const librosCarrito = cartItems.find((item) => {
    return item.id === product.id;
  });
  if (librosCarrito) {
    return cartItems.map((item) => {
      return item.id === librosCarrito.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

export const borrarCarrito = (cartItems, id) => {
  const libroABorrar = cartItems.find((item) => {
    return item.id === id;
  });
  if (libroABorrar.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === libroABorrar.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
  return cartItems.filter((item) => {
    return item.id !== libroABorrar.id;
  });
};

export const resetCostoEnvio = (cartItems, shippingCost) => {
  if (cartItems.length === 1 && cartItems[0].quantity === 1) {
    return 0;
  }
  return shippingCost;
};
