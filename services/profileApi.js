import api from "./config";

const getUserProfile = async () => {
  const data = await api.get("user/profile");
  return data;
}

const updateUserProfile = async (profileData) => {
  const data = await api.put("user/profile", profileData);
  
  return data;
}

export { getUserProfile, updateUserProfile }; 