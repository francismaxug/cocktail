interface Links {
  href: string;
  label: string;
}

interface SharedLayout {
  children: React.ReactNode;
}

interface P {
  id: string;
}
interface Params {
  params: P;
}

interface Drinks {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
// interface Single {
//   drinks: Drinks[];
// }

interface Tasks {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
}

interface Initail {
  message: string | null;
}
