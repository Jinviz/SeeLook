import React, { useState, useRef } from "react";

export default function Category() {
  const [category, setCagtegory] = useState("카테고리 선택");
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const CATEGORIES = ["캐주얼", "미니멀", "스트릿"];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (item) => {
    setCagtegory(item.name);
    setIsOpen(false);
  };

  // const handleClose = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  return (
    <div className="category">
      <label htmlFor="category"></label>
      <select
        name="category"
        id="category"
        onChange={handleItemSelect}
        defaultValue={category}
      >
        <option value="">카테고리를 선택해주세요</option>
        {CATEGORIES?.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
