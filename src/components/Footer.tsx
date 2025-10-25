export default function Footer() {
  return (
    <footer className="bg-[#0B0D0F] text-white py-12">
      <div className="container-width">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="tiborn-logo text-3xl tracking-wide">
            <span className="text-white">TIB</span>
            <span className="text-[#C0392B]">O</span>
            <span className="text-white">RN</span>
          </div>
          <p className="text-white/50 text-sm">
            © 2025 TIBORN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
