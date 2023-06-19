import React from "react";
function CoursesPage() {
  return (
    <nav>
      <div className="container">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass">
            <input
              type="search"
              placeholder="Search"
              id="Search"
              class="form-control"
            />
          </i>
        </div>
      </div>
    </nav>
  );
}
export default CoursesPage;
