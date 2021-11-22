import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

// Services
import { getRecentPosts, getSimilarPosts } from '../../../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (!!slug) {
      getSimilarPosts(categories).then((res) => {
        setRelatedPosts(res);
      });
    } else {
      getRecentPosts().then((res) => {
        setRelatedPosts(res);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.id}>
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="auto"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4 transition duration-300 hover:text-purple-500">
            <Link href={`/post/${post.slug}`} className="text-md ">
              {post.title}
            </Link>
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
