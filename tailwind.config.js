module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        sm: '0.1875rem',
        lg: '0.375rem',
        xl: '0.75rem',
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '4/5': '80%',
      },
      opacity: {
        '5': '.05',
        '10': '.1',
        '15': '.15',
        '85': '.85',
        '90': '.90',
        '95': '.95',
      },
    },
    colors: {
      black: {
        full: '#000000',
        100: '#f2f2f2',
        300: '#e0e0e0',
        400: '#c2c2c2',
        500: '#8e8e8e',
        600: '#666666',
        700: '#2e2e2e',
        900: '#121212',
      },
      white: '#ffffff',
      yellow: {
        100: '#fff4e0',
        300: '#ffdda3',
        400: '#ffaf29',
        500: '#ffa000',
        600: '#eb9300',
        700: '#704600',
        900: '#332000',
      },
      mint: {
        100: '#e0f7f4',
        300: '#a3e8dd',
        400: '#29c8af',
        500: '#00bea0',
        600: '#00af93',
        700: '#005446',
        900: '#002620',
      },
      blue: {
        100: '#e0f2ff',
        300: '#a3d9ff',
        400: '#29a6ff',
        500: '#0095ff',
        600: '#0089eb',
        700: '#004270',
        900: '#001e33',
      },
      purple: {
        100: '#f4eaff',
        300: '#dfbfff',
        400: '#b469ff',
        500: '#a64cff',
        600: '#9946eb',
        700: '#492170',
        900: '#210f33',
      },
      red: {
        100: '#ffe9e5',
        300: '#ffbcb2',
        400: '#ff644a',
        500: '#ff4628',
        600: '#eb4025',
        700: '#701f12',
        900: '#330e08',
      },
      green: {
        100: '#e5f7e5',
        300: '#b2e6b2',
        400: '#4ac44a',
        500: '#28b928',
        600: '#25aa25',
        700: '#125112',
        900: '#082508',
      },
      rating: {
        aaaaaaaa: '#c0498b',
        aaaaaaa: '#8c5abf',
        aaaaaa: '#5a61bf',
        aaaaa: '#5a9bbf',
        aaaa: '#5abfa9',
        aaa: '#5ac469',
        aa: '#91c95a',
        a: '#cebe5a',
        b: '#ce974c',
        c: '#d0673d',
        d: '#d12e2e',
        f: '#c7001f',
      },
    },
    boxShadow: {
      md: '0 2px 24px 0 rgba(0, 0, 0, 0.1)',
      lg: '0px 6px 24px rgba(0, 0, 0, 0.2)',
      xl: '0 4px 32px 0 rgba(0, 0, 0, 0.08)',
      'rentier-primary-hover': 'inset 0 0 0 1px #7d613d',
      'rentier-primary-focus': 'inset 2px 2px 4px 1px rgba(0, 0, 0, 0.5)',
      'rentier-secondary-default': 'inset 0 0 0 1px #ffffff',
      'rentier-secondary-hover': 'inset 0 0 0 2px #ffffff',
      'rentier-secondary-focus':
        'inset 0 0 0 2px #ffffff, inset 2px 2px 4px 1px rgba(0, 0, 0, 0.5)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    filter: {
      blur: 'blur(4px)',
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    filter: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}
