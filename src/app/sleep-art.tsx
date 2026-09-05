export default function SleepArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 180" fill="none" aria-hidden="true">
      <ellipse cx="395" cy="89" rx="62" ry="62" fill="white" fillOpacity=".045" />
      <g strokeWidth="1.2">
        <path d="M1 119C112 119 129 40 235 40S375 153 599 58" stroke="#d7c8d9" />
        <path d="M1 130C120 130 146 55 248 55S390 160 599 77" stroke="#e2b5d9" />
        <path d="M1 141C133 141 159 70 261 70S407 166 599 96" stroke="#e7cfdf" />
        <path d="M1 152C145 152 173 85 274 85S423 172 599 115" stroke="#dedce9" />
      </g>
    </svg>
  );
}
