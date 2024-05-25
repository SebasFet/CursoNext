"use client" /**  Sirve para entender el manejo de js con jsx */

import React from "react";

export default function HomePage() {
  return(
    <section>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          alert("Page Not Found")
        }}
      >
        Click here
      </button>
    </section>
  );

}
