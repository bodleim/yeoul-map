import { notFound } from "next/navigation";
import { BoothPopup } from "@/components/booth-popup";
import { booths, getBoothById } from "@/data/booths";
import { boothMenus } from "@/data/menus";

export const dynamicParams = false;

export function generateStaticParams() {
  return booths.map((booth) => ({ id: booth.id }));
}

export default async function BoothModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booth = getBoothById(id);

  if (!booth) notFound();

  return <BoothPopup booth={booth} menus={boothMenus[booth.id] ?? []} />;
}
