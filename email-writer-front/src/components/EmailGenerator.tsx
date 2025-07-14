
import axios from 'axios';
import React, { useState } from 'react';
import EmailForm from './EmailForm';
import GeneratedReply from './GeneratedReply';
import FeatureList from './FeatureList';

const EmailGenerator: React.FC = () => {
  const [originalEmail, setOriginalEmail] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    console.log('handleGenerate called with:', { originalEmail, tone });
    
    if (!originalEmail.trim()) {
      console.log('Original email is empty, returning early');
      return;
    }
    
    setIsGenerating(true);
    setError('');
    console.log("Original Email before sending request:", originalEmail);
    try {
      const requestData = {
        originalEmail: originalEmail.trim(),
        tone: tone.trim()
      };
      console.log('Sending request with data:', requestData);
      
      const response = await axios.post("http://localhost:8080/api/email/generate", requestData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Response received:', response.data);
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate reply. Please try again.');
      console.error('Error generating reply:', error);
      
    }
    finally{
      setIsGenerating(false);
    }
    
  };

  const handleClear = () => {
    setOriginalEmail('');
    setTone('');
    setGeneratedReply('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedReply);
      // You could add a toast notification here
      alert('Reply copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-foreground text-4xl font-bold leading-10 mb-4 max-md:text-[32px] max-sm:text-[28px]">
            AI Email Reply Generator
          </h1>
          <p className="text-muted-foreground text-lg font-normal leading-7 max-md:text-base max-sm:text-sm">
            Generate professional email responses with AI assistance
          </p>
        </header>

        <div className="w-full max-w-[864px] mx-auto border border-border shadow-[0px_20px_25px_0px_rgba(0,0,0,0.05),0px_8px_10px_0px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-sm rounded-2xl border-solid overflow-hidden">
          <div className="p-8 max-md:p-6 max-sm:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-md:gap-6">
              <EmailForm
                originalEmail={originalEmail}
                tone={tone}
                onOriginalEmailChange={setOriginalEmail}
                onToneChange={setTone}
                onGenerate={handleGenerate}
                onClear={handleClear}
                isGenerating={isGenerating}
              />
              
              <GeneratedReply
                content={generatedReply}
                onCopy={handleCopy}
              />
            </div>
          </div>
          
          <FeatureList />
        </div>

        <div className="text-center mt-8 max-w-[578px] mx-auto">
          <div className="flex items-start justify-center gap-1 max-md:flex-col max-md:gap-2 max-sm:gap-1">
            <p className="text-muted-foreground text-sm">
            Made with ❤️ by{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SK Jiyad
            </span>
          </p>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailGenerator;
