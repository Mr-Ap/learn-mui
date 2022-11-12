import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from '@mui/material';

const Post = () => {
	return (
		<Card sx={{ margin: 1 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				height='20%'
				component='img'
				image='/assests/riverside.avif'
				alt='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
