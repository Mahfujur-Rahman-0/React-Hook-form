import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	function submitForm(e) {
		console.log(e);

		//here ( e ) gives the data in single array.
	}
	return (
		<>
			<form onSubmit={handleSubmit(submitForm)}>
				<FieldSet label="login details">
					<Field label="Enter your first name" error={errors.email}>
						<input
							{...register("email", { required: "user name is required" })}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="email"
							name="email"
							id="email"
							placeholder="Type here"
						/>
					</Field>
					<Field label="Password" error={errors.password}>
						<input
							{...register("password", {
								required: "Password name is required",
								minLength: { value: 8, message: "need atlist 8 carecters" },
							})}
							className="p-2 mx-auto border box-border w-[300px] rounded-md border-gray-200"
							type="password"
							name="password"
							id="password"
							placeholder="password"
						/>
					</Field>
				</FieldSet>
				<Field>
					<button className="px-4 mx-auto py-2 rounded-md border border-red-500">
						Login
					</button>
				</Field>
			</form>
		</>
	);
}
