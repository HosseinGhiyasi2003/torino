import api from "./config";

const getTours = async () => {
  try {
    const data = await api.get("tour");
    return data;
    
  } catch (error) {
    throw error
  }
};

export { getTours };
