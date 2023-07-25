import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ButtonM } from '../ButtonM/ButtonM';
import { IconParkOutlineLoveAndHelp_Pro } from '../IconParkOutlineLoveAndHelp_Pro/IconParkOutlineLoveAndHelp_Pro';
import { IconProfileCircle_Property1Def } from '../IconProfileCircle_Property1Def/IconProfileCircle_Property1Def';
import { Vector_Property1Default } from '../Vector_Property1Default/Vector_Property1Default';
import { Ellipse254Icon } from './Ellipse254Icon';
import classes from './Header.module.css';
import { SocialIcon } from './SocialIcon';

interface Props {
  className?: string;
  classes?: {
    newLogo?: string;
    root?: string;
  };
  hide?: {
    user?: boolean;
  };
}
/* @figmaId 1034:4651 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.headerTop}>
        <div className={classes.contacts}>
          <div className={classes.infoBoosteducationserviceCoUk}>info@boosteducationservice.co.uk</div>
          <div className={classes._880140793812Dhaka}>+880 1407-093812 (Dhaka)</div>
          <div className={classes._442033189380UK}>+44 (0) 2033 189 380 (UK)</div>
          <div className={classes.unnamed}>|</div>
        </div>
        <div className={classes.social}>
          <SocialIcon className={classes.icon2} />
        </div>
      </div>
      <div className={classes.navBar}>
        <div className={classes.frame58}>
          <div className={classes.logo}>
            <div className={`${props.classes?.newLogo || ''} ${classes.newLogo}`}></div>
          </div>
          <div className={classes.navMenu}>
            <div className={classes.frame23}>
              <div className={classes.home}>Home</div>
              <div className={classes.weAre}>We Are</div>
              <div className={classes.studyAbroad}>Study Abroad</div>
              <div className={classes.ourService}>Our Service</div>
              <div className={classes.newsEvent}>News &amp; Event</div>
              <div className={classes.contact}>Contact</div>
            </div>
          </div>
        </div>
        <div className={classes.actionBtnUser}>
          <div className={classes.loginSearch}>
            <Vector_Property1Default />
            <IconParkOutlineLoveAndHelp_Pro />
            <IconProfileCircle_Property1Def />
          </div>
          {!props.hide?.user && (
            <ButtonM
              swap={{
                ellipse254: <Ellipse254Icon className={classes.icon} />,
              }}
              text={{
                iD1002534: <div className={classes.iD1002534}>ID: BHE-12534</div>,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
