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

export function TechnicalScene({ kind, id }: { kind: number; id: string }) {
  const metal = `${id}-metal`;
  return (
    <svg
      className={`technical-scene scene-${kind}`}
      viewBox="0 0 360 210"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={metal}
          x1="70"
          y1="25"
          x2="270"
          y2="185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--scene-metal-a)" />
          <stop offset=".52" stopColor="var(--scene-metal-b)" />
          <stop offset="1" stopColor="var(--scene-metal-a)" />
        </linearGradient>
      </defs>
      <g className="scene-grid">
        <path d="M20 174H340M45 151H315M70 128H290M95 105H265M70 185L155 88M125 185L174 88M180 185V88M235 185L186 88M290 185L205 88" />
      </g>
      {kind === 0 && (
        <>
          <g className="scene-layer layer-back">
            <path d="m78 126 104-40 105 40-105 41z" fill={`url(#${metal})`} />
            <path d="M78 126v16l104 41 105-41v-16M182 167v16" />
          </g>
          <g className="scene-layer layer-mid">
            <path d="m78 92 104-40 105 40-105 41z" fill={`url(#${metal})`} />
            <path d="M78 92v16l104 41 105-41V92M182 133v16" />
          </g>
          <g className="scene-layer layer-front">
            <path d="m78 58 104-40 105 40-105 41z" fill={`url(#${metal})`} />
            <path d="M78 58v16l104 41 105-41V58M182 99v16M132 58l50-19 50 19-50 19z" />
          </g>
          <path className="scene-flow" d="M182 184v12h139v-70h-28" />
          <path
            className="scene-packet"
            pathLength="1"
            d="M182 184v12h139v-70h-28"
          />
        </>
      )}
      {kind === 1 && (
        <>
          <g className="scene-layer layer-back">
            <rect
              x="69"
              y="40"
              width="135"
              height="112"
              rx="5"
              fill={`url(#${metal})`}
            />
            <path d="M82 61h62M82 74h36M82 135h72" />
          </g>
          <g className="scene-layer layer-mid">
            <rect
              x="113"
              y="59"
              width="135"
              height="112"
              rx="5"
              fill={`url(#${metal})`}
            />
            <path d="M127 81h62M127 94h37M127 154h72" />
          </g>
          <g className="scene-layer layer-front">
            <rect
              x="157"
              y="78"
              width="135"
              height="112"
              rx="5"
              fill={`url(#${metal})`}
            />
            <path d="M171 101h62M171 115h37M171 171h72" />
            <path className="scene-highlight" d="m251 146 9 9 17-22" />
          </g>
        </>
      )}
      {kind === 2 && (
        <>
          <path d="M30 158h300M51 158v31m258-31v31" />
          <path className="scene-flow" d="M179 110v64q0 13 13 13h91" />
          <path className="scene-packet" pathLength="1" d="M179 110v64q0 13 13 13h91" />
          <g className="scene-layer layer-back">
            <rect x="101" y="27" width="151" height="87" rx="4" fill={`url(#${metal})`} />
            <path d="M112 98h129M177 114v29m-26 0h53" />
          </g>
          <g className="scene-layer layer-mid">
            <path d="m102 147 7-18h140l7 18z" fill={`url(#${metal})`} />
            <path d="M122 136h88m9 0h17" />
          </g>
          <g className="scene-layer layer-front">
            <rect x="54" y="111" width="25" height="35" rx="4" fill={`url(#${metal})`} />
            <rect x="274" y="129" width="23" height="17" rx="4" fill={`url(#${metal})`} />
          </g>
        </>
      )}
      {kind === 3 && (
        <>
          <path className="scene-flow" d="M50 142h41V74h95v75h99V48h29" />
          <path
            className="scene-packet"
            pathLength="1"
            d="M50 142h41V74h95v75h99V48h29"
          />
          <g className="scene-layer layer-back">
            <rect
              x="63"
              y="52"
              width="57"
              height="45"
              rx="3"
              fill={`url(#${metal})`}
            />
          </g>
          <g className="scene-layer layer-mid">
            <rect
              x="156"
              y="120"
              width="57"
              height="55"
              rx="3"
              fill={`url(#${metal})`}
            />
          </g>
          <g className="scene-layer layer-front">
            <path
              d="m271 39 14-9 14 9v18l-14 9-14-9z"
              fill={`url(#${metal})`}
            />
          </g>
          <path d="m40 132 10 10-10 10M232 177h76m-9-9 9 9-9 9" />
        </>
      )}
      {kind === 5 && (
        <>
          <path d="M50 31v153M45 31h10m-10 153h10M76 196h220m-220-5v10m220-10v10" />
          <g className="scene-layer layer-back">
            <rect x="70" y="25" width="238" height="160" rx="8" fill={`url(#${metal})`} />
            <rect x="81" y="37" width="216" height="136" rx="4" />
            <path d="M190 37v136M81 112h109M94 124h81M94 134h81M94 144h81" />
          </g>
          <g className="scene-layer layer-mid">
            <rect x="211" y="59" width="63" height="72" rx="4" />
            <path d="M231 59V48m23 11V48M224 141h39" />
          </g>
          <g className="scene-layer layer-front">
            <path className="scene-highlight" d="M112 64h38a13 13 0 0 1 0 26h-37a10 10 0 0 1 0-20h34a6 6 0 0 1 0 12h-31" />
            <path d="M106 62h7v10h-7zM115 78h8v8h-8zM297 103h20v9h-20" />
          </g>
        </>
      )}
      {kind === 4 && (
        <>
          <path d="M74 156V79a21 21 0 0 1 21-21h44m147-8v85a25 25 0 0 1-25 25h-32" />
          <g className="scene-layer layer-back">
            <rect
              x="95"
              y="82"
              width="77"
              height="77"
              rx="5"
              fill={`url(#${metal})`}
            />
          </g>
          <g className="scene-layer layer-mid">
            <rect
              x="172"
              y="38"
              width="77"
              height="77"
              rx="5"
              fill={`url(#${metal})`}
            />
          </g>
          <g className="scene-layer layer-front">
            <rect
              x="184"
              y="130"
              width="51"
              height="51"
              rx="4"
              fill={`url(#${metal})`}
            />
          </g>
          <path
            className="scene-highlight"
            d="m113 119 13 13 28-32M190 58h39m-39 13h25M200 155h19"
          />
        </>
      )}
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

export function BrandNetwork() {
  return (
    <div
      className="brand-network"
      role="img"
      aria-label="Brands and distributors connect through CANOD with Canadian customers"
    >
      <svg
        className="network-lines"
        viewBox="0 0 600 260"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20 80H150Q180 80 180 110V130H240M20 180H150Q180 180 180 150V130M360 130h60v-20q0-30 30-30h130M420 130v20q0 30 30 30h130" />
        <path
          className="network-signal"
          pathLength="1"
          d="M20 80H150Q180 80 180 110V130H420V150Q420 180 450 180H580"
        />
        <path
          className="network-grid"
          d="M60 15v230M120 15v230M180 15v230M240 15v230M300 15v230M360 15v230M420 15v230M480 15v230M540 15v230M0 30h600M0 80h600M0 130h600M0 180h600M0 230h600"
        />
      </svg>
      <span className="network-label network-source">
        Brands &amp;
        <br />
        distributors
      </span>
      <span className="network-core">
        <span className="wordmark">
          <span className="wordmark-mark" />
          CANOD
        </span>
        <span className="network-role">Research</span>
      </span>
      <span className="network-label network-destination">
        Canadian
        <br />
        customers
      </span>
    </div>
  );
}
