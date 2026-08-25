import projectsData from '../data/projects.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        
        {/* 1. HERO SECTION */}
        <section className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Novian Dwi Fernanda</h1>
          <h2 className="text-xl text-gray-600 font-medium">IT Support | Information System Student</h2>
          <div className="flex gap-4 pt-2">
            <a href="mailto:noviandf10@gmail.com" className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Email Me</a>
            <a href="https://linkedin.com/in/noviandf" target="_blank" className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">LinkedIn</a>
          </div>
        </section>

        {/* 2. PROFESSIONAL SUMMARY */}
        <section className="space-y-3">
          <h3 className="text-2xl font-semibold border-b pb-2">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Profesional IT Support dengan fondasi kuat dalam troubleshooting perangkat keras, pemeliharaan jaringan, dan diagnostik sistem. Berpengalaman memastikan stabilitas infrastruktur dan mengelola koordinasi dengan stakeholder. Mengembangkan kapabilitas teknis ke Backend Development (PHP, Laravel, Node.js) dan Data Analytics (Python) untuk menjembatani operasional infrastruktur dengan solusi web kustom dan otomatisasi.
          </p>
        </section>

        {/* 3. TECHNICAL SKILLS */}
        <section className="space-y-3">
          <h3 className="text-2xl font-semibold border-b pb-2">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-medium">Infrastructure:</span> Hardware & Network Troubleshooting, PowerShell Scripting, Event Viewer.</li>
            <li><span className="font-medium">Backend & Programming:</span> PHP, Laravel, Node.js, Python, JavaScript.</li>
            <li><span className="font-medium">Databases & Cloud:</span> MySQL, PostgreSQL, AWS, Google Workspace, Git.</li>
          </ul>
        </section>

        {/* 4. PROJECTS (Dari JSON) */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold border-b pb-2">Featured Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectsData.map((project) => (
              <div key={project.id} className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition">
                <h4 className="font-bold">{project.title}</h4>
                <div className="flex flex-wrap gap-1 my-2">
                  {project.tech_stack.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EXPERIENCE (Contoh 1 Terbaru) */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold border-b pb-2">Professional Experience</h3>
          
          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-lg">IT Support</h4>
              <span className="text-sm text-gray-500">May 2025 - Present</span>
            </div>
            <p className="text-gray-600 font-medium">TGA Solution Surakarta</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Mengeksekusi pemeliharaan hardware, software, & jaringan secara berkelanjutan.</li>
              <li>Mengembangkan internal IT utility tools (uptime monitoring, asset tracking).</li>
              <li>Memonitor web application call center CMS internal perusahaan.</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}