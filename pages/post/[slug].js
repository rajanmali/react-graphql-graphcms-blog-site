// Components
import PostDetailsCard from '../../components/common/PostDetailsCard';
import Author from '../../components/common/Author';
import CommentsForm from '../../components/common/CommentsForm';
import Comments from '../../components/common/Comments';
import PostWidget from '../../components/common/PostWidget';
import CategoriesWidget from '../../components/common/CategoriesWidget';

// Services
import { getPosts, getPostDetails } from '../../services';

export default function PostDetailsPage({ post }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetailsCard post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <CategoriesWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
