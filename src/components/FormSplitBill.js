import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <>
      <form
        className="form-split-bill"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍 Your expense</label>
        <input
          type="number"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
        <input type="number" value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
};

export default FormSplitBill;
