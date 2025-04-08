import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    try {
      const response = await fetch(`http://localhost:8080/generate-image?prompt=${prompt}`);
      const data = await response.json();

      // Örnek cevap: { images: ["url1", "url2"] }
      if (data?.images) {
        setImageUrls(data.images.slice(0, 4)); // En fazla 4 görsel
      }
    } catch (error) {
      console.log("Error generating image:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Generate Image</h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt for image"
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={generateImage}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          Generate
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <img
            src={url}
            key={index}
            alt={`Generated ${index}`}
            className="rounded-lg object-cover w-full h-32 shadow"
          />
        ))}

        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="w-full h-32 bg-gray-100 rounded-lg border border-dashed border-gray-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
