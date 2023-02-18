import React from "react";

export default function Page({ title, sections = {} }) {
  return (
    <section>
      <h1>{title}</h1>
      {sections}
    </section>
  );
}
