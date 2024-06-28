import React from 'react';
import Editor from '../../components/Editor';
import EditorController from '../../components/EditorController';

function editor() {
  return (
    <div className="md:flex h-[calc(100vh_-_88px)]">
      <EditorController className="md:w-1/2" />
      <Editor className="md:w-1/2" />
    </div>
  );
}

export default editor;
