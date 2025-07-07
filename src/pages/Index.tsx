
import React from 'react';
import { useAuthStore } from '@/store/authStore';
import AuthPage from '@/components/AuthPage';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen animated-background">
      <div className="floating-particles">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      {isAuthenticated ? <Dashboard /> : <AuthPage />}
    </div>
  );
};

export default Index;
