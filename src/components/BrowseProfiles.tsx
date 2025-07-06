
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/authStore';
import { MapPin, Phone, Calendar, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';
import ChatModal from './ChatModal';

const BrowseProfiles = () => {
  const { getAllUsers, currentUser } = useAuthStore();
  const users = getAllUsers();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleConnect = (user: any) => {
    // Show success notification
    toast.success(`${user.name || user.username} has accepted your connection request!`, {
      description: 'You can now start chatting and sharing skills.',
      action: {
        label: 'Start Chat',
        onClick: () => {
          setSelectedUser(user);
          setIsChatOpen(true);
        },
      },
    });
  };

  const parseSkills = (skills: string | undefined) => {
    if (!skills) return [];
    return skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
  };

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No other users yet</h3>
        <p className="text-gray-500">Be the first to create a profile and start connecting!</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Discover Skill Swappers</h2>
          <p className="text-gray-600">Connect with amazing people and expand your skillset</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.username} className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white hover:transform hover:-translate-y-2 hover:scale-105 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {user.name || user.username}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      @{user.username}
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {(user.name || user.username).charAt(0).toUpperCase()}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {user.bio && (
                  <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">{user.bio}</p>
                )}
                
                <div className="space-y-2 text-sm">
                  {user.city && (
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{user.city}</span>
                    </div>
                  )}
                  
                  {user.age && (
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-green-500" />
                      <span>{user.age} years old</span>
                    </div>
                  )}
                  
                  {user.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-purple-500" />
                      <span>{user.phone}</span>
                    </div>
                  )}
                </div>

                {user.skillsKnown && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Skills I can teach:</h4>
                    <div className="flex flex-wrap gap-1">
                      {parseSkills(user.skillsKnown).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {user.skillsToLearn && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Skills I want to learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {parseSkills(user.skillsToLearn).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    onClick={() => handleConnect(user)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-200"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect & Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedUser && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={selectedUser}
          currentUser={currentUser?.username || ''}
        />
      )}
    </>
  );
};

export default BrowseProfiles;
