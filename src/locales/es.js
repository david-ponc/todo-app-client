export default {
  '/': {
    hTitle: 'Lista de pendientes',
    title: 'Crea tus tareas diarias',
    subtitle: 'Asígnale una categoría',
    p: 'Mantén organizadas tus tareas',
    links: [
      { name: 'Ingreso', path: '/login' }
      // { name: 'Registro', path: '/join' }
    ],
    navbarButton: { name: 'Registro', path: '/join' },
    landingButton: 'Iniciar ahora',
    footer: 'Inspirado en',
    localTasks: [
      'Hacer el diseño de la web',
      'Sacar la basura',
      'Reunión para análisis de requerimientos',
      'Hacer una lista de pendientes'
    ]
  },
  '/login': {
    hTitle: 'Lista de pendientes | Ingreso',
    links: [
      { name: 'Ingreso', path: '/login' }
      // { name: 'Registro', path: '/join' }
    ],
    navbarButton: { name: 'Registro', path: '/join' },
    footer: 'Inspirado en',
    title: 'Únete a nosotros y organiza tu lista de pendientes de una mejor manera',
    p: 'o inicia sesión con tu correo electrónico',
    phEmail: 'ejemplo@dominio.com',
    phPass: 'Clave de seguridad',
    descPass: 'La clave debe tener al menos 8 caracteres',
    chkRemember: 'Recordar credenciales',
    submitButton: 'Iniciar ahora',
    fields: [
      { name: 'email', message: 'El correo electrónico debe tener un formato válido' },
      { name: 'password', message: 'La contraseña debe contener al menos un mayúscula, un numero, un carácter especial y un mínimo de 8 caracteres' }
    ],
    finalLink: '¿No tienes cuenta? Crea una'
  },
  '/join': {
    hTitle: 'Lista de pendientes | Registro',
    links: [
      { name: 'Ingreso', path: '/login' }
      // { name: 'Registro', path: '/join' }
    ],
    navbarButton: { name: 'Registro', path: '/join' },
    footer: 'Inspirado en',
    title: 'Únete a nosotros y mantén tus tareas bajo control',
    subtitle: 'Rellena los campos solicitados para crear tu cuenta y utiliza nuestra aplicación.',
    phName: 'Primer nombre',
    phSurname: 'Primer apellido',
    phUsername: 'Nombre de usuario',
    phEmail: 'ejemplo@dominio.com',
    phPass: 'Clave de seguridad',
    phConfirm: 'Confirmación de clave',
    p: 'Al registrarse, esta permitiendo el uso de sus datos proporcionados para que sean usados en la aplicación',
    submitButton: 'Terminar registro',
    fields: [
      { name: 'name', message: 'El nombre solo debe contener letras y un mínimo de 4 letras' },
      { name: 'surname', message: 'El apellido solo debe contener letras y un mínimo de 4 letras' },
      { name: 'username', message: 'El nombre de usuario es una combinación de letras y puntos con un mínimo de 3 letras' },
      { name: 'email', message: 'El correo electrónico debe tener un formato válido' },
      { name: 'password', message: 'La contraseña debe contener al menos un mayúscula, un numero, un carácter especial y un mínimo de 8 caracteres' },
      { name: 'confirm', message: 'La confirmación debe contener al menos un mayúscula, un numero, un carácter especial y un mínimo de 8 caracteres' }
    ],
    finalLink: '¿Ya tienes cuenta? Ingresa a tu cuenta',
    successContent: {
      title: 'Has terminado tu registro con éxito',
      subtitle: 'Te hemos enviado un correo electrónico, para confirmar tu cuenta',
      p: 'Ya puedes cerrar esta pestaña'
    }
  },
  '/confirm/[token]': {
    links: [
      { name: 'Ingreso', path: '/login' }
      // { name: 'Registro', path: '/join' }
    ],
    title: '¡Has confirmado tu cuenta con éxito!',
    p: 'Ya estas listo para utilizar la aplicación',
    linkButton: 'Iniciar ahora',
    navbarButton: { name: 'Registro', path: '/join' },
    footer: 'Inspirado en'
  },
  '/dashboard': {
    links: [],
    navbarButton: { name: 'Sign up', path: '/join' },
    footer: 'Inspirado en',
    greetings: [
      'Buena madrugada',
      'Buena mañana',
      'Buen día',
      'Buena tarde',
      'Buena noche'
    ],
    date: 'Hoy es weekday, day de month',
    countTasks: [
      'Tienes',
      'tareas pendientes'
    ],
    phTaskCreator: [
      'Escribe una tarea.',
      'para crear'
    ],
    p: 'No tienes tareas pendientes'
  }
}
