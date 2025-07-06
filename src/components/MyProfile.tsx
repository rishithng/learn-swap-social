
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/authStore';
import { User, Edit3, Save, MapPin, Phone, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const MyProfile = () => {
  const { currentUser, updateProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    age: currentUser?.age || '',
    city: currentUser?.city || '',
    skillsKnown: currentUser?.skillsKnown || '',
    skillsToLearn: currentUser?.skillsToLearn || '',
    bio: currentUser?.bio || ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      ...formData,
      age: formData.age ? parseInt(formData.age.toString()) : undefined
    });
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const parseSkills = (skills: string) => {
    return skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
  };

  const hasProfile = currentUser?.name || currentUser?.city || currentUser?.skillsKnown;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h2>
        <p className="text-gray-600">Showcase your skills and connect with others</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview Card */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                {(currentUser?.name || currentUser?.username || 'U').charAt(0).toUpperCase()}
              </div>
              <CardTitle className="text-xl text-gray-900">
                {currentUser?.name || currentUser?.username}
              </CardTitle>
              <CardDescription className="text-gray-500">
                @{currentUser?.username}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {currentUser?.bio && (
                <p className="text-sm text-gray-600 italic text-center">{currentUser.bio}</p>
              )}
              
              {hasProfile && (
                <div className="space-y-2 text-sm">
                  {currentUser.city && (
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{currentUser.city}</span>
                    </div>
                  )}
                  
                  {currentUser.age && (
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{currentUser.age} years old</span>
                    </div>
                  )}
                  
                  {currentUser.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{currentUser.phone}</span>
                    </div>
                  )}
                </div>
              )}

              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="outline"
                className="w-full mt-4"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          {isEditing ? (
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit3 className="w-5 h-5 mr-2" />
                  Edit Profile
                </CardTitle>
                <CardDescription>
                  Update your information to help others find and connect with you
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Age</label>
                      <Input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Your age"
                        min="10"
                        max="100"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">City</label>
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="Your city"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Bio</label>
                    <Textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                      placeholder="Tell us about yourself..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Skills I Can Teach</label>
                    <Input
                      value={formData.skillsKnown}
                      onChange={(e) => setFormData({...formData, skillsKnown: e.target.value})}
                      placeholder="e.g., Python, Web Development, Photography"
                    />
                    <p className="text-xs text-gray-500">Separate skills with commas</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Skills I Want to Learn</label>
                    <Input
                      value={formData.skillsToLearn}
                      onChange={(e) => setFormData({...formData, skillsToLearn: e.target.value})}
                      placeholder="e.g., Machine Learning, Design, Marketing"
                    />
                    <p className="text-xs text-gray-500">Separate skills with commas</p>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {!hasProfile ? (
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="text-center py-12">
                    <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Complete Your Profile</h3>
                    <p className="text-gray-500 mb-6">Add your skills and information to start connecting with others</p>
                    <Button onClick={() => setIsEditing(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Setup Profile
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {currentUser?.skillsKnown && (
                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-green-700">Skills I Can Teach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {parseSkills(currentUser.skillsKnown).map((skill, index) => (
                            <Badge key={index} className="bg-green-100 text-green-700 hover:bg-green-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {currentUser?.skillsToLearn && (
                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-blue-700">Skills I Want to Learn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {parseSkills(currentUser.skillsToLearn).map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
