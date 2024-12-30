interface CircularProgressProps {
    percentage: number
    label: string
  }
  
  export function CircularProgress({ percentage, label }: CircularProgressProps) {
    const circumference = 2 * Math.PI * 45 // radius is 45
    const strokeDashoffset = circumference - (percentage / 100) * circumference
  
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-[#5B8C51]"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.5s ease-in-out',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-teal-800">{percentage}%</span>
          </div>
        </div>
        <span className="mt-4 text-lg font-medium text-teal-800">{label}</span>
      </div>
    )
  }
  
  