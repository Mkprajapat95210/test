import React from 'react';
import { ProfileOverviewTab } from './ProfileOverviewTab';
import { PortfolioTab } from './PortfolioTab';
import { FollowListTab } from './FollowListTab';
import { SettingsTab } from './SettingsTab';
import { HiddenItemTab } from './HiddenItemTab';
import { RefundedTab } from './RefundedTab';
import { EarningTab } from './EarningTab';
import { StatementTab } from './StatementTab';
import { ReviewTab } from './ReviewTab';
import { DownloadTab } from './DownloadTab';

export const ProfileSectionTabs: React.FC = () => (
  <section className="profile pt-5 padding-b-120">
    <div className="container container-two">
      <div className="tab-content" id="pills-tabb">
        <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
          <ProfileOverviewTab />
        </div>
        <div className="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab" tabIndex={0}>
          <PortfolioTab />
        </div>
        <div className="tab-pane fade" id="pills-followerss" role="tabpanel" aria-labelledby="pills-followerss-tab" tabIndex={0}>
          <FollowListTab type="followers" />
        </div>
        <div className="tab-pane fade" id="pills-Followingg" role="tabpanel" aria-labelledby="pills-Followingg-tab" tabIndex={0}>
          <FollowListTab type="following" />
        </div>
        <div className="tab-pane fade" id="pills-Settingss" role="tabpanel" aria-labelledby="pills-Settingss-tab" tabIndex={0}>
          <SettingsTab />
        </div>
        <div className="tab-pane fade" id="pills-hiddenItem" role="tabpanel" aria-labelledby="pills-hiddenItem-tab" tabIndex={0}>
          <HiddenItemTab />
        </div>
        <div className="tab-pane fade" id="pills-refunded" role="tabpanel" aria-labelledby="pills-refunded-tab" tabIndex={0}>
          <RefundedTab />
        </div>
        <div className="tab-pane fade" id="pills-earning" role="tabpanel" aria-labelledby="pills-earning-tab" tabIndex={0}>
          <EarningTab />
        </div>
        <div className="tab-pane fade" id="pills-statement" role="tabpanel" aria-labelledby="pills-statement-tab" tabIndex={0}>
          <StatementTab />
        </div>
        <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab" tabIndex={0}>
          <ReviewTab />
        </div>
        <div className="tab-pane fade" id="pills-download" role="tabpanel" aria-labelledby="pills-download-tab" tabIndex={0}>
          <DownloadTab />
        </div>
      </div>
    </div>
  </section>
);
