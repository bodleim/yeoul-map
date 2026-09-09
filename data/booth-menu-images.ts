import type { StaticImageData } from "next/image";
import boothMenu2 from "@/img/menu-delivery/2.webp";
import boothMenu3 from "@/img/menu-delivery/3.webp";
import boothMenu4 from "@/img/menu-delivery/4.webp";
import boothMenu5 from "@/img/menu-delivery/5.webp";
import boothMenu7 from "@/img/menu-delivery/7.webp";
import boothMenu10 from "@/img/menu-delivery/10.webp";
import boothMenu11 from "@/img/menu-delivery/11.webp";
import boothMenu12 from "@/img/menu-delivery/12.webp";
import boothMenu13 from "@/img/menu-delivery/13.webp";
import boothMenu14 from "@/img/menu-delivery/14.webp";

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
