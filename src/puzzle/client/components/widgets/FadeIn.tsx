"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import clsx from "clsx";

interface Props {
  ready: boolean;
}

export const FadeIn: FC<PropsWithChildren<Props>> = ({ ready, children }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (ready) {
      setVisible(true);
    }
  }, [ready]);

  return (
    <div
      className={clsx(
        "transition-opacity duration-1500",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
};
