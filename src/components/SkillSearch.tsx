
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SkillSearchProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const SkillSearch = ({ onSearch, placeholder = "Search skills..." }: SkillSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex space-x-2">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-1"
      />
      <Button onClick={handleSearch} size="sm">
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SkillSearch;
