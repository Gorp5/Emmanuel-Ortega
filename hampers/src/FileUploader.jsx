import React, { useRef, useState } from "react";
import Button from "./Button";

export default function FileUploader({
  idleSrc,
  successSrc,
  label,
  instruction,
  className,
}) {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const picked = e.target.files?.[0] ?? null;
    setFile(picked);
  };

  const shownSrc = file ? successSrc : idleSrc;

  return (
    <div className="uploader">
      <input ref={inputRef} type="file" onChange={handleFileChange} hidden />

      <Button
        src={shownSrc}
        alt={label}
        onClick={triggerFileSelect}
        className={className}
      />

      <div className="text-sm mt-2">
        {!file ? (
          <h2>Click the above hamster to input a file</h2>
        ) : (
          <>
            <p>Song name: {file.name}</p>
            <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
            <p>Type: {file.type || "unknown"}</p>
          </>
        )}
      </div>
    </div>
  );
}
