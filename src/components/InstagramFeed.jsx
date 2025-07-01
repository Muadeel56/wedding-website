import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// MOCK: Replace this with real API fetch logic
const MOCK_POSTS = [
  {
    id: "1",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223725/ANB06184-Enhanced-NR_cq7ppu.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "2",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223725/ANB_0995-Enhanced-NR_vxeulm.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "3",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223719/ANB03159-Enhanced-NR_tpdkmn.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "4",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223717/ANB06203-Enhanced-NR_-_Copy_kvca1g.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "5",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223704/ANB01828-Enhanced-NR_otqyb5.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "6",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB_5777-Enhanced-NR_vy1pcl.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "7",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223698/ANB01845-Enhanced-NR_tbchcx.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
  {
    id: "8",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223696/ANB09327_copy_ahg9xl.jpg",
    permalink: "https://www.instagram.com/anbphotographyfilms/",
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with real fetch from Instagram Basic Display API
    // fetch('https://graph.instagram.com/me/media?...')
    //   .then(res => res.json())
    //   .then(data => setPosts(data.data))
    //   .catch(err => setError(err))
    //   .finally(() => setLoading(false));
    setTimeout(() => {
      setPosts(MOCK_POSTS);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="loading-skeleton w-16 h-16 rounded-full mx-auto mb-4"></div>
        <div className="loading-skeleton w-48 h-4 rounded mx-auto mb-2"></div>
        <div className="loading-skeleton w-32 h-4 rounded mx-auto"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg mb-2">Failed to load Instagram feed</div>
        <div className="text-muted">Please try again later</div>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
      {posts.map((post, index) => (
        <motion.a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block group focus-ring rounded-xl overflow-hidden"
          tabIndex={0}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <div className="card overflow-hidden">
            <div className="img-hover relative">
              <img
                src={post.media_url}
                alt="Instagram post"
                className="img-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-medium">
                  View on Instagram
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
} 