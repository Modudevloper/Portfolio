import React from "react";

export default function ArcSidebar({ activeIndex, setActiveIndex }) {
  const icons = ["home", "user", "briefcase", "camera", "desktop", "paper-plane"];

  // Arc parameters for large screen
  const radius = 165;
  const centerX = 35;
  const centerY = 140;
  const angleStart = (-30 * Math.PI) / 90;
  const angleEnd = (30 * Math.PI) / 90;

  return (
    <>
      {/* Arc SVG - show only on md and above */}
      <svg
        className="hidden md:block absolute z-0 animate-fade-in"
        width="380"
        height="470"
        viewBox="0 0 220 280"
        xmlns="http://www.w3.org/2000/svg"
        style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
      >
        <circle
          cx="110"
          cy="140"
          r="100"
          fill="none"
          stroke="#facc15"
          strokeWidth="3"
          strokeDasharray="628 400"
          strokeLinecap="round"
          strokeDashoffset="-315"
          transform="rotate(90 110 140)"
        />
        {(() => {
          const angle1 = (-60 * Math.PI) / 180;
          const angle2 = (60 * Math.PI) / 180;
          const dot1 = {
            x: 64 + 100 * Math.cos(angle1),
            y: 127 + 100 * Math.sin(angle1),
          };
          const dot2 = {
            x: 64 + 100 * Math.cos(angle2),
            y: 153 + 100 * Math.sin(angle2),
          };
          return (
            <>
              <circle cx={dot1.x} cy={dot1.y} r="6" fill="#facc15" />
              <circle cx={dot2.x} cy={dot2.y} r="6" fill="#facc15" />
            </>
          );
        })()}
      </svg>

      {/* Icons for large screens (arc layout) */}
      <div
        className="hidden md:block absolute z-10 w-[220px] h-[280px]"
        style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
      >
        {icons.map((icon, i) => {
          const total = icons.length;
          const angle = angleStart + (i / (total - 1)) * (angleEnd - angleStart);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute cursor-pointer"
              onClick={() => setActiveIndex(i)}
              style={{
                left: `${x - 20}px`,
                top: `${y - 20}px`,
                animation: `icon-entry 0.6s ease-out forwards`,
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
              }}
            >
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300
                  ${activeIndex === i
                    ? "bg-yellow-400 text-black scale-110 shadow-2xl"
                    : "bg-black text-white hover:bg-yellow-500 hover:text-black hover:scale-105"}
                `}
              >
                <i className={`fas fa-${icon} text-sm`}></i>
              </div>
            </div>
          );
        })}
      </div>

      {/* Icons for small screens - horizontal bar at bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 flex justify-around items-center py-2 md:hidden z-20 shadow-inner">
        {icons.map((icon, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300
              ${activeIndex === i
                ? "bg-yellow-400 text-black scale-110 shadow-2xl"
                : "bg-black text-white hover:bg-yellow-500 hover:text-black hover:scale-105"}
            `}
            aria-label={icon}
          >
            <i className={`fas fa-${icon} text-sm`}></i>
          </button>
        ))}
      </div>
    </>
  );
}
