import type { PillarId } from "@/lib/editorial";

export function EditorialScene({ kind, id }: { kind: PillarId; id: string }) {
  const metal = `${id}-metal`;
  return <svg className={`editorial-scene editorial-scene-${kind}`} viewBox="0 0 520 320" fill="none" aria-hidden="true" focusable="false">
    <defs><linearGradient id={metal} x1="100" y1="80" x2="390" y2="250" gradientUnits="userSpaceOnUse"><stop stopColor="var(--scene-metal-a)" /><stop offset=".45" stopColor="var(--scene-metal-b)" /><stop offset="1" stopColor="var(--scene-metal-a)" /></linearGradient></defs>
    <g className="editorial-grid"><path d="M20 280h480M20 240h480M20 200h480M20 160h480M20 120h480M20 80h480M60 40v260m80-260v260m80-260v260m80-260v260m80-260v260m80-260v260" /></g>
    {kind === "work" && <>
      <g className="editorial-layer work-monitor"><rect x="218" y="47" width="234" height="142" rx="5" fill={`url(#${metal})`} /><rect x="228" y="57" width="214" height="120" rx="2" /><path d="M321 189v30m28-30v30m-47 0h66M244 158V79h68m14 0h94v79H244m81-78v79" /><path className="scene-quiet" d="M258 94h36m-36 12h24m49-12h49m-49 12h67m-67 12h43" /></g>
      <g className="editorial-layer work-laptop"><path d="M65 160q0-5 5-5h125q5 0 5 5v78H65Z" fill={`url(#${metal})`} /><path d="M74 165h117v64H74Zm-9 73-18 17q0 5 6 5h162q6 0 6-5l-21-17M121 244h25" /><path className="scene-quiet" d="M86 177h69m-69 12h94m-94 12h58" /></g>
      <rect x="290" y="250" width="133" height="27" rx="5" fill={`url(#${metal})`} /><path d="M305 259h22v9h-22Zm33 0h10v9h-10m13-9h10v9h-10m33-8h20" />
      <path className="editorial-wire" d="M221 253h33q16 0 16 12v1q0 10 20 10m67-26v-17q0-10-20-10" />
      <path className="editorial-packet" pathLength="1" d="M221 253h33q16 0 16 12v1q0 10 20 10h67v-43q0-10-20-10" />
      <g className="scene-label"><text x="66" y="142">HOST</text><text x="220" y="33">DISPLAY</text><text x="426" y="267">I/O</text></g>
    </>}
    {kind === "storage" && <>
      <path className="editorial-wire" d="M132 199h79q20 0 20-20v-49q0-20 20-20h48m-68 62h76q22 0 22 20v43h47" />
      <path className="editorial-packet" pathLength="1" d="M132 199h79q20 0 20-20v-49q0-20 20-20h48m-68 62h76q22 0 22 20v43h47" />
      <g className="editorial-layer storage-files"><path d="M53 153h74l19 19v73H53Z" fill={`url(#${metal})`} /><path d="M127 153v19h19M65 188h67m-67 13h48m-48 13h57" /><path d="M65 142h74l18 18v73m-80-102h72l18 18v71" /></g>
      <g className="editorial-layer storage-local"><rect x="299" y="62" width="142" height="100" rx="5" fill={`url(#${metal})`} /><rect x="310" y="73" width="51" height="76" rx="3" /><rect x="370" y="73" width="59" height="76" rx="3" /><path d="M322 85h27m-27 8h27m33-8h35m-35 8h35" /><circle cx="335" cy="134" r="2" /><circle cx="400" cy="134" r="2" /></g>
      <g className="editorial-layer storage-cloud"><path d="M362 230c-14-22 7-51 29-46 12-25 58-22 68 7 31-1 41 40 12 49h-105q-10-1-4-10Z" fill={`url(#${metal})`} /><path d="m404 223 9-9 9 9m-9-9v23" /></g>
      <g className="scene-label"><text x="52" y="275">FILES</text><text x="300" y="49">LOCAL COPY</text><text x="362" y="268">OFFSITE COPY</text></g>
    </>}
    {kind === "travel" && <>
      <g className="editorial-layer travel-case"><rect x="94" y="72" width="340" height="188" rx="15" fill={`url(#${metal})`} /><rect x="106" y="84" width="316" height="164" rx="7" /><path d="M285 84v164M106 215h179m0-66h137" /><path className="scene-quiet" d="M116 92h160m-160 146h160m19-146h117m-117 146h117" /></g>
      <g className="editorial-layer travel-charger"><rect x="126" y="111" width="84" height="65" rx="10" fill={`url(#${metal})`} /><path d="M148 111v-10m17 10v-10m-22 57h43m-32-35h19v9h-19" /></g>
      <g className="editorial-layer travel-cable"><path d="M232 112c-29 13-29 64 0 72s42-31 13-42-44 33-9 42m13-40v-21" /><rect x="243" y="111" width="12" height="16" rx="2" /></g>
      <g className="editorial-layer travel-drive"><rect x="313" y="171" width="80" height="53" rx="6" fill={`url(#${metal})`} /><path d="M326 186h29m-29 7h50" /><circle cx="379" cy="210" r="2" /></g>
      <path className="editorial-wire" d="M47 221v-75q0-24 25-24h22m340 78h22q21 0 21-22v-50" />
      <path className="editorial-packet" pathLength="1" d="M47 221v-75q0-24 25-24h22m340 78h22q21 0 21-22v-50" />
      <g className="scene-label"><text x="108" y="55">EVERYDAY CARRY</text><text x="95" y="286">PACK LESS. CONNECT WELL.</text></g>
    </>}
  </svg>;
}
