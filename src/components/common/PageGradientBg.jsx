import React from "react";

export default function PageGradientBg() {
  return (
    <div className="fluid absolute inset-0 -z-20 bg-gradient-to-br from-light-gradient-f7cf68/20 to-light-f88540/20 dark:from-dark-0d0d0d dark:to-light-833E15/30">
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-light-833E15/20 blur-[130px] dark:bg-light-833E15/30 sm:bg-light-833E15/40"></div>
      <div className="absolute bottom-0 right-0 -z-20 h-96 w-96 rounded-full bg-light-f88540/40 blur-[130px] dark:bg-dark-0d0d0d/50"></div>
    </div>
  );
}
