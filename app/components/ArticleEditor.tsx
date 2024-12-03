import React, { useState } from 'react';
import { Editor, EditorContent, useCurrentEditor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';


const MenuBar = ({editor }:{editor: Editor | null}) => {

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  
  return (
    <div className="flex flex-wrap gap-2 p-2 bg-gray-100 border-b border-gray-300">
     <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("bold")
            ? "bg-indigo-500 text-white border-indigo-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-indigo-100`}
      >
        Bold
      </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("italic")
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("strike")
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("code")
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}
           className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100"
           >
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}
           className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100"
           >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("paragraph")
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
          
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 1 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 2 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 3 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 4 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 5 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`px-4 py-2 text-sm font-medium border rounded-md ${
            editor.isActive("heading", { level: 6 })
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-indigo-100`}
        >
          H6
        </button>
        <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("bulletList")
            ? "bg-indigo-500 text-white border-indigo-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-indigo-100`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("orderedList")
            ? "bg-indigo-500 text-white border-indigo-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-indigo-100`}
      >
        Ordered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("codeBlock")
            ? "bg-indigo-500 text-white border-indigo-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-indigo-100`}
      >
        Code Block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("blockquote")
            ? "bg-indigo-500 text-white border-indigo-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-indigo-100`}
      >
        Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100"
      >
        Horizontal Rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100"
      >
        Hard Break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={`px-4 py-2 text-sm font-medium border rounded-md ${
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "bg-purple-500 text-white border-purple-500"
            : "bg-white text-gray-700 border-gray-300"
        } hover:bg-purple-100`}
      >
        Purple
      </button>
      <button
        onClick={addImage}
        className="px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100"
      >
        Add Image from URL
      </button>
    </div>
  );
};

const extensions = [
  Color,
  TextStyle,
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
  Image.configure({
    inline: false,
    allowBase64: true,
    HTMLAttributes: { style: 'max-width: 90%; height: auto; margin-left: auto; margin-right:auto' },
  }),
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6], // Ensure all heading levels are enabled
  }),
];


const handleDragAndDrop = (event: React.DragEvent<HTMLDivElement>, editor: Editor | null) => {
  event.preventDefault();

  if (!editor) return;

  const files = event.dataTransfer.files;
  if (files && files[0]) {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        editor.chain().focus().setImage({ src: reader.result }).run();
      }
    };

    reader.readAsDataURL(files[0]);
  }
};

const ArticleEditor = () => {
  const [title, setTitle] = useState('');
  const editor = useEditor({
    extensions,

    content: '<p>Write your article here...</p>',
  });

  return (
     <div className="p-4 border rounded shadow-lg bg-white space-y-4">
     <MenuBar editor={editor} />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your title here..."
        className="w-full p-3 text-xl font-semibold border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
      />

  
      <div
        className="p-6 border rounded shadow-md  bg-gray-50"
        onDrop={(event) => {
          event.preventDefault();
          const files = event.dataTransfer.files;
          if (files && files[0] && editor) {
            const reader = new FileReader();
            reader.onload = () => {
              if (typeof reader.result === 'string') {
                editor.chain().focus().setImage({ src: reader.result }).run();
              }
            };
            reader.readAsDataURL(files[0]);
          }
        }}
        onDragOver={(event) => event.preventDefault()}
      >
        
        <EditorContent editor={editor} className="prose lg:prose-lg m-2 max-w-none" />
      </div>
    </div>
  );
};

export default ArticleEditor;
