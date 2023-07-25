import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Arrow_DirectionDown.module.css';
import { Polygon1Icon } from './Polygon1Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    polygon1?: ReactNode;
  };
}
/* @figmaId 1019:5302 */
export const Arrow_DirectionDown: FC<Props> = memo(function Arrow_DirectionDown(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle415}></div>
      <div className={classes.polygon1}>{props.swap?.polygon1 || <Polygon1Icon className={classes.icon} />}</div>
    </div>
  );
});
