import React, { useState, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextStyle from '@tiptap/extension-text-style';
import EmojiPicker from 'emoji-picker-react';
import { useDropzone } from 'react-dropzone';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineRedo,
  AiOutlineUndo,
  AiOutlineFileImage,
  AiOutlineSmile,
} from 'react-icons/ai';

interface EditorProps {
  post: string;
  setPost: React.Dispatch<React.SetStateAction<string>>;
}

const PlainEditor: React.FC<EditorProps> = ({ post, setPost }) => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextStyle,
      TaskList,
      TaskItem.configure({ nested: true }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgUrl = reader.result as string;
        setImages((prevImages) => [...prevImages, imgUrl]);
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  });

  const addEmoji = (emoji: any) => {
    editor?.chain().focus().insertContent(emoji.emoji).run();
    setShowEmojiPicker(false);
  };

  // Close emoji picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="editor-container flex flex-col p-4 border rounded-lg relative">
      {/* Toolbar */}
      <div className="toolbar flex flex-wrap gap-2 p-2 bg-gray-100 border-b sticky top-0 z-10">
        {/* Text Formatting */}
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          data-tooltip="Bold"
        >
          <AiOutlineBold className="text-gray-500 text-xl" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          data-tooltip="Italic"
        >
          <AiOutlineItalic className="text-gray-500 text-xl" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().run()}
          data-tooltip="Underline"
        >
          <AiOutlineUnderline className="text-gray-500 text-xl" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          data-tooltip="Strikethrough"
        >
          <AiOutlineStrikethrough className="text-gray-500 text-xl" />
        </button>

        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().undo().run()}
          data-tooltip="Undo"
        >
          <AiOutlineUndo className="text-gray-500 text-xl" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => editor?.chain().focus().redo().run()}
          data-tooltip="Redo"
        >
          <AiOutlineRedo className="text-gray-500 text-xl" />
        </button>

        {/* Emoji Picker */}
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          data-tooltip="Add Emoji"
        >
          <AiOutlineSmile className="text-gray-500 text-xl" />
        </button>

        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          {...getRootProps()}
          data-tooltip="Add Image"
        >
          <AiOutlineFileImage className="text-gray-500 text-xl" />
        </button>
        <input {...getInputProps()} />
      </div>

   
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute z-20 bg-white p-2 shadow-md rounded top-10 right-10"
        >
          <EmojiPicker onEmojiClick={addEmoji} />
        </div>
      )}

   
      <EditorContent
        editor={editor}
        className="editor-content p-4 bg-white border rounded-t-lg h-60 overflow-auto resize-none"
      />


      <div className="image-gallery grid grid-cols-3 gap-2 mt-2">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img src={img} alt={`uploaded-${index}`} className="w-full h-auto rounded" />
            <button
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded"
              onClick={() => deleteImage(index)}
              title="Delete Image"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlainEditor;
