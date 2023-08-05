import React from 'react';
import { ListStats, SectionStatistics, TitleStatistics, Text} from './Statistics.styled';
import { ListItem } from 'components/Profile/Profile.styled';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      <TitleStatistics>{title}</TitleStatistics>
      <ListStats>
        {stats.map((item) => (
          <ListItem style={{ backgroundColor: getRandomColor(), padding: '5px' }}>
            <Text>{item.label}</Text>
            <Text>{item.percentage}%</Text>
          </ListItem>
        ))}
      </ListStats>
    </SectionStatistics>
  );
};

