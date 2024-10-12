'use client';
import Feed from '@/components/Feed';
import Map from '@/components/Map';
import PostPage from '@/components/PostPage';
import { Button } from '@/components/ui/button';
import { posts } from '@/data-sources/posts';
import { cn } from '@/lib/utils';
import { Post } from '@/types/post';
import { ListIcon, MapIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showMap, setShowMap] = useState(false); // Toggle for mobile view

  const handlePostClick = (post: Post | null) => {
    setSelectedPost(post); // Set the selected post to highlight and center it
  };

  const toggleView = () => {
    setShowMap((prevShowMap) => !prevShowMap); // Toggle between map and feed in mobile
  };

  return (
    <div className="w-full h-screen">
      {selectedPost ? (
        <PostPage post={selectedPost} onPostClick={handlePostClick} />
      ) : (
        <div
          className={cn(
            'w-full absolute md:z-10 md:w-[30%] min-w-80 h-screen overflow-y-scroll rounded-r-3xl bg-zinc-100',
            showMap ? 'z-0' : 'z-10'
          )}
        >
          <Feed posts={posts} onPostClick={handlePostClick} />
        </div>
      )}

      <div className="w-full h-screen">
        <Map
          posts={posts}
          selectedPost={selectedPost}
          onMarkerClick={handlePostClick}
        />
      </div>
      <Button
        onClick={toggleView}
        className="inline-flex md:hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 gap-x-1 bg-[#423D37] hover:bg-[#423D37] text-white py-3 px-5 rounded-full"
      >
        {showMap ? <ListIcon size={16} /> : <MapIcon size={16} />}
        {showMap ? 'Mostrar Lista' : 'Mostrar Mapa'}
      </Button>
    </div>
  );
}

{
  /*  */
}
