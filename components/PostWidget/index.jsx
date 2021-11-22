import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

// Services
import { getRecentPosts } from '../../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (!!slug) {
      getSimilarPosts(category).then((res) => setRelatedPosts(res.node));
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res.node));
    }
  }, []);
  return <div>PostWidget</div>;
};

export default PostWidget;
