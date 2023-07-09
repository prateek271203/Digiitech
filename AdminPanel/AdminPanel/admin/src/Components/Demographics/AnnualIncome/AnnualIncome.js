import React, { useState } from 'react';
import styles from './AnnualIncome.module.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Paper,
} from '@material-ui/core';
import { FiEdit } from 'react-icons/fi';
import { CaretDownFilled } from '@ant-design/icons';

const AnnualIncome = () => {
  const [tableData] = useState([
    { id: 1, range: '100000-200000' },
    { id: 2, range: '200000-400000' },
    { id: 3, range: '400000-600000' },
    { id: 4, range: '600000-800000' },
    { id: 5, range: '800000-1000000' },
    { id: 6, range: 'Above 1000000' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [lowerRange, setLowerRange] = useState('');
  const [upperRange, setUpperRange] = useState('');

  const handleAddNewClick = () => {
    setShowForm(true);
  };

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
          <h3 className={styles.formHeading}>Income Range</h3>
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
                  <TableCell>Annual Income Range</TableCell>
                  <TableCell>
                    <CaretDownFilled />
                  </TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.range}</TableCell>
                    <TableCell>
                      <IconButton>
                        <FiEdit />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Button className="Delete" variant="contained" color="secondary">
                        Delete
                      </Button>
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

export default AnnualIncome;

