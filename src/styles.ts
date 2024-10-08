import { FaCogs, FaTemperatureLow } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 3rem;
  justify-content: space-around;
  height: 100%;
  margin: 0 3rem;
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  justify-content: space-around;
  backdrop-filter: blur(40px);
  box-shadow: 00 3px 30px #0c0c0c50;
  border-radius: 20px;
`;
export const CustomTitle = styled.text`
  text-align: center;
  font-size: 28px;
  padding-bottom: 16px;
  color: #fafafa;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
export const CardContainerChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;
export const CustomChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 1rem;
  gap: 2rem;
  box-shadow: 00 3px 10px #0c0c0c50;
  background: linear-gradient(#f3f3f3, #fafafa, #f3f3f3);
`;
export const CardEfficiency = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 1rem;
  gap: 2rem;
  width: 20rem;
  height: 12rem;
  box-shadow: 00 3px 10px #0c0c0c50;
  background: linear-gradient(#f3f3f3, #fafafa, #f3f3f3);
`;
export const CardTitle = styled.text`
  text-align: center;
  font-size: 28px;
`;
export const CardText = styled.text`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledCogs = styled(FaCogs)`
  justify-content: left;
  width: 24px;
  height: 24px;
`;
export const StyledTemperature = styled(FaTemperatureLow)`
  width: 24px;
  height: 24px;
`;
