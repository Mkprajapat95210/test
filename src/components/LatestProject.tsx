import React from 'react';
import LatestProjectItem from './LatestProjectItem';

const LatestProject: React.FC = () => {
  const commonProjectTags = ['SaaS', 'Digital Product'];

  return (
    <section className="latest-project padding-t-120">
      <div className="latest-project__inner overflow-hidden">
        <div className="container container-two">
          <div className="section-heading">
            <h3 className="section-heading__title">our latest projects</h3>
            <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
          </div>
          <div className="latest-project__tab">
            <ul className="nav common-tab justify-content-center nav-pills mb-48" id="pills-tab-two" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-itManagement-tab" data-bs-toggle="pill" data-bs-target="#pills-itManagement" type="button" role="tab" aria-controls="pills-itManagement" aria-selected="true">itManagement Item</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-dataSecurity-tab" data-bs-toggle="pill" data-bs-target="#pills-dataSecurity" type="button" role="tab" aria-controls="pills-dataSecurity" aria-selected="false">dataSecurity</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-siteTemplate-tab" data-bs-toggle="pill" data-bs-target="#pills-siteTemplate" type="button" role="tab" aria-controls="pills-siteTemplate" aria-selected="false">site Template</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-blogging-tab" data-bs-toggle="pill" data-bs-target="#pills-blogging" type="button" role="tab" aria-controls="pills-blogging" aria-selected="false">blogging</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">marketing</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-plugins-tab" data-bs-toggle="pill" data-bs-target="#pills-plugins" type="button" role="tab" aria-controls="pills-plugins" aria-selected="false">plugins</button>
              </li>
            </ul>
          </div>
          <div className="latest-project-wrapper">
            <div className="tab-content" id="pills-tabContentTwo">
              <div className="tab-pane fade show active" id="pills-itManagement" role="tabpanel" aria-labelledby="pills-itManagement-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-dataSecurity" role="tabpanel" aria-labelledby="pills-dataSecurity-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-siteTemplate" role="tabpanel" aria-labelledby="pills-siteTemplate-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-blogging" role="tabpanel" aria-labelledby="pills-blogging-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-plugins" role="tabpanel" aria-labelledby="pills-plugins-tab" tabIndex={0}>
                <div className="latest-project-slider">
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project1.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project3.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                  <LatestProjectItem
                    imageSrc="assets/images/thumbs/latest-project2.png"
                    title="Hyip MoneyPro - Advance hyip investment financial html template"
                    tags={commonProjectTags}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="product-detais.html" className="btn-rounded text-white d-flex flex-column gap-2 justify-content-center text-center font-24 fw-600 font-heading mx-auto mt-64">
        <span className="icon"><img src="assets/images/icons/arrow-top-right.svg" alt="" /></span>
        <span className="text">View All</span>
      </a>
    </section>
  );
};

export default LatestProject;