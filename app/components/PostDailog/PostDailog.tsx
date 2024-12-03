import React, { useState } from 'react';
import Editor from '../PlainEditor';

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const PostDialog: React.FC<DialogBoxProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const [post, setPost] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
        style={{ overflow: "hidden" }}
      >
  
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500"
            aria-label="Close dialog"
          >
            ✖
          </button>
        </div>

        <div className="flex-1 p-4 overflow-auto">
          <Editor post={post} setPost={setPost} />
        </div>

    
        <div className="flex justify-end p-4 border-t">
          <button
            
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDialog;
