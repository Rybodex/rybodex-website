// Functions
import { cva } from 'class-variance-authority';

export const button = cva(
  'cursor:pointer user-select:none flex jc:center ai:center font-family:outfit ls:1 py:8 px:16',
  {
    variants: {
      type: {
        blank: '',
        primary:
          'bg:indigo-50 bg:indigo-50/.75:hover color:white/.75 color:white/.95:hover font-weight:regular',
        secondary: '',
        outlined: 'shadow:0|0|0|2|indigo-50 bg:transparent bg:indigo-50/.25:hover',
      },
      roundness: {
        none: 'r:0',
        small: 'r:4',
        medium: 'r:8',
        big: 'r:12',
        round: 'rounded',
      },
      disabled: {
        true: 'bg:gray-50',
      },
    },

    defaultVariants: {
      type: 'outlined',
      roundness: 'medium',
    },
  }
);
