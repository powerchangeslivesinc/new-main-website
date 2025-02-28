const Hero = () => {
    return (
      <section className="relative w-full h-[800px] bg-gray-200 flex items-center justify-center">
        {/* Placeholder Image */}
        <img 
          src="t-shirt-mockup-of-a-family-of-three-in-the-living-room-28071.jpg" 
          alt="Hero Placeholder"
          className="absolute w-full h-full"
        />
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Power Changes Lives</h1>
          <p className="mt-4 text-lg md:text-xl">
            Empowering communities through impactful programs and support.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  