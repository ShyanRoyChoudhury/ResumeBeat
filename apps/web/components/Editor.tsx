'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import jsPDF from 'jspdf';
import { Button, cn } from '@repo/ui';
import { RootState, useSelector } from '@repo/redux-utils';
import { useEffect, useState } from 'react';

const Editor = ({ className }: { className?: string }) => {
  const [editorContent, setEditorContent] = useState('');
  const formData = useSelector((state: RootState) => state.resumeForm);
  console.log('state data:', formData);
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle],
    content: editorContent,
    // editable: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none h-[1174px] max-h-[1174px] border shadow-xl',
      },
    },
  });

  // Helper function to format the content
  const formatContent = (formData: any) => {
    let content = '';

    if (formData.name) content += `<h1>${formData.name}</h1>`;
    if (formData.title) content += `<h2>${formData.title}</h2>`;
    if (formData.email) content += `<p>Email: ${formData.email}</p>`;
    if (formData.number) content += `<p>Phone: ${formData.number}</p>`;
    if (formData.location) content += `<p>Location: ${formData.location}</p>`;
    if (formData.website) content += `<p>Website: ${formData.website}</p>`;

    if (formData.summary) {
      content += `<h3>Summary</h3><p>${formData.summary}</p>`;
    }

    if (formData.skills && formData.skills.length > 0) {
      content += `<h3>Skills</h3><ul>`;
      formData.skills.forEach((skill: any) => {
        content += `<li>${skill.skill}</li>`;
      });
      content += `</ul>`;
    }

    if (formData.education && formData.education.length > 0) {
      content += `<h3>Education</h3>`;
      formData.education.forEach((edu: any) => {
        content += `<h4>${edu.degree} - ${edu.school}</h4>`;
        content += `<p>${edu.startDate} - ${edu.endDate}</p>`;
      });
    }

    // Add more sections as needed (experience, projects, etc.)

    return content;
  };
  useEffect(() => {
    if (formData) {
      const formattedContent = formatContent(formData.form);
      console.log(formattedContent);
      setEditorContent(formattedContent);
    }
  }, [formData]);

  useEffect(() => {
    if (editor) {
      console.log('editor content ', editorContent);
      editor.commands.setContent(editorContent);
    }
  }, [formData, editor]);

  if (!editor) {
    return null;
  }

  const downloadPDF = () => {
    const doc = new jsPDF({ unit: 'px', format: 'a4' });
    var source = editor.getText();
    doc.setProperties({
      title: 'Resume',
    });
    doc.text(source, 0, 0);
    doc.save('a4.pdf');
  };
  return (
    <div className={cn(`f-full overflow-y-auto`, className)}>
      <input
        type="color"
        onInput={(event: any) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes('textStyle').color}
      />
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={
          editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''
        }
      >
        purple
      </button>
      <Button onClick={downloadPDF}>Download</Button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
