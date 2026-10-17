import { useState } from 'react';
import { BatGlyph } from './BatGlyph';
import { CheckCircle2, ChevronDown, ChevronUp, Layers, AlertCircle, Lightbulb, ArrowUpRight } from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { SentimentInteractiveDemo, FacialEmotionInteractiveDemo, TrendPredictorInteractiveDemo } from './ProjectInteractiveDemos';
import { useTheme } from '../ThemeContext';

const REAL_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'arabic-sentiment',
    number: '01',
    title: 'Arabic Sentiment Analyzer',
    tagline: 'End-to-End ML Platform Fine-tuned Arabic BERT model trained on 20K+ Arabic texts with negation and sarcasm handling.',
    shortSummary: 'Fine-tuned Arabic BERT handling dialect negation and sarcasm.',
    category: 'NLP',
    status: 'Production Demo',
    role: 'Full-Stack NLP Developer',
    timeline: '2024 – 2025',
    externalUrl: 'https://github.com/RG-01-00/arabic-sentimetn-analyzer',
    tags: ['Transformers', 'FastAPI', 'React', 'NLP', 'PyTorch'],
    problem: 'The harder engineering problem wasn\'t classification it was Arabic itself: negation and sarcasm break naive sentiment models, so the pipeline was built to account for both.',
    builtDescription: 'Full-stack sentiment analysis system built around a fine-tuned Arabic BERT model, trained on 20K+ Arabic texts across four sentiment classes. The harder engineering problem wasn\'t classification  it was Arabic itself: negation and sarcasm break naive sentiment models, so the pipeline was built to account for both. Served through a FastAPI backend with a React frontend for real-time inference.',
    technicalDecision: 'Custom tokenization pre-processing and context-aware negation parsing integrated directly into the fine-tuning workflow instead of generic translation-based sentiment tools.',
    resultOutcome: 'Accurately classifies nuanced Arabic dialect texts with real-time inference served through FastAPI and a responsive React frontend.',
    architectureHighlights: [
      'Fine-tuned Arabic BERT transformer trained on 20K+ texts',
      'Handles complex morphology, dialect variation, negation, and sarcasm',
      '4 Sentiment classes with confidence scoring',
      'FastAPI async backend paired with real-time React inference interface'
    ],
    keyMetrics: [
      { label: 'Training Corpus', value: '20K+ Texts', note: 'Curated Arabic dialect data' },
      { label: 'Output Classes', value: '4 Sentiments', note: 'Multi-class classification' },
      { label: 'Stack', value: 'BERT + FastAPI', note: 'Served to React frontend' },
    ],
    deliverables: ['Fine-Tuned Arabic BERT Model', 'FastAPI Microservice', 'React Client Application'],
    interactiveDemoType: 'sentiment',
  },
  {
    id: 'wajhok-fer',
    number: '02',
    title: 'Wajhok Browser-Based Facial Emotion Recognition',
    tagline: 'Client-Side Computer Vision CNN trained on FER2013 (35K+ facial images), deployed entirely client-side with TensorFlow.js and MediaPipe.',
    shortSummary: 'Client-side CNN running real-time private emotion recognition in browser.',
    category: 'Computer Vision',
    status: 'Complete',
    role: 'Computer Vision & Frontend Engineer',
    timeline: '2024',
    externalUrl: 'https://wajhok.netlify.app',
    tags: ['TensorFlow.js', 'MediaPipe', 'CNN', '100% Client-Side', 'React'],
    problem: 'Traditional CV models rely on cloud server round-trips that introduce network latency and transmit sensitive private camera frames across the internet.',
    builtDescription: 'CNN trained on FER2013 (35K+ facial images), deployed entirely client-side with TensorFlow.js and MediaPipe for face detection. Moving inference into the browser removes the server round-trip: no image data leaves the device, and recognition runs in real time with no backend inference cost. Privacy and latency were the design constraints, not afterthoughts.',
    technicalDecision: 'Eliminated server GPU dependencies by compiling the quantized CNN directly to the browser WebGL backend with MediaPipe landmark tracking.',
    resultOutcome: 'Real-time on-device emotion classification running at 30+ FPS with zero cloud latency and complete user privacy.',
    architectureHighlights: [
      'Custom CNN trained on FER2013 (35K+ facial images)',
      '100% Client-side inference via TensorFlow.js and WebGL',
      'MediaPipe face detection for fast, lightweight landmark tracking',
      'Zero server round-trip: private, zero-cost edge execution'
    ],
    keyMetrics: [
      { label: 'Dataset', value: '35K+ Faces', note: 'FER2013 facial expression data' },
      { label: 'Framerate', value: '30+ FPS', note: 'Real-time in browser' },
      { label: 'Privacy', value: '100% Client-Side', note: 'Zero data leaves device' },
    ],
    deliverables: ['Quantized CNN Graph', 'TensorFlow.js WebGL Pipeline', 'React Interactive Interface'],
    interactiveDemoType: 'vision-demo',
  },
  {
    id: 'flyrank-ml',
    number: '03',
    title: 'FlyRank ML Page Trend Direction Classifier',
    tagline: 'Ongoing Applied ML Research Supervised classification investigating whether page-level performance trends can be predicted from search signals.',
    shortSummary: 'Supervised ML model predicting page performance trends from search signals.',
    category: 'Machine Learning',
    status: 'Ongoing Research',
    role: 'ML Engineer & Researcher',
    timeline: '2025 – Present',
    externalUrl: 'https://github.com/RG-01-00/flyrank_ml_intern1',
    tags: ['Feature Engineering', 'Scikit-learn', 'Classification', 'Research', 'Python'],
    problem: 'Determining whether page-level search performance trends (rising, stable, declining) can be predicted early from engagement and search signals.',
    builtDescription: 'An investigation into whether page-level performance trends (rising, stable, declining) can be predicted from search and content signals CTR, impression momentum, query velocity, and content age. Framed as a supervised classification problem, benchmarked against heuristic baselines, and evaluated across Random Forest, Decision Tree, and Logistic Regression models, with Random Forest outperforming the others in testing. The more interesting result was in feature importance: content age alone didn\'t explain trend decay engagement velocity signals carried more predictive weight. Ongoing work.',
    technicalDecision: 'Benchmarked multiple model families (Random Forest, Decision Tree, Logistic Regression) against rule-based baselines and evaluated permutation feature importance.',
    resultOutcome: 'Random Forest outperformed baseline models; feature importance revealed engagement velocity signals carry significantly more predictive weight than content age alone.',
    architectureHighlights: [
      'Supervised classification for rising, stable, and declining trend states',
      'Feature engineering: CTR velocity, impression momentum, query metrics, content age',
      'Benchmarking Random Forest, Decision Tree, and Logistic Regression models',
      'Feature importance analysis uncovering engagement velocity predictive dominance'
    ],
    keyMetrics: [
      { label: 'Models Tested', value: 'RF, DT, LR', note: 'Random Forest top performer' },
      { label: 'Feature Finding', value: 'Velocity > Age', note: 'Engagement signals carry weight' },
      { label: 'Status', value: 'Ongoing Work', note: 'Applied ML research' },
    ],
    deliverables: ['Feature Engineering Pipeline', 'Model Benchmark Suite', 'Research Findings & Notebooks'],
    interactiveDemoType: 'trend-evaluator',
  },
];

