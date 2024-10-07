import React from "react";

const VoiceDisplay = ({ audioSrc, title, desc, date, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-6 w-full max-w-lg mx-4 sm:mx-8 lg:mx-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✖️
        </button>

        <div className="flex flex-col items-start space-y-4">
          {/* Audio Player */}
          <audio controls className="w-full rounded-md border border-gray-300">
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Details Section */}
          <div className="text-left space-y-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
            <p className="text-xs text-gray-500">Date: {date}</p>
          </div>

          {/* Download Button */}
          <button
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
            onClick={() => {
              // Logic for downloading the audio file
            }}
          >
            Download Audio
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceDisplay;
