// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EntryLogo, NavBar, Section } from './components';
import {
	ENTRY_DURATION,
	I_BELIEVE,
	I_BELIEVE_PER_1,
	I_BELIEVE_PER_2,
	I_BELIEVE_PER_3,
	NIETZSCHE_QUOTE,
	PREVIEW,
	PREVIEW_BOLD,
	VEHAHAVTA,
	VEHAHAVTA_MESSAGE,
	WHY_WE_DO_THIS_PER,
} from './consts';
import './app.less';
import { useState } from 'react';

export function App() {
	const [showEntryLogo, setShowEntryLogo] = useState(true);

	return (
		<div className="app-container">
			{showEntryLogo ? (
				<EntryLogo
					duration={ENTRY_DURATION}
					setShow={setShowEntryLogo}
				/>
			) : (
				<div>
					<NavBar/>
					<h1>{VEHAHAVTA}</h1>
					<h4>{VEHAHAVTA_MESSAGE}</h4>
					<h2>{PREVIEW}</h2>
					<h2>{PREVIEW_BOLD}</h2>
					<img alt={'logo'} src='/StartLogo.png'></img>
					<div className="content">
						<Section
							headline={NIETZSCHE_QUOTE}
							paragraphs={[WHY_WE_DO_THIS_PER]}
						/>
						<Section
							headline={I_BELIEVE}
							paragraphs={[
								I_BELIEVE_PER_1,
								I_BELIEVE_PER_2,
								I_BELIEVE_PER_3,
							]}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
