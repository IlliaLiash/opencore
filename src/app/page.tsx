'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import IconButton from '@/components/buttons/IconButton';

export default function HomePage() {
  const [activeButton, setActiveButton] = React.useState('All Resources');

  const buttons = [
    'All Resources',
    'Design',
    'Development',
    'Marketing',
    'Branding',
  ];

  return (
    <main>
      {/* Head Section Start */}
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* Head Section End */}

      {/* Hero Section Start */}
      <div className='bg-header bg-cover bg-center h-[155px] mb-[77px]'>
        <div className='bg-opacity-50 flex items-center justify-center h-full'>
          <div className='bg-white w-[178px] h-[88px] mt-[52px] border border-grey rounded-full flex items-center justify-between'>
            <div className='flex-1 flex justify-center'>
              <IconButton
                href='/'
                svgPath='/svg/logo-icon.svg'
                altText='Logo Icon'
                width={38}
                height={38}
              />
            </div>
            <div className='h-full border-l border-grey'></div>
            <div className='flex-1 flex justify-center'>
              <IconButton
                href='/another-link'
                svgPath='/svg/hamburger-icon.svg'
                altText='Another Icon'
                width={38}
                height={38}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Content Section Start */}
      <section className='flex flex-col px-[96px]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col text-center max-w-[722px] gap-[16px]'>
            <h1 className='font-semibold text-darkblue text-6xl leading-[76.8px]'>
              Your Ultimate Resource Hub for Digital Success
            </h1>
            <h4 className='font-medium	text-lightgrey text-2xl leading-9'>
              Explore our comprehensive library of tools and templates for
              developers, designers, marketers, and branding experts.
            </h4>
          </div>

          {/* Buttons Section Start */}
          <div className='flex flex-col mt-[77px] w-full gap-[64px]'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-[16px]'>
                {buttons.map((button) => (
                  <div
                    key={button}
                    className={`flex items-center py-[10px] px-[16px] gap-[8px] rounded-lg cursor-pointer ${
                      activeButton === button
                        ? 'bg-lightblue'
                        : 'bg-white border border-lightergrey'
                    }`}
                    onClick={() => setActiveButton(button)}
                  >
                    <span
                      className={`font-medium text-[16px] leading-[24px] ${
                        activeButton === button
                          ? 'text-darkblue'
                          : 'text-lightgrey'
                      }`}
                    >
                      {button}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button className='flex flex-row gap-[8px] border border-lightergrey bg-white py-[10px] px-[16px] rounded-lg items-center'>
                  <Image
                    src='/svg/filters-icon.svg'
                    alt='Filters button'
                    width={16}
                    height={16}
                  />
                  <span className='font-medium text-base text-lightgrey'>
                    Filters
                  </span>
                </button>
              </div>
            </div>
            {/* Buttons Section End */}

            {/* Items Section Start */}
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-x-[20px] gap-y-[80px] justify-items-center'>
              {/* Item1 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item1.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                />
                <div className='flex gap-[16px] flex-col'>
                  <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                    Case Study Template: FlipX, an Investment Attraction Startup
                  </p>
                  <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                    <Image
                      src='/svg/file-icon.svg'
                      alt='Search Icon'
                      width={16}
                      height={16}
                    />
                    <span>Design file</span>
                  </div>
                </div>
              </div>

              {/* Item2 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item2.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                  className='border rounded-2xl border-lightgrey2'
                />
                <div className='flex gap-[16px] flex-col'>
                  <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                    Designing Impression: The Power of First Impressions
                  </p>
                  <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                    <Image
                      src='/svg/github-icon.svg'
                      alt='Search Icon'
                      width={16}
                      height={16}
                    />
                    <span>Github Resource</span>
                  </div>
                </div>
              </div>
              {/* Item3 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item3.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                  className='border rounded-2xl border-lightgrey2'
                />
                <div className='flex gap-[16px] flex-col'>
                  <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                    Fluid Card Animation in After Effects
                  </p>
                  <div className='flex flex-row gap-[8px]'>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>Design</span>
                    </div>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>UI UX</span>
                    </div>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>Branding</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item4 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item4.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                  className='border rounded-2xl border-lightgrey2'
                />
                <div className='flex gap-[16px] flex-col'>
                  <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                    Designing Impression: The Power of First Impressions
                  </p>
                  <div className='flex flex-row gap-[8px]'>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>Design</span>
                    </div>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>UI UX</span>
                    </div>
                    <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                      <span>Branding</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item5 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item5.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                  className='border rounded-2xl border-lightgrey2'
                />
                <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                  Designing Impression: The Power of First Impressions
                </p>
                <div className='flex flex-row gap-[8px]'>
                  <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                    <span>Design</span>
                  </div>
                </div>
              </div>
              {/* Item6 */}
              <div className='flex gap-[16px] flex-col'>
                <Image
                  src='/images/item6.png'
                  alt='Search Icon'
                  width={403}
                  height={247}
                  className='border rounded-2xl border-lightgrey2'
                />
                <p className='font-medium text-2xl leading-9 max-w-[351px] text-darkgrey'>
                  OpenCore Customer Acquisition Strategy
                </p>
                <div className='flex flex-row gap-[8px]'>
                  <div className='inline-flex w-max gap-2 bg-lightgrey2 font-medium text-sm text-lightgrey leading-[21px] py-1 px-2 rounded-[4px]'>
                    <Image
                      src='/svg/doc-icon.svg'
                      alt='Search Icon'
                      width={16}
                      height={16}
                    />
                    <span>Marketing PDF</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Items Section End */}

            {/* Call to Action Section Start */}
            <div className='my-[100px] h-[480px] rounded-[24px] bg-bg flex justify-between items-center px-[72px]'>
              <div className='flex flex-col gap-[20px] max-w-[550px]'>
                <h1 className='font-normal text-6xl leading-[76.8px] text-white'>
                  Transforming your{' '}
                  <span className='font-semibold '>Ideas into reality</span>
                </h1>
                <p className='font-medium	text-[20px] leading-[30px] text-[#EAECF0]'>
                  Let's build something extraordinary together to captivate your
                  audience.
                </p>
              </div>
              <div className='flex border-2 rounded-full h-[250px] min-w-[250px] justify-center items-center'>
                <p className='font-medium	text-2xl leading-9 max-w-[121px] text-center text-[#EDF2F5]'>
                  Let’s Work Together!
                </p>
              </div>
            </div>
            {/* Call to Action Section End */}
          </div>
        </div>
      </section>
      {/* Content Section End */}

      {/* Footer Section Start */}
      <footer className='flex bg-darkblue w-full justify-center'>
        <div className='flex flex-col mx-[62px] my-[86px] bg-white h-[579px] w-full rounded-[36px] relative'>
          <div className='flex mt-[76px] gap-[64px] flex-col mx-[97px]'>
            <div className='flex justify-between flex-row'>
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col'>
                  <h4 className='font-semibold text-[24px] leading-[30px] text-darkgrey'>
                    Say Hello!
                  </h4>
                  <p className='font-normal	text-[20px] leading-[30px] text-grey'>
                    opencoregroup@gmail.com
                  </p>
                </div>

                <div className='flex flex-row gap-[24px]'>
                  <Link href='/'>
                    <Image
                      src='/svg/instragram-icon.svg'
                      alt='Search Icon'
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href='/'>
                    <Image
                      src='/svg/facebook-icon.svg'
                      alt='Search Icon'
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href='/'>
                    <Image
                      src='/svg/twitter-icon.svg'
                      alt='Search Icon'
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href='/'>
                    <Image
                      src='/svg/linkedin-icon.svg'
                      alt='Search Icon'
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
              <nav className='flex flex-row gap-[64px]'>
                <ul className='flex flex-col gap-[13px]'>
                  <Link
                    href='/'
                    className='font-normal text-[20px] leading-[30px] text-grey'
                  >
                    Home
                  </Link>
                  <Link
                    href='/'
                    className='font-normal text-[20px] leading-[30px] text-grey'
                  >
                    About us
                  </Link>
                  <Link
                    href='/'
                    className='font-normal text-[20px] leading-[30px] text-grey'
                  >
                    Work
                  </Link>
                </ul>
                <ul className='flex flex-col gap-[13px]'>
                  <Link
                    href='/'
                    className='font-normal text-[20px] leading-[30px] text-grey'
                  >
                    Services
                  </Link>
                  <Link
                    href='/'
                    className='font-normal text-[20px] leading-[30px] text-grey'
                  >
                    Contact us
                  </Link>
                </ul>
              </nav>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-normal	text-[20px] leading-[30px] text-lightgrey'>
                Toronto, ON Canada
              </p>
              <p className='font-normal	text-[20px] leading-[30px] text-lightgrey'>
                OpenCore. All Rights Reserved
              </p>
            </div>
          </div>
          <div className='absolute -bottom-[17px] w-full flex justify-center'>
            <Image
              src='/images/footer-logo.png'
              alt='Footer Image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </main>
  );
}
