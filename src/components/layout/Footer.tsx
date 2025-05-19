"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center"> 
            <Image
              src="https://ext.same-assets.com/619634254/849522504.png"
              alt="CentralAxis Logo"
              width={30}
              height={30}
            />
            <span className="text-white text-sm">Copyright © {new Date().getFullYear()}</span>
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-centralaxis-light hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-centralaxis-light hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
