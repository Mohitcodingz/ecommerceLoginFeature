import React from 'react'

export default function SignUp() {
    return (
        <div className="signup-page">
            <style>{`
                .signup-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: linear-gradient(135deg, #eef5ff 0%, #f8f3ff 100%);
                    font-family: Arial, sans-serif;
                }

                .signup-card {
                    width: 100%;
                    max-width: 460px;
                    background: #ffffff;
                    padding: 32px 28px;
                    border-radius: 16px;
                    box-shadow: 0 12px 30px rgba(78, 105, 157, 0.12);
                    border: 1px solid #e3eaf9;
                }

                .signup-card h2 {
                    margin: 0 0 24px;
                    text-align: center;
                    color: #1f3457;
                    font-size: 2rem;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .signup-form label {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #324d72;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .signup-form input {
                    width: 100%;
                    padding: 12px 14px;
                    border: 1px solid #d5dff5;
                    border-radius: 10px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                    background: #fbfcff;
                }

                .signup-form input:focus {
                    border-color: #6d7ae8;
                    box-shadow: 0 0 0 3px rgba(109, 122, 232, 0.14);
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
                    background: #edf2ff;
                    color: #374d7a;
                }

                .submit-btn {
                    background: linear-gradient(135deg, #6d7ae8, #5048d7);
                    color: #ffffff;
                }
            `}</style>

            <div className="signup-card">
                <h2>Sign Up</h2>
                <form className="signup-form" action="" method="get">
                    <label>
                        Name
                        <input type="text" placeholder="Enter your name" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Enter your email" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Create a password" />
                    </label>

                    <div className="button-row">
                        <button type="reset" className="reset-btn">Reset</button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
