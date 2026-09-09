import Image from "next/image";
import Link from "next/link";
import { astaSans, gmarketSans } from "@/app/fonts";
import { getBoothMenuImage } from "@/data/booth-menu-images";
import type { Booth } from "@/data/booths";
import type { MenuItem } from "@/data/menus";

type BoothPopupProps = {
  booth: Booth;
  menus: readonly MenuItem[];
};

export function BoothPopup({ booth, menus }: BoothPopupProps) {
  const boothNumber = booth.id.padStart(2, "0");
  const menuImage = getBoothMenuImage(booth.id);

  return (
    <div
      className={`${gmarketSans.variable} ${astaSans.variable} fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[rgba(42,33,24,0.45)] p-6`}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booth-name"
        className="flex h-[596px] w-full max-w-[345px] flex-col gap-4 overflow-hidden rounded-[28px] border-2 border-[#e5d8b8] bg-[#fffcf4] p-[18px] shadow-[0_10px_28px_rgba(42,33,24,0.28)]"
      >
          <header className="flex h-[91px] w-full shrink-0 items-start gap-3 overflow-hidden">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 overflow-hidden">
              <span className="inline-flex shrink-0 rounded-full bg-[#d94a3d] px-2.5 py-[5px] [font-family:var(--font-gmarket-sans)] text-xs leading-[1.4] font-bold whitespace-nowrap text-white">
                {boothNumber}번 부스
              </span>
              <h1
                id="booth-name"
                className="w-full truncate [font-family:var(--font-gmarket-sans)] text-2xl leading-[1.4] font-medium text-[#3d2e1f]"
              >
                {booth.name}
              </h1>
              <p className="w-full truncate [font-family:var(--font-gmarket-sans)] text-[13px] leading-[1.4] font-light text-[#8a7a63]">
                임시 부스 정보입니다.
              </p>
            </div>

            <Link
              href="/"
              aria-label="팝업 닫고 지도로 돌아가기"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f3ead3] [font-family:var(--font-asta-sans)] text-base leading-[1.4] font-medium text-[#3d2e1f] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#d94a3d]"
            >
              ✕
            </Link>
          </header>

          {menuImage ? (
            <div className="aspect-[4/5] w-full shrink-0 overflow-hidden rounded-2xl bg-[#f7f1e1]">
              <Image
                src={menuImage}
                alt={`${booth.name} 메뉴판`}
                className="h-full w-full object-contain"
                sizes="305px"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/5] w-full shrink-0 flex-col items-center justify-center overflow-y-auto rounded-2xl border-[1.5px] border-dashed border-[#cbb894] bg-[#f7f1e1]">
              {menus.length === 0 ? (
                <p className="[font-family:var(--font-asta-sans)] text-center text-sm leading-[1.4] font-medium text-[#3d2e1f]">
                  메뉴 준비 중입니다.
                </p>
              ) : (
                <ul className="flex w-full flex-col gap-3 p-5 [font-family:var(--font-asta-sans)] text-sm text-[#3d2e1f]">
                  {menus.map((menu, index) => (
                    <li key={`${menu.name}-${index}`} className="flex items-start justify-between gap-4">
                      <span className="min-w-0 break-words">{menu.name}</span>
                      <span className="shrink-0 whitespace-nowrap">{menu.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

      </section>
    </div>
  );
}
