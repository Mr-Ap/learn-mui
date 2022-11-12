import {
	Avatar,
	AvatarGroup,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { imageListMockData } from '../utils/mocks/Mocks';

const RightBar = () => {
	return (
		<Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }} p={2}>
			<Box position={'fixed'}>
				<Box mb={2} maxWidth={360}>
					<Typography component={'section'}>Online Friends</Typography>
					<AvatarGroup max={6}>
						<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						<Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
						<Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
						<Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
						<Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
					</AvatarGroup>
				</Box>
				<Box mb={2}>
					<Typography component={'section'}>Recent Photos</Typography>
					<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
						{imageListMockData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
				<Box>
					<Typography component={'section'}>Latest Conversations</Typography>
					<List
						sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
					>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
							</ListItemAvatar>
							<ListItemText
								primary='Brunch this weekend?'
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component='span'
											variant='body2'
											color='text.primary'
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem alignItems='flex-start'>
							<ListItemAvatar>
								<Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
							</ListItemAvatar>
							<ListItemText
								primary='Summer BBQ'
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component='span'
											variant='body2'
											color='text.primary'
										>
											to Scott, Alex, Jennifer
										</Typography>
										{" — Wish I could come, but I'm out of town this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem alignItems='flex-start'>
							<ListItemAvatar>
								<Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
							</ListItemAvatar>
							<ListItemText
								primary='Oui Oui'
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component='span'
											variant='body2'
											color='text.primary'
										>
											Sandra Adams
										</Typography>
										{' — Do you have Paris recommendations? Have you ever…'}
									</React.Fragment>
								}
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default RightBar;
