import React, { useState } from "react";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAI = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ask-ai?prompt=${prompt}`
      );
      const data = await response.text();
      console.log(data);
      setChatResponse(data);
    } catch (error) {
      console.log("Error generating image:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Talk to AI</h2>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt for AI"
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={askAI}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          Ask AI
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">AI Response:</h3>
        <p className="text-gray-800">{chatResponse || "Waiting for response..."}</p>
      </div>
    </div>
  );
};

export default Chat;
