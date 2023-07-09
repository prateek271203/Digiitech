import React, { useState } from 'react';
import styles from './Location.module.css';
import {Table,TableHead,TableBody,TableRow,TableCell,IconButton,InputBase,Paper, } from '@material-ui/core';
//import { FiEdit } from 'react-icons/fi';
import EditIcon from '@material-ui/icons/Edit';
import { DeleteOutline } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import { BiFilterAlt } from 'react-icons/bi';


const Location = () => {
  const [tableData] = useState([
    { State: 'Jharkhand', City: 'Pembroke Pines', Country: 'Saudi Arabia', CountryCode: '+91' },
    { State: 'Sikkim', City: 'Naperville', Country: 'Bahrain', CountryCode: '+88'  },
    { State: 'Andhra Pradesh', City: 'Taledo', Country: 'Aland Islands', CountryCode: '+11'  },
    { State: 'Telangana', City: 'Orange', Country: 'Central African Republic', CountryCode: '+95'  },
    { State: 'Chattisgarh', City: 'Austin', Country: 'Iceland', CountryCode: '+55'  },
    { State: 'Uttar Pradesh', City: 'Fairfield', Country: 'Iran (Islamic Republic of)', CountryCode: '+19'  },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [Country, setCountry] = useState('');
  const [CountryCode, setCountryCode] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');

  const handleAddNewClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data here
    // Reset the form fields and hide the form
    setCountry('');
    setCountryCode('');
    setState('');
    setCity('');
  };

  const handleFormCancel = () => {
    setCountry('');
    setCountryCode('');
    setState('');
    setCity('');
    setShowForm(false);
  };

  const handleSearchInputChange = (e) => {
    // Handle search input change here
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
          <h3 className={styles.formHeading}>Add Locations</h3>
          <div className={styles.inputContainer}>
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              id="Country"
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country Name"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="CountryCode">Country Code</label>
            <input
              type="number"
              id="CountryCode"
              value={CountryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              placeholder="Country Code"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="State">Country</label>
            <input
              type="text"
              id="State"
              value={State}
              onChange={(e) => setState(e.target.value)}
              placeholder="State Name"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="City">Country</label>
            <input
              type="text"
              id="City"
              value={City}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City Name"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Add
            </button>
            <button type="button" className={styles.cancelButton} onClick={handleFormCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.tableContainer}>
          <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Country Code</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableHead className={styles.searchInTable}>
                <TableRow>
                  <TableCell>
                    <InputBase
                      placeholder="Search State"
                      className={styles.searchInput}
                      onChange={handleSearchInputChange}
                      startAdornment={<Search />}
                    />
                    <BiFilterAlt className= {styles.biFilterIcon}/>
                  </TableCell>
                  <TableCell>
                    <InputBase
                      placeholder="Search City"
                      className={styles.searchInput}
                      onChange={handleSearchInputChange}
                      startAdornment={<Search />}
                    />
                    <BiFilterAlt className= {styles.biFilterIcon}/>
                  </TableCell>
                  <TableCell>
                    <InputBase
                      placeholder="Search Country"
                      className={styles.searchInput}
                      onChange={handleSearchInputChange}
                      startAdornment={<Search />}
                    />
                    <BiFilterAlt className= {styles.biFilterIcon}/>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.City}>
                    <TableCell>{row.State}</TableCell>
                    <TableCell>{row.City}</TableCell>
                    <TableCell>{row.Country}</TableCell>
                    <TableCell>{row.CountryCode}</TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}
      {!showForm && (
        <button className={styles.searchButton} onClick={handleAddNewClick}>
          Add New
        </button>
      )}
    </div>
  );
};

export default Location;