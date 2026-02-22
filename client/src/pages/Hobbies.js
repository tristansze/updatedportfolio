import React, { useRef, useEffect } from 'react';
import { Typography, Box, Avatar, Tooltip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5050';

const hobbies = [
  {
    title: 'Fitness',
    description: `I love staying active! I enjoy playing soccer, pickleball, rock climbing, and really doing anything that involves getting outdoors.`,
    images: [
      `${API_URL}/api/images/olentangyGame.jpg`,
      `${API_URL}/api/images/hockingclimbing.png`,
      `${API_URL}/api/images/rafting.JPG`,
      `${API_URL}/api/images/haileakala2.png`,
    ],
    tooltips: ['Soccer', 'Hocking Hills State Park', 'New River Gorge National Park', 'Haileakala National Park'],
  },
  {
    title: 'Music',
    description: `I love listening to music! I like everything from R&B, to rock, to house and I'm constantly exploring new genres. Here are some of my favorite albums.`,
    images: [
      `${API_URL}/api/images/currents.jpeg`,
      `${API_URL}/api/images/rainbowcover.png`,
      `${API_URL}/api/images/rumors.jpg`,
      `${API_URL}/api/images/cinema.jpg`,
    ],
    tooltips: ['Currents - Tame Impala', 'In Rainbows - Radiohead', 'Rumours - Fleetwood Mac', 'Cinema - The Marias'],
  },
  {
    title: 'Travel',
    description: `I love visiting new places, learning about different cultures, and enjoying delicious food. Most recently I visited Vietnam, Japan, and Hawaii.`,
    images: [
      `${API_URL}/api/images/ninhbinh.jpg`,
      `${API_URL}/api/images/selfiehiroshima.JPG`,
      `${API_URL}/api/images/lanikai.png`,
      `${API_URL}/api/images/skydiving.JPG`,
    ],
    tooltips: ['Ninh Binh, Vietnam', 'Hiroshima, Japan', 'Lanikai, Hawaii', 'North Shore, Hawaii'],
  },
  {
    title: 'Media',
    description: `In my free time I enjoy watching movies, tv shows, and anime. Please let me know if you have any recommendations for what I should watch next.`,
    portrait: true,
    titleDown: true,
    images: [
      `${API_URL}/api/images/andor.jpeg`,
      `${API_URL}/api/images/perfectdays.jpeg`,
      `${API_URL}/api/images/thewindrises.jpeg`,
      `${API_URL}/api/images/fmab.webp`,
    ],
    tooltips: ['Andor', 'Perfect Days', 'The Wind Rises', 'Fullmetal Alchemist: Brotherhood'],
  },
  {
    title: 'Reading',
    description: `This is a new hobby which I've taken up. I really enjoy reading a mix of technical and self-improvement books when i can find the time.`,
    portrait: true,
    images: [
      `${API_URL}/api/images/thepragmatic.jpg`,
      `${API_URL}/api/images/tuesdays.jpg`,
      `${API_URL}/api/images/dataintensive.jpg`,
      `${API_URL}/api/images/breath.jpeg`,
    ],
    tooltips: ['The Pragmatic Programmer', 'Tuesdays with Morrie', 'Designing Data-Intensive Applications', 'When Breath Becomes Air'],
  },
];

const Hobbies = () => {
  const swiperRef = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && !userInteracted.current) {
        const swiper = swiperRef.current.swiper;
        if (swiper && swiper.slideNext) {
          swiper.slideNext();
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ mt: 8, mb: 8, px: { xs: 1, md: 4 }, overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, color: '#fff' }}>
        Interests
      </Typography>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        effect="coverflow"
        centeredSlides
        initialSlide={2}
        slidesPerView={3}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        style={{ paddingBottom: 40, paddingTop: 10 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 3 },
        }}
        ref={swiperRef}
        onSlideChange={() => { userInteracted.current = true; }}
        onTouchStart={() => { userInteracted.current = true; }}
        onClick={() => { userInteracted.current = true; }}
      >
        {hobbies.map((hobby, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: 4,
                background: 'rgba(40, 20, 60, 0.98)',
                border: '1.5px solid #4b2e83',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: { xs: 'auto', md: 620 },
                maxWidth: 680,
                mx: 'auto',
              }}
            >
              {/* Image area */}
              <Box
                sx={{
                  width: '100%',
                  background: 'rgba(40, 20, 60, 0.98)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  flex: 1,
                }}
              >
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2,
                  justifyItems: 'center',
                  width: 'fit-content',
                  mx: 'auto',
                }}>
                  {hobby.images.map((img, i) => {
                    const imgW = hobby.portrait ? { xs: 120, md: 160 } : { xs: 140, md: 180 };
                    const imgH = hobby.portrait ? { xs: 160, md: 210 } : { xs: 140, md: 180 };

                    const avatar = (
                      <Avatar
                        key={i}
                        src={img}
                        variant="rounded"
                        sx={{
                          width: imgW,
                          height: imgH,
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.06)' },
                          border: '2px solid #6c3fc5',
                          boxShadow: '0 4px 16px rgba(108, 63, 197, 0.25)',
                          '& img': { objectFit: 'cover' },
                        }}
                        imgProps={{ loading: 'lazy', decoding: 'async', style: { objectFit: 'cover' } }}
                      />
                    );

                    return hobby.tooltips ? (
                      <Tooltip key={i} title={hobby.tooltips[i]} arrow>
                        {avatar}
                      </Tooltip>
                    ) : (
                      avatar
                    );
                  })}
                </Box>
              </Box>

              {/* Title & Description */}
              <Box sx={{ p: 3, pt: 0, mt: -3, maxWidth: 340, mx: 'auto' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', color: '#fff', mb: 0.5, letterSpacing: 0.5 }}>
                  {hobby.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.5 }}>
                  {hobby.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hobbies;
