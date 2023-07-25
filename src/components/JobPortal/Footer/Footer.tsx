import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Footer.module.css';
import { Group2Icon } from './Group2Icon';
import { Group3Icon } from './Group3Icon';
import { Group4Icon } from './Group4Icon';
import { IconAppleIcon } from './IconAppleIcon';
import { IconBrandGooglePlayIcon } from './IconBrandGooglePlayIcon';
import { IconLocationIcon } from './IconLocationIcon';
import { Layer_1Icon } from './Layer_1Icon';
import { Line61Icon } from './Line61Icon';
import { Vector4Icon } from './Vector4Icon';
import { Vector5Icon } from './Vector5Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  classes?: {
    blackWhite11?: string;
    aaa1?: string;
    group1000001656?: string;
    root?: string;
  };
  swap?: {
    layer_1?: ReactNode;
  };
}
/* @figmaId 1142:7966 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame1000001692}>
        <div className={`${props.classes?.blackWhite11 || ''} ${classes.blackWhite11}`}></div>
        <div className={classes.share}>
          <div className={classes.frame161}>
            <div className={`${props.classes?.aaa1 || ''} ${classes.aaa1}`}></div>
            <div className={classes.frame160}>
              <div className={classes.shareWithFriendFamily}>
                <div className={classes.textBlock}>Share with</div>
                <div className={classes.textBlock2}>Friend &amp; Family</div>
              </div>
            </div>
          </div>
          <div className={classes.icons}>
            <div className={`${props.classes?.group1000001656 || ''} ${classes.group1000001656}`}>
              <div className={classes.rectangle2}></div>
              <div className={classes.layer_1}>{props.swap?.layer_1 || <Layer_1Icon className={classes.icon} />}</div>
              <div className={classes.group2}>
                <Group2Icon className={classes.icon2} />
              </div>
              <div className={classes.group3}>
                <Group3Icon className={classes.icon3} />
              </div>
              <div className={classes.group4}>
                <Group4Icon className={classes.icon4} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contactUs}>Contact Us</div>
        <div className={classes.about}>About</div>
        <div className={classes.links}>Links</div>
        <div className={classes.mobileApp}>Mobile App</div>
        <div className={classes.address}>Address:</div>
        <div className={classes.weAreOurPartnerOurServiceBlogC}>
          <div className={classes.textBlock3}>We Are</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
          <div className={classes.textBlock5}>Our Partner</div>
          <div className={classes.textBlock6}>
            <p></p>
          </div>
          <div className={classes.textBlock7}>Our Service</div>
          <div className={classes.textBlock8}>
            <p></p>
          </div>
          <div className={classes.textBlock9}>Blog</div>
          <div className={classes.textBlock10}>
            <p></p>
          </div>
          <div className={classes.textBlock11}>Contact</div>
        </div>
        <div className={classes.accommodationBecomeAnAgentBeco}>
          <div className={classes.textBlock12}>Accommodation</div>
          <div className={classes.textBlock13}>
            <p></p>
          </div>
          <div className={classes.textBlock14}>Become an agent</div>
          <div className={classes.textBlock15}>
            <p></p>
          </div>
          <div className={classes.textBlock16}>Become a Partner</div>
          <div className={classes.textBlock17}>
            <p></p>
          </div>
          <div className={classes.textBlock18}>Support</div>
        </div>
        <div className={classes.phone}>Phone:</div>
        <div className={classes.email}>Email:</div>
        <div className={classes._11BeaufortCourtAdmiralsWayCana}>
          <div className={classes.textBlock19}>11 Beaufort Court, Admirals Way,</div>
          <div className={classes.textBlock20}>Canary Wharf, London United Kingdom</div>
          <div className={classes.textBlock21}>E149XL</div>
        </div>
        <div className={classes._442033189380}>+44 (0) 2033 189 380</div>
        <div className={classes.infoBheuniIo}>info@bheuni.io</div>
        <div className={classes.rectangle44}></div>
        <div className={classes.rectangle49}></div>
        <div className={classes.rectangle45}></div>
        <div className={classes.rectangle50}></div>
        <div className={classes.rectangle46}></div>
        <div className={classes.rectangle51}></div>
        <div className={classes.rectangle47}></div>
        <div className={classes.rectangle52}></div>
        <div className={classes.rectangle48}></div>
        <div className={classes.rectangle53}></div>
        <div className={classes.IconBrandGooglePlay}>
          <IconBrandGooglePlayIcon className={classes.icon5} />
        </div>
        <div className={classes.downloadFrom}>Download from</div>
        <div className={classes.googlePlay}>Google Play</div>
        <div className={classes.rectangle54}></div>
        <div className={classes.downloadOnThe}>Download on the</div>
        <div className={classes.appStore}>App Store</div>
        <div className={classes.IconApple}>
          <IconAppleIcon className={classes.icon6} />
        </div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon7} />
        </div>
        <div className={classes.vector2}>
          <VectorIcon2 className={classes.icon8} />
        </div>
        <div className={classes.IconLocation}>
          <IconLocationIcon className={classes.icon9} />
        </div>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon10} />
        </div>
        <div className={classes.vector4}>
          <Vector4Icon className={classes.icon11} />
        </div>
        <div className={classes.Copyright2021AllRightsReserved}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>© Copyright 2021. All Rights Reserved. Developed by</span>
            <span className={classes.label2}> </span>
            <span className={classes.label3}>Digital Planet</span>
          </p>
        </div>
        <div className={classes.line61}>
          <Line61Icon className={classes.icon12} />
        </div>
      </div>
    </div>
  );
});
