import { Post as PostType } from '@/types/post';
import { Heart, MapPin, MessageCircle } from 'lucide-react';
import React from 'react';

type PostProps = {
  post: PostType;
  onPostClick: (post: PostType) => void;
};

const Post: React.FC<PostProps> = ({ post, onPostClick }) => {
  return (
    <div
      className="bg-white p-8 rounded-xl space-y-4 cursor-pointer"
      onClick={() => onPostClick(post)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin color={post.color} size={18} />
          <div>
            <h4 className="text-sm font-bold">{post.tag}</h4>
            <p className="text-zinc-500 text-xs font-medium">
              Rua Rio de Janeiro
            </p>
          </div>
        </div>
        <div className="flex text-zinc-400 space-x-4 text-sm font-semibold">
          <div className="flex items-center space-x-1">
            <Heart size={18} />
            <p className="text-zinc-600">53</p>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle size={18} />
            <p className="text-zinc-600">12</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-extrabold text-lg">{post.title}</h3>
        <p className="font-semibold line-clamp-3">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
