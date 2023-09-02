import React, { useState, useRef, ChangeEvent, useEffect } from 'react';

interface AutoResizeTextareaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function AutoResizeTextarea({ value, onChange }: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Adjust textarea height initially and whenever the content changes
    adjustTextareaHeight();
  }, [value]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height to auto
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${newHeight}px`; // Set the new height
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
    adjustTextareaHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      style={{
        padding: 10,
        width: '100%', // Set the width to 100% of the parent
        overflowY: 'hidden', // Hide vertical scrollbar
        resize: 'none', // Disable resizing in width
      }}
      value={value || ''}
      onChange={handleChange}
    />
  );
}

export default AutoResizeTextarea;
