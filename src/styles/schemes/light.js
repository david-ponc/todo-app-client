export default {
  title: 'light',
  colors: {
    body: {
      background: 'var(--gray-800)',
      text: 'var(--gray-100)',
      secondText: 'var(--gray-400)',
      selection: 'var(--primary-300)',
      primaryText: 'var(--primary-300)',
      primaryTextShadow: '0px 0px 16px #FFA526',
      // gradientText: 'linear-gradient(271deg,var(--success-600) 30%,var(--error-700) 50%,var(--primary-500) 70%,var(--primary-500) 94%)'
      gradientText: 'linear-gradient(271deg,var(--success-300) 0%,var(--error-200) 50%,var(--primary-300) 100%)'
    },
    link: {
      default: 'var(--gray-500)',
      active: 'var(--gray-100)',
      hover: 'var(--gray-300)'
    },
    button: {
      primary: {
        background: 'var(--primary-400)',
        text: 'var(--gray-100)',
        shadow: '0px 18px 24px -11px rgba(22, 23, 29, 0.16), inset 0px 0px 0px 1px rgba(143, 116, 36, 0.25)'
      },
      neutral: {
        background: 'var(--gray-700)',
        text: 'var(--gray-100)',
        shadow: '0px 18px 24px -11px rgba(22, 23, 29, 0.16), inset 0px 0px 0px 1px rgba(22, 23, 29, 0.05)'
      }
    },
    check: {
      background: 'var(--gray-800)',
      border: '0px 0px 0px 1px rgba(22, 23, 29, 0.09)',
      checked: 'var(--primary-400)',
      color: 'var(--gray-200)'
    },
    task: {
      background: 'var(--gray-900)',
      text: 'var(--gray-100)',
      shadow: '0px 6px 24px -12px rgba(22, 24, 29, 0.12)',
      icon: 'var(--gray-600)',
      iconHover: 'var(--primary-500)',
      iconHoverShadow: 'drop-shadow(0px 0px 8px #FFA52680)',
      line: 'var(--gray-200)'
    },
    field: {
      background: 'var(--gray-900)',
      text: 'var(--gray-100)',
      placeholder: 'var(--gray-500)',
      hover: 'var(--)',
      focus: 'var(--)',
      border: '0px 0px 0px 1px rgba(22, 23, 29, 0.05)',
      desc: 'var(--gray-500)',
      label: 'var(--gray-400)',
      borderError: '0 0 0 1px var(--error-400)',
      descError: 'var(--error-300)'
    },
    taskCreator: {
      background: 'var(--gray-700)',
      placeholder: 'var(--gray-500)',
      text: 'var(--gray-100)',
      border: '0px 0px 0px 1px rgba(240, 241, 247, 0.05)'
    },
    dropdown: {
      background: 'var(--gray-900)',
      color: 'var(--gray-600)',
      border: '0px 0px 0px 0.5px rgba(22, 23, 29, 0.09), 0px 6px 24px -8px rgba(22, 24, 29, 0.25)',
      hover: 'var(--gray-700)',
      itemColor: 'var(--gray-600)',
      itemHover: 'var(--gray-400)',
      itemColorActive: 'var(--primary-400)',
      itemHoverActive: 'var(--primary-300)'
    },
    alert: {
      close: 'var(--gray-500)',
      shadow: '0px 2px 9px -4px rgba(22, 23, 29, 0.16), inset 0px 0px 0px 0.5px rgba(22, 23, 29, 0.09)',
      success: {
        title: 'var(--success-200)',
        subtitle: 'var(--success-100)',
        background: 'linear-gradient(90deg, #055C4254 0%, var(--gray-700) 50%, var(--gray-700) 100%)',
        icon: 'var(--success-500)',
        circles: 'rgba(26, 195, 145, 0.32)'
      },
      error: {
        title: 'var(--error-200)',
        subtitle: 'var(--error-100)',
        background: 'linear-gradient(90deg, var(--error-700) 0%, var(--gray-700) 50%, var(--gray-700) 100%)',
        icon: 'var(--error-300)',
        circles: 'rgba(232, 35, 84, 0.43)'
      },
      warning: {
        title: 'var(--primary-200)',
        subtitle: 'var(--primary-100)',
        background: 'linear-gradient(90deg, #4F401454 0%, var(--gray-700) 50%, var(--gray-700) 100%)',
        icon: 'var(--primary-600)',
        circles: 'rgba(181, 147, 45, 0.5)'
      },
      info: {
        title: 'var(--gray-200)',
        subtitle: 'var(--gray-100)',
        background: 'linear-gradient(90deg, #484C5C54 0%, var(--gray-700) 50%, var(--gray-700) 100%)',
        icon: 'var(--gray-600)',
        circles: 'rgba(135, 143, 166, 0.5)'
      }
    },
    loader: {
      color: 'var(--primary-600)',
      background: 'var(--gray-400)'
    },
    footer: {
      background: 'var(--gray-600)',
      color: 'var(--gray-500)',
      link: 'var(--primary-200)'
    }
  }
}
