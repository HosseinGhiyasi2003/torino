import api from "./config";

// const getTours = async () => {
//   try {
//     const data = await api.get("tour");
//     return data;
    
//   } catch (error) {
//     console.log('مشکلی پیش اومده');
//   }
// };

const getTours = async (query = {}) => {
  if (query.destinationId && query.originId) {
  return await api.get(`tour?destinationId=${query.destinationId}&originId=${query.originId}`);
} else if (query.destinationId) {
  return await api.get(`tour?destinationId=${query.destinationId}`);
} else if (query.originId) {
  return await api.get(`tour?originId=${query.originId}`);
} else {
  return await api.get("tour");
}
}


const getTourById = async (id) => {
  const data = await api.get(`tour/${id}`);
  return data;
}

const reserveTour = async (id) => {
  const data = await api.put(`basket/${id}`)
  return data
}

const getBasketData = async () => {
  const data = await api.get('basket');
  return data
}

const orderTour = async (personalData) => {
  const data = await api.post('order', personalData);
  return data
}

const getUserTours = async () => {
  const data = await api.get('user/tours')
  return data
}

const getTransactions = async () => {
  const data = await api.get('user/transactions')
  return data
}

export { getTours, getTourById, reserveTour, getBasketData, orderTour, getUserTours, getTransactions };
