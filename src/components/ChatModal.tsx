import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Image, Video, Phone, X, Minimize2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import ReviewModal from './ReviewModal';
import { useAuthStore } from '@/store/authStore';

interface Message {
  id: string;
  sender: string;
  content: string;
  type: 'text' | 'image';
  timestamp: Date;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    username: string;
    name?: string;
    skillsKnown?: string;
    skillsToLearn?: string;
  };
  currentUser: string;
}

const ChatModal = ({ isOpen, onClose, recipient, currentUser }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addReview, currentUser: currentUserData } = useAuthStore();

  const generateContextualResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    const recipientSkills = recipient.skillsKnown?.toLowerCase() || '';
    const recipientLearning = recipient.skillsToLearn?.toLowerCase() || '';
    
    // Skill-related responses
    if (message.includes('teach') || message.includes('learn')) {
      if (recipientSkills.includes('react') && message.includes('react')) {
        return "I'd love to help you with React! I can teach you about components, hooks, state management, and best practices. When would you like to start?";
      }
      if (recipientSkills.includes('python') && message.includes('python')) {
        return "Python is my specialty! I can help you with everything from basics to advanced topics like data science and web development. What's your current level?";
      }
      if (recipientSkills.includes('design') && (message.includes('design') || message.includes('ui') || message.includes('ux'))) {
        return "I'm excited to share my design knowledge with you! We can cover UI/UX principles, design tools, and creating user-friendly interfaces. What aspect interests you most?";
      }
      if (recipientSkills.includes('photography') && message.includes('photo')) {
        return "Photography is my passion! I can teach you about composition, lighting, editing, and different photography styles. Do you have a camera already?";
      }
      if (recipientSkills.includes('music') && (message.includes('music') || message.includes('guitar') || message.includes('piano'))) {
        return "Music brings people together! I'd love to help you learn. We can start with basics and work our way up. What instrument or aspect of music interests you?";
      }
      return "I'm excited to share my knowledge with you! Based on my skills, I can help you with several areas. What would you like to focus on first?";
    }

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `Hello! Great to connect with you. I see you're interested in learning new skills - I'd be happy to help you with ${recipientSkills.split(',')[0] || 'various topics'}!`;
    }

    // Question responses
    if (message.includes('how') || message.includes('what') || message.includes('when') || message.includes('where')) {
      if (message.includes('experience')) {
        return `I've been working in my field for several years and love sharing knowledge. My main expertise is in ${recipientSkills.split(',')[0] || 'various areas'}. What specific area would you like to know about?`;
      }
      if (message.includes('time') || message.includes('schedule')) {
        return "I'm quite flexible with scheduling! We can arrange sessions that work for both of us. Would you prefer weekends or weekdays?";
      }
      if (message.includes('cost') || message.includes('price') || message.includes('free')) {
        return "I believe in knowledge sharing! We can work out something that's fair for both of us. The most important thing is that you learn and grow.";
      }
      return "That's a great question! I'm here to help you succeed. What specific aspect would you like to dive deeper into?";
    }

    // Enthusiasm and agreement
    if (message.includes('great') || message.includes('awesome') || message.includes('perfect') || message.includes('yes')) {
      return "I'm glad you're excited! Learning new skills is always rewarding. Shall we set up our first session soon?";
    }

    // Default contextual responses
    const responses = [
      `That sounds interesting! Given my background in ${recipientSkills.split(',')[0] || 'various fields'}, I think we can work together well.`,
      "I'm looking forward to helping you learn! My approach is hands-on and practical.",
      `Based on what you're saying, I think my experience with ${recipientSkills.split(',')[0] || 'these topics'} would be really helpful for you.`,
      "Let's make this learning journey exciting and productive!",
      "I love connecting with people who are eager to learn new skills!",
      "Your enthusiasm is contagious! I'm excited to share my knowledge with you.",
      "Learning is a two-way street - I'm sure I'll learn something from you too!",
      "I believe everyone has something valuable to teach. Let's explore what we can learn from each other!"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      sender: currentUser,
      content: newMessage,
      type: 'text',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, message]);
    const currentMessage = newMessage;
    setNewMessage('');
    
    // Generate contextual response after 1-3 seconds
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: recipient.username,
        content: generateContextualResponse(currentMessage),
        type: 'text',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, response]);
    }, Math.random() * 2000 + 1000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const message: Message = {
          id: Date.now().toString(),
          sender: currentUser,
          content: e.target?.result as string,
          type: 'image',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, message]);
      };
      reader.readAsDataURL(file);
    }
  };

  const startVideoCall = () => {
    setIsVideoCall(true);
    toast.success(`Starting video call with ${recipient.name || recipient.username}...`);
    
    setTimeout(() => {
      setIsVideoCall(false);
      toast.info('Video call ended');
    }, 10000);
  };

  const handleDone = () => {
    setIsDone(true);
    setIsReviewModalOpen(true);
  };

  const handleReviewSubmit = (rating: number, comment: string, skillTaught: string) => {
    if (currentUserData) {
      addReview(recipient.username, {
        reviewerId: currentUser,
        reviewerName: currentUserData.name || currentUser,
        rating,
        comment,
        skillTaught
      });
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
        >
          Chat with {recipient.name || recipient.username}
        </Button>
      </div>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md h-[650px] flex flex-col p-0 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <DialogHeader className="p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {(recipient.name || recipient.username).charAt(0).toUpperCase()}
                </div>
                <span>{recipient.name || recipient.username}</span>
              </DialogTitle>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setIsMinimized(true)}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={startVideoCall}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Video className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogHeader>

          {isVideoCall && (
            <div className="absolute inset-0 bg-black z-10 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4 mx-auto animate-pulse">
                  {(recipient.name || recipient.username).charAt(0).toUpperCase()}
                </div>
                <p className="text-white text-lg mb-4">Video call with {recipient.name || recipient.username}</p>
                <Button onClick={() => setIsVideoCall(false)} className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  End Call
                </Button>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-blue-600" />
                </div>
                <p>Start a conversation with {recipient.name || recipient.username}!</p>
                <p className="text-sm mt-2">Share skills, ask questions, and learn together</p>
                {recipient.skillsKnown && (
                  <p className="text-xs mt-2 text-blue-600">
                    They know: {recipient.skillsKnown.split(',').slice(0, 3).join(', ')}
                  </p>
                )}
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}
              >
                <Card className={`max-w-[80%] shadow-sm ${
                  message.sender === currentUser 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <CardContent className="p-3">
                    {message.type === 'text' ? (
                      <p className="text-sm">{message.content}</p>
                    ) : (
                      <img 
                        src={message.content} 
                        alt="Shared image" 
                        className="max-w-full h-auto rounded"
                      />
                    )}
                    <p className={`text-xs mt-1 ${
                      message.sender === currentUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white space-y-3">
            {!isDone && messages.length > 0 && (
              <Button
                onClick={handleDone}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Done & Leave Review
              </Button>
            )}
            
            <div className="flex space-x-2">
              <Button
                onClick={() => fileInputRef.current?.click()}
                size="sm"
                variant="outline"
                className="px-3 hover:bg-blue-50"
              >
                <Image className="w-4 h-4" />
              </Button>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                onClick={sendMessage} 
                size="sm" 
                className="px-3 bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </DialogContent>
      </Dialog>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        recipientName={recipient.name || recipient.username}
        onSubmitReview={handleReviewSubmit}
      />
    </>
  );
};

export default ChatModal;
