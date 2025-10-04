import api from "./config";

const sendOtpCode = async (data) => {
  try {
    const res = await api.post("auth/send-otp", data);
    return res.data;
  } catch (error) {
    console.log('مشکلی پیش اومده');
  }
};

const checkOtpCode = async (data) => {
  try {
    const res = await api.post("auth/check-otp", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log('مشکلی پیش اومده');
  }
};

export { sendOtpCode, checkOtpCode };
