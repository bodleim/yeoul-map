export type MenuItem = {
  name: string;
  price: string;
};

// 행사 메뉴가 확정되면 각 부스 ID에 메뉴를 추가한다.
// 예: "1": [{ name: "떡볶이", price: "5,000원" }]
export const boothMenus: Record<string, MenuItem[]> = {
  "1": [],
  "2": [],
  "3": [],
  "4": [],
  "5": [],
  "6": [],
  "7": [],
  "8": [],
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [],
  "14": [],
  "15": [],
  "16": [],
};
