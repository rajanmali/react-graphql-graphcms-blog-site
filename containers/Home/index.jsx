import Head from 'next/head';

// Components
import PostCard from '../../components/common/PostCard';
import PostWidget from '../../components/common/PostWidget';
import CategoriesWidget from '../../components/common/CategoriesWidget';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>NextJS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.[0] &&
            posts.map((post) => (
              <PostCard post={post.node} key={post.node.id} />
            ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg: sticky relative top-8">
            <PostWidget />
            <CategoriesWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
