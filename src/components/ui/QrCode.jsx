import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QrCode({ value, label }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toString(value, {
      type: "svg",
      margin: 1,
      color: { dark: "#3fb950ff", light: "#00000000" },
    }).then((svg) => {
      if (!cancelled) setSrc(`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`);
    });
    return () => {
      cancelled = true;
    };
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex size-28 items-center justify-center rounded-lg border border-line bg-panel p-2">
        {src ? (
          <img src={src} alt={`QR code to ${label}`} className="size-full" />
        ) : (
          <div className="size-full animate-pulse rounded bg-line/40" />
        )}
      </div>
      <span className="font-mono text-xs text-muted"># scan for {label}</span>
    </div>
  );
}
