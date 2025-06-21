import React from 'react';

interface AdPlacementProps {
  size: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';
  position: string;
  className?: string;
}

const AdPlacement: React.FC<AdPlacementProps> = ({ size, position, className = '' }) => {
  const getAdDimensions = () => {
    switch (size) {
      case 'banner':
        return { width: '728px', height: '90px', label: '728x90' };
      case 'rectangle':
        return { width: '300px', height: '250px', label: '300x250' };
      case 'leaderboard':
        return { width: '728px', height: '90px', label: '728x90' };
      case 'skyscraper':
        return { width: '160px', height: '600px', label: '160x600' };
      default:
        return { width: '300px', height: '250px', label: '300x250' };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`} 
         style={{ width: dimensions.width, height: dimensions.height }}>
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium">AdSense Ad</p>
        <p className="text-gray-400 text-xs">{dimensions.label} - {position}</p>
      </div>
    </div>
  );
};

export default AdPlacement;