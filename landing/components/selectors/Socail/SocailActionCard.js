import React, { useState } from "react";
import style from "./SocailURLCard.module.css";
import { inputValidation } from "../../../helpers/Validation";

import {
  deleteCard,
  cardAction,
} from "rtk/features/socailCard/socialCardSlice";
import { useDispatch, useSelector } from "react-redux";
import { addIcon } from "rtk/features/socailIcon/socailIconSlice";
import { FaTrashAlt } from "react-icons/fa";

const SocailActionCard = () => {
  const { value } = useSelector((state) => state.socailCard);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [newIndex, setNewIndex] = useState("");

  // INPUT FIELD VALUE SAVE REDUX AFTER VALIDATION
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    setNewIndex(index);

    if (!inputValidation(inputValue)) {
      setError("Please write a valid action");
    } else {
      setError("");
      dispatch(cardAction({ inputValue, index }));
    }
  };

  const handleDelete = (item) => {
    dispatch(deleteCard(item.id));
    dispatch(addIcon(item));
  };

  return (
    <>
      {value?.map((item, index) => (
        <div className={`${style.main}`} key={item.id}>
          <div style={{ justifyContent: " space-between", display: "flex" }}>
            <div className=" flex">
              <item.icon className={`${style.iconStyle}`} />
              <p style={{ fontSize: "14px", marginTop: "3px" }}>{item.text}</p>
            </div>
            <div>
              <p
                className={style.deleteButton}
                onClick={() => handleDelete(item)}
              >
                <FaTrashAlt />
              </p>
            </div>
          </div>
          <div className={`${style.inputStyle}`}>
            <p className="pb-0">URL</p>
            <input
              className="border border-1"
              type="text"
              placeholder={item.url}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          {newIndex == index ? (
            <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default SocailActionCard;
