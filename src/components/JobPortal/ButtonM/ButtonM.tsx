import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconProfileCircle_Property1Def } from '../IconProfileCircle_Property1Def/IconProfileCircle_Property1Def';
import classes from './ButtonM.module.css';
import { Ellipse254Icon } from './Ellipse254Icon';

interface Props {
  className?: string;
  swap?: {
    ellipse254?: ReactNode;
  };
  text?: {
    iD1002534?: ReactNode;
  };
}
/* @figmaId 1371:18809 */
export const ButtonM: FC<Props> = memo(function ButtonM(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame1000001702}>
        <div className={classes.tasfidMahfuj}>Tasfid Mahfuj</div>
        {props.text?.iD1002534 != null ? props.text?.iD1002534 : <div className={classes.iD1002534}>ID: 1002534</div>}
      </div>
      <div className={classes.ellipse254}>{props.swap?.ellipse254 || <Ellipse254Icon className={classes.icon} />}</div>
    </button>
  );
});
