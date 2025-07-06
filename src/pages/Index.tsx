
import React from 'react';
import { useAuthStore } from '@/store/authStore';
import AuthPage from '@/components/AuthPage';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {isAuthenticated ? <Dashboard /> : <AuthPage />}
    </div>
  );
};

export default Index;
