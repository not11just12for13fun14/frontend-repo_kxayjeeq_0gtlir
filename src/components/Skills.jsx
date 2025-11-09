const skills = [
  {
    group: "Programming Languages",
    items: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    group: "Web Development",
    items: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    group: "Android App Development",
    items: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    group: "Design Tools",
    items: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Wix", logo: "https://cdn.simpleicons.org/wix/fff" },
      { name: "Visily", logo: "https://cdn.simpleicons.org/visualstudio/fff" },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Code::Blocks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>

        {/* Fixed 5-card layout */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {skills.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-fuchsia-500/40"
            >
              <h3 className="text-lg font-semibold">{group.group}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-2 hover:border-fuchsia-500/50"
                  >
                    <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" />
                    <span className="text-xs text-white/85">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
