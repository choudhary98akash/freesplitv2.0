"use client";
import React, { useState } from "react";
import styles from "./addGroup.module.css";

export default function GroupAndSplit() {
  // States for people list, groups, and splits
  const [peopleList, setPeopleList] = useState([
    { id: 1, name: "Akash" },
    { id: 2, name: "Bohra" },
    { id: 3, name: "Chandan" },
    { id: 4, name: "Deamon" },
  ]); // Replace with actual list
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [splits, setSplits] = useState([]);

  // State for split details
  const [splitName, setSplitName] = useState("");
  const [splitAmount, setSplitAmount] = useState("");
  const [individualShares, setIndividualShares] = useState({});
  const [paidBy, setPaidBy] = useState(null);

  const handleCreateGroup = () => {
    if (selectedPeople.length < 2) {
      alert("Please select at least two people to form a group.");
      return;
    }
    const newGroup = {
      id: groups.length + 1,
      name: `Group ${groups.length + 1}`,
      members: [...selectedPeople],
      splits: [],
    };
    setGroups([...groups, newGroup]);
    setSelectedPeople([]);
    setCurrentGroup(newGroup);
  };

  const handleCreateSplit = () => {
    if (!splitName || splitAmount <= 0) {
      alert("Please enter a valid split name and amount.");
      return;
    }
    if (!currentGroup) {
      alert("Please select a group to add the split.");
      return;
    }

    const defaultShares = {};
    currentGroup.members.forEach((person) => {
      defaultShares[person.id] = splitAmount / currentGroup.members.length;
    });

    const newSplit = {
      id: currentGroup.splits.length + 1,
      name: splitName,
      amount: splitAmount,
      shares: individualShares || defaultShares,
      paidBy,
    };

    const updatedGroup = {
      ...currentGroup,
      splits: [...currentGroup.splits, newSplit],
    };

    const updatedGroups = groups.map((group) =>
      group.id === currentGroup.id ? updatedGroup : group
    );

    setGroups(updatedGroups);
    setSplits([...splits, newSplit]);
    setSplitName("");
    setSplitAmount("");
    setIndividualShares({});
    setPaidBy(null);
  };

  const handleSelectPerson = (personId) => {
    const isSelected = selectedPeople.find((p) => p.id === personId);
    if (isSelected) {
      setSelectedPeople(selectedPeople.filter((p) => p.id !== personId));
    } else {
      const person = peopleList.find((p) => p.id === personId);
      setSelectedPeople([...selectedPeople, person]);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add Expense</h2>

      <div className={styles.section}>
        <h4 className={styles.subheading}>Step 1: Select People for Group</h4>
        <div className={styles.peopleList}>
          {peopleList.map((person) => (
            <button
              key={person.id}
              className={`${styles.personButton} ${
                selectedPeople.find((p) => p.id === person.id)
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectPerson(person.id)}
            >
              {person.name}
            </button>
          ))}
        </div>
        <button className={styles.actionButton} onClick={handleCreateGroup}>
          Create Group
        </button>
      </div>

      {currentGroup && (
        <>
          <div className={styles.section}>
            <h2 className={styles.subheading}>
              Step 2: Add Split to Group "{currentGroup.name}"
            </h2>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter Split Name"
              value={splitName}
              onChange={(e) => setSplitName(e.target.value)}
            />
            <input
              type="number"
              className={styles.input}
              placeholder="Enter Split Amount"
              value={splitAmount}
              onChange={(e) => setSplitAmount((e.target.value))}
            />
            <div className={styles.shares}>
              {currentGroup.members.map((person) => (
                <div key={person.id} className={styles.shareRow}>
                  <span>{person.name}:</span>
                  <input
                    type="number"
                    className={styles.shareInput}
                    placeholder={`Share for ${person.name}`}
                    value={individualShares[person.id] || ""}
                    onChange={(e) =>
                      setIndividualShares({
                        ...individualShares,
                        [person.id]: Number(e.target.value),
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <select
              className={styles.select}
              value={paidBy}
              onChange={(e) => setPaidBy(e.target.value)}
            >
              <option value="">Select Paid By</option>
              {currentGroup.members.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
            </select>
            <button className={styles.actionButton} onClick={handleCreateSplit}>
              Add Split
            </button>
          </div>
        </>
      )}

      <div className={styles.section}>
        <h2 className={styles.subheading}>Groups & Splits</h2>
        {groups.map((group) => (
          <div key={group.id} className={styles.group}>
            <h3 className={styles.groupName}>{group.name}</h3>
            <ul>
              {group.splits.map((split) => (
                <li key={split.id} className={styles.split}>
                  {split.name} - ₹{split.amount}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
