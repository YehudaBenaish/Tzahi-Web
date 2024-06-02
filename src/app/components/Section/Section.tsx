import './Section.less';
export type SectionType = {
	headline: string;
	paragraphs: string[];
};

export const Section = ({ headline, paragraphs }: SectionType) => {
	return (
		<div className="section-container">
			<h2 className="headline">{headline}</h2>
			{paragraphs.map((paragraph) => (
				<p className="paragraph">{paragraph}</p>
			))}
		</div>
	);
};
