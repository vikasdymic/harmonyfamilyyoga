import React, { Component } from 'react';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne'>Learn More</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Children</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Senior</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Family</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
