import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
