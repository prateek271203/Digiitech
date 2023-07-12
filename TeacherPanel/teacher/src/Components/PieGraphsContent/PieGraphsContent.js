import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Typography,
  Grid,
  FormControl,
  Card,
  CardContent,
  Select,
  MenuItem,
} from "@material-ui/core";
import styles from "./PieGraphsContent.module.css";

const PieGraphsContent = () => {
  const pieChartData = {
    gender: {
      labels: ["Male", "Female", " "],
      datasets: [
        {
          data: [63, 25, 12],
          backgroundColor: ["#f04c24", "#EFF4FB", "#ffff"],
        },
      ],
    },
    country: {
      labels: ["USA", "UK", "Canada", "Australia", "India"],
      datasets: [
        {
          data: [10, 25, 30, 20, 15],
          backgroundColor: [
            "#8D437A",
            "#DC63BE",
            "#EFF4FB",
            "#A8D0CE",
            "#FFD700",
          ],
        },
      ],
    },
  };

  const initialCardStates = [{ chartType: "gender" }, { chartType: "gender" }];

  const [cardStates, setCardStates] = useState(initialCardStates);

  const handleChartTypeChange = (index, event) => {
    const updatedCardStates = [...cardStates];
    updatedCardStates[index] = {
      chartType: event.target.value,
    };
    setCardStates(updatedCardStates);
  };

  const getChartData = (index) => {
    const chartType = cardStates[index].chartType;
    return pieChartData[chartType];
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.reduce((labels, label, i) => {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const value = ds.data[i];
                const percentage =
                  (value / ds.data.reduce((a, b) => a + b, 0)) * 100;
                const color = ds.backgroundColor[i];
                if (label !== " ") {
                  labels.push({
                    text: `${label} \n${percentage}%`,
                    fillStyle: color,
                    hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                    index: i,
                  });
                }
                return labels;
              }, []);
            }
            return [];
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Grid container spacing={6}>
        {cardStates.map((cardState, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Card className={styles.chartCard}>
              <CardContent>
                <Typography variant="h6" className={styles.chartTitle}>
                  {index === 0
                    ? "Total Students"
                    : index === 1
                    ? "Courses"
                    : null}
                </Typography>
                <div className={styles.dropdownContainer}>
                  <FormControl
                    variant="outlined"
                    className={styles.chartFilter}
                  >
                    <Select
                      value={cardState.chartType}
                      onChange={(event) => handleChartTypeChange(index, event)}
                    >
                      <MenuItem value="gender">Gender</MenuItem>
                      <MenuItem value="country">Country</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.pieChart}>
                  <div className={styles.legendContainer}>
                    <Pie data={getChartData(index)} options={pieChartOptions} />
                    <div className={styles.legend}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PieGraphsContent;
