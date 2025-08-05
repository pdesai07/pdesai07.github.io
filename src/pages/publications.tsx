import Layout from '@/components/Layout'
import PublicationOverlayCard from '@/components/PublicationOverlayCard'

export default function Publications() {
  const publications = [
    {
      title: 'PosePilot | IbPRIA `25',
      image: '/posepilot_image.png',
      authors: 'Rushiraj Gadhvi, Priyansh Desai, Siddharth S',
      abstract: 'Automated pose correction remains a significant challenge in AI-driven fitness systems, despite extensive research in activity recognition. This work presents PosePilot, a novel system that integrates pose recognition with real-time personalized corrective feedback, overcoming the limitations of traditional fitness solutions. Using Yoga, a discipline requiring precise spatio-temporal alignment as a case study, we demonstrate PosePilot ability to analyze complex physical movements. Designed for deployment on edge devices, PosePilot can be extended to various at-home and outdoor exercises. We employ a Vanilla LSTM, allowing the system to capture temporal dependencies for pose recognition. Additionally, a BiLSTM with multi-head Attention enhances the model ability to process motion contexts, selectively focusing on key limb angles for accurate error detection while maintaining computational efficiency. As part of this work, we introduce a high-quality video dataset used for evaluating our models. Most importantly, PosePilot provides instant corrective feedback at every stage of a movement, ensuring precise posture adjustments throughout the exercise routine. The proposed approach 1) performs automatic human posture recognition, 2) provides personalized posture correction feedback at each instant which is crucial in Yoga, and 3) offers a lightweight and robust posture correction model feasible for deploying on edge devices in real-world environments.',
      link: 'https://arxiv.org/abs/posepilot-paper',
    },
    {
      title: 'AdaptAI | CHI `25',
      image: '/adaptai_image.png',
      authors: 'Rushiraj Gadhvi, Priyansh Desai, Soham Petkar, Shreyas Ramachandran,Siddharth S',
      abstract: 'Personalization is a critical yet often overlooked factor in boosting productivity and well-being in knowledge-intensive workplaces to better address individual preferences. Existing tools typically offer uniform guidance, whether auto-generating email responses or prompting break reminders, without accounting for individual behavioral patterns or stress triggers. We introduce AdaptAI, a multimodal AI solution combining egocentric vision and audio, heart and motion activities, and the agentic workflow of Large Language Models (LLMs) to deliver highly personalized productivity support and context-aware well-being interventions. AdaptAI not only automates peripheral tasks (e.g., drafting succinct document summaries, replying to emails, etc.) but also continuously monitors the user’s unique physiological and situational indicators to dynamically tailor interventions, such as micro-break suggestions or exercise prompts, at the exact point of need. In a preliminary study with 15 participants, AdaptAI demonstrated significant improvements in task throughput and user satisfaction by anticipating user stressors and streamlining daily workflows.',
      link: 'https://arxiv.org/abs/adaptai-paper',
    },
  ]

  return (
    <Layout>
      <div className="text-black dark:text-white py-14 px-6 md:px-20 w-full">
        <h1 className="text-5xl font mb-14 text-left">My Publications</h1>
        <div className="flex flex-col gap-8 max-w-8xl mx-auto">
          {publications.map((pub, i) => (
            <PublicationOverlayCard pub={pub} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
