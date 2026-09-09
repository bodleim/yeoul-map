import Image from "next/image";
import Link from "next/link";
import { booths } from "@/data/booths";
import festivalMap from "@/img/map-4.png";

type BoothMapProps = {
  interactive?: boolean;
};

export function BoothMap({ interactive = true }: BoothMapProps) {
  return (
    <main className="min-h-svh bg-[#f4e9c8]">
      <h1 className="sr-only">여울제 부스 지도</h1>

      <section className="relative mx-auto w-full sm:max-w-[393px]" aria-label="여울제 지도">
        <Image
          src={festivalMap}
          alt="여울제 행사장과 1번부터 16번까지의 부스 위치를 표시한 지도"
          className="h-auto w-full"
          sizes="(max-width: 639px) 100vw, 393px"
          preload
        />

        {interactive ? (
          <nav className="absolute inset-0" aria-label="지도에서 부스 선택">
            {booths.map((booth) => (
              <Link
                key={booth.id}
                href={`/booths/${booth.id}`}
                aria-label={`${booth.name} 메뉴 보기`}
                className="absolute rounded-sm bg-transparent transition-colors hover:bg-white/20 focus-visible:bg-white/25 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                style={{
                  left: `${booth.area.left}%`,
                  top: `${booth.area.top}%`,
                  width: `${booth.area.width}%`,
                  height: `${booth.area.height}%`,
                }}
              >
                <span className="sr-only">{booth.name} 메뉴 보기</span>
              </Link>
            ))}
          </nav>
        ) : null}
      </section>
    </main>
  );
}
