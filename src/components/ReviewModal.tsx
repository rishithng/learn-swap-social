
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
  onSubmitReview: (rating: number, comment: string, skillTaught: string) => void;
}

const ReviewModal = ({ isOpen, onClose, recipientName, onSubmitReview }: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [skillTaught, setSkillTaught] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    if (!comment.trim()) {
      toast.error('Please write a review comment');
      return;
    }
    if (!skillTaught.trim()) {
      toast.error('Please specify what skill was taught');
      return;
    }

    console.log('Submitting review:', { rating, comment: comment.trim(), skillTaught: skillTaught.trim() });
    
    try {
      onSubmitReview(rating, comment.trim(), skillTaught.trim());
      
      // Reset form
      setRating(0);
      setComment('');
      setSkillTaught('');
      onClose();
      
      toast.success('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    }
  };

  const handleClose = () => {
    setRating(0);
    setComment('');
    setSkillTaught('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-gray-900 dark:text-gray-100">
            Rate your experience with {recipientName}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">How was your learning experience?</p>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 transition-colors"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              What skill did they teach you? *
            </label>
            <Input
              value={skillTaught}
              onChange={(e) => setSkillTaught(e.target.value)}
              placeholder="e.g., Python, Web Development, Design"
              required
              className="dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Write your review *
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              rows={4}
              className="resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Submit Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
