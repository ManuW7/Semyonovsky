import { useEffect, useState } from "react";

function ArrowToPageStart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolledY = window.scrollY;
      setVisible(scrolledY > 500);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#">
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/arrowUp.webp"
        alt=""
        className={`arrowUpToStart ${visible ? "visible" : ""}`}
      />
    </a>
  );
}

export default ArrowToPageStart;
