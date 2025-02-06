import React from "react";
import { ModeToggle } from "../ModToggle";
import LanguageChange from "../LanguageChange";
import BlackButton from "../BlackButton";
import classNames from "classnames";

export default function HeaderActions({ isTopShow = false, isFixed = false }) {
  return (
    <div
      className={classNames("items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4", {
        "flex xl:hidden": isTopShow,
        "hidden xl:flex": !isTopShow,
      })}
    >
      <ModeToggle isFixed={isFixed} />
      <LanguageChange isFixed={isFixed} />
      <BlackButton
        isFixed={isFixed}
        target={"_blank"}
        href={"https://backoffice.weecoins.org/"}
        label={"BackOffice"}
        isTopShow={isTopShow}
      />
    </div>
  );
}
