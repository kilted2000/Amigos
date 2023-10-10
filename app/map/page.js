"use client"
import { useState, useEffect } from 'react';

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setCountries(data.countries));
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map(country => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}