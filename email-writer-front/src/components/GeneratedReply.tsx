
import React from 'react';

interface GeneratedReplyProps {
  content: string;
  onCopy: () => void;
}

const GeneratedReply: React.FC<GeneratedReplyProps> = ({ content, onCopy }) => {
  return (
    <section className="flex flex-col max-md:w-full">
      <label className="text-foreground text-sm font-semibold leading-[21px] mb-3">
        Generated Reply
      </label>
      <div className="w-[383px] h-80 border-2 border-border bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm rounded-xl p-4 max-md:w-full max-md:h-[250px] overflow-y-auto">
        {content ? (
          <div className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        ) : (
          <div className="text-muted-foreground text-sm italic">
            Generated reply will appear here...
          </div>
        )}
      </div>
      {content && (
        <button
          onClick={onCopy}
          className="mt-3 text-primary text-sm hover:text-primary/80 transition-colors self-start font-medium"
          aria-label="Copy generated reply to clipboard"
        >
          Copy to clipboard
        </button>
      )}
    </section>
  );
};

export default GeneratedReply;
