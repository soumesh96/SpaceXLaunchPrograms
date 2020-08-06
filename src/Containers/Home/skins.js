import styled from 'styled-components';

export const MainHomeWrapper = styled.div`
  padding: 12px;
  min-height: 96vh;
  background: #F2F2F2;
`;

export const FilterConWrapper = styled.div`
  width: 20%;
  height: 100vh;
  min-height: 80vh;
  position: sticky;
  top: 0;
  background: white;
  border-radius: 6px;
  @media (max-width: 768px) {
    position: relative;
    min-height: 80vh;
    height: auto;
    margin-bottom: 20px;
    width: 98%;
  }
`;

export const Divider = styled.hr`
  width: 80%;
`;

export const FilterHeading = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding: 0 12px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: ${props => props.jc ? props.jc : 'space-between'};
  ${props => props.marBottom && `margin-bottom: ${props.marBottom}px;`}
  flex-wrap: wrap;
  @media (max-width: 768px) {
    ${props => props.noPadd && `padding: 0px;`}
  }
`;

export const IndividualSection = styled.div`
  border: 1px solid;
  padding: 4px;
  width: 30%;
  margin: 10px;
  cursor: pointer;
  background: #C5E09C;
  border-radius: 4px;
  text-align: center;
  ${props => props.selected && 'background: #7BBA01; font-weight: bold;'}
`;

export const HomeWrapper = styled.div`
  display: flex;
  background: #F2F2F2;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LaunchDetailsWrapper = styled.div`
  width: 80%;
  min-height: 80vh;
  @media (max-width: 768px) {
    width: 98%;
    min-height: 20vh;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    height: 20vh;
  }
`;

export const ImgWrapper = styled.div`
  background: #F2F2F2;
  height: 20vh;
  width: 90%;
  margin: 10px auto;
  position: relative;
  > img {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
  }
`;

export const FilterSubHeading = styled.p`
  text-align: center;
`;

export const BFlexDiv = styled.div`
  display: flex;
`;

export const ListCon = styled.ul`
  margin: 0;
`;

export const IndividualLaunchData = styled.div`
  width: 21%;
  margin: 0 20px 24px;
  background: white;
  border-radius: 6px;
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 24px;
  }
`;

export const TextLabel = styled.p`
  margin: 10px 0;
  font-weight: bold;
  ${props => props.color && `color: ${props.color};`}
  ${props => props.wid && `width: ${props.wid};`}
  ${props => props.normal && 'font-weight: normal;'}
  ${props => props.paddLeft && `padding-left: ${props.paddLeft}px;`}
  > span {
    font-weight: normal;
  }
`;

export const ContentWrapper = styled.div`
  padding: 12px 20px 12px;
`;

export const NotFoundWrapper = styled(BFlexDiv)`
  height: 30vh;
  align-items: center;
  justify-content: center;
`;