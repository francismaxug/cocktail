"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 className="text-7xl">{count}</h1>
      <button
        onClick={() => setCount((p) => p + 1)}
        className=" btn btn-primary"
      >
        increase
      </button>
    </div>
  );
};
export default ClientPage;
