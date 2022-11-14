import React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import calendarLogo from '@assets/svg/icon-calendar.svg';
import menuLogo from '@assets/svg/icon-menu.svg';
import planningLogo from '@assets/svg/icon-planning.svg';
import reminderLogo from '@assets/svg/icon-reminders.svg';
import todoLogo from '@assets/svg/icon-todo.svg';
import logo from '@assets/svg/logo.svg';
import { Menu, Popover } from '@headlessui/react';

const features = [
  {
    name: 'Todo List',
    path: '/',
    icon: todoLogo
  },
  {
    name: 'Calendar',
    path: '/',
    icon: calendarLogo
  },
  {
    name: 'Reminders',
    path: '/',
    icon: reminderLogo
  },
  {
    name: 'Planning',
    path: '/',
    icon: planningLogo
  }
];

const company = [
  {
    name: 'History',
    path: '/'
  },
  {
    name: 'Our Team',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/'
  }
];

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal py-6 px-10">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <SVG src={logo} />
      </div>
      <div className="block lg:hidden">
        {/*<button className="flex items-center text-teal-lighter">*/}
        {/*  <SVG src={menuLogo} />*/}
        {/*</button>*/}
        <Popover>
          <Popover.Button>
            <SVG src={menuLogo} />
          </Popover.Button>

          <Popover.Panel className="absolute right-0 top-0 ">
            <div className="overflow-hidden shadow-2xl ring-1 ring-black ring-opacity-5 z-10 min-h-screen bg-white">
              <div className="p-4">
                <a
                  href="##"
                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">Documentation</span>
                  </span>
                  <span className="block text-sm text-gray-500">
                    Start integrating products and tools
                  </span>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
      <div className="w-full lg:block hidden flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Menu as="div" className="lg:inline-block lg:mt-0 relative mx-8">
            <Menu.Button className="flex items-center leading-snug text-gray-600 hover:text-black">
              Feature
            </Menu.Button>
            <Menu.Items className="z-10 absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {features.map((feature) => (
                  <Menu.Item key={feature.name}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-200' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <SVG className="mx-4" src={feature.icon} />
                        {feature.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>
          <Menu as="div" className="lg:inline-block lg:mt-0 relative mx-8">
            <Menu.Button className="flex items-center leading-snug text-gray-600 hover:text-black">
              Company
            </Menu.Button>
            <Menu.Items className="z-10 absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {company.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-200' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mx-8"
          >
            Careers
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mx-8"
          >
            About
          </Link>
        </div>
        <div>
          <Link to="/" className="inline-block text-md text-gray-600 hover:text-black mx-4">
            Login
          </Link>
          <Link
            to="/"
            className="px-6 py-2 inline-block text-md text-gray-600 hover:text-black mx-4 rounded-2xl border border-gray-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
