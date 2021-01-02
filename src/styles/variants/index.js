export const varsTasksList = {
  initial: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  animate: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  }
}

export const varsLanding = {
  initial: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.320
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  }
}

export const varsTask = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
}

export const varsTask2 = {
  initial: i => ({ y: 50, opacity: 0, transition: { delay: i * 0.045 } }),
  animate: i => ({ y: 0, opacity: 1, transition: { delay: i * 0.045 } }),
  exit: i => ({ y: -50, opacity: 0, transition: { delay: i * 0.045 } })
}

export const varsCheck = {
  initial: {
    x: -30,
    opacity: 0
  },
  hovered: {
    opacity: 1,
    x: 0,
    transition: {
      y: { stiffness: 100, velocity: -100 }
    }
  }
}

export const varsTextTask = {
  initial: {
    x: -32
  },
  hovered: {
    x: 0
  }
}

export const varsForm = {
  initial: {
    x: -30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.320
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  }
}

export const varsDashPage = {
  initial: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.320
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  }
}

export const varsCheckSVG = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    pathLength: 0
  }
}
