
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          About SkillSwap
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We believe everyone has valuable skills to share and new abilities to learn. 
          SkillSwap connects passionate learners and expert teachers in a vibrant community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Connect</h3>
            <p className="text-gray-600 text-sm">
              Find like-minded people who share your passion for learning and growth
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Learn</h3>
            <p className="text-gray-600 text-sm">
              Master new skills from experts who are passionate about teaching
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Share</h3>
            <p className="text-gray-600 text-sm">
              Share your expertise and help others achieve their learning goals
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Grow</h3>
            <p className="text-gray-600 text-sm">
              Transform your skills and unlock new opportunities together
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            To create a world where knowledge flows freely, where every person can both teach and learn, 
            and where skills become bridges that connect communities across the globe.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
