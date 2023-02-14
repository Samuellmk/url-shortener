import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

type Props = {
  isVisible: boolean;
};

export const CopiedAlert = (props: Props) => {
  return (
    <div
      className={`${
        props.isVisible
          ? 'translate-y-0 '
          : '-translate-y-full -top-3'
      } ease-in-out duration-500
        rounded-md 
        top-3 bg-white shadow-md px-5 py-3 fixed w-fit z-40 `}
    >
      <div className="flex gap-5 items-center">
        Copied Text{' '}
        <FaCheckCircle
          className="text-green-500"
          size={22}
        />
      </div>
    </div>
  );
};
