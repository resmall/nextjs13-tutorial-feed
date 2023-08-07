"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { getProviders, signIn, signOut } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setProviders2 = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProviders2();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/ " className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt={"Tutoopia logo"}
          className="object-contain"
        />
        <p className="logo_text">Tutopia</p>
      </Link>

      {/* Mobile nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="Profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
