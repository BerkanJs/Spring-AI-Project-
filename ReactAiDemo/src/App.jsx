import { useState } from "react";
import ImageGenerator from "./components/ImageGenerator";
import Chat from "./components/Chat";
import RecipeGenerator from "./components/RecipeGenerator";

function App() {
  const [activeTab, setActiveTab] = useState("ImageGenerator");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { key: "ImageGenerator", label: "Image Generator" },
    { key: "Chat", label: "Chat" },
    { key: "RecipeGenerator", label: "Recipe Generator" },
  ];

  // Bileşenleri key ile eşleştiriyoruz
  const components = {
    ImageGenerator: <ImageGenerator />,
    Chat: <Chat />,
    RecipeGenerator: <RecipeGenerator />,
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 space-y-6 p-4">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`text-lg font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-2xl font-bold text-gray-700 capitalize mt-6">
        <h2>{tabs.find((t) => t.key === activeTab)?.label}</h2>
        <div className="mt-4 w-full flex justify-center">
          {components[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default App;
