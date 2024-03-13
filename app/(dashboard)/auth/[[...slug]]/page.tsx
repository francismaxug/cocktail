import React from "react";

const CheckSLug = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  console.log(params);
  return <div>Hello</div>;
};

export default CheckSLug;
