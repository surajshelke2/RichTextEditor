"use client"
import { useState } from "react";
import PostDailog from "./components/PostDailog/PostDailog";
import  Article  from "./Article/page"

export default function HomePageSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenNewWindow = () => {
    // Open a new window or tab with the article page
    window.open('./Article', '_blank');
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Button to open media dialog */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center space-x-1 text-blue-500 hover:bg-gray-100 px-2 py-1 rounded-lg"
          >
            <span>📷</span>
            <span>Media</span>
          </button>

          {/* Button to open the article page in a new tab */}
          <button
            onClick={handleOpenNewWindow}
            className="flex items-center space-x-1 text-orange-500 hover:bg-gray-100 px-2 py-1 rounded-lg"
          >
            <span>📝</span>
            <span>Write article</span>
          </button>
        </div>
      </div>

      {/* Media dialog */}
      <PostDailog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Media"
      />
    </div>
  );
}
