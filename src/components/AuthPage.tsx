
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/store/authStore';
import { Users, ArrowRightLeft, Star, Info, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const AuthPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '', confirmPassword: '' });
  const [activeSection, setActiveSection] = useState<'auth' | 'about' | 'contact'>('auth');
  const { login, register } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginData.username, loginData.password)) {
      toast.success('Welcome back!');
    } else {
      toast.error('Invalid credentials. Try alice/alicepass or bob/bobpass');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (register(registerData.username, registerData.password)) {
      toast.success('Account created successfully!');
    } else {
      toast.error('Username already exists');
    }
  };

  if (activeSection === 'about') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="absolute top-4 left-4 space-x-4">
          <Button 
            onClick={() => setActiveSection('auth')} 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            Back to Login
          </Button>
        </div>
        <div className="w-full max-w-6xl">
          <AboutSection />
        </div>
      </div>
    );
  }

  if (activeSection === 'contact') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="absolute top-4 left-4 space-x-4">
          <Button 
            onClick={() => setActiveSection('auth')} 
            variant="outline" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            Back to Login
          </Button>
        </div>
        <div className="w-full max-w-6xl">
          <ContactSection />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Navigation buttons */}
      <div className="absolute top-4 right-4 space-x-4">
        <Button 
          onClick={() => setActiveSection('about')} 
          variant="outline" 
          className="bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
        >
          <Info className="w-4 h-4 mr-2" />
          About Us
        </Button>
        <Button 
          onClick={() => setActiveSection('contact')} 
          variant="outline" 
          className="bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact
        </Button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Section */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              SkillSwap
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with people, share your expertise, and learn new skills through our vibrant community platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Connect</h3>
              <p className="text-sm text-gray-600">Find like-minded learners and experts</p>
            </div>
            
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-200">
                <ArrowRightLeft className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Exchange</h3>
              <p className="text-sm text-gray-600">Swap skills and knowledge freely</p>
            </div>
            
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-200">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Grow</h3>
              <p className="text-sm text-gray-600">Develop new abilities together</p>
            </div>
          </div>
        </div>

        {/* Auth Forms */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-gray-800">Welcome</CardTitle>
              <CardDescription className="text-gray-600">
                Join our skill-sharing community
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
                  <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Sign In</TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Username</label>
                      <Input
                        type="text"
                        placeholder="Enter your username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                        required
                        className="h-11 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password</label>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        required
                        className="h-11 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <Button type="submit" className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
                      Sign In
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Demo: Try alice/alicepass or bob/bobpass
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Username</label>
                      <Input
                        type="text"
                        placeholder="Choose a username"
                        value={registerData.username}
                        onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                        required
                        className="h-11 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password</label>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        required
                        className="h-11 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <Input
                        type="password"
                        placeholder="Confirm your password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        required
                        className="h-11 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <Button type="submit" className="w-full h-11 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
