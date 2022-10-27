// Functions
import { cva } from 'class-variance-authority';

export const base = 'flex ai:center jc:center gap-x:4';

export const logo = cva('font-family:outfit font-weight:bold ls:1.25', {
  variants: {
    size: {
      small: 'font:18',
      medium: 'font:22',
      big: 'font:28',
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});
