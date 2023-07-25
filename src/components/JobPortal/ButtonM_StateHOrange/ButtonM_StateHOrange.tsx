import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonM_StateHOrange.module.css';

interface Props {
  className?: string;
  text?: {
    buttonM?: ReactNode;
  };
}
/* @figmaId 908:7234 */
export const ButtonM_StateHOrange: FC<Props> = memo(function ButtonM_StateHOrange(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.buttonM != null ? props.text?.buttonM : <div className={classes.buttonM}>Button M</div>}
    </button>
  );
});
