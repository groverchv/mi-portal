import useForm from '../../../hooks/useForm';
import styles from './ContactoForm.module.css';

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
    // Simular envío de datos de forma asíncrona
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // En producción aquí se llamaría a un servicio/Netlify function
        if (values.email.includes('fail')) {
          reject(new Error('Error de simulación'));
        } else {
          resolve({ success: true });
        }
      }, 1500);
    });
  };

  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useForm({ name: '', email: '', message: '' }, validate, handleFormSubmit);

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
          className={styles.input}
          disabled={isSubmitting}
          required
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
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
          className={styles.input}
          disabled={isSubmitting}
          required
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
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
          className={styles.textarea}
          disabled={isSubmitting}
          required
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

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
    </form>
  );
}
