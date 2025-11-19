export default function Footer({ small }) {
  return (
    <footer
      className={`${
        small ? "py-4 text-sm" : "py-8"
      } bg-gray-900 text-gray-300 text-center mt-16`}
    >
      <p className="font-semibold">Parking App</p>
      {!small && (
        <p className="mt-1">Fast, Secure & Affordable Airport Parking</p>
      )}
      <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Parking App. All rights reserved.</p>
    </footer>
  );
}
