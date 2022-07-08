import { useState } from 'react';
import {
	Paper,
	Button,
	StepContent,
	StepLabel,
	Step,
	Stepper,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Checkbox,
	ListItemText,
	SelectChangeEvent,
	OutlinedInput,
	Chip,
	RadioGroup,
	FormControlLabel,
	Radio,
	Card,
	CardContent,
} from '@mui/material';
import { getGenres } from '@/data/genres';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function SeachForm({ searchedParams,resetParams }) {
	const [activeStep, setActiveStep] = useState(0);
	const [genresValues, setGenresValue] = useState([]);
	const [filmRating, setFilmRating] = useState('');
	const [PopularityValue, setPopularityValue] = useState('');
	const checkboxValue = getGenres();

	const handleChangePopulariteValue = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPopularityValue((event.target as HTMLInputElement).value);
	};

	const handleChangeFilmRating = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setFilmRating((event.target as HTMLInputElement).value);
	};

	const handleChangeGenres = (
		event: SelectChangeEvent<typeof genresValues>
	) => {
		const {
			target: { value },
		} = event;
		setGenresValue(value, ...genresValues);
	};

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};
	const handleFinish = () => {
		const searchParams = {
			genres: genresValues,
			filmRating: filmRating,
			PopularityValue: PopularityValue,
		};
		searchedParams(searchParams);
		handleNext();
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setGenresValue([]);
		setPopularityValue('');
		setFilmRating('');
		setActiveStep(0);
		resetParams();
	};

	return (
		<Card>
			<CardContent>
				<Box sx={{ maxWidth: '100%' }}>
					<Stepper activeStep={activeStep} orientation='vertical'>
						<Step>
							<StepLabel>Genres</StepLabel>
							<StepContent>
								<FormControl
									sx={{ m: 1, minWidth: '50%', width: 'auto' }}
									fullWidth
									size='small'
								>
									<InputLabel id='demo-multiple-checkbox-label'>
										Choose Genres
									</InputLabel>
									<Select
										fullWidth
										labelId='demo-multiple-checkbox-label'
										id='demo-multiple-checkbox'
										multiple
										value={genresValues}
										onChange={handleChangeGenres}
										input={<OutlinedInput label='Choose Genres' />}
										renderValue={selected => (
											<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
												{selected.map(value => (
													<Chip key={value} label={value} />
												))}
											</Box>
										)}
										MenuProps={MenuProps}
									>
										{checkboxValue.map(checkbox => (
											<MenuItem key={checkbox.id} value={checkbox.name}>
												<Checkbox
													checked={genresValues.indexOf(checkbox.name) > -1}
												/>
												<ListItemText primary={checkbox.name} />
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<Box sx={{ mb: 2 }}>
									<div>
										<Button
											variant='contained'
											onClick={handleNext}
											disabled={!genresValues.length}
											sx={{ mt: 1, mr: 1 }}
										>
											Continue
										</Button>
									</div>
								</Box>
							</StepContent>
						</Step>
						<Step>
							<StepLabel>Film Rating</StepLabel>
							<StepContent>
								<FormControl>
									<RadioGroup
										aria-labelledby='demo-controlled-radio-buttons-group'
										name='controlled-radio-buttons-group'
										value={filmRating}
										onChange={handleChangeFilmRating}
									>
										<FormControlLabel
											value='low'
											control={<Radio />}
											label='Low'
										/>
										<FormControlLabel
											value='hight'
											control={<Radio />}
											label='Hight'
										/>
									</RadioGroup>
								</FormControl>
								<Box sx={{ mb: 2 }}>
									<div>
										<Button
											variant='contained'
											onClick={handleNext}
											disabled={!filmRating}
											sx={{ mt: 1, mr: 1 }}
										>
											Continue
										</Button>
										<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
											Back
										</Button>
									</div>
								</Box>
							</StepContent>
						</Step>
						<Step>
							<StepLabel>Popularity of the film</StepLabel>
							<StepContent>
								<FormControl>
									<RadioGroup
										aria-labelledby='demo-controlled-radio-buttons-group'
										name='controlled-radio-buttons-group'
										value={PopularityValue}
										onChange={handleChangePopulariteValue}
									>
										<FormControlLabel
											value='popular'
											control={<Radio />}
											label='Popular'
										/>
										<FormControlLabel
											value='unknown'
											control={<Radio />}
											label='Unknown'
										/>
									</RadioGroup>
								</FormControl>
								<Box sx={{ mb: 2 }}>
									<div>
										<Button
											variant='contained'
											onClick={handleFinish}
											disabled={!PopularityValue}
											sx={{ mt: 1, mr: 1 }}
										>
											Finish
										</Button>
										<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
											Back
										</Button>
									</div>
								</Box>
							</StepContent>
						</Step>
					</Stepper>
					{activeStep === 3 && (
						<Paper square elevation={0} sx={{ p: 3 }}>
							<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
								Reset
							</Button>
						</Paper>
					)}
				</Box>
			</CardContent>
		</Card>
	);
}

export default SeachForm;
