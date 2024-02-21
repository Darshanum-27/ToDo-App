import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import {useState, useEffect} from 'react';
import {ListItemButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function App() {
  let [inputvalue, setInputValue] = useState('');
  let [remaining,setRemainingValue] = useState([]);
  let [completed,setCompletedValue] = useState([]);
  let [allData, setData] = useState([])
  let [displayData, setDisplayData] = useState([])
  const displayInput = (event) =>{
    let changeval = event.target.value
    setInputValue(changeval)
  }
  const updateval = () =>{
    let imp = [...allData,inputvalue]
    setData(imp)
    setRemainingValue(imp)
  }
  const showRemainingData = () =>{
    setDisplayData(remaining);
  }
  const showCompletedData = () =>{
    setDisplayData(completed)
  }

  useEffect(() => {
    setDisplayData(allData);
  }, [allData])

  const showAll = (event) =>{
    setDisplayData(allData)
  }

  const handleChange = (event) => {
    let val = [...completed,event.target.name];
    setCompletedValue(val);
    let rem = []
    remaining.map(re =>{
      if(re !== event.target.name){
        rem.push(re)
      }
    })
    setRemainingValue(rem)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>THINGS TO DO</h1>
        <div style={{display:"block"}}>
        <TextField fullWidth id="outlined-basic" label="Add More" variant="outlined"   style={{alignContent:'center'}} onChange={displayInput} />
        </div>
        {
          displayData.map(d1 => <ListItemButton component="a" href="#simple-list">
          <ul><Checkbox onChange={handleChange} name={d1}/>{d1}</ul>
        </ListItemButton>)
        }
        <AppBar position="static" color="success">
            <Toolbar variant="small">
              <IconButton edge="start" color="success" aria-label="menu" sx={{ mr:5 }}>
              <Button variant="contained" onClick={updateval}>+</Button>
              <h1>|</h1>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div" style={{marginRight:"56%"}}>
                {displayData.length} Items Left
              </Typography>
              <Button variant="contained" onClick={showAll}style={{margin:"1%"}}>ALL</Button>
              <Button variant="contained" onClick={showRemainingData}style={{margin:"1%"}}>ACTIVE</Button>
              <Button variant="contained" onClick={showCompletedData}style={{margin:"1%"}}>COMPLETED</Button>
            </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
