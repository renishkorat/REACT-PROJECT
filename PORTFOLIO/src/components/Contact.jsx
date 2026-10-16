
function Contact() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const mailtoLink = `mailto:koratrenish350@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#2B0A16] px-6 py-20 text-white"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#9F1239]/20 blur-[110px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FB7185]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FB7185]">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Contact <span className="text-[#FB7185]">Me</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-rose-100">
                        Have a project in mind or want to work together?
                        Feel free to contact me. I'd love to hear from you!
                    </p>
                </div>

                {/* Contact Layout */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Contact Info */}
                    <div className="h-fit rounded-2xl border border-rose-400/20 bg-[#451525] p-7 md:p-9">
                        <h3 className="mb-8 text-2xl font-bold">
                            Contact <span className="text-[#FB7185]">Info</span>
                        </h3>

                        <div className="space-y-5">

                            {/* Location */}
                            <div className="flex items-center gap-4 rounded-xl border border-rose-400/10 bg-[#2B0A16] p-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FB7185]/10 text-2xl text-[#FB7185]">
                                    📍
                                </span>

                                <div>
                                    <p className="mb-1 text-sm text-rose-200/60">
                                        Location
                                    </p>

                                    <p className="font-medium text-rose-100">
                                        Ahmedabad, Gujarat, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center gap-4 rounded-xl border border-rose-400/10 bg-[#2B0A16] p-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FB7185]/10 text-2xl text-[#FB7185]">
                                    ☎
                                </span>

                                <div>
                                    <p className="mb-1 text-sm text-rose-200/60">
                                        Phone Number
                                    </p>

                                    <a
                                        href="tel:+917984048969"
                                        className="font-medium text-rose-100 transition hover:text-[#FB7185]"
                                    >
                                        +91 79840 48969
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4 rounded-xl border border-rose-400/10 bg-[#2B0A16] p-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FB7185]/10 text-2xl text-[#FB7185]">
                                    ✉
                                </span>

                                <div className="min-w-0">
                                    <p className="mb-1 text-sm text-rose-200/60">
                                        Email Address
                                    </p>

                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=koratrenish350@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="break-all font-medium text-rose-100 transition hover:text-[#FB7185]"
                                    >
                                        koratrenish350@gmail.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-rose-400/20 bg-[#451525] p-7 md:p-9"
                    >
                        <h3 className="mb-6 text-2xl font-bold">
                            Send Me a <span className="text-[#FB7185]">Message</span>
                        </h3>

                        {/* Name and Email */}
                        <div className="mb-5 grid gap-5 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block text-sm text-rose-100"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-rose-400/20 bg-[#2B0A16] px-4 py-3 text-white outline-none placeholder:text-rose-100/40 focus:border-[#FB7185]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block text-sm text-rose-100"
                                >
                                    Your Email
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-rose-400/20 bg-[#2B0A16] px-4 py-3 text-white outline-none placeholder:text-rose-100/40 focus:border-[#FB7185]"
                                />
                            </div>

                        </div>

                        {/* Subject */}
                        <div className="mb-5">
                            <label
                                htmlFor="contact-subject"
                                className="mb-2 block text-sm text-rose-100"
                            >
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                placeholder="Enter message subject"
                                required
                                className="w-full rounded-xl border border-rose-400/20 bg-[#2B0A16] px-4 py-3 text-white outline-none placeholder:text-rose-100/40 focus:border-[#FB7185]"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label
                                htmlFor="contact-message"
                                className="mb-2 block text-sm text-rose-100"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                maxLength={200}
                                required
                                className="w-full resize-y rounded-xl border border-rose-400/20 bg-[#2B0A16] px-4 py-3 text-white outline-none placeholder:text-rose-100/40 focus:border-[#FB7185]"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FB7185] px-6 py-3 font-semibold text-[#2B0A16] transition hover:bg-[#FDA4AF]"
                        >
                            Send Message <span>➤</span>
                        </button>

                        <p className="mt-4 text-xs leading-5 text-rose-100/50">
                            Your default email application will open with the
                            message prepared. You can review and send it there.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;
