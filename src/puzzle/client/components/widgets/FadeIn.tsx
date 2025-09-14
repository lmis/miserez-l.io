"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import clsx from "clsx";

export const FadeIn: FC<PropsWithChildren> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={clsx(
        "transition-opacity duration-1300",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
};
