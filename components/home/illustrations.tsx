export function SignalPath() {
  return (
    <svg
      className="home-signal"
      aria-hidden="true"
      focusable="false"
    >
      <line className="signal-track" x1="70%" x2="70%" y1="0" y2="100%" />
      <line className="signal-progress" pathLength="1" x1="70%" x2="70%" y1="0" y2="100%" />
    </svg>
  );
}

export function TrustContours() {
  return (
    <svg
      className="trust-contours"
      viewBox="0 0 600 640"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <path
          key={index}
          d={`M${70 + index * 22} -30C${-40 + index * 28} 120 ${480 + index * 15} 185 ${380 + index * 23} 360S${60 + index * 32} 510 ${200 + index * 28} 690`}
        />
      ))}
    </svg>
  );
}
