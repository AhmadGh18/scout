import React from "react";

const SingleImageContainer = ({ img, title, desc, date, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex   justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[80vw] md:w-[60vw] h-[70vh] flex flex-col md:flex-row-reverse  overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2 md:h-full w-full h-1/2">
          <img className="h-full w-full object-cover" src={img} alt={title} />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{desc}</p>
            <p className="text-sm text-gray-500">تاريخ النشر: {date}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <a
              href={img}
              download
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Download Image
            </a>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImageContainer;
