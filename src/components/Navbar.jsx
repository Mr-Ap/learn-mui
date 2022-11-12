import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box, Stack } from '@mui/system';
import Input from '@mui/material/Input';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClose = () => {
		setOpenMenu(false);
	};
	return (
		<AppBar position='sticky'>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>
					MUI
				</Typography>
				<AcUnitIcon
					fontSize='large'
					sx={{ display: { xs: 'block', sm: 'none' } }}
				></AcUnitIcon>
				<Box
					bgcolor={'white'}
					sx={{ borderRadius: '10px' }}
					p={1}
					width={'40%'}
				>
					<Input placeholder='Search...' fullWidth />
				</Box>
				<Stack
					direction={'row'}
					spacing={3}
					sx={{ display: { xs: 'none', sm: 'flex' } }}
				>
					<Badge badgeContent={4} color='secondary'>
						<MailIcon color='action' />
					</Badge>
					<Badge badgeContent={4} color='secondary'>
						<NotificationsIcon color='action' />
					</Badge>
					<AccountCircleIcon color='action' onClick={() => setOpenMenu(true)} />
				</Stack>
				<Stack
					direction={'row'}
					spacing={2}
					alignItems='center'
					sx={{ display: { xs: 'flex', sm: 'none' } }}
				>
					<Typography variant='p'>Name</Typography>
					<AccountCircleIcon color='action' onClick={() => setOpenMenu(true)} />
				</Stack>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					open={openMenu}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
