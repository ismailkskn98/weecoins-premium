"use client";
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { FiMessageSquare } from "react-icons/fi";

export default function CustomTextarea(props) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [field, meta] = useField(props.name);
  return (
    <div className="relative">
      <textarea
        {...props}
        {...field}
        onFocus={() => setIsFocusInput(true)}
        onBlur={(e) => {
          setIsFocusInput(false);
          field.onBlur(e);
        }}
        rows={8}
        className={classNames(
          "w-full resize-none rounded-md border border-solid bg-transparent py-10px pl-3 pr-8 text-sm text-zinc-700 focus:outline-1 dark:text-zinc-300",
          {
            "border-zinc-300 focus:outline-1 focus:outline-light-f88540/30 dark:border-zinc-600": !meta.error,
            "border-red-500 focus:outline-none": meta.error,
          },
        )}
      />
      {meta.touched && meta.error ? <div className="absolute -bottom-4 left-[2px] text-xs text-red-600">*{meta.error}</div> : null}
      <div
        className={classNames("pointer-events-none absolute rounded-md px-2 text-sm transition-all duration-300", {
          "-top-[11px] left-1 bg-light-EAEEFE text-xs text-zinc-700 dark:bg-dark-0d0d0d dark:text-zinc-400":
            isFocusInput || (!isFocusInput && field.value.length),
          "left-2 top-4 bg-transparent text-sm text-zinc-600 dark:text-zinc-400": !isFocusInput && !field.value.length,
        })}
      >
        {props.label}
      </div>
      <span className="absolute right-2 top-4">
        {
          <FiMessageSquare
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-700 dark:text-zinc-400": !meta.error && !meta.touched,
            })}
          />
        }
      </span>
    </div>
  );
}
