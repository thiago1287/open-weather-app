import { FaCloudSun } from 'react-icons/fa6';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px white solid;
  justify-content: space-between;
  padding: 3rem 3rem;
  backdrop-filter: blur(40px);
  box-shadow: 00 3px 30px #0c0c0c50;
  border-radius: 20px;
  margin: 0 3rem;
`;
export const HeaderText = styled.text`
  text-align: center;
  font-size: 28px;
  color: white;
  font-weight: 700;
`;
export const InfosText = styled.text`
  text-align: left;
  font-size: 12px;
  color: black;
  font-weight: 700;
`;
export const CityText = styled.text`
  text-align: left;
  font-size: 12px;
  color: black;
  font-weight: 700;
  padding-bottom: 1rem;
`;
export const TempText = styled.text`
  text-align: left;
  font-size: 24px;
  color: black;
  font-weight: 700;
`;
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 00 3px 10px #0c0c0c50;
  padding: 1rem;
  background: linear-gradient(#f3f3f3, #fafafa, #f3f3f3);
  border-radius: 20px;
`;
export const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledSunIcon = styled(FaCloudSun)`
  width: 25px;
  height: 25px;
`;
