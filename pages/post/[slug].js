// Components
import PostDetailsCard from '../../components/common/PostDetailsCard';
import Author from '../../components/common/Author';
import CommentsForm from '../../components/common/CommentsForm';
import Comments from '../../components/common/Comments';
import PostWidget from '../../components/common/PostWidget';
import CategoriesWidget from '../../components/common/CategoriesWidget';

// Services
import { getPosts, getPostDetails } from '../../services';

export default function PostDetailsPage() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetailsCard />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <CategoriesWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: {} }, // See the "paths" section below
//     ],
//     fallback: true,
//   };
// }
