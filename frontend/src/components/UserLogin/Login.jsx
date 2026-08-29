import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className="login-page">
            <style>{`
                .login-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f4f7fb 0%, #eaf2ff 100%);
                    font-family: Arial, sans-serif;
                }

                .login-card {
                    width: 100%;
                    max-width: 420px;
                    background: #ffffff;
                    padding: 32px 28px;
                    border-radius: 16px;
                    box-shadow: 0 12px 30px rgba(25, 59, 104, 0.12);
                    border: 1px solid #dfe9f7;
                }

                .login-card h2 {
                    margin: 0 0 24px;
                    text-align: center;
                    color: #1e3a5f;
                    font-size: 2rem;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .login-form label {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #29496d;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .login-form input {
                    width: 100%;
                    padding: 12px 14px;
                    border: 1px solid #cfdcf5;
                    border-radius: 10px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                    background: #f9fbff;
                }

                .login-form input:focus {
                    border-color: #4b79d8;
                    box-shadow: 0 0 0 3px rgba(75, 121, 216, 0.15);
                }

                .button-row {
                    display: flex;
                    gap: 12px;
                    margin-top: 12px;
                }

                .button-row button {
                    flex: 1;
                    padding: 12px 16px;
                    border: none;
                    border-radius: 10px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .button-row button:hover {
                    opacity: 0.95;
                    transform: translateY(-1px);
                }

                .reset-btn {
                    background: #e9eefb;
                    color: #244a7a;
                }

                .submit-btn {
                    background: linear-gradient(135deg, #4b79d8, #2d5bbd);
                    color: #ffffff;
                }
            `}</style>

            <div className="login-card">
                <h2>Login</h2>
                <form className="login-form" action="" method="get">
                    <label>
                        Email
                        <input type="email" placeholder="Enter your email" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Enter your password" />
                    </label>

                    <div className="button-row">
                        <button type="reset" className="reset-btn">Reset</button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
                <p>Don't have Registered Account <Link to='SignUp'>Click here</Link></p>
            </div>
        </div>
    )
}