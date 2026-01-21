export default function Register() {
  async function submit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    alert("Registration successful");
  }

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Create Account</button>
    </form>
  );
}
