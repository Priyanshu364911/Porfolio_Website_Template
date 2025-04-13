
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Cosmic Exploration",
    description: "Interactive 3D space exploration experience built with Three.js and React",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Three.js", "WebGL"],
    link: "https://example.com/cosmic",
    github: "https://github.com/example/cosmic"
  },
  {
    id: "2",
    title: "Neural Network Visualizer",
    description: "Real-time visualization of neural network training with customizable parameters",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    tags: ["Machine Learning", "Data Visualization", "D3.js"],
    link: "https://example.com/neural",
    github: "https://github.com/example/neural"
  },
  {
    id: "3",
    title: "Ambient Music Generator",
    description: "Generative music application that creates unique ambient soundscapes",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Web Audio API", "Tone.js", "React"],
    link: "https://example.com/ambient",
    github: "https://github.com/example/ambient"
  },
  {
    id: "4",
    title: "AR Fashion Try-On",
    description: "Augmented reality application for virtual clothing try-on experience",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    tags: ["AR", "WebXR", "Computer Vision"],
    link: "https://example.com/ar-fashion",
    github: "https://github.com/example/ar-fashion"
  },
  {
    id: "5",
    title: "Sustainable Living Dashboard",
    description: "Interactive dashboard tracking personal environmental impact and sustainability goals",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    tags: ["Data Visualization", "React", "Chart.js"],
    link: "https://example.com/sustainable",
    github: "https://github.com/example/sustainable"
  },
  {
    id: "6",
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracking with predictive analytics",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Blockchain", "API Integration", "Data Analytics"],
    link: "https://example.com/crypto",
    github: "https://github.com/example/crypto"
  }
];
