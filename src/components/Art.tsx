import { useState } from "react";

const Art = () => {
  // Sample art images (Replace these URLs with actual images)
  const artPieces = [
    { id: 1, title: "Abstract Colors", src: "https://via.placeholder.com/300" },
    { id: 2, title: "Modern Design", src: "https://via.placeholder.com/300" },
    { id: 3, title: "Nature Sketch", src: "https://via.placeholder.com/300" },
    { id: 4, title: "Urban Streets", src: "https://via.placeholder.com/300" },
    { id: 5, title: "Minimalism", src: "https://via.placeholder.com/300" },
    { id: 6, title: "Futuristic Concept", src: "https://via.placeholder.com/300" }
  ];

  // State to track selected image
  const [selectedArt, setSelectedArt] = useState<string | null>(null);

  return (
    <div className="p-6">

      {/* Art Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artPieces.map((art) => (
          <div
            key={art.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedArt(art.src)}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-48 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                {art.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Art View */}
      {selectedArt && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedArt(null)}
        >
          <img src={selectedArt} alt="Selected Art" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default Art;
