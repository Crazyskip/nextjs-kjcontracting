import Image from "next/image";

export default function Images() {
  return (
    <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
      <div>
        <Image
          src="/images/horizontal-grinder-thumb.webp"
          alt="horizontal grinder"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/chipper-thumb.webp"
          alt="wood chipper"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/dump-truck-thumb.webp"
          alt="dump truck"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/trailer-thumb.webp"
          alt="trailer"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/excavator-thumb.webp"
          alt="excavator"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <Image
          src="/images/vertical-grab-thumb.webp"
          alt="vertical grab"
          width="800"
          height="600"
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
