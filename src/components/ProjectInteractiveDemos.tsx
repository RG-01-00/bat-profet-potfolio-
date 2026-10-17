import { useState, useRef, useEffect } from 'react';
import { Play, Sparkles, RefreshCw, TrendingUp, TrendingDown, Minus, Camera, CameraOff, Smile, Meh, Frown, Laugh, ScanFace } from 'lucide-react';
import { useTheme } from '../ThemeContext';

type SentimentCategory = 'Mixed Review' | 'Positive' | 'Sarcastic/Negative';


interface SentimentExample {
  text: string;
  sentiment: 'Positive' | 'Negative' | 'Mixed';
  confidence: number;
  scores: { positive: number; negative: number; neutral: number; mixed: number };
  negationDetected: boolean;
  aspects: { term: string; sentiment: string }[];
}

const CATEGORIES: SentimentCategory[] = ['Mixed Review', 'Positive', 'Sarcastic/Negative'];

const CATEGORY_EXAMPLES: Record<SentimentCategory, SentimentExample[]> = {
  'Mixed Review': [
    {
      text: 'المنتج ممتاز جداً ولكن خدمة التوصيل كانت بطيئة نوعاً ما',
      sentiment: 'Mixed',
      confidence: 0.88,
      scores: { positive: 0.46, negative: 0.38, neutral: 0.04, mixed: 0.88 },
      negationDetected: true,
      aspects: [
        { term: 'المنتج ممتاز', sentiment: 'Positive' },
        { term: 'خدمة التوصيل بطيئة', sentiment: 'Negative' },
      ],
    },
    {
      text: 'التصميم أنيق وسهل الاستخدام لكن البطارية تنفد بسرعة كبيرة للأسف',
      sentiment: 'Mixed',
      confidence: 0.91,
      scores: { positive: 0.48, negative: 0.42, neutral: 0.03, mixed: 0.91 },
      negationDetected: true,
      aspects: [
        { term: 'التصميم وسهولة الاستخدام', sentiment: 'Positive' },
        { term: 'عمر البطارية', sentiment: 'Negative' },
      ],
    },
    {
      text: 'الأسعار مناسبة ومنافسة جداً لكن جودة الخامات تحتاج إلى تحسين ملحوظ',
      sentiment: 'Mixed',
      confidence: 0.87,
      scores: { positive: 0.44, negative: 0.41, neutral: 0.05, mixed: 0.87 },
      negationDetected: true,
      aspects: [
        { term: 'مستوى الأسعار', sentiment: 'Positive' },
        { term: 'جودة الخامات', sentiment: 'Negative' },
      ],
    },
    {
      text: 'المحتوى ثري ومفيد للغاية ولكن جودة الصوت في التسجيل كانت دون المستوى',
      sentiment: 'Mixed',
      confidence: 0.90,
      scores: { positive: 0.49, negative: 0.39, neutral: 0.03, mixed: 0.90 },
      negationDetected: true,
      aspects: [
        { term: 'قيمة المحتوى', sentiment: 'Positive' },
        { term: 'هندسة الصوت', sentiment: 'Negative' },
      ],
    },
    {
      text: 'الخدمة سريعة وطاقم العمل متعاون ولكن رسوم الشحن مرتفعة وغير مبررة',
      sentiment: 'Mixed',
      confidence: 0.88,
      scores: { positive: 0.47, negative: 0.40, neutral: 0.04, mixed: 0.88 },
      negationDetected: true,
      aspects: [
        { term: 'طاقم العمل والخدمة', sentiment: 'Positive' },
        { term: 'تكلفة الشحن', sentiment: 'Negative' },
      ],
    },
  ],
  'Positive': [
    {
      text: 'تطبيق رائع وسريع في المعالجة، أنصح به بشدة لكل المهتمين!',
      sentiment: 'Positive',
      confidence: 0.96,
      scores: { positive: 0.96, negative: 0.01, neutral: 0.02, mixed: 0.01 },
      negationDetected: false,
      aspects: [
        { term: 'الأداء والسرعة', sentiment: 'Positive' },
        { term: 'التوصية العامة', sentiment: 'Positive' },
      ],
    },
    {
      text: 'خدمة عملاء راقية واستجابة فورية وحل للمشكلة في دقائق معدودة.',
      sentiment: 'Positive',
      confidence: 0.95,
      scores: { positive: 0.95, negative: 0.01, neutral: 0.03, mixed: 0.01 },
      negationDetected: false,
      aspects: [
        { term: 'خدمة العملاء', sentiment: 'Positive' },
        { term: 'سرعة الاستجابة', sentiment: 'Positive' },
      ],
    },
    {
      text: 'المنتج فاق توقعاتي من حيث جودة التصنيع والتغليف الممتاز.',
      sentiment: 'Positive',
      confidence: 0.94,
      scores: { positive: 0.94, negative: 0.02, neutral: 0.03, mixed: 0.01 },
      negationDetected: false,
      aspects: [
        { term: 'جودة التصنيع', sentiment: 'Positive' },
        { term: 'التغليف', sentiment: 'Positive' },
      ],
    },
    {
      text: 'تجربة تسوق ممتازة وتوصيل سريع ومطابق تماماً للمواصفات المعروضة.',
      sentiment: 'Positive',
      confidence: 0.97,
      scores: { positive: 0.97, negative: 0.01, neutral: 0.01, mixed: 0.01 },
      negationDetected: false,
      aspects: [
        { term: 'تجربة التسوق', sentiment: 'Positive' },
        { term: 'مطابقة المواصفات', sentiment: 'Positive' },
      ],
    },
    {
      text: 'من أفضل المنصات التي تعاملت معها، دقة متناهية وسرعة فائقة في الإنجاز.',
      sentiment: 'Positive',
      confidence: 0.98,
      scores: { positive: 0.98, negative: 0.01, neutral: 0.01, mixed: 0.00 },
      negationDetected: false,
      aspects: [
        { term: 'موثوقية المنصة', sentiment: 'Positive' },
        { term: 'دقة وسرعة الإنجاز', sentiment: 'Positive' },
      ],
    },
  ],
  'Sarcastic/Negative': [
    {
      text: 'شكراً جزيلاً على التأخير لمدة أسبوعين، خدمة لا توصف صراحة!',
      sentiment: 'Negative',
      confidence: 0.93,
      scores: { positive: 0.03, negative: 0.93, neutral: 0.02, mixed: 0.02 },
      negationDetected: true,
      aspects: [
        { term: 'التأخير في التسليم', sentiment: 'Negative (Sarcasm Context)' },
        { term: 'مستوى الخدمة', sentiment: 'Negative (Irony)' },
      ],
    },
    {
      text: 'ما شاء الله وصل الطلب بعد ثلاث ساعات وبارداً تماماً كالثلج!',
      sentiment: 'Negative',
      confidence: 0.92,
      scores: { positive: 0.02, negative: 0.92, neutral: 0.04, mixed: 0.02 },
      negationDetected: true,
      aspects: [
        { term: 'حرارة الطلب', sentiment: 'Negative (Sarcasm Context)' },
        { term: 'سرعة التوصيل', sentiment: 'Negative' },
      ],
    },
    {
      text: 'أهنئكم على أسوأ تجربة دعم فني، لا أحد يجيب على الهاتف إطلاقاً!',
      sentiment: 'Negative',
      confidence: 0.95,
      scores: { positive: 0.02, negative: 0.95, neutral: 0.01, mixed: 0.02 },
      negationDetected: true,
      aspects: [
        { term: 'استجابة الدعم الفني', sentiment: 'Negative (Irony Detected)' },
      ],
    },
    {
      text: 'الدعم الفني رائع جداً، ينتظرون حتى ينتهي الضمان ليردوا على الرسالة!',
      sentiment: 'Negative',
      confidence: 0.94,
      scores: { positive: 0.04, negative: 0.94, neutral: 0.01, mixed: 0.01 },
      negationDetected: true,
      aspects: [
        { term: 'دعم ما بعد البيع', sentiment: 'Negative (Sarcasm Context)' },
      ],
    },
    {
      text: 'تحديث أسطوري جعل التطبيق يغلق تلقائياً بمجرد فتحه، إنجاز باهر!',
      sentiment: 'Negative',
      confidence: 0.96,
      scores: { positive: 0.02, negative: 0.96, neutral: 0.01, mixed: 0.01 },
      negationDetected: true,
      aspects: [
        { term: 'استقرار التحديث البرمجي', sentiment: 'Negative (Sarcasm Context)' },
      ],
    },
  ],
};

