import { useState } from 'react';

export const useLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <p className='color-white'>loading...</p> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};
