import React from 'react';
import { useParams } from 'react-router-dom';

import { MovieItemIndiv } from 'domains/movies';

export const SingleMoviePage = () => {
  const params = useParams();

  return <MovieItemIndiv movieId={params.movieId} />;
};
