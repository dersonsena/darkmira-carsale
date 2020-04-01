import React from "react";

const TempPage = (props: any) => {
  return (
    <>
      <div>Olá !</div>
      <h2>
        <code>{JSON.stringify(props.meta)}</code>
      </h2>
    </>
  );
};

export default TempPage;
