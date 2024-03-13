import Image from "next/image";
import Link from "next/link";
import React from "react";

async function callId(obj: string): Promise<any> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj}`
    );
    if (!response.ok) throw new Error("There was an eror fetching data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function SingleDrinkPage({ params }: Params) {
  console.log(params.id);
  const data = await callId(params.id);
  // const { drinks } = data;
  // console.log(drinks[0]);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div className=" space-y-4">
      <Link href="/drinks" className=" btn btn-primary mt-8 mb-8">
        Back to drinks
      </Link>
      <h1 className=" text-4xl mb-8">{title}</h1>
      <Image
        priority
        src={imgSrc}
        alt={title}
        width={200}
        height={200}
        className=" w-48 h-48 rounded-lg shadow-lg mb-4"
      />
    </div>
  );
}
