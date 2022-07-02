import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

function FilmPreview({ searchedFilms }) {
	let navigate = useNavigate();

	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = searchedFilms.length;

	console.log(searchedFilms);
	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};
	const handleFilmClick = (id: number) => {
		navigate(`/film-about-${id}`);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ maxWidth: '100%', flexGrow: 1, my: 4 }}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
				}}
			>
				<Typography> {searchedFilms[activeStep].title}</Typography>
			</Paper>
			<Box sx={{ height: 400, maxWidth: '100%', width: '100%', p: 2 }}>
				<img
					onClick={() => handleFilmClick(searchedFilms[activeStep].id)}
					height={'100%'}
					width={'100%'}
					style={{ objectFit: 'cover', cursor: 'pointer' }}
					src={`https://image.tmdb.org/t/p/w300${searchedFilms[activeStep].poster_path}`}
					alt=''
				/>
			</Box>

			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</Box>
	);
}

export default FilmPreview;
