import Image from "next/image";

export default function Images() {
  return (
    <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
      <div>
        <Image
          src="/images/horizontal-grinder-thumb.jpg"
          alt="horizontal grinder"
          width={800}
          height={600}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src="/images/chipper-thumb.jpg"
          alt="wood chipper"
          width={800}
          height={600}
        />
      </div>
      <div>
        <Image
          src="/images/dump-truck-thumb.jpg"
          alt="dump truck"
          width={800}
          height={600}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src="/images/trailer-thumb.jpg"
          alt="trailer"
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/images/excavator-thumb.jpg"
          alt="excavator"
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/images/vertical-grab-thumb.jpg"
          alt="vertical grab"
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
