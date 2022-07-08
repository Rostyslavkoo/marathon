import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FilmCard({
	film: { id, poster_path, title, vote_average, is_liked, is_see_later },
	addToLiked,
	addToSeeLater,
}: {
	film: any;
	addToLiked: any;
	addToSeeLater: any;
}) {
	let navigate = useNavigate();
	function handleDetails() {
		navigate(`film-about-${id}`);
	}
	function handleClickLiked() {
		addToLiked(id);
	}
	function handleClickLater() {
		addToSeeLater(id);
	}
	return (
		<Card
			sx={{
				display: 'flex',
				width: '100%',
				height: '300px',
				minWidth: '300px',
			}}
		>
			<Grid item xs={5}>
				<CardMedia
					component='img'
					image={`https://image.tmdb.org/t/p/w300${poster_path}`}
					alt={title}
					height='300'
					width='100'
				/>
			</Grid>
			<Grid item xs={7}>
				<CardContent sx={{ pb: 0, minWidth: '60%', width: '100%',height:'100%' }}>
					<Grid
						container
						alignItems='flex-start'
						justifyContent='space-between'
						direction='column'
						sx={{ height: '100%' }}
					>
						<Grid container justifyContent='space-between' alignItems='center'>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								Rating: {vote_average}
							</Typography>
							<Grid item>
								<IconButton
									color='primary'
									size='small'
									onClick={handleClickLiked}
								>
									{is_liked ? <StarIcon /> : <StarBorderIcon />}
								</IconButton>
								<IconButton
									color='primary'
									size='small'
									onClick={handleClickLater}
								>
									{is_see_later ? (
										<BookmarkIcon />
									) : (
										<BookmarkBorderOutlinedIcon />
									)}
								</IconButton>
							</Grid>
							<Box sx={{ pt: 3, width: '100%' }}>
								<Typography
									variant='body1'
									color='text.secondary'
									sx={{ fontWeight: 800 }}
								>
									{title}
								</Typography>
							</Box>
						</Grid>
						<Grid item sx={{ width: '100%' }}>
							<Button sx={{ width: '100%' }} onClick={handleDetails}>
								Learn More
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Grid>
		</Card>
	);
}
export default FilmCard;
