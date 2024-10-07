import { useEffect, useState } from 'react';
import { api } from '../service/axios';
import { CustomChart } from './components/chart/chart';
import { Header } from './components/header/header';
import {
  CardContainer,
  CardEfficiency,
  CardText,
  CardTitle,
  ChartContainer,
  Container,
  CustomTitle,
  EfficiencyContainer,
  IconTextWrapper,
  StyledCogs,
  StyledTemperature,
} from './styles';
interface Efficiency {
  eficiencia: string;
  temperatura: number;
}

export function Home() {
  const [efficiencyData, setEfficiencyData] = useState<Efficiency | null>(null);

  useEffect(() => {
    const fetchEfficiency = async () => {
      const response = await api.get('efficiency/latest');
      const data: Efficiency = response.data[0];

      setEfficiencyData(data);
    };

    fetchEfficiency();

    const requestInterval = setInterval(fetchEfficiency, 30000);

    return () => clearInterval(requestInterval);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <EfficiencyContainer>
          <CustomTitle>Eficiência da Maquina</CustomTitle>
          <CardContainer>
            <CardEfficiency>
              <IconTextWrapper>
                <StyledTemperature />
                <CardTitle>Temperatura: </CardTitle>
              </IconTextWrapper>
              <CardText>
                {efficiencyData
                  ? `${efficiencyData.temperatura}°C`
                  : 'Carregando...'}
              </CardText>
            </CardEfficiency>
            <CardEfficiency>
              <IconTextWrapper>
                <StyledCogs />
                <CardTitle>Eficiência:</CardTitle>
              </IconTextWrapper>
              <CardText>
                {efficiencyData
                  ? `${efficiencyData.eficiencia}%`
                  : 'Carregando...'}
              </CardText>
            </CardEfficiency>
          </CardContainer>
        </EfficiencyContainer>
        <ChartContainer>
          <CustomTitle>Histórico</CustomTitle>
          <CustomChart />
        </ChartContainer>
      </Container>
    </>
  );
}
