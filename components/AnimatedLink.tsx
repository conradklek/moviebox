"use client";
import useViewTransition from "@/hooks/useViewTransition";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};
export default function AnimatedLink({ href, children }: Props) {
  const { animatedRoute } = useViewTransition();
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}
