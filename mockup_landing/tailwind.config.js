module.exports = {
  purge: {
    //enabled: true,
    //content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-banner': "url('../images/bg.webp')",
        'about': "url('../images/about.webp')",
        'mission': "url('../images/mission.webp')",
        'goal': "url('../images/goal.webp')"
      })
    },
    fontFamily: {
      'poppins': ['Poppins'],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
