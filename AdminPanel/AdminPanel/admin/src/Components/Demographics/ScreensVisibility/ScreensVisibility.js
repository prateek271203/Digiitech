import React, { useState } from 'react';
import styles from './ScreensVisibility.module.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Paper,
} from '@material-ui/core';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ScreensVisibility = () => {
  const [tableData] = useState([
    { id: 1, Options: 'Courses Registered', View: 'Visible' },
    { id: 2, Options: 'Courses Completed', View: 'Visible' },
    { id: 3, Options: 'Total Users', View: 'Not Visible' },
    { id: 4, Options: 'Total Teachers', View: 'Not Visible' },
    { id: 5, Options: 'Teachers Courses', View: 'Visible' },
    { id: 6, Options: 'Annual Income of Teachers', View: 'Not Visible' },
    { id: 7, Options: 'Language Known', View: 'Not Visible' },
    { id: 8, Options: 'Courses Price', View: 'Visible' },
    { id: 9, Options: 'Total Percentage', View: 'Not Visible' },
    { id: 10, Options: 'Total Topics', View: 'Visible' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [lowerRange, setLowerRange] = useState('');
  const [upperRange, setUpperRange] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data here
    // Reset the form fields and hide the form
    setLowerRange('');
    setUpperRange('');
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setLowerRange('');
    setUpperRange('');
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      {showForm ? (
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
          <h3 className={styles.formHeading}>Edit Visibility</h3>
          <div className={styles.inputContainer}>
            <label htmlFor="lowerRange">Lower Range</label>
            <input
              type="number"
              id="lowerRange"
              value={lowerRange}
              onChange={(e) => setLowerRange(e.target.value)}
              placeholder="14"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="upperRange">Upper Range</label>
            <input
              type="number"
              id="upperRange"
              value={upperRange}
              onChange={(e) => setUpperRange(e.target.value)}
              placeholder="Country Code"
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
                  <TableCell>S. No.</TableCell>
                  <TableCell>Options</TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.Options}</TableCell>
                    <TableCell>
                        {row.View === 'Visible' ? (
                            <IconButton>
                                <FaEye className={styles['fa-eye-icon']}/>
                            </IconButton>
                            ) : (
                            <IconButton>
                                <FaEyeSlash className={styles['fa-eye-slash-icon']}/>
                            </IconButton>
                        )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default ScreensVisibility;