export function ProjectsSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeProjectId, setActiveProjectId] = useState<string>('arabic-sentiment');
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);

  const activeProject =
    REAL_PROJECTS.find((p) => p.id === activeProjectId) || REAL_PROJECTS[0];

  const handleSelectProject = (id: string) => {
    setActiveProjectId(id);
    setExpandedDetails(false);
  };

  return (
    <section
      id="projects"
      className={`relative py-20 px-6 sm:px-12 transition-colors duration-300 ${
        isLight ? 'bg-[#f8f8fb]' : 'bg-[#08080c]'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Section Title */}
        <div className="mb-8">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display transition-colors ${
              isLight ? 'text-[#14131f]' : 'text-white'
            }`}
          >
            Projects
          </h2>
        </div>

        {/* 3 Real Projects at a Glance Selector Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {REAL_PROJECTS.map((p) => {
            const isSelected = p.id === activeProjectId;
            return (
              <button
                key={p.id}
                id={`project-card-select-${p.number}`}
                onClick={() => handleSelectProject(p.id)}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? isLight
                      ? 'bg-violet-50/90 border-violet-400 shadow-[0_4px_16px_rgba(124,58,237,0.12)] ring-1 ring-violet-400/40'
                      : 'bg-violet-950/50 border-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.2)] ring-1 ring-violet-500/50'
                    : isLight
                    ? 'bg-white border-neutral-200/90 hover:border-violet-300 hover:bg-violet-50/30 text-neutral-800 shadow-xs'
                    : 'bg-[#0c0c14] border-white/10 hover:border-neutral-700 hover:bg-neutral-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        isLight ? 'text-violet-700' : 'text-violet-400'
                      }`}
                    >
                      {p.number}
                    </span>
                    <span
                      className={`font-mono text-[9px] uppercase ${
                        isLight ? 'text-neutral-500 font-medium' : 'text-neutral-400'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div
                    className={`font-mono text-xs font-semibold mb-1 line-clamp-1 ${
                      isLight ? 'text-neutral-900' : 'text-white'
                    }`}
                  >
                    {p.title.split('—')[0].trim()}
                  </div>
                  <p
                    className={`text-[11px] line-clamp-1 leading-relaxed ${
                      isLight ? 'text-neutral-500' : 'text-neutral-400'
                    }`}
                  >
                    {p.shortSummary || p.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Card */}
        <div
          className={`rounded-xl border p-6 sm:p-8 space-y-6 relative transition-all duration-300 ${
            isLight
              ? 'border-neutral-200/90 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]'
              : 'border-white/10 bg-[#0c0c14] shadow-[0_8px_30px_rgba(0,0,0,0.7)]'
          }`}
        >
          {/* Header Row: Title & Badges */}
          <div
            className={`space-y-3 pb-5 border-b ${
              isLight ? 'border-neutral-200/80' : 'border-white/10'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase">
                <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-400 font-bold'}>
                  PROJECT {activeProject.number}
                </span>
                <span className={isLight ? 'text-neutral-400' : 'text-neutral-600'}>&bull;</span>
                <span
                  className={`px-2 py-0.5 rounded text-[9px] ${
                    isLight
                      ? 'bg-violet-50 border border-violet-200 text-violet-800 font-medium'
                      : 'bg-white/5 border border-white/10 text-violet-300'
                  }`}
                >
                  {activeProject.status}
                </span>
              </div>

              {activeProject.externalUrl && (
                <a
                  id={`project-access-btn-${activeProject.id}`}
                  href={activeProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105 shrink-0 group cursor-pointer ${
                    isLight
                      ? 'border-violet-200 bg-violet-50 hover:bg-violet-100 hover:border-violet-300 text-violet-700 shadow-sm'
                      : 'border-violet-500/40 bg-[#161528] hover:bg-violet-900/80 hover:border-violet-400 text-violet-200 hover:text-white shadow-[0_0_16px_rgba(139,92,246,0.3)]'
                  }`}
                  aria-label={`Access ${activeProject.title}`}
                  title={`Access ${activeProject.title}`}
                >
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>

            <h3
              className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-display pr-2 ${
                isLight ? 'text-[#14131f]' : 'text-white'
              }`}
            >
              {activeProject.title}
            </h3>

            <p
              className={`text-sm sm:text-base max-w-3xl font-normal leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-neutral-300'
              }`}
            >
              {activeProject.tagline}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] tracking-[1.5px] uppercase pt-1">
              <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-400 font-semibold'}>
                Stack:
              </span>
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded border ${
                    isLight
                      ? 'text-neutral-700 bg-neutral-100/90 border-neutral-200'
                      : 'text-neutral-200 bg-[#12121e] border-white/5'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Demo */}
          {activeProject.interactiveDemoType && (
            <div className="pt-1 pb-2">
              {activeProject.interactiveDemoType === 'sentiment' && <SentimentInteractiveDemo />}
              {activeProject.interactiveDemoType === 'vision-demo' && <FacialEmotionInteractiveDemo />}
              {activeProject.interactiveDemoType === 'trend-evaluator' && <TrendPredictorInteractiveDemo />}
            </div>
          )}

          {/* Key Metrics Strip (Under Demo) */}
          {activeProject.keyMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {activeProject.keyMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border space-y-0.5 ${
                    isLight
                      ? 'bg-violet-50/60 border-violet-200/80 shadow-xs'
                      : 'bg-[#151426] border-violet-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                  }`}
                >
                  <span
                    className={`text-[9px] tracking-[2px] uppercase block font-medium ${
                      isLight ? 'text-neutral-600' : 'text-neutral-300'
                    }`}
                  >
                    {m.label}
                  </span>
                  <div
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isLight ? 'text-violet-950' : 'text-white'
                    }`}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Core Result / Main Finding Callout */}
          <div
            className={`p-4 rounded-lg border flex items-start gap-3 ${
              isLight
                ? 'border-emerald-200 bg-emerald-50/90'
                : 'border-emerald-950/60 bg-emerald-950/15'
            }`}
          >
            <CheckCircle2
              size={16}
              className={`shrink-0 mt-0.5 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}
            />
            <div className="space-y-1">
              <span
                className={`font-mono text-[10px] tracking-[2px] uppercase font-semibold block ${
                  isLight ? 'text-emerald-700' : 'text-emerald-400'
                }`}
              >
                Key Result & Impact
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-emerald-950' : 'text-neutral-200'}`}>
                {activeProject.resultOutcome}
              </p>
            </div>
          </div>

          {/* "See More" Expandable Deep Case Study Breakdown */}
          <div>
            <button
              type="button"
              id={`project-expand-toggle-${activeProject.number}`}
              onClick={() => setExpandedDetails(!expandedDetails)}
              className={`w-full py-2.5 px-4 rounded border font-mono text-[10px] tracking-[2px] uppercase flex items-center justify-between transition-colors cursor-pointer ${
                isLight
                  ? 'border-neutral-200 bg-neutral-50/80 hover:bg-violet-50/60 hover:border-violet-300 text-neutral-700 hover:text-neutral-900'
                  : 'border-white/10 bg-neutral-900/60 hover:bg-violet-950/30 hover:border-violet-800/60 text-neutral-300 hover:text-white'
              }`}
            >
              <span>{expandedDetails ? 'Hide Deep Architecture Details' : 'See More: Problem, Implementation & Decisions'}</span>
              {expandedDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {expandedDetails && (
              <div className="mt-4 space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Step 1: Problem */}
                  <div
                    className={`p-4 rounded-lg border space-y-2 ${
                      isLight ? 'border-neutral-200 bg-neutral-50/90' : 'border-white/10 bg-[#08080d]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-rose-500 font-mono text-[10px] tracking-[2px] uppercase font-semibold">
                      <AlertCircle size={13} />
                      <span>01 Problem</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Step 2: What I Built */}
                  <div
                    className={`p-4 rounded-lg border space-y-2 ${
                      isLight ? 'border-neutral-200 bg-neutral-50/90' : 'border-white/10 bg-[#08080d]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-indigo-500 font-mono text-[10px] tracking-[2px] uppercase font-semibold">
                      <Layers size={13} />
                      <span>02 What I Built</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                      {activeProject.builtDescription}
                    </p>
                  </div>

                  {/* Step 3: Technical Decision */}
                  <div
                    className={`p-4 rounded-lg border space-y-2 ${
                      isLight ? 'border-neutral-200 bg-neutral-50/90' : 'border-white/10 bg-[#08080d]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-amber-600 font-mono text-[10px] tracking-[2px] uppercase font-semibold">
                      <Lightbulb size={13} />
                      <span>03 Technical Decision</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                      {activeProject.technicalDecision}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                {activeProject.architectureHighlights && (
                  <div
                    className={`p-4 rounded-lg border font-mono text-xs space-y-2 ${
                      isLight ? 'border-neutral-200 bg-neutral-50/90' : 'border-white/10 bg-[#08080d]'
                    }`}
                  >
                    <span
                      className={`text-[10px] tracking-[2px] uppercase font-semibold block ${
                        isLight ? 'text-violet-700' : 'text-violet-300'
                      }`}
                    >
                      Implementation Scope & Highlights
                    </span>
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${
                        isLight ? 'text-neutral-700' : 'text-neutral-300'
                      }`}
                    >
                      {activeProject.architectureHighlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={isLight ? 'text-violet-600 font-bold' : 'text-violet-400 font-bold'}>
                            &bull;
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Project Deliverables Strip */}
          {activeProject.deliverables && activeProject.deliverables.length > 0 && (
            <div
              className={`pt-3 border-t flex items-center justify-between gap-3 font-mono text-[10px] tracking-[1.5px] uppercase ${
                isLight ? 'border-neutral-200/80 text-neutral-500' : 'border-white/10 text-neutral-400'
              }`}
            >
              <span className={isLight ? 'text-violet-700 font-semibold' : 'text-violet-400 font-semibold'}>
                Deliverables:
              </span>
              <span className={`text-[10px] ${isLight ? 'text-neutral-600' : 'text-neutral-300'}`}>
                {activeProject.deliverables.join(' • ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
