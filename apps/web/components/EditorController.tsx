import { cn } from '@repo/ui';
import React from 'react';

function EditorController({ className }: { className?: string }) {
  return (
    <div className={cn(`h-full overflow-y-auto`, className)}>
      EditorController
    </div>
  );
}

export default EditorController;
