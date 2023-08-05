import React from 'react';
import { Item, ItemAvatar, ItemStatus, ItemText, List } from './FriendList.styled';



export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map((friend) => (
                <Item>
                <ItemStatus style={{backgroundColor: friend.isOnline ? 'green' : 'red'}}/>
                <ItemAvatar src={friend.avatar}/>
                <ItemText>{friend.name}</ItemText>
            </Item>)
            )}
            
        </List>
    )
}