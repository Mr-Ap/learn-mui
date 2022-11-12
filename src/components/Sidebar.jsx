import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Switch from '@mui/material/Switch';
import React from 'react';

const Sidebar = () => {
	return (
		<Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }} p={2}>
			<Box position={'fixed'}>
				<List>
					<ListItem disablePadding>
						<ListItemButton LinkComponent={'a'} href='#'>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Inbox' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton LinkComponent={'a'} href='SettingsIcon'>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='SettingsIcon' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton LinkComponent={'a'} href='Profile'>
							<ListItemIcon>
								<AccountBoxIcon />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton LinkComponent={'a'} href='HomeIcon'>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary='HomeIcon' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DarkModeIcon />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
