import Select from '../../../common/Select/Select';
import PropTypes from 'prop-types';
import './moviesSorter.scss';
import { sorterList } from '../../../../helpers/mockData';
import { useEffect, useMemo, useState } from 'react';
import { fetchMovies, setSort } from '../../../../store/movieSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const MoviesSorter = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const [sorterParams, setSorterParams] = useSearchParams();

  let getCurrentKey = useMemo(
    () => sorterList.find((i) => i.option === selectedOption)?.key,
    [selectedOption]
  );

  useEffect(() => {
    if (selectedOption !== '') {
      dispatch(setSort(getCurrentKey));
      sorterParams.set('sort', getCurrentKey);
      setSorterParams(sorterParams);
      dispatch(fetchMovies());
    }

    if (
      sorterParams.get('sort') &&
      sorterParams.get('sort') !== getCurrentKey
    ) {
      dispatch(setSort(sorterParams.get('sort')));
    }
  }, [selectedOption]);

  return (
    <div className='movies-sorter'>
      <span className='movies-sorter__title'>Sort By</span>
      <Select
        class='movies-sorter__select'
        list={sorterList}
        change={setSelectedOption}
        placeholder={'Release date'}
      />
    </div>
  );
};

const propTypes = {
  sortingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
    })
  ),
};

const defaultProps = {
  sortingList: sorterList,
};

MoviesSorter.propTypes = propTypes;
MoviesSorter.defaultProps = defaultProps;

export default MoviesSorter;
