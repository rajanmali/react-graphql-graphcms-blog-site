// Components
import PostDetailsCard from '../../components/common/PostDetailsCard';
import Author from '../../components/common/Author';
import CommentsForm from '../../components/common/CommentsForm';
import Comment from '../../components/common/Comment';
import PostWidget from '../../components/common/PostWidget';
import CategoriesWidget from '../../components/common/CategoriesWidget';

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetailsCard />
          <Author />
          <CommentsForm />
          <Comment />
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
};

export default PostDetails;
