const getIdAndQuery = (url: string) => {
  const [id, query] = url.split('/').filter(Boolean).reverse();
  return { id, query };
};

export { getIdAndQuery };
