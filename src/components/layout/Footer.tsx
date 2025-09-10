// src/components/layout/Footer.tsx

export const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-serene">
      <div className="container mx-auto">
        <p>
          Crafted by{" "}
          <a
            href="https://github.com/Hussein-Sonamreel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-brand hover:underline underline-offset-4"
          >
            Hussein Salim
          </a>
          , blending luxury hospitality with modern technology.
        </p>
      </div>
    </footer>
  );
};