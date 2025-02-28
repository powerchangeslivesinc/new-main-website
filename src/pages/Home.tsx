import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
        <p className="text-gray-700 mt-4">
          We are dedicated to providing resources and programs that create lasting change.
        </p>
      </div>
    </div>
  );
};

export default Home;
