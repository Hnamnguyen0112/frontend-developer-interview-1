import React, { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import arrowDownIcon from '@assets/svg/icon-arrow-down.svg';
import arrowUpIcon from '@assets/svg/icon-arrow-up.svg';
import calendarLogo from '@assets/svg/icon-calendar.svg';
import closeIcon from '@assets/svg/icon-close-menu.svg';
import menuLogo from '@assets/svg/icon-menu.svg';
import planningLogo from '@assets/svg/icon-planning.svg';
import reminderLogo from '@assets/svg/icon-reminders.svg';
import todoLogo from '@assets/svg/icon-todo.svg';
import logo from '@assets/svg/logo.svg';
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { stringKeys } from '@i18n/strings/stringKeys';

const features = [
  {
    name: <FormattedMessage id={stringKeys.todo_list} />,
    path: '/',
    icon: todoLogo
  },
  {
    name: <FormattedMessage id={stringKeys.calendar} />,
    path: '/',
    icon: calendarLogo
  },
  {
    name: <FormattedMessage id={stringKeys.reminders} />,
    path: '/',
    icon: reminderLogo
  },
  {
    name: <FormattedMessage id={stringKeys.planning} />,
    path: '/',
    icon: planningLogo
  }
];

const company = [
  {
    name: <FormattedMessage id={stringKeys.history} />,
    path: '/'
  },
  {
    name: <FormattedMessage id={stringKeys.our_team} />,
    path: '/'
  },
  {
    name: <FormattedMessage id={stringKeys.blog} />,
    path: '/'
  }
];

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal py-6 px-10">
      <div className="flex items-center flex-no-shrink text-almost-white mr-6">
        <SVG src={logo} />
      </div>
      <div className="block lg:hidden">
        <Popover>
          <Popover.Button>
            <SVG src={menuLogo} />
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-x-1"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-1"
          >
            <Popover.Panel className="absolute right-0 top-0 ">
              {({ close }) => (
                <div className="p-5 w-56 md:w-80 overflow-hidden shadow-2xl ring-1 ring-black ring-opacity-5 z-10 min-h-screen bg-white text-medium-gray">
                  <div className="h-10">
                    <SVG
                      className="inline-block float-right"
                      src={closeIcon}
                      onClick={() => close()}
                    />
                  </div>
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="block py-2 text-left w-full flex">
                          <FormattedMessage id={stringKeys.features} />{' '}
                          <SVG className="my-auto mx-4" src={open ? arrowUpIcon : arrowDownIcon} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                          {features.map((feature) => (
                            <Link key={feature.name} to={feature.path} className="flex my-3">
                              <SVG className="mx-4" src={feature.icon} />
                              {feature.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="block py-2 text-left w-full flex">
                          <FormattedMessage id={stringKeys.company} />{' '}
                          <SVG className="my-auto mx-4" src={open ? arrowUpIcon : arrowDownIcon} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                          {company.map((item) => (
                            <Link key={item.name} to={item.path} className="flex mx-4 my-3">
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link to="/" className="block py-2">
                    <FormattedMessage id={stringKeys.careers} />
                  </Link>
                  <Link to="/" className="block py-2">
                    <FormattedMessage id={stringKeys.about} />
                  </Link>
                  <div className="flex mt-4">
                    <Link
                      to="/"
                      className="inline-block text-md text-medium-gray hover:text-almost-black mx-auto"
                    >
                      <FormattedMessage id={stringKeys.login} />
                    </Link>
                  </div>
                  <div className="flex mt-2">
                    <Link
                      to="/"
                      className="px-14 py-2 inline-block text-md text-medium-gray hover:text-almost-black mx-auto rounded-2xl border-2 border-gray-600"
                    >
                      <FormattedMessage id={stringKeys.register} />
                    </Link>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="w-full lg:block hidden flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Menu as="div" className="lg:inline-block lg:mt-0 relative mx-8">
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center leading-snug text-medium-gray hover:text-almost-black">
                  <FormattedMessage id={stringKeys.features} />{' '}
                  <SVG className="my-auto ml-4" src={open ? arrowUpIcon : arrowDownIcon} />
                </Menu.Button>
                <Menu.Items className="z-10 absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {features.map((feature) => (
                      <Menu.Item key={feature.name}>
                        {({ active }) => (
                          <Link
                            className={`${
                              active ? 'bg-gray-200' : 'text-medium-gray'
                            } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                          >
                            <SVG className="mx-4" src={feature.icon} />
                            {feature.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
          <Menu as="div" className="lg:inline-block lg:mt-0 relative mx-8">
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center leading-snug text-medium-gray hover:text-almost-black">
                  <FormattedMessage id={stringKeys.company} />{' '}
                  <SVG className="my-auto ml-4" src={open ? arrowUpIcon : arrowDownIcon} />
                </Menu.Button>
                <Menu.Items className="z-10 absolute left-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {company.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            className={`${
                              active ? 'bg-gray-200' : 'text-medium-gray'
                            } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-medium-gray hover:text-almost-black mx-8"
          >
            <FormattedMessage id={stringKeys.careers} />
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-medium-gray hover:text-almost-black mx-8"
          >
            <FormattedMessage id={stringKeys.about} />
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="inline-block text-md text-medium-gray hover:text-almost-black mx-4"
          >
            <FormattedMessage id={stringKeys.login} />
          </Link>
          <Link
            to="/"
            className="px-6 py-2 inline-block text-md text-medium-gray hover:text-almost-black mx-4 rounded-2xl border-2 border-gray-600"
          >
            <FormattedMessage id={stringKeys.register} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
