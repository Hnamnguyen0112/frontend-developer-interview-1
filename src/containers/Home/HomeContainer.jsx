import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import desktopImage from '@assets/images/image-hero-desktop.png';
import mobileImage from '@assets/images/image-hero-mobile.png';
import audiophileLogo from '@assets/svg/client-audiophile.svg';
import databizLogo from '@assets/svg/client-databiz.svg';
import makerLogo from '@assets/svg/client-maker.svg';
import meetLogo from '@assets/svg/client-meet.svg';
import { stringKeys } from '@i18n/strings/stringKeys';

import 'react-lazy-load-image-component/src/effects/blur.css';
const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white lg:m-auto lg:space-x-20">
      <div className="basis-1/2 flex lg:hidden">
        <LazyLoadImage wrapperClassName="m-auto" src={mobileImage} />
      </div>
      <div className="basis-1/2 flex">
        <div className="p-1 lg:p-0 mt-4 w-full lg:w-[37.5rem] mx-auto text-center lg:text-left lg:mt-16">
          <p className="mb-5 lg:mb-12 text-4xl lg:text-8xl break-words font-bold">
            <FormattedMessage id={stringKeys.main_title} />
          </p>
          <p className="mb-5 lg:mb-6 tracking-tight lg:tracking-normal whitespace-normal leading-loose lg:leading-10 text-md lg:text-2xl lg:text-left text-center text-medium-gray font-bold">
            <FormattedMessage id={stringKeys.main_description} />
          </p>
          <button
            type="button"
            className="mb-16 lg:mb-24 bg-black text-almost-white py-4 px-8 rounded-2xl font-bold text-md lg:text-xl border-2 border-black hover:text-almost-black hover:bg-white"
          >
            <FormattedMessage id={stringKeys.learn_more} />
          </button>
          <div className="mb-16 lg:mb-0 w-full flex flex-row justify-between">
            <div className="flex">
              <LazyLoadImage src={databizLogo} className="w-3/4 lg:w-full m-auto" />
            </div>
            <div className="flex">
              <LazyLoadImage src={audiophileLogo} className="w-3/4 lg:w-full m-auto" />
            </div>
            <div className="flex">
              <LazyLoadImage src={meetLogo} className="w-3/4 lg:w-full m-auto" />
            </div>
            <div className="flex">
              <LazyLoadImage src={makerLogo} className="w-3/4 lg:w-full m-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 lg:flex hidden ">
        <LazyLoadImage wrapperClassName="m-auto" src={desktopImage} width="480" />
      </div>
    </div>
  );
};

export default Home;
