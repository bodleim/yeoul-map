import { notFound } from "next/navigation";
import { BoothMap } from "@/components/booth-map";
import { BoothPopup } from "@/components/booth-popup";
import { booths, getBoothById } from "@/data/booths";
import { boothMenus } from "@/data/menus";

export const dynamicParams = false;

export function generateStaticParams() {
  return booths.map((booth) => ({ id: booth.id }));
}

export default async function BoothMenuPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booth = getBoothById(id);

  if (!booth) notFound();

  const menus = boothMenus[booth.id] ?? [];

  return (
    <>
      <BoothMap interactive={false} />
      <BoothPopup booth={booth} menus={menus} />
    </>
  );
}
