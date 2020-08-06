import React from 'react';
import PropTypes from 'prop-types';

import { FilterConWrapper, SectionWrapper, IndividualSection, FilterHeading, Divider, FilterSubHeading } from './skins';

const FilterCon = (props) => {

  const yearArray = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  const { onYearChange, selectedLaunchYear, onLaunchChange, selectedSuccessLaunch, onLandChange, selectedSuccessLand } = props;
  return (
    <FilterConWrapper>
      <FilterHeading>Filters</FilterHeading>
      <FilterSubHeading>Launch Year</FilterSubHeading>
      <Divider />
      <SectionWrapper>
        {yearArray.map((year, index) => (
          <IndividualSection key={index.toString()} selected={selectedLaunchYear === year} onClick={() => onYearChange(year)}>{year}</IndividualSection>
        ))}
      </SectionWrapper>

      <FilterSubHeading>Successful Launch</FilterSubHeading>
      <Divider />
      <SectionWrapper>
        {['True', 'False'].map((value, index) => (
          <IndividualSection key={index.toString()} selected={selectedSuccessLaunch === value.toLowerCase()} onClick={() => onLaunchChange(value)}>{value}</IndividualSection>
        ))}
      </SectionWrapper>

      <FilterSubHeading>Successful Landing</FilterSubHeading>
      <Divider />
      <SectionWrapper marBottom="24">
        {['True', 'False'].map((value, index) => (
          <IndividualSection key={index.toString()} selected={selectedSuccessLand === value.toLowerCase()} onClick={() => onLandChange(value)}>{value}</IndividualSection>
        ))}
      </SectionWrapper>
    </FilterConWrapper>
  );
}
FilterCon.propTypes = {
  onYearChange: PropTypes.func,
  selectedLaunchYear: PropTypes.string,
  onLaunchChange: PropTypes.func,
  selectedSuccessLaunch: PropTypes.string,
  onLandChange: PropTypes.func,
  selectedSuccessLand: PropTypes.string,
};

export default FilterCon;
