import React from "react";
import "./ClothesCategory.css";

export default function ClothesCategory({
  clothesCategory,
  setClothesCategory,
}) {
  const CATEGORIES = ["상의", "하의", "아우터", "신발"];

  // 카테고리를 선택했을 때 setClothesCategory에 저장해주기 위한 함수
  const handleItemSelect = (e) => {
    setClothesCategory(e.target.value);
  };

  return (
    <div className="clothescategory">
      <label htmlFor="clothescategory"></label>
      <select
        name="clothescategory"
        id="clothescategory"
        onChange={handleItemSelect}
        value={clothesCategory}
      >
        <option value="">카테고리를 선택해주세요.</option>
        {CATEGORIES?.map((clothesCategory) => (
          <option value={clothesCategory} key={clothesCategory}>
            {clothesCategory}
          </option>
        ))}
      </select>
    </div>
  );
}
