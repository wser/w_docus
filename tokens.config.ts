import { defineTheme } from 'pinceau'

export default defineTheme({
  docus: {
  search: {
    backdropFilter: 'blur(24px)',
    input: {
      borderRadius: '{radii.2xs}',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: {
        initial: '{color.gray.200}',
        dark: 'transparent'
      },
      fontSize: '{fontSize.sm}',
      gap: '{space.2}',
      padding: '{space.2} {space.4}',
      backgroundColor: {
        initial: '{color.gray.200}',
        dark: '{color.gray.800}'
      },
    },
    results: {
      window: {
        marginX: {
          initial: '0',
          sm: '{space.4}'
        },
        borderRadius: {
          initial: 'none',
          sm: '{radii.xs}'
        },
        marginTop: {
          initial: '0',
          sm: '20vh'
        },
        maxWidth: '640px',
        maxHeight: {
          initial: '100%',
          sm: '320px'
        },
      },
      selected: {
        backgroundColor: {
          initial: '{color.gray.300}',
          dark: '{color.gray.700}'
        },
      },
      highlight: {
        color: 'white',
        backgroundColor: '{color.primary.500}'
      }
    }
  }
},
})
