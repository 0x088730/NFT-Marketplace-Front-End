function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#B620E0" />
            <stop offset="85.56%" stopColor="#32C5FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;
  