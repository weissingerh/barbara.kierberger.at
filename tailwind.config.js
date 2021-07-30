module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      extend: {
        colors: {
          'beige': '#F2E0D5',
          'brown': '#B57046',
          'ocre': '#D9BBA0',
          'orange' : '#CC8663',
          'gray': '#1B1726'
        }
      },
    },
    variants: {},
    plugins: [],
  }
