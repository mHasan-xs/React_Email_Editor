import React, { useEffect, useState } from "react";
import SocialActionCard from "./SocialActionCard";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { inputValidation } from "../../../helpers/Validation";
import { useNode } from "@craftjs/core";

export const SocialSetting = (props) => {
  const [card, setCard] = useState([]);
  const [icon, setIcon] = useState([
    {
      id: 1,
      icon: "https://i.ibb.co/56Wg7v0/icons8-facebook-35.png",
      text: "Facebook",
      url: "",
    },
    {
      id: 2,
      icon: "https://i.ibb.co/0V9wCBC/icons8-twitter-35.png",
      text: "Twitter",
      url: "",
    },
    {
      id: 3,
      name: "Whats App",
      icon: "https://i.ibb.co/4NrvZ48/icons8-whatsapp-35.png",
      url: "",
    },
    {
      id: 4,
      name: "YoutTube",
      icon: "https://i.ibb.co/7jpgKfq/icons8-youtube-35.png",
      url: "",
    },
    {
      id: 5,
      icon: "https://i.ibb.co/yRYfzD0/icons8-instagram-35.png",
      text: "Instagram",
      url: "",
    },
  ]);

  const [error, setError] = useState("");
  const [newIndex, setNewIndex] = useState("");

  // GET SETPROPS, IT'S IMPORT FROM CRAFT JS
  const {
    actions: { setProp },
  } = useNode();

  // FOR RERENDER COMPONENT , SINGLE CHANGES IN CARD
  useEffect(() => {
    if (card.length > 0) {
      setProp((props) => (props.socialCard = card));
    }
  }, [card]);

  // CREATE CARD AND REMOVE ICON FROM INITIAL STATE
  const handleIcon = (item) => {
    setCard((prev) => [...prev, item]);
    const newIcon = icon.filter((icon) => icon.id !== item.id);
    setIcon(newIcon);
    setProp((props) => (props.socialCard = card));
  };

  // FOR DELETE CARD AND ADD IT'S PREVIOUS STATE
  const handleDelete = (item) => {
    const newCard = card.filter((card) => card.id !== item.id);
    setCard(newCard);
    setIcon((prev) => [item, ...prev]);
  };

  // FOR HANDLE CARD INPUT
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    setNewIndex(index);

    if (!inputValidation(inputValue)) {
      setError("Please write a valid action");
    } else {
      setError("");
      let cardCopy = JSON.parse(JSON.stringify(card));
      cardCopy[index].url = inputValue;
      setCard(cardCopy);
    }
  };

  return (
    <>
      <ToolbarSection title="Size" props={["width"]}>
        <ToolbarItem
          full={true}
          propKey="width"
          type="slider"
          label="Icon Size"
        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem propKey="flexDirection" type="radio" label="">
          <ToolbarRadio value="row" label="Row" />
        </ToolbarItem>
        <ToolbarItem propKey="flexDirection" type="radio" label=" ">
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
          <ToolbarRadio value="space-between" label="Between" />
          <ToolbarRadio value="space-evenly" label="Evenly" />
          <ToolbarRadio value="space-around" label="Around" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
          <ToolbarRadio value="space-between" label="Between" />
          <ToolbarRadio value="space-evenly" label="Evenly" />
          <ToolbarRadio value="space-around" label="Around" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection title="Icons">
        {card.length > 0 && (
          <SocialActionCard
            cardItem={card}
            handleDelete={handleDelete}
            handleChange={handleChange}
            error={error}
            newIndex={newIndex}
          />
        )}

        {icon.map((item, index) => (
          <img src={item.icon} onClick={() => handleIcon(item)} key={item.id} />
        ))}
      </ToolbarSection>
    </>
  );
};