// 1. Interactive Demo for Arabic Sentiment Analyzer
export function SentimentInteractiveDemo() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeCategory, setActiveCategory] = useState<SentimentCategory>('Mixed Review');
  const [inputText, setInputText] = useState('المنتج ممتاز جداً ولكن خدمة التوصيل كانت بطيئة نوعاً ما');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Mixed';
    confidence: number;
    scores: { positive: number; negative: number; neutral: number; mixed: number };
    negationDetected: boolean;
    aspects: { term: string; sentiment: string }[];
  } | null>({
    sentiment: 'Mixed',
    confidence: 0.88,
    scores: { positive: 0.46, negative: 0.38, neutral: 0.04, mixed: 0.88 },
    negationDetected: true,
    aspects: [
      { term: 'المنتج ممتاز', sentiment: 'Positive' },
      { term: 'خدمة التوصيل بطيئة', sentiment: 'Negative' },
    ],
  });

  const handleSelectCategory = (category: SentimentCategory) => {
    setActiveCategory(category);
    const pool = CATEGORY_EXAMPLES[category];
    // Pick a random sentence from that category, choosing a different one from current if available
    const alternatives = pool.filter((item) => item.text !== inputText);
    const chosen = alternatives.length > 0
      ? alternatives[Math.floor(Math.random() * alternatives.length)]
      : pool[Math.floor(Math.random() * pool.length)];
    setInputText(chosen.text);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);

      // Match item from curated corpus
      let matched: SentimentExample | undefined;
      for (const cat of CATEGORIES) {
        matched = CATEGORY_EXAMPLES[cat].find((e) => e.text === inputText);
        if (matched) break;
      }

      if (matched) {
        setResult({
          sentiment: matched.sentiment,
          confidence: matched.confidence,
          scores: matched.scores,
          negationDetected: matched.negationDetected,
          aspects: matched.aspects,
        });
      } else {
        const isMix = inputText.includes('ولكن') || inputText.includes('لكن');
        const isNeg = inputText.includes('تأخير') || inputText.includes('أسوأ') || inputText.includes('لا توصف');
        if (isMix) {
          setResult({
            sentiment: 'Mixed',
            confidence: 0.89,
            scores: { positive: 0.45, negative: 0.39, neutral: 0.05, mixed: 0.89 },
            negationDetected: true,
            aspects: [
              { term: 'جودة المنتج', sentiment: 'Positive' },
              { term: 'وقت التسليم', sentiment: 'Negative' },
            ],
          });
        } else if (isNeg) {
          setResult({
            sentiment: 'Negative',
            confidence: 0.92,
            scores: { positive: 0.03, negative: 0.92, neutral: 0.03, mixed: 0.02 },
            negationDetected: true,
            aspects: [{ term: 'جودة الخدمة', sentiment: 'Negative (Sarcasm Context)' }],
          });
        } else {
          setResult({
            sentiment: 'Positive',
            confidence: 0.95,
            scores: { positive: 0.95, negative: 0.01, neutral: 0.03, mixed: 0.01 },
            negationDetected: false,
            aspects: [{ term: 'الأداء والسرعة', sentiment: 'Positive' }],
          });
        }
      }
    }, 400);
  };

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 space-y-4 transition-colors ${
        isLight
          ? 'border-violet-200/80 bg-[#f8f8fc] shadow-[0_2px_12px_rgba(124,58,237,0.06)]'
          : 'border-violet-500/30 bg-[#151426] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`font-mono text-[9px] px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-violet-100 border-violet-400 text-violet-900 font-semibold shadow-xs'
                      : 'bg-violet-950/70 border-violet-400 text-violet-200 shadow-[0_0_10px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/50'
                    : isLight
                    ? 'border-neutral-200 bg-white hover:border-violet-300 text-neutral-700 hover:text-neutral-900'
                    : 'border-white/15 bg-[#1d1b32] hover:border-violet-400 text-neutral-200 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            dir="rtl"
            type="text"
            value={inputText}
            readOnly
            placeholder="أدخل نصاً باللغة العربية للتحليل..."
            className={`flex-1 px-3 py-2 rounded border font-sans text-sm focus:outline-none cursor-default select-none transition-colors ${
              isLight
                ? 'border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400'
                : 'border-white/15 bg-[#0e0d1a] text-white placeholder:text-neutral-500'
            }`}
          />
          <button
            type="button"
            onClick={handleAnalyze}
            disabled={analyzing}
            className={`px-4 py-2 rounded border font-mono text-[10px] tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isLight
                ? 'border-violet-600 bg-violet-600 hover:bg-violet-700 text-white shadow-sm'
                : 'border-violet-500/60 bg-violet-900/90 hover:bg-violet-800 text-white shadow-[0_0_12px_rgba(139,92,246,0.3)]'
            }`}
          >
            {analyzing ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} />}
            <span>Run Inference</span>
          </button>
        </div>
      </div>

      {result && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t font-mono text-xs ${
            isLight ? 'border-neutral-200' : 'border-white/10'
          }`}
        >
          <div
            className={`p-3 rounded-lg border space-y-1 ${
              isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
            }`}
          >
            <span
              className={`text-[9px] tracking-wider uppercase block ${
                isLight ? 'text-neutral-500 font-medium' : 'text-neutral-400'
              }`}
            >
              Predicted Class
            </span>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  result.sentiment === 'Positive'
                    ? isLight
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : result.sentiment === 'Negative'
                    ? isLight
                      ? 'bg-rose-100 text-rose-800 border border-rose-300'
                      : 'bg-rose-950 text-rose-300 border border-rose-700'
                    : result.sentiment === 'Mixed'
                    ? isLight
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-amber-950 text-amber-300 border border-amber-700'
                    : 'bg-neutral-800 text-neutral-300'
                }`}
              >
                {result.sentiment}
              </span>
              <span
                className={`text-xs font-mono ${
                  isLight ? 'text-violet-700 font-semibold' : 'text-violet-300'
                }`}
              >
                {(result.confidence * 100).toFixed(0)}% Conf.
              </span>
            </div>
          </div>

          <div
            className={`p-3 rounded-lg border space-y-1 ${
              isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
            }`}
          >
            <span
              className={`text-[9px] tracking-wider uppercase block ${
                isLight ? 'text-neutral-500 font-medium' : 'text-neutral-400'
              }`}
            >
              Dialect & Negation
            </span>
            <span
              className={`text-xs block font-medium ${
                isLight ? 'text-neutral-800' : 'text-neutral-200'
              }`}
            >
              {result.negationDetected ? '⚡ Negation/Contrast Detected' : '✓ Standard Sentiment Flow'}
            </span>
          </div>

          <div
            className={`p-3 rounded-lg border space-y-1 ${
              isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
            }`}
          >
            <span
              className={`text-[9px] tracking-wider uppercase block ${
                isLight ? 'text-neutral-500 font-medium' : 'text-neutral-400'
              }`}
            >
              Extracted Aspects
            </span>
            <div
              className={`text-[10px] truncate ${
                isLight ? 'text-neutral-700' : 'text-neutral-300'
              }`}
            >
              {result.aspects.map((a, i) => (
                <span key={i} className="mr-2 inline-block">
                  &bull; {a.term} ({a.sentiment})
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 2. Interactive Demo for Wajhok Facial Emotion Recognition
const EMOTION_ICONS: Record<
  'Happy' | 'Neutral' | 'Surprise' | 'Focused' | 'Sad',
  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  Happy: Smile,
  Neutral: Meh,
  Surprise: Laugh,
  Focused: ScanFace,
  Sad: Frown,
};

export function FacialEmotionInteractiveDemo() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeMode, setActiveMode] = useState<'simulation' | 'webcam'>('simulation');
  const [selectedEmotion, setSelectedEmotion] = useState<'Happy' | 'Neutral' | 'Surprise' | 'Focused' | 'Sad'>('Happy');
  const [webcamActive, setWebcamActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const emotionsData = {
    Happy: { confidence: 0.93, fps: 32, latency: '12ms', distribution: { Happy: 93, Neutral: 5, Surprise: 2, Sad: 0 } },
    Neutral: { confidence: 0.89, fps: 34, latency: '11ms', distribution: { Happy: 4, Neutral: 89, Surprise: 3, Sad: 4 } },
    Surprise: { confidence: 0.91, fps: 31, latency: '13ms', distribution: { Happy: 6, Neutral: 2, Surprise: 91, Sad: 1 } },
    Focused: { confidence: 0.87, fps: 33, latency: '12ms', distribution: { Happy: 2, Neutral: 87, Surprise: 6, Sad: 5 } },
    Sad: { confidence: 0.88, fps: 32, latency: '12ms', distribution: { Happy: 1, Neutral: 8, Surprise: 3, Sad: 88 } },
  };

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setWebcamActive(true);
        setActiveMode('webcam');
      }
    } catch {
      setActiveMode('simulation');
      setWebcamActive(false);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setWebcamActive(false);
    setActiveMode('simulation');
  };

  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  const currentStats = emotionsData[selectedEmotion];
  const EmotionIcon = EMOTION_ICONS[selectedEmotion];

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 space-y-4 transition-colors ${
        isLight
          ? 'border-violet-200/80 bg-[#f8f8fc] shadow-[0_2px_12px_rgba(124,58,237,0.06)]'
          : 'border-violet-500/30 bg-[#151426] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Visual Feed / Demo Image */}
        <div
          className={`md:col-span-6 rounded-lg border p-2 sm:p-2.5 relative overflow-hidden flex flex-col justify-center ${
            isLight ? 'bg-neutral-100 border-neutral-200' : 'bg-[#0e0d1a] border-white/15'
          }`}
        >
          <div
            className={`relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-md overflow-hidden flex items-center justify-center ${
              isLight ? 'bg-white border border-neutral-200/60' : 'bg-[#121124]'
            }`}
          >
            {webcamActive ? (
              <div className="relative w-full h-full">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full select-none pb-6">
                <div
                  className={`p-4 sm:p-5 rounded-2xl border mb-3 flex items-center justify-center transition-all duration-200 ${
                    isLight
                      ? 'bg-violet-50/80 border-violet-200 text-violet-700 shadow-sm'
                      : 'bg-white/[0.04] border-white/10 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  <EmotionIcon size={56} strokeWidth={1.5} className={isLight ? 'text-violet-600' : 'text-white'} />
                </div>
                <span
                  className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                    isLight ? 'text-neutral-800' : 'text-neutral-200'
                  }`}
                >
                  {selectedEmotion}
                </span>
              </div>
            )}

            {/* Bottom Overlays: Test Live Webcam button & Latency badge */}
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between font-mono text-[9px] pointer-events-auto">
              {!webcamActive ? (
                <button
                  type="button"
                  onClick={startWebcam}
                  className="px-2.5 py-1 rounded bg-violet-900/90 hover:bg-violet-800 border border-violet-500/60 text-violet-200 flex items-center gap-1 transition-colors font-medium cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                >
                  <Camera size={11} />
                  <span>Test Live Webcam</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopWebcam}
                  className="px-2.5 py-1 rounded bg-rose-950/90 hover:bg-rose-900 border border-rose-600 text-rose-200 flex items-center gap-1 transition-colors font-medium cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                >
                  <CameraOff size={11} />
                  <span>Stop Camera</span>
                </button>
              )}

              <div className="text-neutral-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs">
                Latency: <span className="text-emerald-400 font-bold">{currentStats.latency}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emotion Distribution Bars */}
        <div className="md:col-span-6 space-y-2 font-mono text-xs">
          <div className="flex flex-wrap gap-1 mb-2">
            {(['Happy', 'Neutral', 'Surprise', 'Focused', 'Sad'] as const).map((em) => (
              <button
                key={em}
                type="button"
                onClick={() => setSelectedEmotion(em)}
                className={`px-2.5 py-1 rounded text-[9px] tracking-wider uppercase transition-all cursor-pointer ${
                  selectedEmotion === em
                    ? isLight
                      ? 'bg-violet-100 border border-violet-400 text-violet-900 font-bold shadow-xs'
                      : 'bg-violet-800 border border-violet-400 text-white font-bold shadow-[0_0_8px_rgba(139,92,246,0.3)]'
                    : isLight
                    ? 'bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-violet-300'
                    : 'bg-[#1e1c34] border border-white/10 text-neutral-300 hover:text-white hover:border-violet-500/50'
                }`}
              >
                {em}
              </button>
            ))}
          </div>

          <div className="space-y-1.5">
            {Object.entries(currentStats.distribution).map(([label, val]) => (
              <div key={label} className="space-y-0.5">
                <div
                  className={`flex justify-between text-[9px] ${
                    isLight ? 'text-neutral-600' : 'text-neutral-300'
                  }`}
                >
                  <span>{label}</span>
                  <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-300 font-bold'}>
                    {val}%
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full overflow-hidden border ${
                    isLight ? 'bg-neutral-200/80 border-neutral-200' : 'bg-[#0e0d1a] border-white/5'
                  }`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 transition-all duration-300"
                    style={{ width: `${val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Interactive Component for FlyRank ML Trend Predictor
export function TrendPredictorInteractiveDemo() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [ctr, setCtr] = useState(4.8);
  const [contentAgeDays, setContentAgeDays] = useState(120);
  const [momentumRate, setMomentumRate] = useState(15);

  const score = ctr * 12 + momentumRate * 1.5 - contentAgeDays * 0.08;
  const isUp = score > 60;
  const isStable = score >= 35 && score <= 60;
  const isDown = score < 35;

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 space-y-4 transition-colors ${
        isLight
          ? 'border-violet-200/80 bg-[#f8f8fc] shadow-[0_2px_12px_rgba(124,58,237,0.06)]'
          : 'border-violet-500/30 bg-[#151426] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
        {/* CTR Slider */}
        <div
          className={`space-y-1.5 p-3 rounded-lg border ${
            isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
          }`}
        >
          <div className="flex justify-between text-[10px]">
            <span className={isLight ? 'text-neutral-600' : 'text-neutral-300'}>Organic CTR</span>
            <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-300 font-bold'}>
              {ctr.toFixed(1)}%
            </span>
          </div>
          <input
            type="range"
            min="0.5"
            max="12.0"
            step="0.1"
            value={ctr}
            onChange={(e) => setCtr(parseFloat(e.target.value))}
            className="w-full accent-violet-500 cursor-pointer"
          />
        </div>

        {/* Content Age Slider */}
        <div
          className={`space-y-1.5 p-3 rounded-lg border ${
            isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
          }`}
        >
          <div className="flex justify-between text-[10px]">
            <span className={isLight ? 'text-neutral-600' : 'text-neutral-300'}>Content Age</span>
            <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-300 font-bold'}>
              {contentAgeDays} days
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="730"
            step="10"
            value={contentAgeDays}
            onChange={(e) => setContentAgeDays(parseInt(e.target.value, 10))}
            className="w-full accent-violet-500 cursor-pointer"
          />
        </div>

        {/* Velocity Momentum Slider */}
        <div
          className={`space-y-1.5 p-3 rounded-lg border ${
            isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/10'
          }`}
        >
          <div className="flex justify-between text-[10px]">
            <span className={isLight ? 'text-neutral-600' : 'text-neutral-300'}>Query Velocity %</span>
            <span className={isLight ? 'text-violet-700 font-bold' : 'text-violet-300 font-bold'}>
              {momentumRate > 0 ? `+${momentumRate}%` : `${momentumRate}%`}
            </span>
          </div>
          <input
            type="range"
            min="-50"
            max="60"
            step="5"
            value={momentumRate}
            onChange={(e) => setMomentumRate(parseInt(e.target.value, 10))}
            className="w-full accent-violet-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Outcome Banner */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg border font-mono ${
          isLight ? 'bg-white border-neutral-200 shadow-xs' : 'bg-[#1e1c34] border-white/15'
        }`}
      >
        <div className="flex items-center gap-3">
          {isUp && (
            <div
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                isLight
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
                  : 'bg-emerald-950 border-emerald-600 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
              }`}
            >
              <TrendingUp size={16} />
            </div>
          )}
          {isStable && (
            <div
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                isLight
                  ? 'bg-amber-100 border-amber-300 text-amber-700'
                  : 'bg-amber-950 border-amber-600 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
              }`}
            >
              <Minus size={16} />
            </div>
          )}
          {isDown && (
            <div
              className={`w-8 h-8 rounded border flex items-center justify-center ${
                isLight
                  ? 'bg-rose-100 border-rose-300 text-rose-700'
                  : 'bg-rose-950 border-rose-600 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
              }`}
            >
              <TrendingDown size={16} />
            </div>
          )}

          <div>
            <span
              className={`text-[9px] uppercase tracking-widest block font-semibold ${
                isLight ? 'text-neutral-500' : 'text-neutral-400'
              }`}
            >
              Predicted Trend Trajectory
            </span>
            <span className={`text-xs font-bold ${isLight ? 'text-neutral-900' : 'text-white'}`}>
              {isUp
                ? 'GAINING MOMENTUM (Positive Trajectory)'
                : isStable
                ? 'STABLE RETENTION (Flat Line)'
                : 'DECLINE VULNERABILITY (Requires Refresh)'}
            </span>
          </div>
        </div>

        <div
          className={`text-[10px] sm:text-right ${
            isLight ? 'text-neutral-600' : 'text-neutral-300'
          }`}
        >
          <span>Key Insight: </span>
          <span className={isLight ? 'text-violet-700 font-semibold' : 'text-violet-300 font-semibold'}>
            High CTR velocity dominates over age decay
          </span>
        </div>
      </div>
    </div>
  );
}

