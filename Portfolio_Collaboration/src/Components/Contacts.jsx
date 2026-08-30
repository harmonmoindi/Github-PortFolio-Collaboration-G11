import { useState } from "react"

export default function Contact() {
    //State
    const [form, setForm] = useState ({name: "", email: "", message: ""})
    const [errors, setErrors] = useState ({})
    const [submitted, setSubmitted] = useState (false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //Handling input chage logic
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm ((prev) => ({ ...prev, [name]: value }))
    }

    //Validation rule
    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = "Please enter your name"
        if (!emailRegex.test(form.email)) newErrors.email = "Please enter your email"
        if (!form.message.trim()) newErrors.message = "Please add your message. Thank you"
        return newErrors
    }


    //Encoding the form data
    const encode = (data) => {
        return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    // Submission
    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = validate()
        setErrors(newErrors)

        if (Object.keys(newErrors).lenght === 0) {
            fetch("/", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: encode({"form-name": "contact", ...form}),
            })
                .then(() => {
                    setSubmitted(true)
                    setForm({name: "", email: "", message: ""})
                })
                .catch((error) => console.error("Form submission error:", error))
        }
    }

    return (
        <section id="contact" className="contact">
            <style>{`
                .contact {
                    max-width: 700px;
                    padding: 4rem 1.5rem;
                    background: #0d0f14;
                    color: #8a94a6;
                    font-family: inherit;
                }
                .contact-heading {
                    display: flex;
                    align-items: baseline;
                    gap: 1rem;
                    border-bottom: 1px solid #2a2e38;
                    padding-bottom: 1rem;
                    margin-bottom: 2rem;
                }
                .contact-number {
                    color: #e8a33d;
                    font-family: monospace;
                    font-size: 1rem;
                }
                .contact h2 {
                    color: #fff;
                    font-size: 2rem;
                    margin: 0;
                }
                .contact > p {
                    color: #8a94a6;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1.75rem;
                }
                .form-group label {
                    font-family: monospace;
                    color: #a3adc2;
                    font-size: 0.85rem;
                    margin-bottom: 0.6rem;
                }
                .form-group input,
                .form-group textarea {
                    background: #1a1d29;
                    border: 1px solid #2a2e3a;
                    border-radius: 3px;
                    padding: 0.8rem 1rem;
                    color: #e6e6e6;
                    font-size: 0.95rem;
                    font-family: inherit;
                    resize: vertical;
                    transition: border-color 0.2s ease;
                }
                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #e8a33d;
                }
                .error {
                    color: #e05c5c;
                    font-size: 0.8rem;
                    margin-top: 0.4rem;
                }
                .contact button[type="submit"] {
                    background: #eeae4c;
                    color: #14161c;
                    border: none;
                    border-radius: 3px;
                    padding: 0.75rem 2rem;
                    font-family: monospace;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }
                .contact button[type="submit"]:hover {
                    background: #f5bd66;
                }
                .success {
                    margin-top: 1rem;
                    color: #6fcf7a;
                    font-weight: 600;
                }
            `}</style>

            <div className="contact-heading">
                <span className="contact-number">04</span>
                <h2>Contact</h2>
            </div>

            <p>
                Have a question or want to work together? Leave your details and
                we'll get back to you as soon as possible.
            </p>

            <form
                onSubmit={handleSubmit}
                noValidate
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don't fill this out: <input name="bot-field" />
                    </label>
                </p>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={form.message}
                        onChange={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit">Submit</button>

              {submitted && <p className="success">Thanks! We'll be in touch.</p>}
          </form>
       </section>
    )
}