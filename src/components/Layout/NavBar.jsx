import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../UI/Button'
import { useNotification } from '../hook/useNotification';
import { useState, useRef, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Instructions', href: '#', current: false },
  { name: 'Scrore ', href: '#', current: false },
  { name: Button , href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function NavBar() {

const {notification , count,setCount} = useNotification();
const [isOpen, setIsOpen] = useState(false);
console.log("count from navBar", count);
const popupRef = useRef();

const togglePopup = () => {
  setIsOpen(!isOpen);
    if (!isOpen) setCount(0); 
}


 useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
           <div className="relative" ref={popupRef}>
      <button
        type="button"
        onClick={togglePopup}
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="w-6 h-6" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full ring-2 ring-white min-w-[18px] h-[18px]">
            {count}
          </span>
        )}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
            {notification.length === 0 ? (
              <p className="text-sm text-gray-500">No new notifications</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {notification.map((notif, index) => (
                  <li key={index} className="py-2 text-sm text-gray-700">
                    {notif.message}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
