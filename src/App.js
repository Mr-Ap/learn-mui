import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import { Stack } from '@mui/system';

const App = () => {
	return (
		<div>
			<NavBar />
			<Stack direction='row' spacing={2}>
				<Sidebar />
				<Feed />
				<RightBar />
			</Stack>
		</div>
	);
};

export default App;
