import React, { useEffect, useState } from "react";
import "./ProgBar.css";

export default function ProgBar() {
  const [filled, setFilled] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading || filled >= 100) return;

    const delay = filled === 94 ? 2000 : 100;

    const t = setTimeout(() => {
      setFilled((prev) => Math.min(prev + 2, 100));
    }, delay);

    return () => clearTimeout(t);
  }, [filled, loading]);

  const handleReset = () => {
    setLoading(false);
    setFilled(0);
  };

  return (
    <div className="progressWrap">
      <div className="progressbar">
        <div
          className="progressbarFill"
          style={{ width: `${filled}%` }}
        />
      </div>

      <div className="progressButtons">
        <button className="btn" onClick={handleReset}>
          Reset
        </button>

        <button
          className="btn"
          onClick={() => {
            setFilled(0);
            setLoading(true);
          }}
        >
          Combine
        </button>
      </div>
    </div>
  );
}
