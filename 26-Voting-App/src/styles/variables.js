import * as Color from 'color'
import { harmoniousMix, mixNeutral } from './functions'

export const font = '"Cabin", sans-serif'

// Colors based on https://tallys.github.io/color-theory/

const bluPmy = Color('hsl(214, 100%, 50%)')
const ylwPmy = Color('hsl(43, 100%, 50%)')
const redPmy = Color('hsl(2, 100%, 50%)')
const grnPmy = Color('hsl(130, 100%, 50%)')

export const blu = harmoniousMix(ylwPmy, bluPmy).darken(0.2)
export const ylw = harmoniousMix(bluPmy, ylwPmy).darken(0.15)
export const red = harmoniousMix(bluPmy, redPmy).darken(0.2)
export const grn = harmoniousMix(bluPmy, grnPmy).darken(0.4)
export const bluNtl = mixNeutral(blu)
export const ylwNtl = mixNeutral(ylw)
export const redNtl = mixNeutral(red)
export const grnNtl = mixNeutral(grn)
export const white = bluNtl.grayscale().lightness(99)
export const black = bluNtl.grayscale().lightness(4)
