interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 max-w-xs ${className}`}>
      <img
        src="/algonimation-logo.png"
        alt="Algonimation Logo"
        className="w-12 h-12 rounded-lg shadow-lg object-contain"
        style={{ minWidth: 48, minHeight: 48 }}
      />
      {showText && (
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
          Algonimation
        </span>
      )}
    </div>
  );
}
