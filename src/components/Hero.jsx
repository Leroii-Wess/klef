import hero from "../images/dark-flower.jpg";

function Hero() {
  return (
    <div className="mt-36 m-32 h-[calc(100vh-90px)] overflow-hidden rounded-[30px]">
      <div
        className="relative h-full w-full hero-background"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-white px-6 md:px-12 z-10 p-20 rounded-2xl bg-[rgba(50,71,74,0.20)] border border-customSlate shadow-2xl backdrop-blur-[6.3px]">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome to MediHealth Clinic
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg">
              Healthcare at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
