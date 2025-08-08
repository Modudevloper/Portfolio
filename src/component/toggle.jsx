// import React, { useState, useEffect } from "react";

// const Switch = () => {
//   const [checked, setChecked] = useState(false);

//   // Page load par localStorage check karo aur dark mode set karo
//   useEffect(() => {
//     if (localStorage.getItem("theme") === "dark") {
//       setChecked(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   // Toggle handler
//   const handleToggle = () => {
//     if (checked) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setChecked(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setChecked(true);
//     }
//   };

//   return (
//     <label
//       htmlFor="themeToggle"
//       className="relative cursor-pointer w-12 text-gray-400"
//     >
//       <input
//         type="checkbox"
//         id="themeToggle"
//         className="opacity-0 w-full aspect-square absolute top-0 left-0 z-10 cursor-pointer"
//         checked={checked}
//         onChange={handleToggle}
//       />
//       <svg
//         width={48}
//         height={48}
//         viewBox="0 0 20 20"
//         fill="currentColor"
//         stroke="none"
//         className={`absolute left-0 top-0 w-full h-full transition-transform duration-400 ease-in-out ${
//           checked ? "rotate-[90deg]" : "rotate-[40deg]"
//         }`}
//         style={{ transformOrigin: "center center" }}
//       >
//         <mask id="moon-mask">
//           <rect x={0} y={0} width={20} height={20} fill="white" />
//           <circle
//             cx={11}
//             cy={3}
//             r={8}
//             fill="black"
//             style={{
//               transition:
//                 "transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575)",
//               transform: checked ? "translate(16px, -3px)" : "translate(0px, 0px)",
//             }}
//           />
//         </mask>
//         <circle
//           className="sunMoon"
//           cx={10}
//           cy={10}
//           r={8}
//           mask="url(#moon-mask)"
//           style={{
//             transformOrigin: "center center",
//             transition: "transform 0.4s ease",
//             transform: checked ? "scale(0.55)" : "scale(1)",
//           }}
//         />
//         <g>
//           {[18, 14, 6, 2, 6, 14].map((cx, i) => (
//             <circle
//               key={i}
//               className="sunRay"
//               cx={cx}
//               cy={
//                 i === 1 || i === 5
//                   ? 16.928
//                   : i === 2 || i === 4
//                   ? 3.1718
//                   : 10
//               }
//               r="1.5"
//               style={{
//                 transformOrigin: "center center",
//                 transform: checked ? "scale(1)" : "scale(0)",
//                 animation:
//                   checked && i >= 1
//                     ? `showRay1832 0.4s ease forwards ${0.05 * i}s`
//                     : "none",
//               }}
//               fill="currentColor"
//             />
//           ))}
//         </g>
//       </svg>

//       <style>{`
//         @keyframes showRay1832 {
//           0% { transform: scale(0); }
//           100% { transform: scale(1); }
//         }
//       `}</style>
//     </label>
//   );
// };

// export default Switch;
