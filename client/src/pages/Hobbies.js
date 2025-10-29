import React, { useRef, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Tooltip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const albumData = [
  { src: '/images/currents.jpeg', name: 'Currents - Tame Impala' },
  { src: '/images/rainbowcover.png', name: 'In Rainbows - Radiohead' },
  { src: '/images/rumors.jpg', name: 'Rumours - Fleetwood Mac' },
  { src: '/images/cinema.jpg', name: 'Cinema - The Marias' },
];

const hobbies = [
  {
    title: 'Fitness',
    description: `I love to stay active! I enjoy playing soccer, rock climbing, and really doing anything that involves the outdoors.`,
    images: ['/images/olentangyGame.jpg', '/images/hockingclimbing.png', '/images/rafting.jpg', '/images/haileakala2.png']
  },
  {
    title: 'Music',
    description: `I love listening to music! I like everything from R&B, to rock, to house and I'm constantly exploring. Here are some of my favorite albums.`,
    albums: albumData
  },
  {
    title: 'Travel',
    description: `I love visiting new places and experiencing other cultures. Here are some pictures from my recent trip to Hawaii. I will be visiting Vietnam and Japan this winter!`,
    images: ['/images/skydiving.jpg', '/images/hikedown.jpg', '/images/lanikai.png', '/images/poke.png']
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
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', borderRadius: 6, boxShadow: 6, p: { xs: 2, md: 6 }, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        fontWeight: 700, 
        textAlign: 'center', 
        mb: 4, 
        color: '#fff',
        width: '100%',
        maxWidth: { xs: 'calc(100vw - 60px)', md: 640 },
        mx: 'auto'
      }}>
        Interests
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <Swiper
          modules={[Navigation, EffectCoverflow, Virtual]}
          navigation
          effect="coverflow"
          centeredSlides
          slidesPerView={3}
          loop={false}
          virtual
          preloadImages={false}
          lazy={{ loadPrevNext: true, loadOnTransitionStart: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.2,
            slideShadows: false,
          }}
          style={{ paddingBottom: 60, width: '100%', maxWidth: '100%' }}
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
          <SwiperSlide key={index} virtualIndex={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              className="hobby-card"
              sx={{
                p: 0,
                borderRadius: 18,
                boxShadow: 3,
                background: 'rgba(40, 20, 60, 0.98)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                transition: 'box-shadow 0.3s, transform 0.3s',
                height: { xs: 'auto', md: 640 },
                minHeight: { xs: 420, md: 640 },
                maxWidth: { xs: 'calc(100vw - 60px)', md: 640 },
                width: { xs: 'calc(100vw - 60px)', md: 640 },
                mx: 'auto',
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.04) translateY(-6px)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 320, md: 460 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#2a1746',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  overflow: 'hidden',
                  flexDirection: 'column',
                  gap: { xs: 0.5, md: 1 },
                  px: { xs: 2, md: 3 },
                  py: { xs: 1, md: 2 },
                  ml: { xs: 0, md: -5 },
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                {/* Images or Albums */}
                {hobby.images && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {hobby.images.length === 4 ? (
                      /* 2x2 Grid for 4 images */
                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: { xs: 2, md: 3 }, justifyContent: 'center' }}>
                        {hobby.images.map((img, i) => (
                          <Avatar 
                            key={i}
                            src={img} 
                            variant="rounded" 
                            sx={{ 
                              width: { xs: 110, md: 160 }, 
                              height: { xs: 110, md: 160 }, 
                              transition: 'transform 0.3s', 
                              '&:hover': { transform: 'scale(1.1)' },
                              border: '3px solid #6c3fc5',
                              boxShadow: '0 8px 24px rgba(108, 63, 197, 0.3)'
                            }} 
                            imgProps={{ loading: 'lazy', decoding: 'async' }}
                          />
                        ))}
                      </Box>
                    ) : (
                      /* Pyramid layout for 3 images */
                      <>
                        {/* Top image (larger) */}
                        <Avatar 
                          src={hobby.images[0]} 
                          variant="rounded" 
                          sx={{ 
                            width: { xs: 130, md: 200 }, 
                            height: { xs: 130, md: 200 }, 
                            transition: 'transform 0.3s', 
                            '&:hover': { transform: 'scale(1.1)' },
                            border: '3px solid #6c3fc5',
                            boxShadow: '0 8px 24px rgba(108, 63, 197, 0.3)'
                          }} 
                          imgProps={{ loading: 'lazy', decoding: 'async' }}
                        />
                        {/* Bottom two images (smaller) */}
                        <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, justifyContent: 'center' }}>
                          {hobby.images.slice(1).map((img, i) => (
                            <Avatar 
                              key={i + 1}
                              src={img} 
                              variant="rounded" 
                              sx={{ 
                                width: { xs: 110, md: 160 }, 
                                height: { xs: 110, md: 160 }, 
                                transition: 'transform 0.3s', 
                                '&:hover': { transform: 'scale(1.1)' },
                                border: '3px solid #6c3fc5',
                                boxShadow: '0 8px 24px rgba(108, 63, 197, 0.3)'
                              }} 
                              imgProps={{ loading: 'lazy', decoding: 'async' }}
                            />
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                )}
                
                {hobby.albums && (
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: { xs: 2, md: 3 }, justifyContent: 'center', maxWidth: { xs: 300, md: 400 }, mx: 'auto' }}>
                    {hobby.albums.map((album, i) => (
                      <Tooltip key={i} title={album.name} arrow>
                        <Avatar 
                          src={album.src} 
                          variant="rounded" 
                          sx={{ 
                            width: { xs: 110, md: 160 }, 
                            height: { xs: 110, md: 160 }, 
                            transition: 'transform 0.3s', 
                            '&:hover': { transform: 'scale(1.05)' },
                            border: '3px solid #6c3fc5',
                            boxShadow: '0 8px 24px rgba(108, 63, 197, 0.3)',
                            justifySelf: 'center'
                          }} 
                          imgProps={{ loading: 'lazy', decoding: 'async' }}
                        />
                      </Tooltip>
                    ))}
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 'auto', md: 90 },
                  minHeight: { xs: 90, md: 90 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#2a1746',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  overflow: 'hidden',
                  flexDirection: 'column',
                  gap: { xs: 1, md: 2 },
                  px: { xs: 2, md: 3 },
                  py: { xs: 3, md: 5 },
                  ml: { xs: 0, md: -5 },
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: { xs: -1, md: -2 }, textAlign: 'center', color: '#fff', letterSpacing: 1, width: '100%', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  {hobby.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  mb: { xs: 2, md: 3 }, 
                  textAlign: 'center', 
                  color: '#fff', 
                  fontSize: { xs: 14, md: 18 }, 
                  lineHeight: 1.4, 
                  px: { xs: 0.5, md: 1 }, 
                  fontWeight: 500, 
                  width: '100%',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}>
                  {hobby.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Hobbies; 