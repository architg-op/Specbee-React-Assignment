import { useState, React, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { MyContext } from '../MyContext.tsx';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AuthorCheckboxList(props) {
  const { authorsChecked, setAuthorsChecked } = useContext(MyContext);

  const filterData = props.data;
  // console.log('filterData ', filterData);
  const handleToggle = (value: number) => () => {
    const currentIndex = authorsChecked.indexOf(value);
    const newChecked = [...authorsChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setAuthorsChecked(newChecked);
  };

  console.log('authorsChecked ', authorsChecked);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {filterData.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              authorsChecked.includes(value) &&
              (value === 'Date' || value === 'Title') ? (
                <IconButton edge="end" aria-label="comments">
                  <ArrowDownwardIcon />
                </IconButton>
              ) : null
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={authorsChecked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
