import { Culture } from "@/typings";
import Image from "next/image";

type Props = {
  promise: Promise<Culture[]>;
};

export default async function Card({ promise }: Props) {
  const data = await promise;
  return data.map((item) => (
    <div className="bg-gray-100 rounded-lg">
      <div className="w-full h-60 relative">
        <Image
          src={item.image}
          alt={item.name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <article className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {item.description}
        </article>
      </div>
    </div>
  ));
}
