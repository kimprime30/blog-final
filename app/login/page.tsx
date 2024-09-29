const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Senha:
          <input type="password" name="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
