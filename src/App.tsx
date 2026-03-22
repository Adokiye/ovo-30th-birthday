import { useState, useEffect, useRef, useCallback } from 'react'
import HTMLFlipBook from 'react-pageflip'
import './App.css'

// ===== Photo paths =====
// photos[0] = hero/front page, rest = gallery ordered childhood → present
const photos = [
  '/PHOTO-2026-03-21-11-54-41 3.jpg',   // 0: Professional headshot — hero & front page
  // --- Childhood ---
  '/PHOTO-2026-03-21-11-54-42 2.jpg',   // 1: Toddler close-up
  '/PHOTO-2026-03-21-11-54-42 4.jpg',   // 2: Small child in traditional hat
  '/PHOTO-2026-03-21-11-54-42 5.jpg',   // 3: Child at wedding in suit
  '/PHOTO-2026-03-21-11-54-41.jpg',     // 4: Young boy running
  // --- Teen / Young adult ---
  '/PHOTO-2026-03-21-11-54-42.jpg',     // 5: Photo booth
  '/PHOTO-2026-03-21-11-54-43.jpg',     // 6: With a friend indoors
  '/PHOTO-2026-03-21-11-54-44.jpg',     // 7: With two friends, plants
  // --- Recent / Adult ---
  '/PHOTO-2026-03-21-11-54-43 2.jpg',   // 8: Restaurant, big smile
  '/PHOTO-2026-03-21-11-54-44 3.jpg',   // 9: Dinner, peace sign
  '/PHOTO-2026-03-21-11-54-44 2.jpg',   // 10: Birthday crown + balloons
  '/PHOTO-2026-03-21-11-54-41 2.jpg',   // 11: Selfie with friends
  '/PHOTO-2026-03-21-11-54-42 3.jpg',   // 12: Group photo at event
  '/PHOTO-2026-03-21-11-54-40.jpg',     // 13: Traditional outfit
]


// ===== Newspaper page header =====
function NpHeader() {
  return (
    <div className="np-header">
      <span className="np-date">MARCH 22ND 2026</span>
      <span className="np-location">LAGOS, NIGERIA</span>
    </div>
  )
}

// ===== Newspaper Front Page =====
function FrontPage() {
  return (
    <div className="np-page np-front">
      <NpHeader />
      <div className="np-masthead">
        <div className="np-rule" />
        <h1 className="np-title">The Birthday Times</h1>
        <p className="np-tagline">LET'S CELEBRATE TOGETHER!</p>
        <div className="np-rule" />
      </div>
      <div className="np-front-photo">
        <img src={photos[0]} alt="Ovuoke Buluku" />
      </div>
      <div className="np-front-bottom">
        <p className="np-script" style={{ fontSize: 30 }}>Ovuoke's 30th</p>
        <p className="np-headline-bold">HAPPY BIRTHDAY</p>
      </div>
    </div>
  )
}

