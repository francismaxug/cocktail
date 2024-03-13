import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Drinks({ drinks }: { drinks: Drinks[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className=" text-xl font-medium">
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className=" relative h-48 mb-4">
              <Image
                priority
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                layout="fill"
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                className=" rounded-lg shadow-lg"
              />
            </div>

            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}
