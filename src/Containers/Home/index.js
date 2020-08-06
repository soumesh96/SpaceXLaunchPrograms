import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllLaunches, fetchFilterLaunches } from '../store/actions';
import { HomeWrapper } from './skins';
import FilterCon from './Filters';
import LaunchDetails from './LaunchesDetails';

const Home = () => {
  const [selectedLaunchYear, setSelectedLaunchYear] = useState('');
  const [selectedSuccessLaunch, setSelectedSuccessLaunch] = useState('');
  const [selectedSuccessLand, setSelectedSuccessLand] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLaunches());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onYearChangeHandler = (year) => {
    if (selectedLaunchYear !== year) {
      setSelectedLaunchYear(year);
      let datapack = {
        launch_success: selectedSuccessLaunch,
        land_success: selectedSuccessLand,
        launch_year: year,
      };
      dispatch(fetchFilterLaunches(datapack));
    }
  }
  const onLaunchClickHandler = (value) => {
    if (selectedSuccessLaunch !== value.toLowerCase()) {
      setSelectedSuccessLaunch(value.toLowerCase());
      const datapack = {
        launch_success: value.toLowerCase(),
        land_success: selectedSuccessLand,
        launch_year: selectedLaunchYear,
      };
      dispatch(fetchFilterLaunches(datapack));
    }
  }
  const onLandClickHandler = (value) => {
    if (selectedSuccessLand !== value.toLowerCase()) {
      setSelectedSuccessLand(value.toLowerCase());
      const datapack = {
        launch_success: selectedSuccessLaunch,
        land_success: value.toLowerCase(),
        launch_year: selectedLaunchYear,
      };
      dispatch(fetchFilterLaunches(datapack));
    }
  }
  return (
    <React.Fragment>
      <HomeWrapper>
        <FilterCon
          onYearChange={onYearChangeHandler}
          selectedLaunchYear={selectedLaunchYear}
          onLaunchChange={onLaunchClickHandler}
          selectedSuccessLaunch={selectedSuccessLaunch}
          onLandChange={onLandClickHandler}
          selectedSuccessLand={selectedSuccessLand}
        />
        <LaunchDetails />
      </HomeWrapper>
    </React.Fragment>
  );
}

export default Home;
