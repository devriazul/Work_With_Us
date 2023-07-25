import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow_DirectionDown } from './Arrow_DirectionDown/Arrow_DirectionDown';
import { ButtonM_StateDefault } from './ButtonM_StateDefault/ButtonM_StateDefault';
import { ButtonM_StateHOrange } from './ButtonM_StateHOrange/ButtonM_StateHOrange';
import { ClarityEmployeeGroupLineIcon } from './ClarityEmployeeGroupLineIcon';
import { ClarityEmployeeGroupLineIcon2 } from './ClarityEmployeeGroupLineIcon2';
import { Footer } from './Footer/Footer';
import { Frame46Icon } from './Frame46Icon';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { FrameIcon4 } from './FrameIcon4';
import { Header } from './Header/Header';
import { IllustrationHeroboxIcon } from './IllustrationHeroboxIcon';
import classes from './JobPortal.module.css';
import { JobPost_ActiveYes } from './JobPost_ActiveYes/JobPost_ActiveYes';
import { Layer_1Icon } from './Layer_1Icon';
import { MdiClockOutlineIcon } from './MdiClockOutlineIcon';
import { MdiClockOutlineIcon2 } from './MdiClockOutlineIcon2';
import { PlantIcon } from './PlantIcon';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon1Icon2 } from './Polygon1Icon2';
import { Polygon1Icon3 } from './Polygon1Icon3';
import { RiShareFillIcon } from './RiShareFillIcon';
import { RiShareFillIcon2 } from './RiShareFillIcon2';
import { SearchIcon } from './SearchIcon';
import { SimpleLineIconsLocationPinIcon } from './SimpleLineIconsLocationPinIcon';
import { SimpleLineIconsLocationPinIcon2 } from './SimpleLineIconsLocationPinIcon2';
import { SimpleLineIconsLocationPinIcon3 } from './SimpleLineIconsLocationPinIcon3';
import { SimpleLineIconsLocationPinIcon4 } from './SimpleLineIconsLocationPinIcon4';
import { SimpleLineIconsLocationPinIcon5 } from './SimpleLineIconsLocationPinIcon5';
import { SimpleLineIconsLocationPinIcon6 } from './SimpleLineIconsLocationPinIcon6';

