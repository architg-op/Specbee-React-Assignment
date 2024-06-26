import { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { MyContext } from '../MyContext.tsx';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function FilterCheckboxList(props) {
  const { filtersChecked, setFiltersChecked } = useContext(MyContext);

  const filterData = props.data;
  // console.log('filterData ', filterData);
  const handleToggle = (value: number) => () => {
    const currentIndex = filtersChecked.indexOf(value);
    const newChecked = [...filtersChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setFiltersChecked(newChecked);
  };

  // console.log('filtersChecked ', filtersChecked);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {filterData.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              filtersChecked.includes(value) &&
              (value === 'Date' || value === 'Title') ? (
                <IconButton edge="end" aria-label="comments">
                  <ArrowUpwardIcon />
                </IconButton>
              ) : (
                <IconButton edge="end" aria-label="comments">
                  <ArrowDownwardIcon />
                </IconButton>
              )
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
                  checked={filtersChecked?.indexOf(value) !== -1}
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
