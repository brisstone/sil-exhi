import { useState } from "react";

export default function GoogleForm() {
  const [count, setCount] = useState(0);
  return (
    <div>
      GoogleForm
      <h1>SEASTREL INTERNATIONAL LTD</h1>
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
