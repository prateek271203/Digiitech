import React, { useState } from "react";
import logo1 from "../images/logo1.png";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Home,
  BarChart,
  Subscriptions,
  People,
  Mail,
  ChevronRight,
} from "@material-ui/icons";
import styles from "./Sidebar.module.css";

const sidebarButtons = [
  { name: "Dashboard", icon: Home },
  { name: "Demographic", icon: BarChart },
  { name: "Courses", icon: People },
  { name: "Subscriptions", icon: Subscriptions },
  { name: "Roles", icon: People },
  { name: "Profile", icon: Mail },
];

const Sidebar = ({ setActivePage }) => {
  const [selectedButton, setSelectedButton] = useState("Dashboard");
  const handleButtonClick = (buttonName) => {
    setActivePage(buttonName);
    setSelectedButton(buttonName);
  };

  return (
    <Container className={styles.sidebar}>
      <div className={styles.sectionBreak}>
        <div className={styles.logoContainer}>
          <img src={logo1} alt="Logo" className={styles.logo} />
        </div>
      </div>
      <div>
        <Typography variant="subtitle1">Home</Typography>
        <div className={styles.sectionBreak}>
          <List component="nav">
            <ListItem
              button
              onClick={() => handleButtonClick("Dashboard")}
              className={
                selectedButton === "Dashboard" ? styles.selectedButton : ""
              }
            >
              <ListItemIcon>
                <Home
                  fontSize="small"
                  className={
                    selectedButton === "Dashboard"
                      ? styles.selectedIcon
                      : styles.listItemIcon
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              {selectedButton === "Dashboard" && (
                <ChevronRight
                  fontSize="small"
                  className={styles.selectedChevron}
                />
              )}
              {selectedButton !== "Dashboard" && (
                <ChevronRight fontSize="small" className={styles.chevron} />
              )}
            </ListItem>
          </List>
        </div>
      </div>
      <div>
        <Typography variant="subtitle1">Pages</Typography>
        <div className={styles.sectionBreak}>
          <List component="nav">
            {sidebarButtons.slice(1).map((button) => (
              <ListItem
                key={button.name}
                button
                onClick={() => handleButtonClick(button.name)}
                className={
                  selectedButton === button.name ? styles.selectedButton : ""
                }
              >
                <ListItemIcon>
                  <button.icon
                    fontSize="small"
                    className={
                      selectedButton === button.name
                        ? styles.selectedIcon
                        : styles.listItemIcon
                    }
                  />
                </ListItemIcon>
                <ListItemText primary={button.name} />
                {selectedButton === button.name && (
                  <ChevronRight
                    fontSize="small"
                    className={styles.selectedChevron}
                  />
                )}
                {selectedButton !== button.name && (
                  <ChevronRight fontSize="small" className={styles.chevron} />
                )}
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
