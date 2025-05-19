"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigationItems = [
  {
    label: "Data Center Infrastructure Management",
    href: "/",
    subItems: [
      { label: "Monitoring Devices", href: "/dc-management/monitoring" },
      { label: "Asset Tracking", href: "/dc-management/asset-management" },
      { label: "Network Management", href: "/dc-management/networking" },
      { label: "Change Management", href: "/dc-management/change-management" },
      { label: "Colocation Management", href: "/dc-management/colocation" },
      { label: "Data Center Planner", href: "/dc-management/dc-planner" },
      { label: "Firmware Management", href: "/dc-management/firmware" },
      { label: "IP Address Management", href: "/dc-management/ipam" },
      { label: "Customer Portal", href: "/dc-management/customer-portal" },
      { label: "Custom Insights", href: "/dc-management/insights" },
      { label: "Custom Data Center Solutions", href: "/dc-management/custom-solutions" },
    ],
  },
  {
    label: "Intelligence Solutions",
    href: "/intelligence",
    subItems: [
      { label: "Digital Twins", href: "/intelligence/digital-twins" },
      { label: "Smart Power Mapping", href: "/intelligence/power-mapping" },
      { label: "Predictive Failure and Alerting", href: "/intelligence/predictive-failure" },
      { label: "Smart Control Systems", href: "/intelligence/control-systems" },
      { label: "Automated Discovery", href: "/intelligence/discovery" },
    ],
  },
  {
    label: "Data Center Compliance",
    href: "/compliance",
    subItems: [
      { label: "DCOI Compliance", href: "/compliance/dcoi" },
      { label: "(EU) 2023/1791", href: "/compliance/eu-2023-1791" },
      { label: "EN 50600", href: "/compliance/en-50600" },
      { label: "LEED Certification", href: "/compliance/leed" },
      { label: "ISO/IEC 30134-2", href: "/compliance/iso-iec-30134-2" },
      { label: "(EPA) ENERGY STAR", href: "/compliance/energy-star" },
      { label: "European Commission Joint Research Centre (JRC)", href: "/compliance/ec-jrc" },
    ],
  },
  {
    label: "Sustainability Blog",
    href: "/blog",
    subItems: [],
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <header className={`text-sm fixed  flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all border-b ${
        isScrolled ? "bg-centralaxis-dark shadow-lg" : "bg-transparent"
      }`}>
      <div className="container flex h-12  py-4 ">
        <div className="flex w-full items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center justify-between gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2  md:flex">
              <Image
                src="https://ext.same-assets.com/619634254/849522504.png"
                alt="CentralAxis Logo"
                width={29}
                height={29}
              />
              <span className="text-white font-semibold text-2xl font-centralaxis ">CentralAxis</span> {/* Apply font-centralaxis here */}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 ">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm" // Apply font-centralaxis here
                >
                  {item.label} {item.subItems.length > 0 && <span className="ml-1">▼</span>}
                </Link>
                {item.subItems.length > 0 && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm font-normal text-gray-300 hover:bg-gray-800 hover:text-white transition font-centralaxis" // Apply font-centralaxis here
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 py-4">
          {navigationItems.map((item) => (
            <div key={item.label} className="mb-4">
              <div
                className="flex justify-between items-center text-white cursor-pointer font-centralaxis" // Apply font-centralaxis here
                onClick={() => toggleSubmenu(item.label)}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {item.subItems.length > 0 && (
                  <span>{activeMenu === item.label ? "−" : "+"}</span>
                )}
              </div>
              {activeMenu === item.label && item.subItems.length > 0 && (
                <div className="mt-2 pl-4 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block text-sm text-gray-300 hover:text-white font-centralaxis" // Apply font-centralaxis here
                      onClick={toggleMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
export default Header;