import { FaMedal } from 'react-icons/fa';

export default function ScoreEvaluation() {
  return (
    <section className="w-full bg-[#364954] text-gray-900 py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">
          🧠 Score Evaluation
        </h2>

        {/* Marking Scheme */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-800">📌 Marking Scheme</h3>
          <ul className="text-lg space-y-3 leading-relaxed">
            <li className="text-white"><span className="font-semibold text-green-600">✔ Correct Answer:</span> +10 Points</li>
            <li className="text-white"><span className="font-semibold text-red-500">✖ Wrong Answer:</span> -1 Point</li>
            <li className="text-white"><span className="font-semibold text-gray-100">⬜ Unattempted:</span> 0 Points</li>
          </ul>
        </div>

        {/* Badge Distribution - Fit in one row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-lg font-medium text-gray-100">
          <Badge icon={<FaMedal className="text-yellow-500 text-3xl mx-auto" />} label="Gold Medal" range="≥ 85%" />
          <Badge icon={<FaMedal className="text-gray-400 text-3xl mx-auto" />} label="Silver Medal" range="80% - 84%" />
          <Badge icon={<FaMedal className="text-orange-400 text-3xl mx-auto" />} label="Bronze Medal" range="75% - 79%" />
          <Badge icon={<span className="text-3xl">🥇</span>} label="First Rank" range="60% - 74%" />
          <Badge icon={<span className="text-3xl">🥈</span>} label="Second Rank" range="50% - 59%" />
          <Badge icon={<span className="text-3xl">🥉</span>} label="Third Rank" range="35% - 49%" />
          <Badge icon={<span className="text-3xl">💥</span>} label="Fail" range="Below 35%" fail />
        </div>

        <p className="mt-16 text-center text-white italic text-base ">
          Keep pushing forward — accuracy, speed, and consistency will get you to the top! 🚀
        </p>
      </div>
    </section>
  );
}

function Badge({ icon, label, range, fail }) {
  return (
    <div className={`p-4 rounded-lg transition-transform hover:scale-105 ${fail ? 'text-red-600' : ''}`}>
      <div className="mb-2">{icon}</div>
      <p className="font-bold">{label}</p>
      <p className="text-sm text-white">{range}</p>
    </div>
  );
}
