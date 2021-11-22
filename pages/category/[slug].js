import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import PostCard from '../../components/common/PostCard';
import CategoriesWidget from '../../components/common/CategoriesWidget';
import Loader from '../../components/common/Loader';

// Services
import { getCategories, getCategoryPost } from '../../services';

export default function CategoriesPage({ posts, params: { slug } }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const categoryName =
    !!posts[0]?.node?.categories[0]?.name &&
    posts[0]?.node?.categories.filter((category) => category.slug === slug)[0]
      .name;

  return (
    <>
      <Head>
        <title>
          {!!categoryName ? categoryName : 'No blogs found'} | Category | NextJS
          Blog
        </title>
      </Head>
      <div className="container mx-auto px-10 mb-8">
        {!!posts[0]?.node?.categories[0]?.name && (
          <div className="w-full bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl">
              Category:{' '}
              <span className="font-semibold text-purple-600">
                {categoryName}
              </span>
            </h3>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts?.length > 0 ? (
              posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))
            ) : (
              <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  No blogs found.
                </h3>
                <p className="mb-4 text-gray-500">
                  Oops, it seems like no one has posted about this category just
                  yet.
                </p>
                <p className="text-gray-500">
                  Check back again soon to hopefully find a new blog.
                </p>
              </div>
            )}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <CategoriesWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts, params },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
