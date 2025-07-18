// Pratika - Version 1 (Frontend seulement)
// Technologies : React + TailwindCSS (pas de backend encore)

import React from "react";
import { useState } from "react";

export default function PratikaApp() {
  const [user, setUser] = useState(null);
  const [selectedLang, setSelectedLang] = useState("");

  const languages = ["Anglais", "Français", "Allemand", "Chinois", "Russe", "Italien"];

  const handleLogin = () => setUser({ name: "Invité" });
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-blue-600">🗨️ Pratika</h1>
        <nav className="space-x-4">
          {user && <button className="text-blue-600">Profil</button>}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Se déconnecter
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Se connecter
            </button>
          )}
        </nav>
      </header>

      <main className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Bienvenue sur Pratika</h2>
        <p className="mb-6">Pratiquez des langues étrangères avec des Africains du monde entier.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded mb-10">
          Commencer à pratiquer
        </button>

        <h3 className="text-xl font-semibold mb-4">Pratiquer une langue</h3>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`border px-4 py-2 rounded hover:bg-blue-100 ${selectedLang === lang ? "bg-blue-200" : ""}`}
            >
              {lang}
            </button>
          ))}
        </div>

        {selectedLang && (
          <div className="mt-8">
            <h4 className="text-lg font-medium">Tu as choisi : {selectedLang}</h4>
            <p className="mt-2 text-gray-600">(Fonctionnalités de chat à venir...)</p>
          </div>
        )}
      </main>
    </div>
  );
}
