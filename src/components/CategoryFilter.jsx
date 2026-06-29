function CategoryFilter({ categories, selectedCategory, onSelectCategory}){
 return (
    <div className="category-filter">
      <button
        className={`filter-btn ${selectedCategory === "Tous" ? "active" : ""}`}
        onClick={() => onSelectCategory("Tous")}
      >
        Tous
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
export default CategoryFilter