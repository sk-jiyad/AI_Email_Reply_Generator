
import React from 'react';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 14.4C9.69736 14.4 11.3252 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69742 14.4 8.00004C14.4 6.30265 13.7257 4.67479 12.5255 3.47455C11.3252 2.27432 9.69736 1.60004 7.99998 1.60004C6.30259 1.60004 4.67473 2.27432 3.47449 3.47455C2.27426 4.67479 1.59998 6.30265 1.59998 8.00004C1.59998 9.69742 2.27426 11.3253 3.47449 12.5255C4.67473 13.7257 6.30259 14.4 7.99998 14.4ZM10.9656 6.96564C11.1113 6.81475 11.1919 6.61267 11.1901 6.40292C11.1883 6.19316 11.1042 5.99251 10.9558 5.84418C10.8075 5.69586 10.6069 5.61172 10.3971 5.6099C10.1873 5.60807 9.98526 5.68871 9.83438 5.83444L7.19998 8.46884L6.16558 7.43444C6.01469 7.28871 5.81261 7.20807 5.60285 7.2099C5.3931 7.21172 5.19245 7.29586 5.04412 7.44418C4.89579 7.59251 4.81166 7.79316 4.80984 8.00292C4.80801 8.21267 4.88865 8.41475 5.03438 8.56564L6.63438 10.1656C6.7844 10.3156 6.98784 10.3998 7.19998 10.3998C7.41211 10.3998 7.61555 10.3156 7.76558 10.1656L10.9656 6.96564Z" fill="hsl(var(--primary))" />
  </svg>
);

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center gap-2">
    <CheckIcon />
    <span className="text-muted-foreground text-sm font-normal leading-[21px]">
      {text}
    </span>
  </div>
);

const FeatureList: React.FC = () => {
  const features = [
    "AI-powered responses",
    "Professional tone matching",
    "Instant generation",
    "Copy to clipboard"
  ];

  return (
    <footer className="w-full h-[83px] border-t bg-gradient-to-r from-blue-50/50 to-white/50 backdrop-blur-sm rounded-[0px_0px_16px_16px] border-t-[0.855px] border-solid p-5 max-md:h-auto max-md:grid max-md:grid-cols-[1fr_1fr] max-md:gap-4 max-sm:grid-cols-[1fr] max-sm:gap-3">
      <div className="flex items-center justify-center gap-8 h-full max-md:contents">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </footer>
  );
};

export default FeatureList;
