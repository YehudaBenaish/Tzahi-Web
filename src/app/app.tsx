// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EntryLogo } from './components';
import { Section } from './components/Section/Section';
import {
	I_BELIEVE,
	I_BELIEVE_PER_1,
	I_BELIEVE_PER_2,
	I_BELIEVE_PER_3,
	NIETZSCHE_QUOTE,
	WHY_WE_DO_THIS,
	WHY_WE_DO_THIS_PER,
} from './consts';
import './app.less';

export function App() {
	return (
		<EntryLogo
			duration={3000}
			//duration={0}
			children={
				<div className="app-container">
					<h1>קהילת ואהבת</h1>
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
			}
		/>
	);
}

export default App;
