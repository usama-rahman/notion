'use client';

import { SignOutButton, useUser } from '@clerk/clerk-react';

import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const UserItem = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avater imageSorce={user?.imageUrl} />

            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s Jotion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </div>

      {/* DropDown 😐 */}

      {isOpen && (
        <div className=" bg-[#fff] absolute w-full ">
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
            <div className="flex items-center gap-x-2">
              <div className="rounded-md bg-secondary p-1">
                <Avater imageSorce={user?.imageUrl} />
              </div>
              <div className="space-y-1">
                <p className="text-sm line-clamp-1">
                  {user?.fullName}&apos;s Motion
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center cursor-pointer text-muted-foreground items-center pb-2 ">
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg hover:bg-primary/90 ">
              <SignOutButton>Log out</SignOutButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Avater = ({ imageSorce }: any) => {
  return (
    <>
      <Image
        className="rounded-3xl"
        width={20}
        height={20}
        src={imageSorce}
        alt="avater"
      />
    </>
  );
};
