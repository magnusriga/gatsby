import React from "react"

export default () => {
  console.log(`RE-RENDERING...`);
  return (
    <>
      <a href='#foo'>Link that should not cause re-render</a>
      <div>Hello world!</div>
    </>
  );
}
