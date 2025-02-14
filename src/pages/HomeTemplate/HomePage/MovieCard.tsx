import React from 'react';
import { Movie } from '../../../models';

type MovieCardProps = {
  movie?: Movie;
};
// const user = { name: 'John Doe', age: 25 };
// const name = user.name;
// const age = user.age;
// const {name , age } = user;

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;

  return (
    <div>
      <h3>{movie?.tenPhim}</h3>
      <img src={movie?.hinhAnh} width={200} height={400} style={{ borderRadius: 10, objectFit: 'cover' }} />
    </div>
  );
};

export default MovieCard;
