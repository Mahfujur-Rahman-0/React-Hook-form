export default function FieldSet({ label, children }) {
	return (
		<>
			<fieldset className="m-2 text-center border-none p-0">
				{label && <legend className="text-md font-bold mb-2">{label}</legend>}
			</fieldset>
			<div className="flex mx-auto flex-col justify-between self-start">
				{children}
			</div>
		</>
	);
}
