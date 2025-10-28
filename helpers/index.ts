import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const formatTime = (time: Date) => {
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const getUserImage = () => {
  const images = [
    "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    "https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5",
    "https://img.freepik.com/fotos-gratis/jovem-homem-posando-isolado-contra-a-parede-em-branco-do-estudio_273609-12356.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
  ];
  return images[Math.floor(Math.random() * images.length)];
};
