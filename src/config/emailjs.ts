// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_5gz7myf',
  TEMPLATE_ID: 'template_xbzndya',
  PUBLIC_KEY: 'idBA4C7pj92i7PFNL',
  TO_EMAIL: 'akshayanoop2014@gmail.com',
};

// Template variables that will be sent to EmailJS
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '',
  from_email: '',
  message: '',
  to_email: EMAILJS_CONFIG.TO_EMAIL,
}; 