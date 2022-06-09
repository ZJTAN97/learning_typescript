import React, { useState } from "react";

const useNumber = (initialValue: number) => useState<number>();

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Incrementor: React.FC<{
	value: UseNumberValue;
	setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
	<button onClick={() => setValue(value || 1 + 1)}>Add - {value}</button>
);

export default Incrementor;
