export type Booth = {
  id: string;
  name: string;
  side: "left" | "right";
  area: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
};

type BoothPlacement = Omit<Booth, "name">;

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

export const booths: readonly Booth[] = boothPlacements.map((booth) => ({
  ...booth,
  name: `${booth.id}번 부스`,
}));

export function getBoothById(id: string): Booth | undefined {
  return booths.find((booth) => booth.id === id);
}
