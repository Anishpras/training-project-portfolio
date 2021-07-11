import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../assets/logo.svg";
const NavContainer = styled.nav`
  ${tw`
bg-dark-blue
`}
`;

const NavContainerOuter = styled.div`
  ${tw`
  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
`}
`;

const NavContainerInner = styled.div`
  ${tw`

flex items-center justify-between h-16
`}
`;

const NavItemsContainer = styled.div`
  ${tw`
flex items-center
`}
`;

const NavLogoContainer = styled.div`
  ${tw`
  flex-shrink-0
`}
`;

const NavLinksMDContainer = styled.div`
  ${tw`
  hidden md:block
`}
`;

const NavLinksMDContainerInner = styled.div`
  ${tw`
  hidden md:block
`}
`;

const NavOpenCloseButtonContainer = styled.div`
  ${tw`
mr-2 flex md:hidden
`}
`;

const NavOpenCloseButton = styled.button`
  ${tw`
  bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
`}
`;

const NavTransitionContainer = styled.div`
  ${tw`
md:hidden
`}
`;

const NavReferenceContainer = styled.div`
  ${tw`
  px-2 pt-2 pb-3 space-y-1 sm:px-3
`}
`;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavContainer>
        <NavContainerOuter>
          <NavContainerInner>
            <NavItemsContainer>
              <NavLogoContainer>
                <img className="h-8 w-8" src={LogoImage} />
              </NavLogoContainer>
              <NavLinksMDContainer>
                <NavLinksMDContainerInner>
                  <a
                    href="/blogs"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-4xl">
                    Blogs
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-4xl">
                    About
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-4xl">
                    Contact me
                  </a>
                </NavLinksMDContainerInner>
              </NavLinksMDContainer>
            </NavItemsContainer>
            <NavOpenCloseButtonContainer>
              <NavOpenCloseButton
                onClick={() => setIsOpen(!isOpen)}
                type="button">
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </NavOpenCloseButton>
            </NavOpenCloseButtonContainer>
          </NavContainerInner>
        </NavContainerOuter>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <NavTransitionContainer>
              <NavReferenceContainer ref={ref}>
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blogs
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact me
                </a>
              </NavReferenceContainer>
            </NavTransitionContainer>
          )}
        </Transition>
      </NavContainer>
    </>
  );
};
