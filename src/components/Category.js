import React, { useState, useRef } from "react";

export default function Category() {
  const [selectedItem, setSelectedItem] = useState("카테고리 선택");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item.name);
    setIsOpen(false);
  };

  const handleClose = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const items = [
    { id: 1, name: "캐주얼" },
    { id: 2, name: "미니멀" },
    { id: 3, name: "스트릿" },
  ];

  return (
    <div>
      <button onClick={handleClick}>{selectedItem}</button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="dropdown-content"
          onClick={handleClose}
        >
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={() => handleItemSelect(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
