import React from "react";
import "./Category.css";

export default function Category({ category, setCategory }) {
  const CATEGORIES = ["캐주얼", "미니멀", "스트릿"];

  // 카테고리를 선택했을 때 setCategory에 저장해주기 위한 함수
  const handleItemSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="category">
      <label htmlFor="category"></label>
      <select
        name="category"
        id="category"
        onChange={handleItemSelect}
        value={category}
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
