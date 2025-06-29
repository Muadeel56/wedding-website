import { useEffect, useState } from "react";

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

  if (loading) return <div className="text-center text-muted py-8 transition-colors duration-500">Loading Instagram feed...</div>;
  if (error) return <div className="text-center text-red-500 py-8">Failed to load Instagram feed.</div>;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block group overflow-hidden rounded-2xl shadow-lg bg-card border border-border mb-4 hover:shadow-2xl transition-shadow transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
          tabIndex={0}
        >
          <img
            src={post.media_url}
            alt="Instagram post"
            className="w-full mb-0 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300 aspect-[4/5]"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
} 