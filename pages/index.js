// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SkillKart – Bridging the Skill Gap, One Community at a Time
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          A campus-driven micro-learning platform where students learn, teach, and grow together — 
          gaining skills, points, and confidence in just 1-hour sessions.
        </p>
        <div className="mt-6">
          <a
            href="/sign-up"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How SkillKart Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-xl mb-2">Host Micro-Sessions</h3>
            <p>
              Share your knowledge by hosting fun, interactive 1-hour sessions on skills you know.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-xl mb-2">Learn & Earn Points</h3>
            <p>
              Attend sessions hosted by peers, gain new skills, and earn Skill Points along the way.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-xl mb-2">Redeem & Level Up</h3>
            <p>
              Use your Skill Points to join premium pods, unlock badges, and climb the leaderboard.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Skill the Nation?</h2>
        <a
          href="/sign-up"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} SkillKart. All rights reserved.</p>
      </footer>
    </div>
  );
}
