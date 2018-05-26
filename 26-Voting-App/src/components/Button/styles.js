import * as v from '../../styles/variables'

const styles = {
  primary: {
    backgroundColor: v.blu.lighten(0.1).string(),
    color: v.white.string(),
    '&:hover': {
      backgroundColor: v.blu.string()
    },
    '&:active': {
      backgroundColor: v.bluNtl.string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: '0.7rem',
        spread: null,
        color: v.bluNtl.darken(0.15).string()
      }
    }
  },
  success: {
    backgroundColor: v.grn.lighten(0.1).string(),
    borderColor: v.grn.darken(0.15).alpha(0.3).string(),
    color: v.white.string(),
    '&:hover': {
      backgroundColor: v.grn.string()
    },
    '&:active': {
      backgroundColor: v.grnNtl.string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: '0.7rem',
        spread: null,
        color: v.grnNtl.darken(0.15).string()
      }
    }
  },
  warning: {
    backgroundColor: v.ylw.lighten(0.1).string(),
    borderColor: v.ylw.darken(0.15).alpha(0.3).string(),
    color: v.white.string(),
    '&:hover': {
      backgroundColor: v.ylw.string()
    },
    '&:active': {
      backgroundColor: v.ylwNtl.string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: '0.7rem',
        spread: null,
        color: v.ylwNtl.darken(0.15).string()
      }
    }
  },
  danger: {
    backgroundColor: v.red.lighten(0.1).string(),
    borderColor: v.red.darken(0.15).alpha(0.3).string(),
    color: v.white.string(),
    '&:hover': {
      backgroundColor: v.red.string()
    },
    '&:active': {
      backgroundColor: v.redNtl.string(),
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: 0,
        blur: '0.7rem',
        spread: null,
        color: v.redNtl.darken(0.15).string()
      }
    }
  },
  small: {
    padding: '0.35rem'
  }
}

export default styles
