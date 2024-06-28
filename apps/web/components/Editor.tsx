'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import jsPDF from 'jspdf';
import { Button, cn } from '@repo/ui';

const Editor = ({ className }: { className?: string }) => {
  const editor = useEditor({
    extensions: [StarterKit, Color, TextStyle],
    content: `
    <h2 style="color: #958DF1">
      Hi there,
    </h2>
    <ul data-type="taskList">
      <li data-type="taskItem" data-checked="true">A list item</li>
      <li data-type="taskItem" data-checked="false">And another one</li>
    </ul>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>`,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none h-[1174px] max-h-[1174px]',
      },
    },
  });
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
