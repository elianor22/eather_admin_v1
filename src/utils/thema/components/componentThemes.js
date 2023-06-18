import { ColorProps } from '../colors'

export const componentThemes = (theme) => {
  const components = {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: ColorProps.card[theme] || '#fff',
        },
      },
    },
  }
  return components
}
