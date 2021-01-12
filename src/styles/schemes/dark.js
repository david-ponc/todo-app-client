export default {
  title: 'dark',
  colors: {
    body: {
      background: 'var(--gray-200)',
      text: 'var(--gray-800)',
      secondText: 'var(--gray-500)',
      selection: 'var(--primary-300)',
      primaryText: 'var(--primary-700)',
      primaryTextShadow: '0px 0px 16px #FFA526',
      gradientText: 'linear-gradient(271deg,var(--success-700) 0%,var(--error-700) 50%, var(--primary-700) 100%)'
    },
    link: {
      default: 'var(--gray-500)',
      active: 'var(--gray-800)',
      hover: 'var(--gray-700)'
    },
    button: {
      primary: {
        background: 'var(--primary-400)',
        text: 'var(--gray-100)',
        shadow: '0px 18px 24px -11px rgba(22, 23, 29, 0.75), inset 0px 0px 0px 1px rgba(143, 116, 36, 0.25)'
      },
      neutral: {
        background: 'var(--gray-300)',
        text: 'var(--gray-800)',
        shadow: '0px 18px 24px -11px rgba(22, 23, 29, 0.75), inset 0px 0px 0px 1px rgba(240, 241, 247, 0.04)'
      }
    },
    check: {
      background: 'var(--gray-100)',
      border: '0px 0px 0px 1px rgba(240, 241, 247, 0.05)',
      checked: 'var(--primary-400)',
      color: 'var(--gray-200)'
    },
    task: {
      background: 'var(--gray-300)',
      text: 'var(--gray-800)',
      shadow: '0px 6px 24px -8px rgba(22, 24, 29, 0.25)',
      icon: 'var(--gray-400)',
      iconHover: 'var(--primary-700)',
      iconHoverShadow: 'drop-shadow(0px 0px 8px #FFA52680)',
      line: 'var(--gray-800)'
    },
    field: {
      background: 'var(--gray-100)',
      text: 'var(--gray-800)',
      placeholder: 'var(--gray-400)',
      hover: 'var(--)',
      focus: 'var(--)',
      border: '0px 0px 0px 1px rgba(240, 241, 247, 0.05)',
      desc: 'var(--gray-400)',
      label: 'var(--gray-500)',
      borderError: '0 0 0 1px var(--error-400)',
      descError: 'var(--error-300)'
    },
    taskCreator: {
      background: 'var(--gray-100)',
      placeholder: 'var(--gray-400)',
      text: 'var(--gray-800)',
      border: '0px 0px 0px 1px rgba(240, 241, 247, 0.05)'
    },
    dropdown: {
      background: 'var(--gray-300)',
      color: 'var(--gray-500)',
      border: '0px 18px 24px -11px rgba(22, 23, 29, 0.75), inset 0px 0px 0px 1px rgba(240, 241, 247, 0.06)',
      hover: 'var(--gray-400)',
      itemColor: 'var(--gray-500)',
      itemHover: 'var(--gray-800)',
      itemColorActive: 'var(--primary-400)',
      itemHoverActive: 'var(--primary-600)'
    },
    alert: {
      close: 'var(--gray-400)',
      shadow: '0px 2px 9px -4px rgba(22, 23, 29, 0.16), inset 0px 0px 0px 1px rgba(240, 241, 247, 0.06)',
      success: {
        title: 'var(--success-400)',
        subtitle: 'var(--success-600)',
        background: 'linear-gradient(90deg, var(--success-100) 0%, var(--gray-300) 50%, var(--gray-300) 100%)',
        icon: 'var(--success-500)',
        circles: 'rgba(26, 195, 145, 0.32)'
      },
      error: {
        title: 'var(--error-400)',
        subtitle: 'var(--error-700)',
        background: 'linear-gradient(90deg, var(--error-100) 0%, var(--gray-300) 50%, var(--gray-300) 100%)',
        icon: 'var(--error-500)',
        circles: 'rgba(232, 35, 84, 0.5)'
      },
      warning: {
        title: 'var(--primary-600)',
        subtitle: 'var(--primary-700)',
        background: 'linear-gradient(90deg, var(--primary-100) 0%, var(--gray-300) 50%, var(--gray-300) 100%)',
        icon: 'var(--primary-600)',
        circles: 'rgba(181, 147, 45, 0.5)'
      },
      info: {
        title: 'var(--gray-500)',
        subtitle: 'var(--gray-700)',
        background: 'linear-gradient(90deg, var(--gray-100) 0%, var(--gray-300) 50%, var(--gray-300) 100%)',
        icon: 'var(--gray-600)',
        circles: 'rgba(135, 143, 166, 0.5)'
      }
    },
    loader: {
      color: 'var(--primary-600)',
      background: 'var(--gray-400)'
    },
    footer: {
      background: 'var(--gray-100)',
      color: 'var(--gray-400)',
      link: 'var(--primary-700)'
    }
  }
}
