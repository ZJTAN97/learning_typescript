interface BoxProps {
	children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => (
	<div style={{ padding: "1em", fontWeight: "bold" }}>{children}</div>
);

export default Box;