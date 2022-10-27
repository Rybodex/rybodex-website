// Functions
import { logo } from './Logo.styles';

// Types
import type { VariantProps } from 'class-variance-authority';

export interface IProps extends VariantProps<typeof logo> {
  classNames: string;
}
