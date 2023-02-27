import http from './http-common';

const endPoint = '/service-category';

async function getAll() {
  const allCategories = await http.get(endPoint);
  return allCategories;
};

export const osServiceCategory = {
  getAll,
};
