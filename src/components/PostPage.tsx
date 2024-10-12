import { Post as PostType } from '@/types/post';
import { ChevronLeftIcon, EllipsisIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

type PostProps = {
  post: PostType;
  onPostClick: (post: PostType | null) => void;
};

const PostPage: React.FC<PostProps> = ({ post, onPostClick }) => {
  return (
    <div className="w-full absolute md:z-10 md:w-[30%] min-w-80 h-screen overflow-y-scroll rounded-r-3xl bg-zinc-100">
      <div className="bg-white px-8 py-4 rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-between">
              <ChevronLeftIcon
                size={22}
                className="cursor-pointer"
                onClick={() => onPostClick(null)}
              />
            </div>
            <div>
              <h4 className="text-sm font-bold">{post.tag}</h4>
              <p className="text-zinc-500 text-xs font-medium">
                Rua Rio de Janeiro
              </p>
            </div>
          </div>
          <div className="cursor-pointer">
            <EllipsisIcon size={22} />
          </div>
        </div>

        <div>
          <p className="text-zinc-500 text-sm font-medium">84 Ideias</p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
