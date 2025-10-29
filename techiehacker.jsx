import React from "react";

// techiehacker.com - single-file React component
// - Tailwind CSS utility classes assumed (see project README steps in chat)
// - Replace your project's src/App.jsx with this file (or import as default export)

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">TH</div>
              <div>
                <h1 className="text-xl font-semibold">techiehacker</h1>
                <p className="text-xs text-gray-500">Latest hacks, cloud, tutorials & food tech</p>
              </div>
            </a>

            <nav className="space-x-6 hidden md:flex">
              <a href="#features" className="text-sm hover:text-indigo-600">Features</a>
              <a href="#blog" className="text-sm hover:text-indigo-600">Blog</a>
              <a href="#about" className="text-sm hover:text-indigo-600">About</a>
              <a href="#contact" className="text-sm hover:text-indigo-600">Contact</a>
            </nav>

            <div className="md:hidden"> 
              <button aria-label="open menu" className="p-2 rounded-md bg-gray-100">Menu</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-indigo-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-extrabold leading-tight">Build, break & learn — tech made tasty</h2>
                <p className="mt-4 text-gray-600">Step-by-step tutorials on cloud hosting, web dev, security and a side of food vlogs. Practical, hands-on, and explained from scratch.</p>

                <div className="mt-6 flex gap-3">
                  <a href="#blog" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-md shadow">Read latest</a>
                  <a href="#contact" className="inline-block px-5 py-3 border border-gray-200 rounded-md">Work with me</a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="font-medium">Tutorial</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500">Focus</p>
                    <p className="font-medium">Cloud & Dev</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold">Featured tutorial</h3>
                  <p className="text-sm text-gray-600 mt-2">How to deploy a static React site to S3 + CloudFront (with HTTPS). 10 minute read.</p>
                  <div className="mt-4">
                    <img src="/hero-screenshot.png" alt="screenshot" className="w-full rounded-md"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-semibold">What you'll find here</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Cloud & Hosting" desc="Step-by-step hosting guides (AWS S3, CloudFront, Netlify)." />
            <Card title="Web Dev" desc="React, Tailwind, Vite & small production-ready templates." />
            <Card title="Food & Travel" desc="Short food vlogs and travel writeups from Hyderabad and beyond." />
          </div>
        </section>

        <section id="blog" className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold">Latest posts</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <ArticleCard title="Deploy React to S3 + CloudFront" excerpt="Quick, secure hosting for static React websites." />
              <ArticleCard title="Tailwind + Vite setup" excerpt="Fast dev loop and small CSS bundle with Tailwind." />
              <ArticleCard title="Cheap food cameras for vlogging" excerpt="Budget gear that actually looks good on video." />
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-semibold">About techiehacker</h3>
          <p className="mt-4 text-gray-600">Hi — I’m Satish. I build clear, practical tutorials about cloud hosting, web dev and tech that helps you ship. I also love food and travel — expect a mix of how-to guides and short vlogs.</p>
        </section>

        <section id="contact" className="bg-indigo-50 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-gray-600">Want a tutorial, a collab, or to say hi? Drop a message.</p>

            <form className="mt-6 grid grid-cols-1 gap-4">
              <input className="p-3 rounded border border-gray-200" placeholder="Your name" />
              <input className="p-3 rounded border border-gray-200" placeholder="Email" />
              <textarea className="p-3 rounded border border-gray-200" placeholder="Message" rows={4} />
              <div className="text-right">
                <button className="px-5 py-2 bg-indigo-600 text-white rounded">Send</button>
              </div>
            </form>

          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex justify-between items-center">
          <div>© {new Date().getFullYear()} techiehacker.com — Built with ❤️</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ArticleCard({ title, excerpt }) {
  return (
    <article className="p-4 bg-gray-50 rounded-lg border border-gray-100">
      <h5 className="font-semibold">{title}</h5>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <a className="mt-4 inline-block text-indigo-600 text-sm" href="#">Read →</a>
    </article>
  );
}
