// Components
import Home from '../containers/Home';

// Services
import { getPosts } from '../services';

export default function Homepage({ posts }) {
  return <Home posts={posts} />;
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}
