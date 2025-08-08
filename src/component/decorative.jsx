import { motion } from "framer-motion";

const blobPaths = [
  "M44.8,-67.2C57.6,-55,61.9,-38.6,66.4,-22.7C71,-6.8,75.9,8.6,74.6,23.1C73.3,37.5,65.7,51,53.3,59.6C40.9,68.1,23.6,71.7,8.7,66.9C-6.3,62.1,-12.6,49,-25.4,45.6C-38.2,42.2,-57.5,48.5,-63.7,40.7C-69.9,32.9,-62.9,11,-58.1,-9.7C-53.3,-30.4,-50.7,-50.9,-40.5,-63.6C-30.3,-76.3,-12.4,-81.3,3.9,-85.5C20.3,-89.7,40.6,-93.5,44.8,-67.2Z",
  "M44.3,-53.7C56.4,-45.7,61.9,-30.3,63.3,-15.9C64.6,-1.6,61.8,11.8,56.2,26.4C50.6,41.1,42.2,57,29.9,63.7C17.6,70.3,1.4,67.6,-11.8,62.3C-25,57,-36.3,49.1,-47.4,39.7C-58.5,30.3,-69.3,19.4,-72.2,6.3C-75.2,-6.8,-70.3,-21.2,-61.1,-30.6C-51.9,-40.1,-38.4,-44.7,-26.3,-52.3C-14.2,-59.9,-7.1,-70.6,3.5,-75.3C14.1,-79.9,28.3,-78.4,44.3,-53.7Z",
  "M40.3,-61.5C53.1,-52.8,62.9,-41.1,66.7,-28.1C70.6,-15,68.5,-0.8,64.1,13.2C59.6,27.3,52.9,40.4,43.4,48.5C33.8,56.7,21.4,59.9,9.7,57.6C-2.1,55.2,-13.3,47.3,-27.3,42.6C-41.3,38,-58,36.7,-63.7,28.5C-69.5,20.3,-64.3,5.2,-59,-7.6C-53.7,-20.4,-48.3,-30.8,-40.4,-39.6C-32.5,-48.4,-22.1,-55.6,-11,-62.2C0.2,-68.9,10.4,-74.9,21.3,-70.5C32.3,-66,43.9,-51.8,40.3,-61.5Z",
  "M36.6,-51.7C47.7,-42.8,55.9,-33.5,61.5,-22.1C67.2,-10.7,70.2,3,66.8,16.4C63.5,29.8,53.7,42.9,42.5,49.1C31.2,55.3,18.6,54.5,7.2,50.4C-4.2,46.3,-8.5,38.8,-21.7,37.7C-34.9,36.5,-57,41.6,-60.3,34.2C-63.6,26.8,-48.1,6.9,-43.3,-9.6C-38.5,-26.1,-44.5,-39.2,-42.4,-48.6C-40.3,-58.1,-30.1,-63.9,-18.1,-64.9C-6,-65.8,7,-62,21.5,-59.7C36,-57.5,51.2,-56.7,36.6,-51.7Z",
];

const colors = ["#FDE68A", "#FACC15", "#EAB308", "#FEF08A", "#FFF7E0"];

export default function DecorativeBlobs() {
  const blobs = Array.from({ length: 6 }).map((_, i) => {
    const size = 200 + Math.random() * 100;
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    const delay = Math.random() * 5;
    const rotateStart = Math.random() * 360;

    return {
      size,
      top,
      left,
      delay,
      rotateStart,
      path: blobPaths[i % blobPaths.length],
      color: colors[i % colors.length],
    };
  });

  return (
    <>
      {blobs.map((blob, i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute pointer-events-none -z-10"
          width={blob.size}
          height={blob.size}
          viewBox="0 0 100 100"
          style={{
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            position: "absolute",
            opacity: 0.25,
            filter: "blur(25px)",
            transformOrigin: "50% 50%",
          }}
          animate={{
            rotate: [blob.rotateStart, blob.rotateStart + 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 30 + i * 7,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        >
          <path
            transform="translate(50 50)"
            d={blob.path}
            fill={blob.color}
          />
        </motion.svg>
      ))}
    </>
  );
}
