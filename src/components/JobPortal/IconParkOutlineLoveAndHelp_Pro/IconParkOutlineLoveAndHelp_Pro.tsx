import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconParkOutlineLoveAndHelp_Pro.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 957:3824 */
export const IconParkOutlineLoveAndHelp_Pro: FC<Props> = memo(function IconParkOutlineLoveAndHelp_Pro(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
