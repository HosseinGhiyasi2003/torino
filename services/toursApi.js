import api from "./config";

const getTours = async () => {
  try {
    const data = await api.get("tour");
    return data;
    
  } catch (error) {
    console.log('مشکلی پیش اومده');
  }
};

const getTourById = async (id) => {
  const data = await api.get(`tour/${id}`);
  return data;
}

export { getTours, getTourById };
