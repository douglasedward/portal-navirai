import { Post as PostType } from '@/types/post';
import Post from './Post';
import { Button } from './ui/button';
import { ArrowUpDownIcon, SearchIcon, PlusIcon } from 'lucide-react';

interface FeedProps {
  posts: PostType[];
  onPostClick: (post: PostType) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, onPostClick }) => {
  return (
    <div className="">
      <div className="bg-white px-8 py-4 rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <Button className="bg-zinc-100 hover:bg-zinc-100 text-zinc-900 font-bold py-3 rounded-full">
            <SearchIcon size={16} />
          </Button>

          <Button className="bg-zinc-100 hover:bg-zinc-100 text-zinc-900 font-bold py-3 px-5 gap-x-1 rounded-full">
            <ArrowUpDownIcon size={16} />
            <p>Recentes</p>
          </Button>

          <Button className="bg-[#FFCF5A] hover:bg-[#FFCF5A] text-zinc-900 font-bold py-3 px-8 gap-x-1 rounded-full">
            <PlusIcon size={16} />
            Criar post
          </Button>
        </div>

        <div>
          <p className="text-zinc-500 text-sm font-medium">84 Ideias</p>
        </div>
      </div>
      {posts.map((post) => (
        <div key={post.id} className="my-1">
          <Post post={post} onPostClick={onPostClick} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
