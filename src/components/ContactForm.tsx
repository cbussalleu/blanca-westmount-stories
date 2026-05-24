import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 0',
    fontFamily: 'var(--ff-display)',
    fontWeight: 300,
    fontSize: 13,
    letterSpacing: '0.08em',
    color: 'var(--ink)',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--rule)',
    outline: 'none',
    display: 'block',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--ff-display)',
    fontWeight: 300,
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    display: 'block',
    marginBottom: 6,
    marginTop: 'var(--s-5)',
  };

  if (status === 'success') {
    return (
      <div style={{ padding: 'var(--s-6)', border: '1px solid var(--rule)' }}>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-3)' }}>
          Message sent
        </div>
        <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>
          Thank you. I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={labelStyle} htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Your name"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          style={inputStyle}
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
          placeholder="Your message"
        />
      </div>

      {status === 'error' && (
        <p style={{ fontFamily: 'var(--ff-display)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crit)', marginTop: 'var(--s-3)' }}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <div style={{ marginTop: 'var(--s-6)' }}>
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: status === 'loading' ? 'var(--ink-3)' : 'var(--ink)',
            background: 'transparent',
            border: '1px solid var(--ink)',
            padding: '10px 24px',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            transition: 'background 200ms, color 200ms',
          }}
          onMouseEnter={e => {
            if (status !== 'loading') {
              e.currentTarget.style.background = 'var(--ink)';
              e.currentTarget.style.color = 'hsl(var(--pastel-yellow))';
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = status === 'loading' ? 'var(--ink-3)' : 'var(--ink)';
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
