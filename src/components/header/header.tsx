import { useEffect, useState } from 'react';

import { api } from '../../../service/axios';
import {
  CityText,
  HeaderContainer,
  HeaderText,
  InfosContainer,
  InfosText,
  StyledSunIcon,
  TempText,
  WeatherContainer,
} from './styles';

interface Infos {
  city: string;
  temp: number;
  feels_like: number;
  main: string;
}

export function Header() {
  const [infosData, setInfosData] = useState<Infos | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/infos');
      const data: Infos = response.data;
      setInfosData(data);
    };

    fetchData();
  }, []);

  const toPascalCase = (str: string): string => {
    return str.replace(
      /\w+/g,
      (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
  };

  return (
    <HeaderContainer>
      <HeaderText>
        Monitoramento de temperatura e eficiência da máquina
      </HeaderText>
      {infosData && (
        <InfosContainer>
          <WeatherContainer>
            <TempText>{`${Math.round(infosData.temp)}°C`}</TempText>
            <StyledSunIcon />
          </WeatherContainer>
          <CityText>{infosData.city}</CityText>
          <InfosText>
            {`Sensação Térmica: ${Math.round(infosData.feels_like)}°C`}
          </InfosText>
          <InfosText>{toPascalCase(infosData.main)}</InfosText>
        </InfosContainer>
      )}
    </HeaderContainer>
  );
}
