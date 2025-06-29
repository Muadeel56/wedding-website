import { useEffect, useState } from "react";

// MOCK: Replace this with real API fetch logic
const MOCK_POSTS = [
  {
    id: "1",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594669/ANB06184-Enhanced-NR_m4ontq.jpg",
    permalink: "https://www.instagram.com/p/POST1/",
  },
  {
    id: "2",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09657_wcmt0c.jpg",
    permalink: "https://www.instagram.com/p/POST2/",
  },
  {
    id: "3",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09107_zf0ntw.jpg",
    permalink: "https://www.instagram.com/p/POST3/",
  },
  {
    id: "4",
    media_url: "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB07919_copy_dwf91a.jpg",
    permalink: "https://www.instagram.com/p/POST4/",
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