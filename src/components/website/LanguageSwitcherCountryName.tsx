"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Country = { id: string; flag: string; name: string; code: string };

const countries: Country[] = [
  { id: "us", flag: "us", name: "USA", code: "+1" },
  { id: "in", flag: "in", name: "India", code: "+91" },
  { id: "am", flag: "am", name: "Armenia", code: "+374" },
  { id: "za", flag: "za", name: "South Africa", code: "+27" },
];

const CountryPhoneInput = ({ paramKey = "lang" }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    const id = searchParams.get(paramKey) || "us";
    return countries.find((c) => c.id === id) || countries[0];
  });

  const [phoneNumber, setPhoneNumber] = useState("");

  const changeCountry = (country: Country) => {
    setSelectedCountry(country);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramKey, country.id);
    router.replace(newUrl.toString(), { scroll: false });
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div
      className="d-flex align-items-center position-relative"
      style={{ maxWidth: "360px" }}
    >
      {/* Country dropdown */}
      <div className="dropdown me-2" ref={dropdownRef}>
        <button
          className="btn btn-light d-flex align-items-center"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className={`flag-icon ${selectedCountry.flag} me-2`}></span>
          <span>{selectedCountry.name}</span>
          <span className="ms-2 text-muted">{selectedCountry.code}</span>
        </button>

        {dropdownOpen && (
          <ul
            className="dropdown-menu show"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {countries.map((country) => (
              <li key={country.id}>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={() => changeCountry(country)}
                >
                  <span className={`flag-icon ${country.flag} me-2`}></span>
                  <span className="flex-grow-1">{country.name}</span>
                  <span className="text-muted ms-2">{country.code}</span>
                </button>
              </li>
            ))}
          </ul>
          
        )}
      </div>

      {/* Phone input */}
      <input
        type="tel"
        className="form-control"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ flex: 1 }}
      />
    </div>
  );
};

export default CountryPhoneInput;
