export const getIdFromLink = (link:string) => {
  const expresionRegular = /\/reel\/([^\/?]+)/;
  const result = link.match(expresionRegular);

  // Verificar si se encontró el ID
  if (result && result.length > 1) {
    return result[1];
  } else {
    throw new Error("Link no compatible");
  }
};
