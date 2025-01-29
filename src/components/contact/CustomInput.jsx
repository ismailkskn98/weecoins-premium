"use client";
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { BsPersonVcard } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";

export default function CustomInput(props) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [field, meta] = useField(props.name);
  console.log(meta);
  return (
    <div className="relative w-full">
      <input
        {...props}
        {...field}
        onFocus={() => setIsFocusInput(true)}
        onBlur={(e) => {
          setIsFocusInput(false);
          field.onBlur(e);
        }}
        className={classNames("w-full rounded-md border border-solid bg-transparent py-10px pl-3 pr-8 text-sm text-zinc-700", {
          "border-zinc-300 focus:outline-1 focus:outline-light-f88540/30": !meta.error,
          "border-red-500 focus:outline-none": meta.error,
        })}
      />
      {meta.touched && meta.error ? <div className="absolute -bottom-5 left-[2px] z-10 text-xs text-red-500">*{meta.error}</div> : null}
      <div
        className={classNames("pointer-events-none absolute rounded-md px-2 text-sm transition-all duration-300", {
          "-top-[11px] left-1 bg-light-EAEEFE text-xs text-zinc-700": isFocusInput || (!isFocusInput && field.value.length),
          "left-2 top-1/2 -translate-y-1/2 bg-transparent text-sm text-zinc-600": !isFocusInput && !field.value.length,
        })}
      >
        {props.label}
      </div>
      <span className="absolute right-2 top-1/2 -translate-y-1/2">
        {props.name === "name" ? (
          <BsPersonVcard
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-600": !meta.error && !meta.touched,
            })}
          />
        ) : (
          <FiAtSign
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-700": !meta.error && !meta.touched,
            })}
          />
        )}
      </span>
    </div>
  );
}
