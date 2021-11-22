import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

// Services
import { getCategories } from '../../../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 transition duration-300 hover:text-purple-500">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
