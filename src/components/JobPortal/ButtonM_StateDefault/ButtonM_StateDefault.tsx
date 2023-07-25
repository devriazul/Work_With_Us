import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonM_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    buttonM?: ReactNode;
  };
}
/* @figmaId 908:7233 */
export const ButtonM_StateDefault: FC<Props> = memo(function ButtonM_StateDefault(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.buttonM != null ? props.text?.buttonM : <div className={classes.buttonM}>Button M</div>}
    </button>
  );
});
