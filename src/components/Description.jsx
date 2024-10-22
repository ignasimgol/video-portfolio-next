import Image from 'next/image';
import Link from 'next/link';

export default function Description() {
  return (
    <div className='relative h-[60vh] my-40'>
      {/* Carpeta 1 */}
      <Link href="/about">
        <div className="absolute top-0 left-10 transform rotate-[-10deg] z-10">
          <Image
            src="/images/folder.png"
            alt="Folder "
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Carpeta 2 */}
      <Link href="/about">
        <div className="absolute top-20 right-32 transform rotate-[15deg] z-20">
          <Image
            src="/images/folder.png"
            alt="Folder 2"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Carpeta 3 */}
      <Link href="/about">
        <div className="absolute bottom-20 left-32 transform rotate-[5deg] z-30">
          <Image
            src="/images/folder.png"
            alt="Folder 3"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Carpeta 4 */}
      <Link href="/about">
        <div className="absolute bottom-0 right-10 transform rotate-[-20deg] z-40">
          <Image
            src="/images/folder.png"
            alt="Folder 4"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </div>
      </Link>
    </div>
  );
}
