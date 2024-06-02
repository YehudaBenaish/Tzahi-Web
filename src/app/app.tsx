// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EntryLogo } from './components';
import { Section } from './components/Section/Section';
import {
	ENTRY_DURATION,
	I_BELIEVE,
	I_BELIEVE_PER_1,
	I_BELIEVE_PER_2,
	I_BELIEVE_PER_3,
	NIETZSCHE_QUOTE,
	VEHAHAVTA,
	WHY_WE_DO_THIS_PER,
} from './consts';
import './app.less';
import { useState } from 'react';

export function App() {
	const [showEntryLogo, setShowEntryLogo] = useState(true);

	return (
		<div>
			{showEntryLogo ? (
				<EntryLogo
					duration={ENTRY_DURATION}
					setShow={setShowEntryLogo}
				/>
			) : (
				<div className="app-container">
					<h1>{VEHAHAVTA}</h1>
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
