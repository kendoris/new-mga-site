export default function Footer() {
  return (
    <footer className="bg-[var(--nav-bg)] text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm opacity-80">
          1962 MGA 1600 MKII - A Journey Since 1968
        </p>
        <p className="text-xs mt-2 opacity-60">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
