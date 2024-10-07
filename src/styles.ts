import { FaCogs, FaTemperatureLow } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 2rem;
  justify-content: space-around;
`;
export const EfficiencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  justify-content: space-around;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35rem;
`;
export const CustomTitle = styled.text`
  text-align: center;
  font-size: 28px;
  padding-bottom: 16px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const CardEfficiency = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid white;
  border-radius: 20px;
  padding: 1rem;
  gap: 2rem;
  width: 15rem;
  height: 12rem;
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
