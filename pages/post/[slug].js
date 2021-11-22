// Components
import PostDetails from '../../containers/PostDetails';

// Services
import { getPosts, getPostDetails } from '../../services';

export default function PostDetailsPage() {
  return <PostDetails />;
}

// export async function getStaticProps() {
//   // const posts = (await getPosts()) || [];
//   // return { props: { posts } };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: {} }, // See the "paths" section below
//     ],
//     fallback: true,
//   };
// }
