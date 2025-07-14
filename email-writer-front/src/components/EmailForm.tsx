
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const LightningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="lightning-icon" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
    <path d="M10.8333 8.33333V2.5L3.33331 11.6667H9.16665V17.5L16.6666 8.33333H10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface EmailFormProps {
  originalEmail: string;
  tone: string;
  onOriginalEmailChange: (value: string) => void;
  onToneChange: (value: string) => void;
  onGenerate: () => void;
  onClear: () => void;
  isGenerating: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({
  originalEmail,
  tone,
  onOriginalEmailChange,
  onToneChange,
  onGenerate,
  onClear,
  isGenerating
}) => {
  return (
    <form className="flex flex-col space-y-6 max-md:w-full" onSubmit={(e) => { e.preventDefault(); onGenerate(); }}>
      <div className="flex flex-col">
        <label htmlFor="original-email" className="text-foreground text-sm font-semibold leading-[21px] mb-3">
          Original Email Content *
        </label>
        <Textarea
          id="original-email"
          value={originalEmail}
          onChange={(e) => {
            console.log('Original email changed to:', e.target.value);
            onOriginalEmailChange(e.target.value);
          }}
          placeholder="Paste the email you want to reply to here..."
          className="w-[383px] h-[200px] border-2 border-border bg-white/60 backdrop-blur-sm rounded-xl resize-none max-md:w-full focus:border-primary focus:bg-white/80 transition-all"
          required
          aria-describedby="original-email-help"
        />
        <span id="original-email-help" className="sr-only">
          Enter the original email content that you want to generate a reply for
        </span>
      </div>

      <div className="flex flex-col">
        <label htmlFor="tone" className="text-foreground text-sm font-semibold leading-[21px] mb-3">
          Tone (Optional)
        </label>
        <Textarea
          id="tone"
          value={tone}
          onChange={(e) => onToneChange(e.target.value)}
          placeholder="e.g., professional and concise, friendly but formal, apologetic and understanding..."
          className="w-[383px] h-[120px] border-2 border-border bg-white/60 backdrop-blur-sm rounded-xl resize-none max-md:w-full focus:border-primary focus:bg-white/80 transition-all"
          aria-describedby="tone-help"
        />
        <span id="tone-help" className="sr-only">
          Specify the tone you want for the generated reply
        </span>
      </div>

      <div className="flex gap-3 max-md:flex-col max-md:gap-3 max-sm:gap-2">
        <Button
          type="submit"
          disabled={!originalEmail.trim() || isGenerating}
          className="w-[296px] h-14 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] bg-gradient-to-r from-blue-600 to-blue-700 text-primary-foreground hover:from-blue-700 hover:to-blue-800 rounded-xl max-md:w-full max-sm:h-12 max-sm:text-sm transition-all duration-200"
        >
          <LightningIcon />
          <span className="ml-2">
            {isGenerating ? 'Generating...' : 'Generate Reply'}
          </span>
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={onClear}
          className="w-[75px] h-14 border-2 border-border bg-white/60 backdrop-blur-sm rounded-xl max-md:w-full max-sm:h-12 hover:bg-white/80 transition-all duration-200"
        >
          <span className="text-muted-foreground text-center text-base font-medium leading-6">
            Clear
          </span>
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
