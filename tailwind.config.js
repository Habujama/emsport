
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
          'gradient-1': `linear-gradient(to bottom right, #dbeafe, #ffffff);`,
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
  