import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LaunchDetailsWrapper, SectionWrapper, LoaderWrapper, IndividualLaunchData, ImgWrapper, TextLabel, BFlexDiv, ContentWrapper, ListCon, NotFoundWrapper } from './skins';


const LaunchDetails = () => {
  const { isDataFetched, launchesData, loading } = useSelector(state => state.spaceXData);
  const fallbackImg = 'https://w7.pngwing.com/pngs/507/444/png-transparent-deep-space-climate-observatory-falcon-9-spacex-cassiope-stereo-falcon-animals-spacecraft-logo.png';

  return (
    <LaunchDetailsWrapper>
      {(isDataFetched && !loading) ?
        <SectionWrapper noPadd jc="flex-start">
          {launchesData && launchesData.length > 0 ? launchesData.map((data, index) => (
            <IndividualLaunchData key={index.toString()}>
              <ImgWrapper>
                <img src={data.links.mission_patch} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt="NoImg" />
              </ImgWrapper>
              <ContentWrapper>
                <TextLabel color="#495096">{`${data.mission_name} #${data.flight_number}`}</TextLabel>
                <div>
                  <TextLabel>Mission Ids :</TextLabel>
                  <ListCon>
                    {data.mission_id && data.mission_id.length > 0 ? data.mission_id.map((id, idIndex) => (
                      <li key={idIndex.toString()}>{id}</li>
                    ))
                      : <TextLabel normal>NA</TextLabel>
                    }
                  </ListCon>
                </div>
                <BFlexDiv>
                  <TextLabel wid="60%">Launch Year:</TextLabel>
                  <TextLabel wid="40%" normal paddLeft="6">{data.launch_year}</TextLabel>
                </BFlexDiv>
                <BFlexDiv>
                  <TextLabel wid="60%">Successful Launch: </TextLabel>
                  <TextLabel wid="40%" normal>{data.launch_success ? 'True' : 'False'}</TextLabel>
                </BFlexDiv>
                <BFlexDiv>
                  <TextLabel wid="60%">Successful Landing:</TextLabel>
                  <TextLabel wid="40%" normal>{data.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</TextLabel>
                </BFlexDiv>
              </ContentWrapper>
            </IndividualLaunchData>
          ))
            :
            <NotFoundWrapper>No Data Found</NotFoundWrapper>
          }
        </SectionWrapper>
        :
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>
      }
    </LaunchDetailsWrapper>
  );
}

export default LaunchDetails;
