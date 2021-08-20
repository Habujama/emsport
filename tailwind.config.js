
module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      fontFamily: {
        sans: ['Roboto'],
        barlow: ['Barlow Semi Condensed'],
      },
      extend: {
        backgroundImage: () => ({
          'body-gradient': `radial-gradient(circle, rgba(79,79,79,1) 1%, rgba(24,25,25,1) 89%);`,
          'header-gradient': `linear-gradient(90deg, rgba(100,100,100, 0.5) 0%, rgba(24,25,25,0.8) 100%);`,
        }),
      },
    },
    variants: {
      extend: {
        padding: ['hover'],
        borderRadius: ['hover', 'focus'],
        boxShadow: [
          'responsive',
          'hover',
          'focus',
          'active',
          'focus-visible',
          'group-hover',
        ],
        transitionProperty: [
          'responsive',
          'hover',
          'active',
          'focus',
          'focus-visible',
          'group-hover',
        ],
        transitionDuration: [
          'responsive',
          'hover',
          'active',
          'focus',
          'focus-visible',
          'group-hover',
        ],
      }
    },
    plugins: [],
  }
  