import * as v from './variables'

const styles = {
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: v.font,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      backgroundColor: v.white.string(),
      color: v.black.string(),
      fontKerning: 'normal',
      fontVariantLigatures: 'common-ligatures contextual',
      fontFeatureSettings: ['"kern" 1', '"liga" 1', '"clig" 1', '"calt" 1']
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: v.font,
      textRendering: 'optimizeLegibility',
      margin: {
        top: '4.2rem', // 3 * line height
        right: '0',
        bottom: '2.8rem', // 2 * line height
        left: '0'
      },
      padding: 0
    },
    'h1, h2': {
      marginTop: 0
    },
    h1: {
      color: v.blu.darken(0.2).string(),
      fontSize: '1.8rem',
      lineHeight: `${1.8 * 1.4}rem`
    },
    h2: {
      color: v.blu.darken(0.1).string(),
      fontSize: '1.6rem',
      lineHeight: `${1.6 * 1.4}rem`
    },
    h3: {
      color: v.blu.darken(0.08).string(),
      fontSize: '1.4rem',
      lineHeight: `${1.4 * 1.4}rem`
    },
    h4: {
      color: v.blu.darken(0.05).string(),
      fontSize: '1.2rem',
      lineHeight: `${1.2 * 1.4}rem`
    },
    h5: {
      color: v.blu.darken(0.02).string(),
      fontSize: '1rem'
    },
    h6: {
      color: v.blu.string(),
      fontSize: '0.9rem'
    },
    p: {
      fontSize: '1rem',
      margin: {
        top: '0',
        right: '0',
        bottom: `1.4rem`,
        left: '0'
      },
      padding: 0
    },
    a: {
      '&:link, &:visited, &:hover, &:active': {
        textDecoration: 'underline',
        TextDecorationSkipInk: 'auto'
      },
      '&:link, &:visited': {
        color: v.blu.string()
      },
      '&:hover': {
        color: v.blu.darken(0.15).string()
      },
      '&:active': {
        color: v.ylw.string()
      },
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      }
    },
    input: {
      fontFamily: v.font,
      fontSize: '1rem',
      boxSizing: 'border-box',
      height: '2.1rem',
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      },
      '&[type=checkbox], &[type=radio]': {
        height: 'inherit',
        verticalAlign: 'baseline'
      }
    },
    button: {
      fontFamily: v.font,
      fontWeight: 'bold',
      fontSize: '1rem',
      color: v.white.string(),
      border: {
        width: '1px',
        style: 'solid',
        color: v.blu.darken(0.15).alpha(0.3).string()
      },
      background: 'none',
      backgroundColor: v.blu.lighten(0.1).string(),
      padding: {
        top: '0.75rem',
        right: '1rem',
        bottom: '0.75rem',
        left: '1rem'
      },
      '&:hover': {
        backgroundColor: v.blu.string()
      },
      '&:active': {
        backgroundColor: v.bluNtl.darken(0.1).string(),
        boxShadow: {
          inset: 'inset',
          x: 0,
          y: 0,
          blur: '0.7rem',
          spread: null,
          color: v.bluNtl.darken(0.2).string()
        }
      },
      '&:focus': {
        outline: {
          width: 1,
          style: 'solid',
          color: v.blu.darken(0.15).alpha(0.3).string()
        }
      }
    }
  }
}

export default styles
