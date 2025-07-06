
import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Image, Video, Phone, X, Minimize2 } from 'lucide-react';
import { toast } from 'sonner';

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
  };
  currentUser: string;
}

const ChatModal = ({ isOpen, onClose, recipient, currentUser }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setNewMessage('');
    
    // Simulate recipient response after 1-3 seconds
    setTimeout(() => {
      const responses = [
        "That sounds great!",
        "I'd love to help with that!",
        "When would be a good time to start?",
        "I'm excited to learn from you!",
        "Let's schedule a session soon!",
        "Thanks for connecting!"
      ];
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: recipient.username,
        content: responses[Math.floor(Math.random() * responses.length)],
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
    
    // Simulate call ending after 10 seconds for demo
    setTimeout(() => {
      setIsVideoCall(false);
      toast.info('Video call ended');
    }, 10000);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3"
        >
          Chat with {recipient.name || recipient.username}
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] flex flex-col p-0 bg-white/95 backdrop-blur-sm">
        <DialogHeader className="p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white">
              Chat with {recipient.name || recipient.username}
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
          <div className="absolute inset-0 bg-black z-10 flex items-center justify-center">
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

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p>Start a conversation with {recipient.name || recipient.username}!</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}
            >
              <Card className={`max-w-[80%] ${
                message.sender === currentUser 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100'
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

        <div className="p-4 border-t bg-white">
          <div className="flex space-x-2">
            <Button
              onClick={() => fileInputRef.current?.click()}
              size="sm"
              variant="outline"
              className="px-3"
            >
              <Image className="w-4 h-4" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="sm" className="px-3">
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
  );
};

export default ChatModal;