interface Props {
  className?: string;
  hide?: {
    user?: boolean;
  };
}
/* @figmaId 1423:17959 */
export const JobPortal: FC<Props> = memo(function JobPortal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header
        className={classes.header}
        classes={{ newLogo: classes.newLogo }}
        hide={{
          user: true,
        }}
      />
      <div className={classes.frame52}>
        <div className={classes.joinOurTeam}>Join Our Team</div>
        <div className={classes.unlockYourPotentialWithBHEUNI}>
          <div className={classes.textBlock5}>Unlock Your Potential With</div>
          <div className={classes.textBlock6}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>BHE UNI</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.illustrationHerobox}>
        <IllustrationHeroboxIcon className={classes.icon13} />
      </div>
      <div className={classes.jobSearch}>
        <div className={classes.frame50}>
          <div className={classes.jobOpening}>Job Opening</div>
          <div className={classes._32JobsAvailable}>32 Jobs available</div>
        </div>
        <div className={classes.frame51}>
          <div className={classes.search}>
            <div className={classes.icon14}>
              <SearchIcon className={classes.icon15} />
            </div>
            <div className={classes.searchJobs}>Search Jobs...</div>
          </div>
          <div className={classes.frame48}>
            <div className={classes.search2}>
              <div className={classes.location}>Location </div>
              <Arrow_DirectionDown
                className={classes.arrow}
                swap={{
                  polygon1: <Polygon1Icon className={classes.icon} />,
                }}
              />
            </div>
            <div className={classes.search3}>
              <div className={classes.department}>Department</div>
              <Arrow_DirectionDown
                className={classes.arrow2}
                swap={{
                  polygon1: <Polygon1Icon2 className={classes.icon2} />,
                }}
              />
            </div>
            <div className={classes.search4}>
              <div className={classes.workType}>Work Type</div>
              <Arrow_DirectionDown
                className={classes.arrow3}
                swap={{
                  polygon1: <Polygon1Icon3 className={classes.icon3} />,
                }}
              />
            </div>
            <ButtonM_StateDefault
              className={classes.buttonM2}
              text={{
                buttonM: <div className={classes.buttonM}>Search</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.jobOpening2}>
        <div className={classes.frame64}>
          <div className={classes.selectYourPosition}>Select your position</div>
          <div className={classes.areYouReadyToJoinOurTeam}>
            <div className={classes.textBlock7}>Are You Ready To</div>
            <div className={classes.textBlock8}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label2}>Join </span>
                <span className={classes.label3}>Our Team</span>
                <span className={classes.label4}>?</span>
              </p>
            </div>
          </div>
        </div>
        <JobPost_ActiveYes
          classes={{ rectangle7011: classes.rectangle7011 }}
          swap={{
            simpleLineIconsLocationPin: <SimpleLineIconsLocationPinIcon className={classes.icon4} />,
            mdiClockOutline: <MdiClockOutlineIcon className={classes.icon5} />,
            clarityEmployeeGroupLine: <ClarityEmployeeGroupLineIcon className={classes.icon6} />,
            riShareFill: <RiShareFillIcon className={classes.icon7} />,
          }}
          text={{
            studentRecruitmentConsultant: <div className={classes.studentRecruitmentConsultant}>HR Manager</div>,
            deadline29July2023: <div className={classes.deadline29July2023}>Deadline: 21-August-2023</div>,
            londonOfficeUK: <div className={classes.londonOfficeUK}>London Office ( UK )</div>,
            fullTime: (
              <div className={classes.fullTime}>
                <a
                  href='https://www.boosteducationservice.co.uk/job-type/part-time/'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.textBlock}
                >
                  Part Time
                </a>
              </div>
            ),
            undefined: <div className={classes.undefined}>Undefined</div>,
            share: <div className={classes.share}>Share</div>,
          }}
        />
        <JobPost_ActiveYes
          classes={{ rectangle7011: classes.rectangle70112 }}
          swap={{
            simpleLineIconsLocationPin: <SimpleLineIconsLocationPinIcon2 className={classes.icon8} />,
          }}
          text={{
            deadline29July2023: <div className={classes.deadline29July20232}>Deadline: 21-August-2023</div>,
            providesIndependentConsultatio: (
              <div className={classes.providesIndependentConsultatio}>
                As a Student Recruitment Consultant, you will be responsible for promoting and recruiting students to
                join our partner institutions. You will act as a liaison between prospec... READ MORE
              </div>
            ),
          }}
        />
        <JobPost_ActiveYes
          classes={{ rectangle7011: classes.rectangle70113 }}
          swap={{
            simpleLineIconsLocationPin: <SimpleLineIconsLocationPinIcon3 className={classes.icon9} />,
          }}
          text={{
            studentRecruitmentConsultant: (
              <div className={classes.studentRecruitmentConsultant2}>
                <a
                  href='https://www.boosteducationservice.co.uk/vacancy/undefined/'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.textBlock2}
                >
                  Business Development Manager
                </a>
              </div>
            ),
            deadline29July2023: <div className={classes.deadline29July20233}>Deadline: 21-August-2023</div>,
            providesIndependentConsultatio: (
              <div className={classes.providesIndependentConsultatio2}>
                Builds international market position by locating, developing, defining, and developing business
                relationships with business partners &amp; Identifies unique ideas by researching the.... READ MORE
              </div>
            ),
          }}
        />
        <div className={classes.jobPost}>
          <div className={classes.frame1000001721}>
            <div className={classes.rectangle70116}></div>
            <div className={classes.frame1000001720}>
              <div className={classes.frame1000001719}>
                <div className={classes.frame1000001718}>
                  <div className={classes.studentRecruitmentConsultant5}>Destination Manager</div>
                  <div className={classes.deadline29July20236}>Deadline: 21-August-2023</div>
                </div>
                <div className={classes.frame1000001713}>
                  <div className={classes.frame1000001709}>
                    <div className={classes.simpleLineIconsLocationPin}>
                      <SimpleLineIconsLocationPinIcon4 className={classes.icon16} />
                    </div>
                    <div className={classes.dhakaOfficeBD}>Dhaka Office (BD)</div>
                  </div>
                  <div className={classes.frame1000001710}>
                    <div className={classes.mdiClockOutline}>
                      <MdiClockOutlineIcon2 className={classes.icon17} />
                    </div>
                    <div className={classes.fullTime2}>Full Time</div>
                  </div>
                  <div className={classes.frame1000001711}>
                    <div className={classes.clarityEmployeeGroupLine}>
                      <ClarityEmployeeGroupLineIcon2 className={classes.icon18} />
                    </div>
                    <div className={classes.undefined4}>01</div>
                  </div>
                  <div className={classes.frame1000001712}>
                    <div className={classes.riShareFill}>
                      <RiShareFillIcon2 className={classes.icon19} />
                    </div>
                    <div className={classes.share2}>Share</div>
                  </div>
                </div>
              </div>
              <div className={classes.providesIndependentConsultatio5}>
                Provides independent consultation and advice to educators on specific requirements, and on educational
                methods and techniques within an area of professional specialty... READ MORE
              </div>
              <ButtonM_StateHOrange
                text={{
                  buttonM: <div className={classes.buttonM3}>Apply Now</div>,
                }}
              />
            </div>
          </div>
        </div>
        <JobPost_ActiveYes
          classes={{ rectangle7011: classes.rectangle70114 }}
          swap={{
            simpleLineIconsLocationPin: <SimpleLineIconsLocationPinIcon5 className={classes.icon10} />,
          }}
          text={{
            studentRecruitmentConsultant: (
              <div className={classes.studentRecruitmentConsultant3}>
                <a
                  href='https://www.boosteducationservice.co.uk/vacancy/undefined/'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.textBlock3}
                >
                  Student Recruitment Manager
                </a>
              </div>
            ),
            deadline29July2023: <div className={classes.deadline29July20234}>Deadline: 21-August-2023</div>,
            londonOfficeUK: <div className={classes.londonOfficeUK2}>Dhaka Office (BD)</div>,
            undefined: <div className={classes.undefined2}>01</div>,
            providesIndependentConsultatio: (
              <div className={classes.providesIndependentConsultatio3}>
                The successful candidate will be responsible for advising prospective students about their study options
                with a major focus in converting these prospects into students; while also... READ MORE
              </div>
            ),
          }}
        />
        <JobPost_ActiveYes
          classes={{ rectangle7011: classes.rectangle70115 }}
          swap={{
            simpleLineIconsLocationPin: <SimpleLineIconsLocationPinIcon6 className={classes.icon11} />,
          }}
          text={{
            studentRecruitmentConsultant: (
              <div className={classes.studentRecruitmentConsultant4}>
                <a
                  href='https://www.boosteducationservice.co.uk/vacancy/undefined/'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.textBlock4}
                >
                  Compliance Officer
                </a>
              </div>
            ),
            deadline29July2023: <div className={classes.deadline29July20235}>Deadline: 21-August-2023</div>,
            londonOfficeUK: <div className={classes.londonOfficeUK3}>Dhaka Office (BD)</div>,
            undefined: <div className={classes.undefined3}>01</div>,
            providesIndependentConsultatio: (
              <div className={classes.providesIndependentConsultatio4}>
                You will be responsible for developing, implementing, and overseeing the compliance program, as well as
                monitoring and enforcing adherence to internal policies... READ MORE
              </div>
            ),
          }}
        />
        <div className={classes.frame10}>
          <div className={classes.selectPreviousSlide}>
            <div className={classes.svg}>
              <div className={classes.frame}>
                <FrameIcon className={classes.icon20} />
              </div>
            </div>
          </div>
          <div className={classes.divScWee03o}>
            <div className={classes.slide2}></div>
            <div className={classes.slide3}></div>
            <div className={classes.slide1}></div>
            <div className={classes.slide4}></div>
          </div>
          <div className={classes.selectNextSlide}>
            <div className={classes.svg2}>
              <div className={classes.frame2}>
                <FrameIcon2 className={classes.icon21} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.data}>
        <div className={classes.frame56}>
          <div className={classes._45}>45+</div>
          <div className={classes.teamMember}>Team Member</div>
        </div>
        <div className={classes.frame55}>
          <div className={classes._25}>25+</div>
          <div className={classes.totalProducts}>Total Products</div>
        </div>
        <div className={classes.frame57}>
          <div className={classes._8000}>80,000+</div>
          <div className={classes.happyUsers}>Happy Users</div>
        </div>
        <div className={classes.frame58}>
          <div className={classes._24k}>24k+</div>
          <div className={classes.happyMoments}>Happy Moments</div>
        </div>
      </div>
      <div className={classes.testimonials}>
        <div className={classes.frame66}>
          <div className={classes.testimonials2}>Testimonials</div>
          <div className={classes.whatOurTeamMembersHaveToSay}>
            <div className={classes.textBlock9}>What Our Team Members</div>
            <div className={classes.textBlock10}>
              <p className={classes.labelWrapper3}>
                <span className={classes.label5}>Have to Say</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.frame11}>
          <div className={classes.frame3}>
            <div className={classes.user1}></div>
            <div className={classes.frame22}>
              <div className={classes.BeingPartOfBHEUNIHasBeenAnIncr}>
                “Being part of BHE UNI has been an incredibly rewarding experience. I get to connect with aspiring
                students and guide them towards their dream ”
              </div>
              <div className={classes.frame1}>
                <div className={classes.MdAbdurRahman}>— Md Abdur Rahman</div>
                <div className={classes.digitalMarketingManagerGlobal}>Digital Marketing Manager (Global)</div>
              </div>
            </div>
          </div>
          <div className={classes.frame6}>
            <div className={classes.user2}></div>
            <div className={classes.frame5}>
              <div className={classes.ILoveBeingPartOfATeamThatTrans}>
                “I love being part of a team that transforms lives through education.”
              </div>
              <div className={classes.frame4}>
                <div className={classes.ObidullahRimon}>— Obidullah Rimon</div>
                <div className={classes.hRAdminManagerBD}>HR &amp; Admin Manager (BD)</div>
              </div>
            </div>
          </div>
          <div className={classes.frame9}>
            <div className={classes.user3}></div>
            <div className={classes.frame8}>
              <div className={classes.WorkingAtBHEUNIAllowsMeToSuppo}>
                “Working at BHE UNI allows me to support students in their academic journeys. It&#39;s fulfilling to see
                them grow and achieve their goals.”
              </div>
              <div className={classes.frame7}>
                <div className={classes.RiazulIslam}>— Riazul Islam</div>
                <div className={classes.srITManagerGlobal}>Sr. IT Manager (Global)</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame102}>
          <div className={classes.selectPreviousSlide2}>
            <div className={classes.svg3}>
              <div className={classes.frame12}>
                <FrameIcon3 className={classes.icon22} />
              </div>
            </div>
          </div>
          <div className={classes.divScWee03o2}>
            <div className={classes.slide12}></div>
            <div className={classes.slide22}></div>
            <div className={classes.slide32}></div>
            <div className={classes.slide42}></div>
          </div>
          <div className={classes.selectNextSlide2}>
            <div className={classes.svg4}>
              <div className={classes.frame13}>
                <FrameIcon4 className={classes.icon23} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ourCulture}>
        <div className={classes.plant}>
          <PlantIcon className={classes.icon24} />
        </div>
        <div className={classes.frame67}>
          <div className={classes.frame662}>
            <div className={classes.ourCulture2}>Our Culture</div>
            <div className={classes.aCultureOfContinuousLearningAn}>
              <div className={classes.textBlock11}>A Culture of Continuous Learning and Growth at</div>
              <div className={classes.textBlock12}>
                <p className={classes.labelWrapper4}>
                  <span className={classes.label6}>BHE UNI</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.atBHEUNIWeFosterASupportiveAnd}>
            At BHE UNI, we foster a supportive and collaborative environment that values creativity, diversity, and
            continuous learning. Join us and be part of a team that believes in making education accessible to all.
          </div>
          <ButtonM_StateDefault
            text={{
              buttonM: <div className={classes.buttonM4}>Learn more</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.benefits}>
        <div className={classes.frame663}>
          <div className={classes.benefitsAndPerks}>Benefits and Perks</div>
          <div className={classes.benefitsOfWorkingWithBHEUNI}>
            <div className={classes.textBlock13}>Benefits of Working With</div>
            <div className={classes.textBlock14}>
              <p className={classes.labelWrapper5}>
                <span className={classes.label7}>BHE UNI</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.frame75}>
          <div className={classes.frame73}>
            <div className={classes.frame71}>
              <div className={classes.benifit1}></div>
              <div className={classes.frame70}>
                <div className={classes.largeBeautifulOffice}>Large Beautiful Office</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
            <div className={classes.frame72}>
              <div className={classes.benifit2}></div>
              <div className={classes.frame702}>
                <div className={classes.greatCoWorkers}>Great Co-Workers</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame74}>
            <div className={classes.frame712}>
              <div className={classes.benifit3}></div>
              <div className={classes.frame703}>
                <div className={classes.easyLocation}>Easy Location</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
            <div className={classes.frame722}>
              <div className={classes.benifit4}></div>
              <div className={classes.frame704}>
                <div className={classes.educationOpportunities}>Education Opportunities</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame752}>
            <div className={classes.frame713}>
              <div className={classes.benifit5}></div>
              <div className={classes.frame705}>
                <div className={classes.freeLunchSncks}>Free Lunch &amp; Sncks</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
            <div className={classes.frame723}>
              <div className={classes.benifit6}></div>
              <div className={classes.frame706}>
                <div className={classes.performanceAward}>Performance Award</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte6}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat ut nibh molestie bibendum amet. Massa magna iaculis
                  euismod phasellus. Hendre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        className={classes.footer}
        classes={{
          blackWhite11: classes.blackWhite11,
          aaa1: classes.shareVector,
          group1000001656: classes.group1000001656,
        }}
        swap={{
          layer_1: <Layer_1Icon className={classes.icon12} />,
        }}
      />
    </div>
  );
});
