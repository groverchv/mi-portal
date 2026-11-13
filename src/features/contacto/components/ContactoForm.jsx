import { useEffect } from 'react';
import useForm from '../../../hooks/useForm';
import styles from './ContactoForm.module.css';

const FORM_NAME = 'contacto';
const DRAFT_KEY = 'contacto-draft';

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = 'El nombre es requerido.';
  }
  if (!values.email.trim()) {
    errors.email = 'El correo electrónico es requerido.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'El correo electrónico no es válido.';
  }
  if (!values.message.trim()) {
    errors.message = 'El mensaje es requerido.';
  }
  return errors;
};

export default function ContactoForm() {
  const handleFormSubmit = async (values) => {
    // Honeypot filled → likely a bot; pretend success without sending
    if (values['bot-field']) {
      return { success: true };
    }

    // In local `vite dev` there is no Netlify function — simulate a success
    if (import.meta.env.DEV) {
      return new Promise((resolve) => setTimeout(resolve, 600));
    }

    const body = new URLSearchParams({
      'form-name': FORM_NAME,
      ...values,
    }).toString();

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }
    return response;
  };

  const {
    values,
    setValues,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({ name: '', email: '', message: '', 'bot-field': '' }, validate, handleFormSubmit);

  // Restore a saved draft once on mount
  useEffect(() => {
    try {
      const draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null');
      if (draft) setValues((v) => ({ ...v, ...draft }));
    } catch { /* invalid draft — ignore */ }
  }, [setValues]);

  // Persist the draft on every change; a successful submit resets values
  // to the initial (empty) state, which clears the draft automatically.
  useEffect(() => {
    const { 'bot-field': _honey, ...draft } = values;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }, [values]);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      name={FORM_NAME}
      data-netlify="true"
      netlify-honeypot="bot-field"
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot: invisible to humans, attractive to bots */}
      <p className={styles.honeypot} aria-hidden="true">
        <label>
          No rellenes este campo
          <input
            name="bot-field"
            value={values['bot-field']}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className={styles.group}>
        <label htmlFor="name" className={styles.label}>
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
          disabled={isSubmitting}
          autoComplete="name"
          enterKeyHint="next"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && <span id="name-error" className={styles.errorText} role="alert">{errors.name}</span>}
      </div>

      <div className={styles.group}>
        <label htmlFor="email" className={styles.label}>
          Correo Electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
          disabled={isSubmitting}
          autoComplete="email"
          enterKeyHint="next"
          inputMode="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && <span id="email-error" className={styles.errorText} role="alert">{errors.email}</span>}
      </div>

      <div className={styles.group}>
        <label htmlFor="message" className={styles.label}>
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.textarea}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && <span id="message-error" className={styles.errorText} role="alert">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      <div aria-live="polite">
        {submitStatus === 'success' && (
          <div className={`${styles.statusMessage} ${styles.success}`}>
            Mensaje enviado con éxito. Gracias por contactar.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className={`${styles.statusMessage} ${styles.error}`}>
            Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </div>
        )}
      </div>
    </form>
  );
}
