import { useState, useEffect } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-yellow-400 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;