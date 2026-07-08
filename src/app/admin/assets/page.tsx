"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Lock,
  Download,
  Image as ImageIcon,
  FileText,
  Palette,
  FolderOpen,
  Eye,
  EyeOff,
  CheckCircle2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Secret password - change this to your preferred password
const SECRET_PASSWORD = "RF2024Admin";

interface Asset {
  id: string;
  name: string;
  type: "image" | "logo" | "document";
  url: string;
  description: string;
  size?: string;
}

const assets: Asset[] = [
  // Gallery Images - Before
  {
    id: "1",
    name: "Wohnzimmer Vorher",
    type: "image",
    url: "/images/gallery/01_livingroom_before.webp",
    description: "Wohnungsauflösung Nürnberg - Vorher",
    size: "WebP",
  },
  {
    id: "2",
    name: "Wohnzimmer Nachher",
    type: "image",
    url: "/images/gallery/01_livingroom_after.webp",
    description: "Wohnungsauflösung Nürnberg - Nachher",
    size: "WebP",
  },
  {
    id: "3",
    name: "Keller Vorher",
    type: "image",
    url: "/images/gallery/02_basement_before.webp",
    description: "Kellerräumung Fürth - Vorher",
    size: "WebP",
  },
  {
    id: "4",
    name: "Keller Nachher",
    type: "image",
    url: "/images/gallery/02_basement_after.webp",
    description: "Kellerräumung Fürth - Nachher",
    size: "WebP",
  },
  {
    id: "5",
    name: "Küche Vorher",
    type: "image",
    url: "/images/gallery/03_kitchen_before.webp",
    description: "Küchenauflösung Erlangen - Vorher",
    size: "WebP",
  },
  {
    id: "6",
    name: "Küche Nachher",
    type: "image",
    url: "/images/gallery/03_kitchen_after.webp",
    description: "Küchenauflösung Erlangen - Nachher",
    size: "WebP",
  },
  {
    id: "7",
    name: "Dachboden Vorher",
    type: "image",
    url: "/images/gallery/04_attic_before.webp",
    description: "Dachbodenräumung Bamberg - Vorher",
    size: "WebP",
  },
  {
    id: "8",
    name: "Dachboden Nachher",
    type: "image",
    url: "/images/gallery/04_attic_after.webp",
    description: "Dachbodenräumung Bamberg - Nachher",
    size: "WebP",
  },
  {
    id: "9",
    name: "Garten Vorher",
    type: "image",
    url: "/images/gallery/05_garden_before.webp",
    description: "Gartenräumung Ansbach - Vorher",
    size: "WebP",
  },
  {
    id: "10",
    name: "Garten Nachher",
    type: "image",
    url: "/images/gallery/05_garden_after.webp",
    description: "Gartenräumung Ansbach - Nachher",
    size: "WebP",
  },
  {
    id: "11",
    name: "Schlafzimmer Vorher",
    type: "image",
    url: "/images/gallery/06_bedroom_before.webp",
    description: "Schlafzimmerauflösung Schwabach - Vorher",
    size: "WebP",
  },
  {
    id: "12",
    name: "Schlafzimmer Nachher",
    type: "image",
    url: "/images/gallery/06_bedroom_after.webp",
    description: "Schlafzimmerauflösung Schwabach - Nachher",
    size: "WebP",
  },
  // Logo & Branding
  {
    id: "logo-svg",
    name: "Logo SVG",
    type: "logo",
    url: "/icons/icon.svg",
    description: "Hauptlogo als SVG-Vektor",
    size: "SVG",
  },
  {
    id: "logo-192",
    name: "App Icon 192x192",
    type: "logo",
    url: "/icons/icon-192x192.png",
    description: "App-Icon für PWA",
    size: "PNG 192px",
  },
  {
    id: "logo-512",
    name: "App Icon 512x512",
    type: "logo",
    url: "/icons/icon-512x512.png",
    description: "App-Icon für PWA (groß)",
    size: "PNG 512px",
  },
  // Documents
  {
    id: "manifest",
    name: "PWA Manifest",
    type: "document",
    url: "/manifest.json",
    description: "Progressive Web App Manifest",
    size: "JSON",
  },
];

export default function AdminAssetsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "image" | "logo" | "document">("all");
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  // Check for saved session
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("rf-admin-auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("rf-admin-auth", "true");
      setError("");
    } else {
      setError("Falsches Passwort");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("rf-admin-auth");
  };

  const handleDownload = async (asset: Asset) => {
    try {
      const response = await fetch(asset.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = asset.name.replace(/\s+/g, "_") + "." + asset.size?.toLowerCase().split(" ")[0];
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setDownloadedIds((prev) => [...prev, asset.id]);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  const filteredAssets = selectedType === "all"
    ? assets
    : assets.filter((a) => a.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="w-4 h-4" />;
      case "logo":
        return <Palette className="w-4 h-4" />;
      case "document":
        return <FileText className="w-4 h-4" />;
      default:
        return <FolderOpen className="w-4 h-4" />;
    }
  };

  // Login Page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Admin Bereich</h1>
              <p className="text-slate-400 text-sm">
                Zugang nur für autorisierte Benutzer
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Passwort eingeben"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
              >
                Anmelden
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Assets Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Asset Manager</h1>
            <p className="text-slate-400">
              Alle Dateien, Bilder und Logos zum Herunterladen
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <X className="w-4 h-4 mr-2" />
            Abmelden
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: "all", label: "Alle", count: assets.length },
            { key: "image", label: "Bilder", count: assets.filter((a) => a.type === "image").length },
            { key: "logo", label: "Logos", count: assets.filter((a) => a.type === "logo").length },
            { key: "document", label: "Dokumente", count: assets.filter((a) => a.type === "document").length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedType(tab.key as typeof selectedType)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedType === tab.key
                  ? "bg-primary text-white"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-black/20 text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden group hover:border-primary/50 transition-all"
            >
              {/* Preview */}
              <div className="aspect-video bg-slate-900/50 relative overflow-hidden">
                {asset.type === "image" || asset.type === "logo" ? (
                  <Image
                    src={asset.url}
                    alt={asset.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-slate-600" />
                  </div>
                )}
                {downloadedIds.includes(asset.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                  {getTypeIcon(asset.type)}
                  <span className="uppercase">{asset.size}</span>
                </div>
                <h3 className="text-white font-semibold mb-1 truncate">
                  {asset.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3 truncate">
                  {asset.description}
                </p>
                <Button
                  onClick={() => handleDownload(asset)}
                  size="sm"
                  className="w-full bg-slate-700 hover:bg-primary text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Herunterladen
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {assets.filter((a) => a.type === "image").length}
            </div>
            <div className="text-slate-400 text-sm">Galerie Bilder</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {assets.filter((a) => a.type === "logo").length}
            </div>
            <div className="text-slate-400 text-sm">Logo Varianten</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {downloadedIds.length}
            </div>
            <div className="text-slate-400 text-sm">Heruntergeladen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
