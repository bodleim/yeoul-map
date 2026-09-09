import type { StaticImageData } from "next/image";
import boothMenu2 from "@/img/booth-menu/2.png";
import boothMenu3 from "@/img/booth-menu/3.jpeg";
import boothMenu4 from "@/img/booth-menu/4.png";
import boothMenu5 from "@/img/booth-menu/5.jpeg";
import boothMenu7 from "@/img/booth-menu/7.png";
import boothMenu10 from "@/img/booth-menu/10.png";
import boothMenu11 from "@/img/booth-menu/11.jpeg";
import boothMenu12 from "@/img/booth-menu/12.png";
import boothMenu13 from "@/img/booth-menu/13.png";
import boothMenu14 from "@/img/booth-menu/14.png";

const boothMenuImages: Readonly<Partial<Record<string, StaticImageData>>> = {
  "2": boothMenu2,
  "3": boothMenu3,
  "4": boothMenu4,
  "5": boothMenu5,
  "7": boothMenu7,
  "10": boothMenu10,
  "11": boothMenu11,
  "12": boothMenu12,
  "13": boothMenu13,
  "14": boothMenu14,
};

export function getBoothMenuImage(id: string): StaticImageData | undefined {
  return boothMenuImages[id];
}
