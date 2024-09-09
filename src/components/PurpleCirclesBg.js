export const PurpleCirclesBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute -left-[35%] -top-[5%] w-3/4 h-3/4 opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="glowGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%">
            <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
      </svg>
      <svg
        className="hidden lg:flex absolute -right-3/4 w-1/2 lg:-right-1/4  lg:w-3/4 lg:h-3/4 opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
      </svg>
    </div>
  );
};
