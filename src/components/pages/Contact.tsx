
export default function Contact() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-4">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <form className="w-100" style={{ maxWidth: '600px' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows={5} placeholder="Your Message"></textarea>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
}