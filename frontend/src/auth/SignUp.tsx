import { useState } from 'react'
import './Signup.css'
type SignUpProps = {
  onSuccess?: () => void
}
function SignUp({ onSuccess }: SignUpProps) {
	const [form, setForm] = useState({ name: '', email: '', password: '' })
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
		// Here you would typically send form data to your backend
		// Simulate login after signup
		setTimeout(() => {
		if (onSuccess) onSuccess()
		}, 1000)
	}

	return (
		<form className="signup-container" onSubmit={handleSubmit}>
		<h2>Sign Up</h2>
		<div className="signup-field">
			<label>Name:
			<input
				name="name"
				value={form.name}
				onChange={handleChange}
				required
				type="text"
				autoComplete="name"
			/>
			</label>
		</div>
		<div className="signup-field">
			<label>Email:
			<input
				name="email"
				value={form.email}
				onChange={handleChange}
				required
				type="email"
				autoComplete="email"
			/>
			</label>
		</div>
		<div className="signup-field">
			<label>Password:
			<input
				name="password"
				value={form.password}
				onChange={handleChange}
				required
				type="password"
				autoComplete="new-password"
			/>
			</label>
		</div>
		<button className="signup-btn" type="submit">Sign Up</button>
		{submitted && <p className="signup-success">Signup successful!</p>}
		</form>
	)
}

export default SignUp