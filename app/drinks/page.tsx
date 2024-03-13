import { Suspense } from "react";
import Loading from "./loading";
import Drinks from "@/components/Drinks";

const url: string =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

async function getallCocktails(url: string): Promise<any> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(url);
    if (!response.ok) throw new Error("There was an eror fetching data");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
const DrinksPage = async () => {
  const data = await getallCocktails(url);
  return (
    <div>
     
      <Suspense fallback={<Loading />}>
      <Drinks drinks={data.drinks} />
      </Suspense>
    </div>
  );
};
export default DrinksPage;
