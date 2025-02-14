import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListMovies } from '../../../store/slices/list-movies';
import { AppDispatch, RootState } from '../../../store';
import MovieCard from './MovieCard';
import { Button, Carousel, TextInput } from 'flowbite-react';

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: RootState) => state.listMovies);

  React.useEffect(() => {
    // dispatch action
    dispatch(fetchListMovies());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (data?.length === 0) return <div>No data</div>;

  return (
    <div>
      <h1 className='text-3xl font-bold text-red-500 underline'>Hello world!</h1>
      <h1>List Movie</h1>
      <Button onClick={() => alert('click me')}>
        <span>Click me</span>
      </Button>
      <TextInput
        sizing='lg'
        placeholder='Enter your name'
        onChange={(v) => console.log('input values', v.target.value)}
      />
      <h3 className='my-4'> Demo carousel </h3>
      <Carousel>
        {data?.map((item) => {
          return <MovieCard movie={item} key={item.maPhim} />;
        })}
      </Carousel>
      <div></div>
    </div>
  );
};

export default HomePage;