// ===== Inside Page 1: Tribute + Celebrate =====
function InsidePage1() {
  return (
    <div className="np-page np-inside">
      <NpHeader />
      <h2 className="np-section-headline">CELEBRATING THE BIRTHDAY BOY!<br />30 YEARS OF GREATNESS</h2>
      <div className="np-rule-thin" />
      <div className="np-two-col">
        <div className="np-col">
          <h3 className="np-col-title">A TRIBUTE TO OVO</h3>
          <div className="np-letter">
            <p>Dear Friends &amp; Family,</p>
            <p>Today we celebrate 30 incredible years of Ovuoke Buluku — a man whose warmth, leadership, and unwavering faith have touched every life around him.</p>
            <p>From his childhood days filled with endless energy and laughter, to becoming the visionary leader and loyal friend we all know and love, Ovo's journey has been nothing short of extraordinary.</p>
            <p>He is the kind of person who lifts everyone around him, leads with integrity, and never forgets where he came from. Here's to the man who makes every room brighter just by walking in.</p>
          </div>
        </div>
        <div className="np-col">
          <div className="np-side-photo">
            <img src={photos[8]} alt="Ovuoke" />
          </div>
          <div className="np-celebrate-box">
            <p className="np-script">Happy Birthday</p>
            <p className="np-script">Ovuoke</p>
            <p className="np-headline-bold" style={{ fontSize: 14 }}>TURNING 30</p>
            <p className="np-date-big">03. 22. 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== Inside Page 2: Fun Facts =====
function InsidePage2() {
  return (
    <div className="np-page np-inside">
      <NpHeader />
      <div className="np-two-col">
        <div className="np-col">
          <h2 className="np-section-headline" style={{ textAlign: 'left', fontSize: 16 }}>FUN FACTS ABOUT</h2>
          <p className="np-script" style={{ fontSize: 28, textAlign: 'left', margin: '2px 0 10px' }}>Ovuoke</p>
          <div className="np-facts">
            <p><strong>Life of the Party:</strong> Ovo has never walked into a room without immediately making everyone laugh. His energy is unmatched and his vibe is contagious.</p>
            <p><strong>Foodie King:</strong> Whether it's jollof rice or a new spot in town, Ovo will find the best food within a 10-mile radius. Trust his recommendations blindly.</p>
            <p><strong>Fashion Forward:</strong> Always dripped out. Ovo's style is legendary — he makes even casual outfits look like a magazine cover.</p>
            <p><strong>Loyal to the Core:</strong> The kind of friend who shows up at 2 AM with no questions asked. His loyalty knows no bounds.</p>
          </div>
        </div>
        <div className="np-col">
          <div className="np-side-photo" style={{ height: 180 }}>
            <img src={photos[1]} alt="Ovuoke" />
          </div>
          <div className="np-box">
            <h4 className="np-box-title">THE BIG DAY</h4>
            <div className="np-calendar">
              <div className="np-cal-header">MARCH</div>
              <div className="np-cal-days">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
              <div className="np-cal-grid">
                {[...Array(31)].map((_, i) => (
                  <span key={i} className={i + 1 === 22 ? 'np-cal-highlight' : ''}>{i + 1}</span>
                ))}
              </div>
              <div className="np-cal-year">2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== Inside Page 3: Word Search (standalone) =====
function WordSearchPage() {
  return (
    <div className="np-page np-inside">
      <NpHeader />
      <h2 className="np-section-headline">WORD SEARCH</h2>
      <div className="np-rule-thin" />
      <div className="np-ws-standalone">
        <div className="np-ws-words-large">
          <span>BIRTHDAY</span>
          <span>FRIENDS</span>
          <span>CELEBRATION</span>
          <span>CAKE</span>
          <span>JOY</span>
          <span>LAUGHTER</span>
          <span>THIRTY</span>
          <span>OVUOKE</span>
        </div>
        <div className="np-ws-grid-large">
          {'BIRTHDAYUGQXTUDPPRVLITJOUANRANKASITALPVBFRIENDSCBAQDOVYNAEPAWOIJOLLUYUQOTFBKLGYNFRIEDSAENHTMUSIGCDRZXBTIHBNKAEAMZJLSEEEETKLOGI TJORCELEBRATIONFLAUGRVBMBYJS'.split('').map((c, i) => (
            <span key={i}>{c === ' ' ? '' : c}</span>
          ))}
        </div>
        <p className="np-ws-hint">Find all the words hidden in the grid above!</p>
      </div>
    </div>
  )
}

// ===== Inside Page 4: Quiz =====
function QuizPage() {
  const quizQuestions = [
    "1. What is his childhood nickname?",
    "2. What is the most adventurous thing he has ever done?",
    "3. What is his favorite quote or saying?",
    "4. What is his go-to karaoke song?",
    "5. What is the most memorable trip he has ever taken?",
    "6. What is the one item he can't live without?",
    "7. What was his first job?",
    "8. What is his favorite way to relax after a long day?",
    "9. What is the best gift he has ever received?",
    "10. If he could instantly learn any skill, what would it be?",
  ]

  return (
    <div className="np-page np-inside">
      <NpHeader />
      <h3 className="np-section-headline">WHO KNOWS THE</h3>
      <p className="np-script" style={{ fontSize: 22, margin: '0 0 8px', textAlign: 'center' }}>birthday boy best?</p>
      <div className="np-rule-thin" />
      <div className="np-quiz-standalone">
        {quizQuestions.map((q, i) => (
          <p key={i} className="np-quiz-q">{q}</p>
        ))}
      </div>
      <div className="np-score-box">
        <p className="np-script">My score ____</p>
      </div>
    </div>
  )
}

// ===== Photo gallery pages =====
function PhotoPage({ photo, caption, pageNum }: { photo: string; caption: string; pageNum: number }) {
  return (
    <div className="np-page np-photo-page">
      <NpHeader />
      <div className="np-rule-thin" />
      <div className="np-gallery-photo">
        <img src={photo} alt={`Memory ${pageNum}`} />
      </div>
      <p className="np-photo-caption">{caption}</p>
      <div className="np-rule-thin" />
      <span className="np-page-num">{pageNum}</span>
    </div>
  )
}

const photoCaptions = [
  "The legend himself — always camera ready.",  // hero (not used in gallery)
  "Where it all began — little Ovo.",
  "Already a star, even back then.",
  "The dapper young gentleman.",
  "Always on the move, full of energy.",
  "Growing into the man, one photo at a time.",
  "Brotherhood and good times.",
  "The crew — always surrounded by love.",
  "That smile that lights up every room.",
  "Living life to the fullest, always.",
  "The birthday king, crowned and celebrated.",
  "Creating memories that last a lifetime.",
  "Squad goals — unforgettable moments.",
  "30 years of pure greatness.",
]

// ===== Confetti Component =====
function Confetti() {
  const [pieces, setPieces] = useState<Array<{
    id: number; left: number; color: string; size: number; duration: number; delay: number; shape: string
  }>>([])

  useEffect(() => {
    const colors = ['#d4a853', '#f0d68a', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71', '#f39c12', '#ff69b4', '#fff']
    const newPieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 4,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 6,
      shape: Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '2px' : '0',
    }))
    setPieces(newPieces)
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * (p.shape === '0' ? 0.4 : 1),
            background: p.color,
            borderRadius: p.shape,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// ===== Dense Starfield =====
function Starfield() {
  const layers = [
    { count: 120, sizeRange: [1, 2], durationRange: [2, 5], className: 'star-small' },
    { count: 60, sizeRange: [2, 3.5], durationRange: [3, 6], className: 'star-medium' },
    { count: 25, sizeRange: [3, 5], durationRange: [2, 4], className: 'star-bright' },
  ]

  return (
    <div className="starfield">
      {layers.map((layer, li) =>
        Array.from({ length: layer.count }, (_, i) => {
          const size = layer.sizeRange[0] + Math.random() * (layer.sizeRange[1] - layer.sizeRange[0])
          const dur = layer.durationRange[0] + Math.random() * (layer.durationRange[1] - layer.durationRange[0])
          return (
            <div
              key={`${li}-${i}`}
              className={`star ${layer.className}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: size,
                height: size,
                animationDuration: `${dur}s`,
                animationDelay: `${Math.random() * dur}s`,
              }}
            />
          )
        })
      )}
    </div>
  )
}

// ===== Shooting Stars =====
function ShootingStars() {
  const [stars, setStars] = useState<Array<{
    id: number; top: number; left: number; duration: number; delay: number; angle: number; length: number
  }>>([])

  useEffect(() => {
    const generate = () => Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      top: Math.random() * 50,
      left: Math.random() * 80 + 10,
      duration: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 8,
      angle: Math.random() * 30 + 15,
      length: Math.random() * 120 + 80,
    }))
    setStars(generate())
    const interval = setInterval(() => setStars(generate()), 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="shooting-stars">
      {stars.map(s => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            transform: `rotate(${s.angle}deg)`,
            width: s.length,
          }}
        />
      ))}
    </div>
  )
}

// ===== Sparkle Particles around photo =====
function SparkleRing() {
  const sparkles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * 360
    return { id: i, angle, delay: i * 0.15, size: Math.random() * 4 + 2 }
  })

  return (
    <div className="sparkle-ring">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="sparkle-particle"
          style={{
            transform: `rotate(${s.angle}deg) translateX(130px)`,
            animationDelay: `${s.delay}s`,
            width: s.size,
            height: s.size,
          }}
        />
      ))}
    </div>
  )
}

// ===== Firework Burst for the 30 =====
function FireworkBursts() {
  const bursts = Array.from({ length: 3 }, (_, burstIdx) => ({
    id: burstIdx,
    delay: burstIdx * 2 + 1.5,
    x: burstIdx === 0 ? -120 : burstIdx === 1 ? 120 : 0,
    y: burstIdx === 0 ? -40 : burstIdx === 1 ? -40 : -80,
    particles: Array.from({ length: 12 }, (_, pi) => ({
      id: pi,
      angle: (pi / 12) * 360,
      distance: Math.random() * 40 + 50,
      color: ['#d4a853', '#f0d68a', '#e74c3c', '#ff69b4', '#fff', '#9b59b6'][pi % 6],
      size: Math.random() * 4 + 2,
    })),
  }))

  return (
    <div className="firework-bursts">
      {bursts.map(burst => (
        <div
          key={burst.id}
          className="firework-burst"
          style={{
            left: `calc(50% + ${burst.x}px)`,
            top: `calc(50% + ${burst.y}px)`,
            animationDelay: `${burst.delay}s`,
          }}
        >
          {burst.particles.map(p => (
            <div
              key={p.id}
              className="firework-particle"
              style={{
                '--fw-angle': `${p.angle}deg`,
                '--fw-distance': `${p.distance}px`,
                '--fw-color': p.color,
                animationDelay: `${burst.delay}s`,
                width: p.size,
                height: p.size,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// ===== Hero Section =====
function HeroSection() {
  const [showAge, setShowAge] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAge(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-section">
      <Starfield />
      <ShootingStars />
      <Confetti />

      {/* Nebula glow layers */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      <div className="hero-photo-wrapper">
        <img src={photos[0]} alt="Ovuoke Buluku" className="hero-photo" />
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
        <SparkleRing />
      </div>

      <div className="hero-text">
        <p className="hero-subtitle">Happy Birthday</p>
        <h1 className="hero-name">
          {'Ovuoke Buluku'.split('').map((char, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${0.5 + i * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className={`hero-age-wrapper ${showAge ? 'revealed' : ''}`}>
          <div className="hero-age">
            <span className="age-digit age-digit-3">3</span>
            <span className="age-digit age-digit-0">0</span>
          </div>
          <div className="age-sparkle-burst" />
          <FireworkBursts />
        </div>

        <p className="hero-tagline">Three decades of greatness</p>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('storybook')?.scrollIntoView({ behavior: 'smooth' })}>
        <span />
        <span />
      </div>
    </section>
  )
}

// ===== Back Cover =====
function BackPage() {
  return (
    <div className="np-page np-back">
      <NpHeader />
      <div className="np-masthead">
        <div className="np-rule" />
        <h1 className="np-title" style={{ fontSize: 28 }}>The Birthday Times</h1>
        <div className="np-rule" />
      </div>
      <div className="np-back-content">
        <p className="np-script" style={{ fontSize: 32 }}>Happy 30th Birthday</p>
        <p className="np-script" style={{ fontSize: 36 }}>Ovuoke!</p>
        <div className="np-rule-thin" style={{ margin: '14px auto', width: '60%' }} />
        <p className="np-back-msg">Thank you for 30 incredible years of laughter, love, and unforgettable memories. Here's to the next 30 chapters of this amazing story.</p>
        <p className="np-back-msg" style={{ marginTop: 10 }}>With love from everyone who adores you.</p>
        <div className="np-back-photos">
          <img src={photos[3]} alt="" />
          <img src={photos[6]} alt="" />
          <img src={photos[10]} alt="" />
        </div>
        <p className="np-hashtag">#OvosThirtyParty</p>
      </div>
    </div>
  )
}

// ===== Newspaper Flipbook Section =====
function StorybookSection() {
  const bookRef = useRef<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [dimensions, setDimensions] = useState({ width: 550, height: 700 })

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth
      if (w < 500) {
        setDimensions({ width: w - 32, height: (w - 32) * 1.32 })
      } else if (w < 768) {
        setDimensions({ width: w - 48, height: (w - 48) * 1.32 })
      } else if (w < 1024) {
        setDimensions({ width: 520, height: 686 })
      } else {
        setDimensions({ width: 550, height: 726 })
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const flipPrev = useCallback(() => bookRef.current?.pageFlip()?.flipPrev(), [])
  const flipNext = useCallback(() => bookRef.current?.pageFlip()?.flipNext(), [])

  return (
    <section className="storybook-section" id="storybook">
      <div className="fade-in-up">
        <h2 className="section-title">The Story of Ovo</h2>
        <p className="section-subtitle">Flip through Ovo's special edition newspaper</p>
      </div>

      <div className="book-container fade-in-up">
        <div className="book-wrapper">
          <HTMLFlipBook
            ref={bookRef}
            width={dimensions.width}
            height={dimensions.height}
            size="fixed"
            minWidth={280}
            maxWidth={600}
            minHeight={380}
            maxHeight={800}
            showCover={true}
            maxShadowOpacity={0.4}
            mobileScrollSupport={true}
            className="newspaper"
            flippingTime={800}
            usePortrait={true}
            startPage={0}
            drawShadow={true}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            style={{}}
            startZIndex={0}
          >
            {/* Front Page */}
            <div className="np-page-wrapper"><FrontPage /></div>

            {/* Inside Pages */}
            <div className="np-page-wrapper"><InsidePage1 /></div>
            <div className="np-page-wrapper"><InsidePage2 /></div>
            <div className="np-page-wrapper"><WordSearchPage /></div>
            <div className="np-page-wrapper"><QuizPage /></div>

            {/* Photo Gallery Pages — all photos */}
            {photos.slice(1).map((photo, i) => (
              <div key={`photo-${i}`} className="np-page-wrapper">
                <PhotoPage photo={photo} caption={photoCaptions[(i + 1) % photoCaptions.length]} pageNum={i + 5} />
              </div>
            ))}

            {/* Back Page */}
            <div className="np-page-wrapper"><BackPage /></div>
          </HTMLFlipBook>
        </div>

        <div className="book-nav">
          <button onClick={flipPrev}>&#9664; Previous</button>
          <button onClick={flipNext}>Next &#9654;</button>
        </div>
        <p className="book-page-count">Swipe or click to flip pages</p>
      </div>
    </section>
  )
}

// ===== Wishes + Video items — EXACT ORDER =====
// 1) Mom video first
// 2) Efe message
// 3) Kessy and Family video
// 4) Oreva and Zoe video
// 5) Tome video
// 6) All other text messages

type WishItem =
  | { type: 'note'; author: string; color: string; rotation: number; message: string }
  | { type: 'video'; author: string; color: string; rotation: number; url: string; label: string }

const wishItems: WishItem[] = [
  // 1. Mom video FIRST
  { type: 'video', author: 'Mom', color: '#fff0f5', rotation: 0,
    url: 'https://q3bcl9ydugcouhqv.public.blob.vercel-storage.com/VIDEO-2026-03-21-23-10-03%202.mp4',
    label: 'A special message from Mom' },

  // 2. Efe right after Mom
  { type: 'note', author: 'Efe (Big Brother)', color: '#fff8e1', rotation: 1.5,
    message: `Seeing you growing up has been such a gift, you have always stepped up for our family, knowingly and unknowingly. I'm so deeply grateful for you, not just as my brother but also as the kind hearted person you are. May God continue to bless you and grant you your desires. Love you always.\n\nHAPPY 30TH BIRTHDAY WISHES from your Big Brother` },

  // 3. Kessy and Family video
  { type: 'video', author: 'Kessy and Family', color: '#e8f5e9', rotation: 0,
    url: 'https://q3bcl9ydugcouhqv.public.blob.vercel-storage.com/VIDEO-2026-03-21-19-01-55.mp4',
    label: 'Birthday love from Kessy and Family' },

  // 4. Oreva and Zoe video
  { type: 'video', author: 'Oreva and Zoe', color: '#e3f2fd', rotation: 0,
    url: 'https://q3bcl9ydugcouhqv.public.blob.vercel-storage.com/VIDEO-2026-03-21-23-10-03.mp4',
    label: 'A message from Oreva and Zoe' },

  // 5. Tome video
  { type: 'video', author: 'Tome', color: '#ede7f6', rotation: 0,
    url: 'https://q3bcl9ydugcouhqv.public.blob.vercel-storage.com/VIDEO-2026-03-21-19-01-55%202.mp4',
    label: 'Birthday wishes from Tome' },

  // 6. Everyone else's messages
  { type: 'note', author: 'Henry', color: '#e0f2f1', rotation: -1.0,
    message: `Happy Birthday, my brother!\n\nOmo… it's actually crazy that we're now clocking 30.\n\nLowkey, at this point, we've known each other longer than we haven't. And it's been amazing watching you grow and evolve over the years. Honestly, I truly believe our relationship is divine.\n\nI appreciate you more than words can express bro & I thank God for you everyday. When they say God will send you MEN. You are one of them.\n\nSo cheers in advance… because we'll definitely come back to read this years from now. Cheers to building empires together, to raising families together, and to becoming better men together.\n\nI pray that God continues to lift you, and bless you with wisdom, grace, favour, and overflowing blessings.\n\nLove you always, bro.\n\nHappy Birthday` },
  { type: 'note', author: 'Clara', color: '#f3e5f5', rotation: 0.9,
    message: `Happy Birthday Ovo.\n\nWishing you a year defined by clarity, decisive wins, and undeniable progress. The way you lead, think, and execute sets a strong standard, and it's something I genuinely respect.\n\nI pray that God goes ahead of you this year, ordering your steps, granting you wisdom beyond human understanding, and surrounding you with favor that opens doors no effort alone could achieve. May you experience strength without burnout, clarity without confusion, and results that exceed even your expectations.\n\nGrateful to work with you and even more to call you a friend.\n\nHave a truly great year.` },
  { type: 'note', author: 'Lola', color: '#fce4ec', rotation: -1.1,
    message: `Happy Birthday Boss! I really appreciate you for not just being a boss, but for being a true leader who sets the pace. Your guidance, discipline, unwavering commitment to excellence and putting God at the center of all is enviable and inspiring.\n\nAs you celebrate today, I wish you greater wisdom, continued success, good health, and even bigger accomplishments ahead. May this new year bring you the kind of fulfillment and impact you consistently create for others.\n\nCheers to a fulfilling year` },
  { type: 'note', author: 'Shola', color: '#e8eaf6', rotation: 0.8,
    message: `Happy Birthday Ovo!\n\nWorking alongside you has been one of the most rewarding experiences of my career. Thank you for always being there — not just as a leader, but as someone who genuinely invests in the people around him. You gave me the opportunity to learn, to grow, and to see what real leadership looks like up close.\n\nYour patience, your vision, and your willingness to guide others even when things get tough — that's rare, and I don't take it for granted. You've shaped so much of how I approach my own work, and I'm deeply grateful for that.\n\nHere's to 30 years of impact and many more to come. Wishing you everything you deserve and more.\n\nHappy Birthday, boss!` },
  { type: 'note', author: 'Paul', color: '#fff3e0', rotation: -0.7,
    message: `Happy Birthday bro.\n\nI don't say this enough, but I genuinely see you as a brother. You've been there for me more times than I can count — and not just for me, but for everyone around you. That's just who you are.\n\nI've learned so much from you, about work, about life, about showing up for the people you care about. And honestly, your journey and how you carry your faith brought me closer to God too. That means more to me than you probably realize.\n\nI'm really looking forward to what we're going to build together. Big things ahead, and I'm grateful to have you in my corner.\n\nHappy 30th, bro. You deserve all of it.` },
  { type: 'note', author: 'Ada', color: '#e8eaf6', rotation: 1.5,
    message: `Happy Birthday Sir!\n\nI just want to sincerely appreciate you, not just as a leader, but as someone who shows up with intention, discipline, and a strong sense of purpose.\n\nThank you for your guidance, your commitment to growth, and for the way you lead with both excellence and values. It's inspiring to see.\n\nI pray that this new chapter brings you even greater clarity, impact, and fulfillment. May your efforts yield outstanding results, and may you continue to grow in wisdom, strength, and favor.\n\nWishing you a remarkable year ahead.` },
  { type: 'note', author: 'Ayo / Ohi', color: '#e0f2f1', rotation: -1,
    message: `Happy birthday my brother! Big 30. I hope that this year is the best year of your life yet - And every year after is better. You're one of the more genuine and straightforward people I know, never change.\n\nLove always` },
  { type: 'note', author: 'Babs', color: '#fff3e0', rotation: 1.2,
    message: `Happy Birthday to a boss who leads with both wisdom and a God-fearing heart. Ovouke, your compassion makes this workplace better every day. I pray that God continues to bless you with joy and success, and that His greatness shines even more brightly through your life this year.` },
  { type: 'note', author: 'Philip', color: '#f3e5f5', rotation: -1.5,
    message: `Happy birthday, Senior Man.\n\nAs we celebrate you, I pray for more wisdom, strength, and more blessings. So shall it be in Jesus Christ name.\n\nHappy Birthday once again, Sir!` },
  { type: 'note', author: 'Amos', color: '#e8f5e9', rotation: 1,
    message: `Beloved Boss,\n\nOn this special occasion of your special day, I celebrate not just the gift of your life, but the extraordinary leadership, vision, and excellence you consistently embody.\n\nIt is both a privilege and a profound honor to have you as my boss and COO. Your strategic depth, unwavering discipline, and remarkable ability to lead with clarity and purpose have been truly inspiring.\n\nWorking under your leadership has been a defining part of my professional journey. I am sincerely grateful for the exposure, the standards you uphold, and the culture of excellence you drive.\n\nToday, I celebrate a leader of impact, a builder of systems, and a man of vision.\n\nHappy Birthday, Sire!\n\nWith utmost respect and appreciation` },
  { type: 'note', author: 'Victoria', color: '#fce4ec', rotation: -0.8,
    message: `Happy birthday Ovo,\nJust want you to know on this special day, I really appreciate you and everything you do` },
  { type: 'note', author: 'Zee', color: '#e3f2fd', rotation: -1,
    message: `Happy Birthday my dearest boss Ovo, words aren't enough to describe what an amazing boss you are, how selfless you are, how you always put everyone first before yourself. Honestly I can write a whole book about you but let me keep this short.\n\nThank you for everything, for your care, your sacrifice, and for always looking out for me. Thank you for your prayers and guidance. God bless you and as you enter a new decade of your life today I pray God almighty answers all your utmost heart desires always amen.\n\nEnjoy your day to the fullest and have lots of fun.` },
  { type: 'note', author: 'Chuka', color: '#f1f8e9', rotation: 1.0,
    message: `Tovo!!!!! I know you don't recognize your birthday but that's why we recognize it for you, because it's not just a birthday, it's an acknowledgement of the things you've achieved and the things that you will. You've come so far and I'm proud to see the man that you're turning out to be.\n\nSo glad to have you as my friend, through our ups and downs, our long distance relationships, every moment has been a blessing. I just want to thank God for what he has done in your life and may he continue to guide you so that you use the light given to you for his purpose alone.\n\nAs we continue to grow in love and kindness may God give you the wisdom to navigate all challenges and decisions. Praying for nothing but love and prosperity for you and may today bring joy to your heart.\n\nLove you big time Broo have an amazing one!!!!` },
  { type: 'note', author: 'Chef Tilly', color: '#fff9c4', rotation: -1.2,
    message: `Happy happy birthday Ovo!\nNever met anyone like you!\nThe kindest in every way! Praying this birthday exceeds your expectations!\nFar beyond what your heart can comprehend!\nHave the best day, best year, best time` },
  { type: 'note', author: 'Jeff', color: '#e0f7fa', rotation: -1.5,
    message: `Happy Birthday, Ovuoke\n\nI just wanted to wish you a great day and take a moment to appreciate you. It's been quite a journey working together — we've put in a lot of effort and achieved some really solid results along the way, and I don't take that for granted.\n\nI know things are a bit tough right now, but the way you've handled everything with calm and direction says a lot. It gives me confidence that we'll get through this phase and come out better on the other side.\n\nYou've been a kind, thoughtful, and sharp leader, and it shows in how the team keeps moving forward. Wishing you more wins, good health, and a lot more success ahead.\n\nEnjoy your day` },
  { type: 'note', author: 'Seyi', color: '#ede7f6', rotation: 1,
    message: `Happy Birthday, Ovo. Wishing you a year filled with continued success, strong wins, and well-deserved moments of rest. Your leadership and clarity have been instrumental in guiding the team, and it's a privilege to work with you. I hope the year ahead brings even greater achievements and personal fulfillment.` },
]

// Video card — always renders <video> for native thumbnail, plays on click
function VideoCard({ item }: { item: Extract<WishItem, { type: 'video' }> }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)

  // Pause if user scrolls away
  useEffect(() => {
    if (!videoRef.current) return
    const vid = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting && !vid.paused) vid.pause() },
      { threshold: 0.3 }
    )
    observer.observe(vid)
    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      setHasPlayed(true)
      videoRef.current.play()
    }
  }

  return (
    <div
      className="wish-note wish-video-note fade-in-up"
      style={{ '--note-bg': item.color, '--note-rotation': `${item.rotation}deg` } as React.CSSProperties}
    >
      <div className="wish-video-wrapper">
        {/* Always render video — browser shows first frame as thumbnail natively */}
        <video
          ref={videoRef}
          src={`${item.url}#t=0.5`}
          playsInline
          muted={false}
          preload="metadata"
          controls={hasPlayed}
          className="wish-video"
        />
        {/* Play overlay — only shown before first play */}
        {!hasPlayed && (
          <button className="wish-video-play-overlay" onClick={handlePlay}>
            <span className="play-icon">&#9654;</span>
            <span className="play-label">Play Video</span>
          </button>
        )}
      </div>
      <p className="wish-video-label">{item.label}</p>
      <div className="wish-note-author">— {item.author}</div>
    </div>
  )
}

// Preload video metadata in background once site loads
function usePreloadVideos() {
  useEffect(() => {
    const videoItems = wishItems.filter((item): item is Extract<WishItem, { type: 'video' }> => item.type === 'video')
    const preloadElements: HTMLLinkElement[] = []

    // Use link preload for each video — browser fetches metadata + initial chunks in background
    videoItems.forEach(item => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'video'
      link.href = item.url
      // crossOrigin needed for external URLs
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
      preloadElements.push(link)
    })

    return () => {
      preloadElements.forEach(el => el.remove())
    }
  }, [])
}

function WishCard({ item }: { item: Extract<WishItem, { type: 'note' }> }) {
  return (
    <div
      className="wish-note fade-in-up"
      style={{
        '--note-bg': item.color,
        '--note-rotation': `${item.rotation}deg`,
        '--tape-offset': `${(item.author.length % 5) * 8 - 16}px`,
        '--tape-rotation': `${(item.author.length % 3) * 5 - 5}deg`,
      } as React.CSSProperties}
    >
      <div className="wish-note-content">
        {item.message.split('\n').map((line, li) => (
          <p key={li}>{line || <br />}</p>
        ))}
      </div>
      <div className="wish-note-author">— {item.author}</div>
    </div>
  )
}

function WishesSection() {
  usePreloadVideos()

  return (
    <section className="wishes-section" id="wishes">
      <div className="fade-in-up">
        <h2 className="section-title">Birthday Wishes</h2>
        <p className="section-subtitle">Notes and messages from everyone who loves you</p>
      </div>

      <div className="wishes-cards">
        {wishItems.map((item, i) =>
          item.type === 'video' ? (
            <VideoCard key={i} item={item} />
          ) : (
            <WishCard key={i} item={item} />
          )
        )}
      </div>
    </section>
  )
}

// ===== Loading Screen =====
function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const hideTimer = setTimeout(() => setVisible(false), 2400)
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-letters">
        <span className="loading-letter" style={{ animationDelay: '0s' }}>O</span>
        <span className="loading-letter" style={{ animationDelay: '0.2s' }}>{'\u00A0'}</span>
        <span className="loading-letter" style={{ animationDelay: '0.4s' }}>V</span>
        <span className="loading-letter" style={{ animationDelay: '0.6s' }}>{'\u00A0'}</span>
        <span className="loading-letter" style={{ animationDelay: '0.8s' }}>O</span>
      </div>
      <p className="loading-subtitle">Turning 30</p>
    </div>
  )
}

// ===== Floating Nav =====
function FloatingNav() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const hero = document.querySelector('.hero-section')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`floating-nav ${hidden ? 'hidden' : ''}`}>
      <a href="#storybook">Story</a>
      <a href="#storybook">Newspaper</a>
      <a href="#wishes">Wishes</a>
    </nav>
  )
}

// ===== Scroll Animation Hook =====
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ===== Main App =====
function App() {
  useScrollAnimation()

  return (
    <>
      <LoadingScreen />
      <FloatingNav />
      <HeroSection />
      <div className="section-divider" />
      <StorybookSection />
      <div className="section-divider-reverse" />
      <WishesSection />
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-name">Ovuoke Buluku</p>
          <p className="footer-date">March 22, 2026</p>
          <div className="footer-divider" />
          <p className="footer-made">Made with <span className="heart">&#9829;</span> by friends and family</p>
        </div>
      </footer>
    </>
  )
}

export default App
