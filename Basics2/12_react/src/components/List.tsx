const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
	items,
	onClick,
}) => (
	<ul>
		{items.map((item, index) => (
			<li key={index} onClick={() => onClick?.(item)}>
				{item}
			</li>
		))}
	</ul>
);

export default List;