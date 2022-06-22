import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function FilmCard({
	film: { id, poster_path, title, vote_average },
}: {
	film: any;
}) {
	return (
		<Card sx={{ display: 'flex', width: '100%', height: '300px' }}>
			<CardMedia
				component='img'
				image={poster_path}
				alt={title}
				height='300'
				width='100'
			/>

			<CardContent sx={{ pb: 0, minWidth: '60%' }}>
				<Grid
					container
					alignItems='start'
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
							<IconButton color='secondary' size='small'>
								<StarBorderIcon />
							</IconButton>
							<IconButton color='secondary' size='small'>
								<BookmarkBorderOutlinedIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item>
						<Typography variant='body2' color='text.secondary'>
							{title}
						</Typography>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Button sx={{ width: '100%' }}>Learn More</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
export default FilmCard;
