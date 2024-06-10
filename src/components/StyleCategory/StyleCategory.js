import React from "react";
import "./StyleCategory.css";

export default function StyleCategory({ styleCategory, setStyleCategory }) {
  const CATEGORIES = ["캐주얼", "미니멀", "스트릿"];

  // 카테고리를 선택했을 때 setStyleCategory에 저장해주기 위한 함수
  const handleItemSelect = (e) => {
    setStyleCategory(e.target.value);
  };

  return (
    <div className="stylecategory">
      <label htmlFor="stylecategory"></label>
      <select
        name="stylecategory"
        id="stylecategory"
        onChange={handleItemSelect}
        value={styleCategory}
      >
        <option value="">카테고리를 선택해주세요</option>
        {CATEGORIES?.map((styleCategory) => (
          <option value={styleCategory} key={styleCategory}>
            {styleCategory}
          </option>
        ))}
      </select>
    </div>
  );
}
