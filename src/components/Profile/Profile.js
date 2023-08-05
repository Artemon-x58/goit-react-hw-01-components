import React from 'react';
import { Wrapper, Avatar, Box, Name, Text, ListStats, ListItem, ItemTitle, ItemQuantity } from "./Profile.styled";

export const Profile = ({ data: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {

  return (
    <Wrapper>
      <Box>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>{`@${tag}`}</Text>
        <Text>{location}</Text>
      </Box>
      <ListStats>
        <ListItem>
            <ItemTitle>Followers</ItemTitle>
            <ItemQuantity>{followers}</ItemQuantity>
        </ListItem>
        <ListItem>
            <ItemTitle>Views</ItemTitle>
            <ItemQuantity>{views}</ItemQuantity>
        </ListItem>
        <ListItem>
            <ItemTitle>Likes</ItemTitle>
            <ItemQuantity>{likes}</ItemQuantity>
        </ListItem>
      </ListStats>
    </Wrapper>
  );
};