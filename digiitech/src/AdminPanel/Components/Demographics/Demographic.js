import React, { useState } from 'react';
import styles from './Demographic.module.css';
import AnnualIncome from "./AnnualIncome/AnnualIncome";
import ScreensVisibility from "./ScreensVisibility/ScreensVisibility";
import Location from "./Location/Location";
import OnboardingScreen from "./OnboardingScreen/OnboardingScreen";
import { AiOutlineSearch, AiOutlineUndo, AiOutlineClose } from 'react-icons/ai';
import { MdAdd, MdFilterList } from 'react-icons/md';

const Demographic = () => {
  const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchText, setSearchText] = useState('');

  const searchOptions = [
    'Gender', 'Highest Education', 'Occupation', 'Annual Income',
    'Language Known', 'Location', 'Screens Visibility', 'Onboarding Screen'
  ];

  const handleSearchBarClick = () => {
    setSearchOptionsVisible(!searchOptionsVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSearchOptionsVisible(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleUndoClick = () => {
    // Handle Undo button click action here
  };

  const handleAddNewClick = () => {
    // Handle Add New button click action here
  };

  return (
    <div>
      {/* Search container */}
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <AiOutlineSearch className={styles.searchSymbol} />
          <input
            type="text"
            placeholder={selectedOption  || "Search Demographic"}
            value={searchText}
            onClick={handleSearchBarClick}
            onChange={handleSearchInputChange}
          />
          <div className={styles.arrowContainer} onClick={handleSearchBarClick}>
            <div className={searchOptionsVisible ? styles.arrowRight : styles.arrowDown}></div>
          </div>
          <button className={styles.undoButton} onClick={handleUndoClick}>
            Undo
            <AiOutlineUndo className={styles.buttonIcon} />
          </button>
          <button className={styles.addButton} onClick={handleAddNewClick}>
            Add New
            <MdAdd className={styles.buttonIcon} />
          </button>
          <div className={styles.filterIcon}>
            <MdFilterList />
          </div>
        </div>
        {searchOptionsVisible && (
          <div className={styles.dropdown}>
            {searchOptions.map((option) => (
              <div
                key={option}
                className={styles.option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Annual Income*/}
      {selectedOption==='Annual Income' && (
          <div className={styles.clearIcon} onClick={() => setSelectedOption(null)}>
            <AiOutlineClose />
            </div>
            ) && <AnnualIncome />}
        

      {/* Screens Visibility */}
      {selectedOption==='Screens Visibility' && (
          <div className={styles.clearIcon} onClick={() => setSelectedOption(null)}>
            <AiOutlineClose />
            </div>
            ) && <ScreensVisibility />}

      {/* Location */}
      {selectedOption==='Location' && (
          <div className={styles.clearIcon} onClick={() => setSelectedOption(null)}>
            <AiOutlineClose />
            </div>
            ) && <Location />}

      {/* Onboarding Screen */}
      {selectedOption==='Onboarding Screen' && (
          <div className={styles.clearIcon} onClick={() => setSelectedOption(null)}>
            <AiOutlineClose />
            </div>
            ) && <OnboardingScreen />}
    </div>
  );
};

export default Demographic;
