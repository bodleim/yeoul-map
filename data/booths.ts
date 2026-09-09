export type Booth = {
  id: string;
  name: string;
  slogan?: string;
  side: "left" | "right";
  area: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
};

type BoothPlacement = Omit<Booth, "name" | "slogan">;
type BoothDetails = Pick<Booth, "name" | "slogan">;

const emptySlogan = "\u00a0";

const boothDetails: Readonly<Partial<Record<string, BoothDetails>>> = {
  "1": { name: "학생회", slogan: emptySlogan },
  "2": { name: "팟타이밍", slogan: "팟타이밍 ! 지금이 팟타이 먹을 타이밍" },
  "3": { name: "CUPBAP LAB", slogan: "밥 먹기 '전에' 는 '시스템' 이 불안정합니다." },
  "4": { name: "포켓몬꼬치", slogan: "너로 정했다, 여울제는 너다 피카츄 돈가스!" },
  "5": {
    name: "감자에 싹이나서 이파리에 감자",
    slogan: "뜨거운 여름, 뜨거운 감자",
  },
  "6": { name: "지존 어쩌구", slogan: emptySlogan },
  "7": { name: "간바레 유부상", slogan: "오늘도 간바레, 내일도 がんばれ~" },
  "8": { name: "외부업체", slogan: emptySlogan },
  "9": { name: "학생회", slogan: emptySlogan },
  "10": { name: "ArE you cRAzy?", slogan: "오늘 먹을 치킨을 내일로 미루지 말자" },
  "11": {
    name: "소귤소귤",
    slogan: "달콤매콤 소떡소떡과 톡 쏘는 상큼함의 청귤청에이드!",
  },
  "12": { name: "통통후르츠", slogan: "파도는 시원하게, 산도는 달콤하게" },
  "13": {
    name: "좀 매울건디 ?",
    slogan: "불닭냉면 RED RED ! 에이드로 GREEN GREEN !",
  },
  "14": {
    name: "nutswave",
    slogan: "고소한 우도땅콩 다과와 함께 잠시 일상에서 벗어나 소담하고 느긋한 시간을 즐겨보세요",
  },
  "15": { name: "학생회", slogan: emptySlogan },
  "16": { name: "외부업체", slogan: emptySlogan },
};

const boothPlacements = [
  { id: "1", side: "left", area: { left: 12.7, top: 32.2, width: 12.5, height: 4.3 } },
  { id: "2", side: "left", area: { left: 17.6, top: 36.6, width: 13.8, height: 4.7 } },
  { id: "3", side: "left", area: { left: 13.3, top: 41.6, width: 12.5, height: 3.8 } },
  { id: "4", side: "left", area: { left: 18, top: 45.5, width: 14, height: 4.4 } },
  { id: "5", side: "left", area: { left: 13.5, top: 50.2, width: 13.8, height: 4.4 } },
  { id: "6", side: "left", area: { left: 19, top: 54.9, width: 12.5, height: 3.5 } },
  { id: "7", side: "left", area: { left: 13.5, top: 58.5, width: 12.5, height: 3.5 } },
  { id: "8", side: "left", area: { left: 16, top: 62.2, width: 13, height: 4.1 } },
  { id: "9", side: "right", area: { left: 69.5, top: 32.6, width: 14.5, height: 4.3 } },
  { id: "10", side: "right", area: { left: 67.2, top: 37, width: 12.8, height: 3.5 } },
  { id: "11", side: "right", area: { left: 72.5, top: 40.7, width: 13, height: 3.5 } },
  { id: "12", side: "right", area: { left: 68.2, top: 44.3, width: 14, height: 4.4 } },
  { id: "13", side: "right", area: { left: 72.2, top: 48.9, width: 14.2, height: 4.4 } },
  { id: "14", side: "right", area: { left: 68.5, top: 53.7, width: 12, height: 3.6 } },
  { id: "15", side: "right", area: { left: 72.3, top: 57.5, width: 14.8, height: 4.8 } },
  { id: "16", side: "right", area: { left: 68, top: 62.5, width: 12.8, height: 4.1 } },
] satisfies readonly BoothPlacement[];

export const booths: readonly Booth[] = boothPlacements.map((booth) => {
  const details = boothDetails[booth.id];

  return {
    ...booth,
    name: details?.name ?? `${booth.id}번 부스`,
    slogan: details?.slogan,
  };
});

export function getBoothById(id: string): Booth | undefined {
  return booths.find((booth) => booth.id === id);
}
