// Functions
import { button } from './Button.styles';

// Types
import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

export interface IProps extends VariantProps<typeof button> {
  children: ReactNode;
  className?: string;
}
