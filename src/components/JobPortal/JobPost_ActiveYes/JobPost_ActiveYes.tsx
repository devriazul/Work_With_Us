import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonM_StateHOrange } from '../ButtonM_StateHOrange/ButtonM_StateHOrange';
import { ClarityEmployeeGroupLineIcon } from './ClarityEmployeeGroupLineIcon';
import classes from './JobPost_ActiveYes.module.css';
import { MdiClockOutlineIcon } from './MdiClockOutlineIcon';
import { RiShareFillIcon } from './RiShareFillIcon';
import { SimpleLineIconsLocationPinIcon } from './SimpleLineIconsLocationPinIcon';

interface Props {
  className?: string;
  classes?: {
    rectangle7011?: string;
  };
  swap?: {
    simpleLineIconsLocationPin?: ReactNode;
    mdiClockOutline?: ReactNode;
    clarityEmployeeGroupLine?: ReactNode;
    riShareFill?: ReactNode;
  };
  text?: {
    studentRecruitmentConsultant?: ReactNode;
    deadline29July2023?: ReactNode;
    londonOfficeUK?: ReactNode;
    fullTime?: ReactNode;
    undefined?: ReactNode;
    share?: ReactNode;
    providesIndependentConsultatio?: ReactNode;
  };
}
/* @figmaId 1467:11957 */
export const JobPost_ActiveYes: FC<Props> = memo(function JobPost_ActiveYes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame1000001721}>
        <div className={`${props.classes?.rectangle7011 || ''} ${classes.rectangle7011}`}></div>
        <div className={classes.frame1000001720}>
          <div className={classes.frame1000001719}>
            <div className={classes.frame1000001718}>
              {props.text?.studentRecruitmentConsultant != null ? (
                props.text?.studentRecruitmentConsultant
              ) : (
                <div className={classes.studentRecruitmentConsultant}>
                  <a
                    href='https://www.boosteducationservice.co.uk/vacancy/undefined/'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock}
                  >
                    Student Recruitment Consultant
                  </a>
                </div>
              )}
              {props.text?.deadline29July2023 != null ? (
                props.text?.deadline29July2023
              ) : (
                <div className={classes.deadline29July2023}>Deadline: 29-July-2023</div>
              )}
            </div>
            <div className={classes.frame1000001713}>
              <div className={classes.frame1000001709}>
                <div className={classes.simpleLineIconsLocationPin}>
                  {props.swap?.simpleLineIconsLocationPin || (
                    <SimpleLineIconsLocationPinIcon className={classes.icon} />
                  )}
                </div>
                {props.text?.londonOfficeUK != null ? (
                  props.text?.londonOfficeUK
                ) : (
                  <div className={classes.londonOfficeUK}>London Office ( UK )</div>
                )}
              </div>
              <div className={classes.frame1000001710}>
                <div className={classes.mdiClockOutline}>
                  {props.swap?.mdiClockOutline || <MdiClockOutlineIcon className={classes.icon2} />}
                </div>
                {props.text?.fullTime != null ? (
                  props.text?.fullTime
                ) : (
                  <div className={classes.fullTime}>Full Time</div>
                )}
              </div>
              <div className={classes.frame1000001711}>
                <div className={classes.clarityEmployeeGroupLine}>
                  {props.swap?.clarityEmployeeGroupLine || <ClarityEmployeeGroupLineIcon className={classes.icon3} />}
                </div>
                {props.text?.undefined != null ? (
                  props.text?.undefined
                ) : (
                  <div className={classes.undefined}>Undefined</div>
                )}
              </div>
              <div className={classes.frame1000001712}>
                <div className={classes.riShareFill}>
                  {props.swap?.riShareFill || <RiShareFillIcon className={classes.icon4} />}
                </div>
                {props.text?.share != null ? props.text?.share : <div className={classes.share}>Share</div>}
              </div>
            </div>
          </div>
          {props.text?.providesIndependentConsultatio != null ? (
            props.text?.providesIndependentConsultatio
          ) : (
            <div className={classes.providesIndependentConsultatio}>
              Provides independent consultation and advice to educators on specific requirements, and on educational
              methods and techniques within an area of professional specialty... READ MORE
            </div>
          )}
          <ButtonM_StateHOrange
            text={{
              buttonM: <div className={classes.buttonM}>Apply Now</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
