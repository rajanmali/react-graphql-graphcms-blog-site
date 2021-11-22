import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

// Services
import { getCategories } from '../../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return <div>Categories</div>;
};

export default Categories;
