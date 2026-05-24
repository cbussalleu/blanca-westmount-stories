
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--ff-display)',
  fontWeight: 300,
  fontSize: 10,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--ink-3)',
  display: 'block',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--ff-display)',
  fontWeight: 300,
  fontSize: 13,
  letterSpacing: '0.08em',
  color: 'var(--ink)',
  width: '100%',
  padding: '8px 12px',
  border: '1px solid var(--rule)',
  background: 'transparent',
  outline: 'none',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-5)', maxWidth: 560 }}>
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--ink)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--rule)'}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--ink)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--rule)'}
        />
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--ink)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--rule)'}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--ink)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--rule)'}
        />
      </div>

      <div style={{ paddingTop: 'var(--s-3)' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: 'hsl(var(--pastel-yellow))',
            background: 'var(--ink)',
            border: 'none',
            padding: '12px 24px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
            transition: 'opacity 200ms',
            width: '100%',
          }}
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
