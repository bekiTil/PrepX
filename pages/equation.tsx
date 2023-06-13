import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css';
import Quill from 'quill';
import katex from 'katex';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
if (typeof window !== 'undefined') {
    const Quill = require('quill');
    const BlockEmbed = Quill.import('blots/block/embed');
  
    class FormulaBlot extends BlockEmbed {
      static create(value: any) {
        const node = super.create();
        katex.render(value, node, { throwOnError: false });
        node.setAttribute('data-value', value);
        return node;
      }
  
      static value(node:any) {
        return node.getAttribute('data-value');
      }
    }
  
    FormulaBlot.blotName = 'formula';
    FormulaBlot.tagName = 'div';
  
    Quill.register(FormulaBlot);
  }

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video','formula'],
    // Add the formula button here
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
  keyboard: {
    bindings: {
      handleEnter: {
        key: 13,
        handler() {
          return false; // Prevent new line on Enter key press
        },
      },
    },
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'formula', // Add 'formula' format here
];

export default function Home() {
  const [content, setContent] = useState(``);

  const handleQuillChange = (value:any) => {
    console.log(value)
    setContent(value);
  };

  return (
    <div className="max-w-screen-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Equation Editor Example</h1>
      <label htmlFor="quill" className="block mb-2">
        Please write an equation:
      </label>
      <QuillNoSSRWrapper
        id="quill"
        value={content}
        onChange={handleQuillChange}
        modules={modules}
        formats={formats}
        theme="snow"
        className="bg-white border border-gray-300 p-2"
      />

<div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
