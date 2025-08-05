

const projectData = [
  {
    title: 'Portfolio Website',
    description:
      'This portfolio website showcases Priyansh’s work in AI, Golang, and intelligent systems through a clean, responsive interface built with Next.js and Tailwind CSS. It features scroll-activated project cards, a publications gallery with overlay views, and a dedicated chatbot interface for interactive engagement. A physics-based tennis ball simulation built using Three.js adds a personal touch. With dark mode support, animated transitions, and custom timeline navigation, the site reflects both technical depth and design clarity.',
    image: '/memoji_full_1.png',
    timeline: 'Jan 2025 – Apr 2025',
    link: 'https://github.com/pdesai07/pdesai07.github.io',
  },
  {
    title: 'My Personal Chatbot',
    description:
      'Priyansh’s personal chatbot is a RAG-based assistant built on top of his Obsidian knowledge base. It uses Groq’s Qwen-32B model and LangChain for prompt orchestration, combining local markdown indexing with ChromaDB for efficient retrieval. The chatbot supports multi-turn memory using a persistent JSON store and runs inside a lightweight FastAPI backend. Hosted in a local Docker container, it continuously syncs new notes for real-time query handling. Designed for self-reflection, project queries, and technical recall, it delivers fast, offline-first answers from personal knowledge.',
    image: '/chatbot_icon.png',
    timeline: 'Jan 2025 – Apr 2025',
  },
  {
    title: 'Contractly',
    description:
      'Contractly is an AI-powered platform that streamlines smart contract creation, testing, and deployment with a single click. It uses secure, gas-optimized templates and AI-generated code to reduce development time by 80% and cut gas fees by up to 30%. With no manual setup required, developers can simply prompt, customize, and deploy. Built with Solidity, Hardhat, Next.js, LangChain, and MetaMask, it offers seamless Web3 integration. A built-in JavaScript SDK and automated test generation accelerate dApp development. Contractly is future-ready, with plans for multi-chain support, community-driven templates, and AI-audited security checks.',
    video: '/Contractly_video.mp4',
    timeline: 'Aug 2024 – Jan 2025',
  },
  {
    title: 'AdaptAI: A Personalized Solution to Sense Your Stress, Fix Your Mess, and Boost Productivity',
    description:
      'AdaptAI is a multimodal AI system that enhances productivity and well-being by tailoring interventions to individual needs. Unlike generic tools, AdaptAI integrates egocentric vision, audio, physiological signals, and LLM-driven workflows to provide context-aware support. Its Tone-Adaptive Conversational Agent enhances productivity by adjusting responses to be more positive and supportive during stressful moments.',
    image: '/adaptai_image.png',
    timeline: 'Aug 2024 – Jan 2025',
    link: 'https://github.com/gadhvirushiraj/AdaptAI',
  },
  {
    title: 'KhalasiIO: Detecting Situational Impairments With Reasoning-based Memory Bank',
    description:
      'Detects and addresses temporary impairments caused by environmental factors like noise, lighting, and stress. Integrates wearable devices and contextual memory for personalized, real-time interventions, reducing cognitive load and frustration. Promising results highlight scalability and improved accessibility.',
    image: '/khalasiIO_iamge.jpg',
    timeline: 'Aug 2024 – Jan 2025',
  },
  {
    title: 'Sustainable Mobility',
    description:
      'A deep-tech project on sustainable mobility using real-time computer vision and vehicle re-identification. Built with YOLOv8, ByteTrack, and transformer-based models to detect violations, track vehicles across cameras, and analyze traffic behavior. Designed a robust REID system using Siamese networks and benchmarked against industry datasets. Created custom datasets for model training and performance evaluation. The solution reduces manual labor and enhances road safety through AI-powered automation.',
    image: '/adaptai_image.png',
    timeline: 'Jan 2024 – Apr 2024',
  },
  {
    title: 'Recommendation System Using Deep Reinforcement Learning',
    description:
      'Built a Deep Reinforcement Learning–based recommendation system using an Actor-Critic framework to prioritize long-term user engagement. Modeled dynamic user-item interactions and trained the agent on Book-Crossing and MovieLens datasets. Used metrics like Precision@10 and NDCG@10 for offline evaluation. Benchmarked against Collaborative Filtering, KNN, GCN, and SLIM. The DRL model outperformed traditional methods by adapting to evolving user preferences. Tackled challenges like data sparsity and class imbalance through custom preprocessing and training strategies.',
    image: '/DRL_image.png',
    timeline: 'Jan 2024 – Apr 2024',
    link: 'https://github.com/Nikita-thomas/rl-recommendation-system',
  },
  {
    title: 'PosePilot: Edge-AI Solution for Posture Correction in Physical Exercises',
    description:
      'PosePilot: provides corrective feedback on yoga poses by using LSTM networks to detect poses and offer posture guidance. It analyzes body key points from videos to predict poses and forecast corrections, ensuring proper technique and posture for practitioners. The system helps overcome challenges like time, cost, and lack of instruction, offering personalized, real-time feedback for improved practice.',
    image: '/posepilot_image.png',
    timeline: 'Aug 2023 – Jan 2024',
    link: 'https://github.com/gadhvirushiraj/PosePilot',
  },
]

export default projectData
