import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

function LevelSelector(props: any) {
	return (
		<FormControl variant={'outlined'} fullWidth sx={{ color: 'white' }}>
			<InputLabel sx={{ color: 'white' }}>Level</InputLabel>
			<Select
				value={props.level}
				label="Level"
				onChange={props.changeLevel}
				defaultValue={1}
				sx={{ color: 'white' }}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={11}>11</MenuItem>
				<MenuItem value={12}>12</MenuItem>
				<MenuItem value={13}>13</MenuItem>
				<MenuItem value={14}>14</MenuItem>
				<MenuItem value={15}>15</MenuItem>
				<MenuItem value={16}>16</MenuItem>
				<MenuItem value={17}>17</MenuItem>
				<MenuItem value={18}>18</MenuItem>
			</Select>
		</FormControl>
	);
}

export default LevelSelector;
