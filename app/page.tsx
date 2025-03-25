'use client';

import { hello } from "./hello";

export default function Home() {


  return (
    <div>
      <h1>Szia Szabi</h1>
      <button onClick={hello}>Click me</button>
    </div>
  );
}

