import { cn, ResumeForm } from '@repo/ui';
import React from 'react';

function EditorController({ className }: { className?: string }) {
  return (
    <div className={cn(`h-full overflow-y-auto px-4`, className)}>
      <ResumeForm />
    </div>
  );
}

export default EditorController;
