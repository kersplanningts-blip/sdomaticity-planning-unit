import Image from 'next/image'

type LogoSlotProps = {
  /** Path to the official logo image once provided. Leave undefined for an empty placeholder. */
  src?: string
  alt: string
  /** Short label shown inside the empty placeholder slot. */
  placeholder: string
  className?: string
}

/**
 * A single circular logo slot. Renders the official logo image when `src` is
 * provided, otherwise shows a labeled placeholder space ready for the artwork.
 */
function LogoSlot({ src, alt, placeholder, className }: LogoSlotProps) {
  return (
    <span
      className={`relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-dashed border-primary/40 bg-secondary ${className ?? ''}`}
    >
      {src ? (
        <Image src={src} alt={"Department of Education official logo"} fill sizes="44px" className="object-contain p-1" />
      ) : (
        <span className="px-1 text-center text-[8px] font-semibold uppercase leading-none tracking-wide text-primary/60">
          {"Mati City"}
          <span className="sr-only">{alt}</span>
        </span>
      )}
    </span>
  )
}

/**
 * Official logo lockup: the DepEd seal and the Schools Division Office seal.
 * Drop the official artwork into `/public` and pass the paths via `depedSrc`
 * and `sdoSrc` to replace the placeholder spaces.
 */
export function Logo({
  depedSrc,
  sdoSrc,
  className,
}: {
  depedSrc?: string
  sdoSrc?: string
  className?: string
}) {
  return (
    <span className={`flex items-center gap-1.5 ${className ?? ''}`}>
      <LogoSlot src={"/Deped Circle.png"} alt="Department of Education official logo" placeholder="DepEd" />
      <LogoSlot
        src={"/Mati Division Logo.jpg"}
        alt="Schools Division Office of Mati City official logo"
        placeholder="Mati City"
      />
    </span>
  )
}
