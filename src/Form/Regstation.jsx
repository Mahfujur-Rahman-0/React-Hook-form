import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import { useFieldArray, useForm } from "react-hook-form";

export default function Regstation() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm();
	const { fields, append, remove } = useFieldArray({
		name: "socials",
		control,
	});
	//submitSec function use for getting da
	function submitSec(e) {
		console.log(e);
		console.log("getting data from submitSec function");
		//reset();
	}
	return (
		<>
			<form onSubmit={handleSubmit(submitSec)}>
				<FieldSet>
					<Field label="Enter your first name" error={errors.emaill}>
						<input
							{...register("emaill", { required: "user name is required" })}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="email"
							name="emaill"
							id="emaill"
							placeholder="Type here"
						/>
					</Field>
					<Field label="Password" error={errors.passwordd}>
						<input
							{...register("passwordd", { required: "Password is required" })}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="password"
							name="passwordd"
							id="passwordd"
							placeholder="Type here Password"
						/>
					</Field>
					<Field label="First Name" error={errors.fname}>
						<input
							{...register("fname", { required: "First name is required" })}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="text"
							name="fname"
							id="fname"
							placeholder="Type here first name"
						/>
					</Field>
					<Field label="Age" error={errors.age}>
						<input
							{...register("age", {
								valueAsNumber: true,
								required: "Age is required",
								max: { value: 100, message: "age must be between 0 and 100" },
							})}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="number"
							name="age"
							id="age"
							placeholder="Type here age"
						/>
					</Field>
					<Field label="Picture" error={errors.picture}>
						<input
							{...register("picture", {
								required: "Picture is required",
							})}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="file"
							name="picture"
							id="picture"
							onChange={(e) => {
								const file = e.target.files[0];
								console.log("Selected file:", file); // Logs the selected file
							}}
						/>
					</Field>
				</FieldSet>
				<Field>
					<button
						type="submit"
						className="px-4 mx-auto py-2 rounded-md border border-red-500"
					>
						Login
					</button>
				</Field>
				<FieldSet label="Enter social Handels">
					{fields.map((file, index) => {
						return (
							<div
								className="flex w-2/6 mx-auto place-content-around"
								key={file.id}
							>
								<Field>
									<input
										{...register(`socials[${index}].name`)}
										className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
										type="text"
										name={`socials[${index}].name`}
										id={`socials[${index}].name`}
										placeholder="Type here"
									/>
								</Field>
								<Field>
									<input
										{...register(`socials[${index}].url`)}
										className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
										type="text"
										name={`socials[${index}].url`}
										id={`socials[${index}].url`}
										placeholder="Type here"
									/>
								</Field>
								<button
									type="button"
									onClick={() => remove(index)}
									className="px-4 my-3 mx-2 py-2 w-40 rounded-md bg-gray-400 border border-red-500"
								>
									-
								</button>
							</div>
						);
					})}
					<div className="flex mx-auto">
						<button
							type="button"
							onClick={() => append({ name: "", url: "" })}
							className="px-4 mx-2 my-3   py-2 w-40 rounded-md bg-cyan-400 border border-red-500"
						>
							Add new social
						</button>
					</div>
				</FieldSet>
			</form>
		</>
	);
}
