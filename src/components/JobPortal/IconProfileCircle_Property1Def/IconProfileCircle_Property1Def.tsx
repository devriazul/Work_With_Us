import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './IconProfileCircle_Property1Def.module.css';

interface Props {
  className?: string;
}
/* @figmaId 957:3827 */
export const IconProfileCircle_Property1Def: FC<Props> = memo(function IconProfileCircle_Property1Def(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
